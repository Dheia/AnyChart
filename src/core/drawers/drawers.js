goog.provide('anychart.core.drawers');


/**
 * A list of installed drawers.
 * @type {Object.<anychart.enums.SeriesDrawerTypes, Function>}
 */
anychart.core.drawers.AvailableDrawers = {};


/**
 * Drawers configuration enum. Values can be combined.
 * @enum {number}
 */
anychart.core.drawers.Capabilities = {
  NEEDS_ZERO: 1 << 0,
  NEEDS_SIZE_SCALE: 1 << 1,
  USES_CONTAINER_AS_ROOT: 1 << 2,
  USES_STROKE_AS_FILL: 1 << 3,
  SUPPORTS_CONNECTING_MISSING: 1 << 4,
  SUPPORTS_STACK: 1 << 5,
  SUPPORTS_COMPARISON: 1 << 6,
  SUPPORTS_ERROR: 1 << 7,
  SUPPORTS_OUTLIERS: 1 << 8,
  IS_DISCRETE_BASED: 1 << 9,
  IS_WIDTH_BASED: 1 << 10,
  IS_3D_BASED: 1 << 11,
  IS_BAR_BASED: 1 << 12,
  IS_MARKER_BASED: 1 << 13,
  IS_OHLC_BASED: 1 << 14,
  IS_LINE_BASED: 1 << 15,
  IS_RANGE_BASED: 1 << 16,
  /**
   * Combination of all states.
   */
  ANY: 0xFFFFFFFF
};
