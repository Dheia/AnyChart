goog.provide('anychart.core.axisMarkers.PathBase');
goog.require('acgraph');
goog.require('anychart.core.VisualBase');
goog.require('anychart.core.utils.Padding');
goog.require('anychart.enums');
goog.require('anychart.utils');



/**
 * Markers base.
 * @constructor
 * @extends {anychart.core.VisualBase}
 */
anychart.core.axisMarkers.PathBase = function() {
  goog.base(this);

  /**
   * Current value.
   * @type {*}
   * @protected
   */
  this.val;

  /**
   * Current scale.
   * @type {anychart.scales.Base|anychart.scales.GanttDateTime}
   * @private
   */
  this.scale_;

  /**
   * Marker element.
   * @type {acgraph.vector.Path} - Marker line element.
   * @private
   */
  this.markerElement_;

};
goog.inherits(anychart.core.axisMarkers.PathBase, anychart.core.VisualBase);


/**
 * @typedef {{
 *  from: (anychart.enums.GanttDateTimeMarkers|number),
 *  to: (anychart.enums.GanttDateTimeMarkers|number)
 * }}
 */
anychart.core.axisMarkers.PathBase.Range;


//----------------------------------------------------------------------------------------------------------------------
//  States and signals.
//----------------------------------------------------------------------------------------------------------------------
/**
 * Supported signals.
 * @type {number}
 */
anychart.core.axisMarkers.PathBase.prototype.SUPPORTED_SIGNALS =
    anychart.core.VisualBase.prototype.SUPPORTED_SIGNALS |
    anychart.Signal.BOUNDS_CHANGED;


/**
 * Supported consistency states.
 * @type {number}
 */
anychart.core.axisMarkers.PathBase.prototype.SUPPORTED_CONSISTENCY_STATES =
    anychart.core.VisualBase.prototype.SUPPORTED_CONSISTENCY_STATES |
    anychart.ConsistencyState.BOUNDS |
    anychart.ConsistencyState.APPEARANCE;


//----------------------------------------------------------------------------------------------------------------------
//  Layout.
//----------------------------------------------------------------------------------------------------------------------
/**
 * Get/set line marker layout.
 * @param {anychart.enums.Layout=} opt_value - LineMarker layout.
 * @return {anychart.enums.Layout|anychart.core.axisMarkers.PathBase} - Layout or this.
 */
anychart.core.axisMarkers.PathBase.prototype.layout = goog.abstractMethod;


/**
 * Getter/setter for default scale.
 * Works with instances of anychart.scales.Base only.
 * @param {(anychart.scales.Base|anychart.scales.GanttDateTime)=} opt_value - Scale.
 * @return {anychart.scales.Base|anychart.scales.GanttDateTime|!anychart.core.axisMarkers.PathBase} - Axis scale or
 *  itself for method chaining.
 */
anychart.core.axisMarkers.PathBase.prototype.scaleInternal = function(opt_value) {
  if (goog.isDef(opt_value)) {
    if (this.scale_ != opt_value) {
      if (this.scale_)
        this.scale_.unlistenSignals(this.scaleInvalidated, this);
      this.scale_ = opt_value;
      this.scale_.listenSignals(this.scaleInvalidated, this);
      this.invalidate(anychart.ConsistencyState.BOUNDS,
          anychart.Signal.NEEDS_REDRAW | anychart.Signal.BOUNDS_CHANGED);
    }
    return this;
  } else {
    return /** @type {anychart.scales.Base|anychart.scales.GanttDateTime} */ (this.scale_);
  }
};


/**
 * Scale invalidation handler.
 * @param {anychart.SignalEvent} event - Event object.
 * @protected
 */
anychart.core.axisMarkers.PathBase.prototype.scaleInvalidated = function(event) {
  var signal = 0;
  if (event.hasSignal(anychart.Signal.NEEDS_RECALCULATION))
    signal |= anychart.Signal.NEEDS_RECALCULATION;
  if (event.hasSignal(anychart.Signal.NEEDS_REAPPLICATION))
    signal |= anychart.Signal.NEEDS_REDRAW;

  signal |= anychart.Signal.BOUNDS_CHANGED;

  this.invalidate(anychart.ConsistencyState.BOUNDS, signal);
};


//----------------------------------------------------------------------------------------------------------------------
//  Scale.
//----------------------------------------------------------------------------------------------------------------------
/**
 * Getter/setter for value.
 * @param {*=} opt_value - Value to be set.
 * @return {*} - Current value or itself for method chaining.
 */
