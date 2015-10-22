goog.provide('anychart.data.aggregators.Sum');
goog.require('anychart.data.aggregators.Base');
goog.require('anychart.math');
goog.require('anychart.utils');



/**
 * Counts the average between all passed non-NaN values as the value of the aggregate.
 * @param {number|string} valuesColumn
 * @param {(number|string)=} opt_weightsColumn
 * @constructor
 * @extends {anychart.data.aggregators.Base}
 */
anychart.data.aggregators.Sum = function(valuesColumn, opt_weightsColumn) {
  goog.base(this, valuesColumn, opt_weightsColumn);
};
goog.inherits(anychart.data.aggregators.Sum, anychart.data.aggregators.Base);


/** @inheritDoc */
anychart.data.aggregators.Sum.prototype.clear = function() {
  this.value = 0;
};


/** @inheritDoc */
anychart.data.aggregators.Sum.prototype.process = function(value, weight) {
  value = anychart.utils.toNumber(value);
  if (!isNaN(value)) {
    this.value += value;
  }
};