anychart.core.axisMarkers.PathBase.prototype.valueInternal = function(opt_value) {
  if (goog.isDef(opt_value)) {
    if (this.val !== opt_value) {
      this.val = opt_value;
      this.invalidate(anychart.ConsistencyState.BOUNDS,
          anychart.Signal.NEEDS_REDRAW | anychart.Signal.BOUNDS_CHANGED);
    }
    return this;
  }
  return this.val;
};


//----------------------------------------------------------------------------------------------------------------------
//  Bounds.
//----------------------------------------------------------------------------------------------------------------------
/**
 * Axes lines space.
 * @param {(string|number|anychart.core.utils.Space)=} opt_spaceOrTopOrTopAndBottom - Space object or top or top and bottom
 *    space.
 * @param {(string|number)=} opt_rightOrRightAndLeft - Right or right and left space.
 * @param {(string|number)=} opt_bottom - Bottom space.
 * @param {(string|number)=} opt_left - Left space.
 * @return {!(anychart.core.axisMarkers.PathBase|anychart.core.utils.Padding)} .
 */
anychart.core.axisMarkers.PathBase.prototype.axesLinesSpace = function(opt_spaceOrTopOrTopAndBottom, opt_rightOrRightAndLeft, opt_bottom, opt_left) {
  if (!this.axesLinesSpace_) {
    this.axesLinesSpace_ = new anychart.core.utils.Padding();
    this.registerDisposable(this.axesLinesSpace_);
  }

  if (goog.isDef(opt_spaceOrTopOrTopAndBottom)) {
    this.axesLinesSpace_.setup.apply(this.axesLinesSpace_, arguments);
    return this;
  } else {
    return this.axesLinesSpace_;
  }
};


/**
 * Whether marker is horizontal
 * @return {boolean} - If the marker is horizontal.
 */
anychart.core.axisMarkers.PathBase.prototype.isHorizontal = function() {
  return this.layout() == anychart.enums.Layout.HORIZONTAL;
};


//----------------------------------------------------------------------------------------------------------------------
//  Drawing.
//----------------------------------------------------------------------------------------------------------------------
/**
 * Additional action on bounds invalidation.
 * @protected
 */
anychart.core.axisMarkers.PathBase.prototype.boundsInvalidated = goog.nullFunction();


/**
 * Additional action on appearance invalidation.
 * @protected
 */
anychart.core.axisMarkers.PathBase.prototype.appearanceInvalidated = goog.nullFunction();


/**
 * Drawing.
 * @return {anychart.core.axisMarkers.PathBase} - Itself for method chaining.
 */
anychart.core.axisMarkers.PathBase.prototype.draw = function() {
  if (!this.scale_) {
    anychart.utils.error(anychart.enums.ErrorCode.SCALE_NOT_SET);
    return this;
  }

  if (!this.checkDrawingNeeded())
    return this;

  if (this.hasInvalidationState(anychart.ConsistencyState.Z_INDEX)) {
    var zIndex = /** @type {number} */(this.zIndex());
    this.markerElement().zIndex(zIndex);
    this.markConsistent(anychart.ConsistencyState.Z_INDEX);
  }

  if (this.hasInvalidationState(anychart.ConsistencyState.CONTAINER)) {
    var container = /** @type {acgraph.vector.ILayer} */(this.container());
    this.markerElement().parent(container);
    this.markConsistent(anychart.ConsistencyState.CONTAINER);
  }

  if (this.hasInvalidationState(anychart.ConsistencyState.APPEARANCE)) {
    this.appearanceInvalidated();
    this.markConsistent(anychart.ConsistencyState.APPEARANCE);
  }

  if (this.hasInvalidationState(anychart.ConsistencyState.BOUNDS)) {
    this.boundsInvalidated();
    this.markConsistent(anychart.ConsistencyState.BOUNDS);
  }

  return this;
};


/**
 * For case of line marker.
 * @protected
 * @return {anychart.core.axisMarkers.PathBase} - Itself for method chaining.
 */
anychart.core.axisMarkers.PathBase.prototype.drawLine = function() {
  if (!this.scale_) {
    anychart.utils.error(anychart.enums.ErrorCode.SCALE_NOT_SET);
    return this;
  }

  var el = /** @type {acgraph.vector.Path} */ (this.markerElement());

  var ratio = this.scale_.transform(this.val, 0.5);
  if (isNaN(ratio)) return this;
  el.clear();

  if (ratio >= 0 && ratio <= 1) {
    var shift = el.strokeThickness() % 2 == 0 ? 0 : -.5;
    var bounds = this.parentBounds();
    var axesLinesSpace = this.axesLinesSpace();

    if (this.isHorizontal()) {
      var y = Math.round(bounds.getTop() + bounds.height - ratio * bounds.height);
      ratio == 1 ? y -= shift : y += shift;
      el.moveTo(bounds.getLeft(), y);
      el.lineTo(bounds.getRight(), y);
    } else {
      var x = Math.round(bounds.getLeft() + ratio * bounds.width);
      ratio == 1 ? x += shift : x -= shift;
      el.moveTo(x, bounds.getTop());
      el.lineTo(x, bounds.getBottom());
    }
    el.clip(axesLinesSpace.tightenBounds(/** @type {!anychart.math.Rect} */(bounds)));
  }
  return this;
};


/**
 * For case of range marker.
 * @return {anychart.core.axisMarkers.PathBase} - Itself for method chaining.
 */
anychart.core.axisMarkers.PathBase.prototype.drawRange = function() {
  var range = /** @type {anychart.core.axisMarkers.PathBase.Range} */ (this.val);

  if (!this.scale_) {
    anychart.utils.error(anychart.enums.ErrorCode.SCALE_NOT_SET);
    return this;
  }

  var el = /** @type {acgraph.vector.Path} */ (this.markerElement());

  var to = range.to;
  var from = range.from;

  //Safe transformation to ratio.
  var fromScaleRatio = this.scale_.transform(from);
  var toScaleRatio = this.scale_.transform(to);

  //Safe comparison - comparing numbers.
  if (fromScaleRatio > toScaleRatio) {
    to = range.from;
    from = range.to;
  }

  var fromRatio = this.scale_.transform(from, 0);
  var toRatio = this.scale_.transform(to, 1);

  var ratioMinValue = Math.min(toRatio, fromRatio);
  var ratioMaxValue = Math.max(toRatio, fromRatio);

  if (isNaN(ratioMinValue) || isNaN(ratioMaxValue)) return this;

  el.clear();

  if (ratioMaxValue >= 0 && ratioMinValue <= 1) { //range or part of it is visible.
    var bounds = this.parentBounds();
    var axesLinesSpace = this.axesLinesSpace();

    if (this.isHorizontal()) {
      var y_max = Math.floor(bounds.getBottom() - bounds.height * ratioMaxValue);
      var y_min = Math.ceil(bounds.getBottom() - bounds.height * ratioMinValue);
      var x_start = bounds.getLeft();
      var x_end = bounds.getRight();
      el.moveTo(x_start, y_max)
          .lineTo(x_end, y_max)
          .lineTo(x_end, y_min)
          .lineTo(x_start, y_min)
          .close();
    } else {
      var y_start = bounds.getBottom();
      var y_end = bounds.getTop();
      var x_min = Math.floor(bounds.getLeft() + (bounds.width * ratioMinValue));
      var x_max = Math.ceil(bounds.getLeft() + (bounds.width * ratioMaxValue));
      el.moveTo(x_min, y_start)
          .lineTo(x_min, y_end)
          .lineTo(x_max, y_end)
          .lineTo(x_max, y_start)
          .close();
    }
    el.clip(axesLinesSpace.tightenBounds(/** @type {!anychart.math.Rect} */(bounds)));
  }
  return this;
};


/**
 * For case of 3D range marker.
 * @return {anychart.core.axisMarkers.PathBase} - Itself for method chaining.
 */
anychart.core.axisMarkers.PathBase.prototype.drawRange3D = function() {
  var layout = this.layout();
  var minValue = this.from(), maxValue = this.to();
  if (this.from() > this.to()) {
    minValue = this.from();
    maxValue = this.to();
  }
  // clamping to prevent range marker go out from the bounds. Ratio should be between 0 and 1.
  var ratioMinValue = goog.math.clamp(this.scale().transform(minValue, 0), 0, 1);
  var ratioMaxValue = goog.math.clamp(this.scale().transform(maxValue, 1), 0, 1);

  if (isNaN(ratioMinValue) || isNaN(ratioMaxValue)) return this;

  var bounds = this.parentBounds();
  var axesLinesSpace = this.axesLinesSpace();
  this.markerElement().clear();

  var x3dShift = this.getChart().x3dShift;
  var y3dShift = this.getChart().y3dShift;

  if (layout == anychart.enums.Layout.HORIZONTAL) {
    var y_max = Math.floor(bounds.getBottom() - bounds.height * ratioMaxValue);
    var y_min = Math.ceil(bounds.getBottom() - bounds.height * ratioMinValue);
    var x_start = bounds.getLeft();
    var x_end = bounds.getRight();

    this.markerElement()
        .moveTo(x_start, y_max)
        .lineTo(x_start + x3dShift, y_max - y3dShift)
        .lineTo(x_end + x3dShift, y_max - y3dShift)
        .lineTo(x_end + x3dShift, y_min - y3dShift)
        .lineTo(x_start + x3dShift, y_min - y3dShift)
        .lineTo(x_start, y_min)
        .close();
  } else if (layout == anychart.enums.Layout.VERTICAL) {
    var y_start = bounds.getBottom();
    var y_end = bounds.getTop();
    var x_min = Math.floor(bounds.getLeft() + (bounds.width * ratioMinValue));
    var x_max = Math.ceil(bounds.getLeft() + (bounds.width * ratioMaxValue));

    this.markerElement()
        .moveTo(x_min, y_start)
        .lineTo(x_min + x3dShift, y_start - y3dShift)
        .lineTo(x_min + x3dShift, y_end - y3dShift)
        .lineTo(x_max + x3dShift, y_end - y3dShift)
        .lineTo(x_max + x3dShift, y_start - y3dShift)
        .lineTo(x_max, y_start)
        .close();

  }

  bounds.top -= y3dShift;
  bounds.height += y3dShift;
  bounds.width += x3dShift;

  this.markerElement().clip(axesLinesSpace.tightenBounds(/** @type {!anychart.math.Rect} */(bounds)));
  return this;
};


/**
 * For case of 3D line.
 * @return {anychart.core.axisMarkers.PathBase} - Itself for method chaining.
 */
anychart.core.axisMarkers.PathBase.prototype.drawLine3D = function() {
  var ratio = goog.math.clamp(this.scale().transform(this.value(), 0.5), 0, 1);
  if (isNaN(ratio)) return this;

  var shift = this.markerElement().strokeThickness() % 2 == 0 ? 0 : -.5;
  var bounds = this.parentBounds();
  var axesLinesSpace = this.axesLinesSpace();
  this.markerElement().clear();

  var x3dShift = this.getChart().x3dShift;
  var y3dShift = this.getChart().y3dShift;

  if (this.layout() == anychart.enums.Layout.HORIZONTAL) {
    var y = Math.round(bounds.getTop() + bounds.height - ratio * bounds.height);
    ratio == 1 ? y -= shift : y += shift;
    this.markerElement()
        .moveTo(bounds.getLeft(), y)
        .lineTo(bounds.getRight() + x3dShift, y);

  } else if (this.layout() == anychart.enums.Layout.VERTICAL) {
    var x = Math.round(bounds.getLeft() + ratio * bounds.width);
    ratio == 1 ? x += shift : x -= shift;
    this.markerElement()
        .moveTo(x, bounds.getTop() - y3dShift)
        .lineTo(x, bounds.getBottom());
  }

  bounds.top -= y3dShift;
  bounds.height += y3dShift;
  bounds.width += x3dShift;

  this.markerElement().clip(axesLinesSpace.tightenBounds(/** @type {!anychart.math.Rect} */(bounds)));
  return this;
};


//----------------------------------------------------------------------------------------------------------------------
//  Disabling & enabling.
//----------------------------------------------------------------------------------------------------------------------
/** @inheritDoc */
anychart.core.axisMarkers.PathBase.prototype.remove = function() {
  this.markerElement().parent(null);
};


//----------------------------------------------------------------------------------------------------------------------
//  Elements creation.
//----------------------------------------------------------------------------------------------------------------------
/**
 * Create marker element.
 * @return {!acgraph.vector.Path} - Marker line element.
 * @protected
 */
anychart.core.axisMarkers.PathBase.prototype.markerElement = function() {
  if (!this.markerElement_) {
    this.markerElement_ = /** @type {!acgraph.vector.Path} */(acgraph.path());
    this.registerDisposable(this.markerElement_);
  }
  return this.markerElement_;
};


/** @inheritDoc */
anychart.core.axisMarkers.PathBase.prototype.serialize = function() {
  var json = goog.base(this, 'serialize');
  json['layout'] = this.layout();
  return json;
};


/** @inheritDoc */
anychart.core.axisMarkers.PathBase.prototype.setupByJSON = function(config) {
  goog.base(this, 'setupByJSON', config);
  this.layout(config['layout']);
};
