goog.provide('anychart.themes.v6');


/**
 * @this {*}
 * @return {*}
 */
var returnSourceColor = function() {
  return this['sourceColor'];
};


/**
 * @this {*}
 * @return {*}
 */
var returnLightenSourceColor20 = function() {
  return window['anychart']['color']['lighten'](this['sourceColor'], 0.2);
};


/**
 * @this {*}
 * @return {*}
 */
var returnLightenSourceColor30 = function() {
  return window['anychart']['color']['lighten'](this['sourceColor'], 0.3);
};



window['anychart'] = window['anychart'] || {};
window['anychart']['themes'] = window['anychart']['themes'] || {};
window['anychart']['themes']['v6'] = {
  // default font settings
  'defaultFontSettings': {
    'fontSize': 10,
    'fontFamily': 'Verdana',
    'fontColor': '#222',
    'textDirection': 'ltr',
    'fontOpacity': 1,
    'fontDecoration': 'none',
    'fontStyle': 'normal',
    'fontVariant': 'normal',
    'fontWeight': 'normal',
    'letterSpacing': 'normal',
    'lineHeight': 'normal',
    'textIndent': 0,
    'vAlign': 'top',
    'hAlign': 'start',
    'textWrap': 'byLetter',
    'textOverflow': '',
    'selectable': false,
    'disablePointerEvents': false,
    'useHtml': false
  },

  // global palettes
  'palette': {
    'type': 'distinct',
    'items': ['#1D8BD1', '#F1683C', '#2AD62A', '#DBDC25', '#8FBC8B', '#D2B48C', '#FAF0E6', '#20B2AA', '#B0C4DE', '#DDA0DD', '#9C9AFF', '#9C3063', '#FFFFCE', '#CEFFFF', '#630063', '#FF8284', '#0065CE', '#CECFFF', '#000084', '#FF00FF', '#FFFF00', '#00FFFF', '#840084', '#840000', '#008284', '#0000FF', '#00CFFF', '#CEFFFF', '#CEFFCE', '#FFFF9C', '#9CCFFF', '#FF9ACE', '#CE9AFF', '#FFCF9C', '#3165FF', '#31CFCE', '#9CCF00', '#FFCF00', '#FF9A00', '#FF6500']
  },
  'hatchFillPalette': {
    'items': ['backwardDiagonal', 'forwardDiagonal', 'horizontal', 'vertical', 'dashedBackwardDiagonal', 'grid', 'dashedForwardDiagonal', 'dashedHorizontal', 'dashedVertical', 'diagonalCross', 'diagonalBrick', 'divot', 'horizontalBrick', 'verticalBrick', 'checkerBoard', 'confetti', 'plaid', 'solidDiamond', 'zigZag', 'weave', 'percent05', 'percent10', 'percent20', 'percent25', 'percent30', 'percent40', 'percent50', 'percent60', 'percent70', 'percent75', 'percent80', 'percent90']
  },
  'markerPalette': {
    'items': ['circle', 'square', 'triangleUp', 'diamond', 'triangleDown', 'cross', 'diagonalCross', 'star4', 'star5', 'star6', 'star7', 'star10', 'pentagon', 'trapezium', 'line']
  },

  'ordinalColor': {
    'autoColors': function(rangesCount) {
      return window['anychart']['color']['blendedHueProgression']('#ffd54f', '#ef6c00', rangesCount);
    }
  },

  // global background settings
  'defaultBackground': {
    'enabled': true,
    'fill': '#000 0.5',
    'stroke': '#000',
    'cornerType': 'round',
    'corners': 0
  },

  // global title settings
  'defaultTitle': {
    'enabled': true,

    'fontSize': 11,
    'fontFamily': 'Tahoma',
    'fontColor': '#222',
    'fontWeight': 'bold',

    'text': 'Title text',

    'background': {
      'enabled': false
    },

    //'rotation': undefined',
    'width': null,
    'height': null,
    'margin': {
      'top': 5,
      'right': 5,
      'bottom': 5,
      'left': 5
    },
    'padding': {
      'top': 5,
      'right': 5,
      'bottom': 5,
      'left': 5
    },
    'align': 'center'
    //'orientation': undefined
  },

  'defaultLabelFactory': {
    'enabled': true,
    'offsetX': 0,
    'offsetY': 0,
    'anchor': 'center',
    'padding': {
      'top': 2,
      'right': 4,
      'bottom': 2,
      'left': 4
    },
    'fontFamily': 'Arial',
    'fontSize': 11,
    'fontColor': '#000',
    'rotation': 0,
    'minFontSize': 8,
    'maxFontSize': 72,
    'adjustFontSize': {
      'width': false,
      'height': false
    },
    'background': {
      'enabled': false,
      'stroke': {'keys': ['0 #DDDDDD 1', '1 #D0D0D0 1'], 'angle': '90'},
      'fill': {'keys': ['0 #FFFFFF 1', '0.5 #F3F3F3 1', '1 #FFFFFF 1'], 'angle': '90'}
    },
    /**
     * @this {*}
     * @return {*}
     */
    'textFormatter': function() {
      return this['value'];
    },
    /**
     * @this {*}
     * @return {*}
     */
    'positionFormatter': function() {
      return this['value'];
    }
  },

  'defaultMarkerFactory': {
    'size': 10,
    'position': 'center',
    'anchor': 'center',
    'offsetX': 0,
    'offsetY': 0,
    'rotation': 0,
    //'fill': '', // autoFill
    //'stroke': '', // autoStroke
    /**
     * @this {*}
     * @return {*}
     */
    'positionFormatter': function() {
      return this['value'];
    }
  },

  // global tooltip settings
  'defaultTooltip': {
    'enabled': true,
    'title': {
      'enabled': false,
      'fontSize': 10,
      'fontFamily': 'Verdana',
      'fontColor': '#232323',
      'fontWeight': 'bold',
      'vAlign': 'top',
      'hAlign': 'center',
      'text': '',
      'background': {
        'enabled': false
      },
      'rotation': 0,
      'width': '100%',
      'height': null,
      'margin': 0,
      'padding': {
        'top': 5,
        'right': 10,
        'bottom': 5,
        'left': 10
      },
      'align': 'center',
      'orientation': 'top',
      'zIndex': 1
    },
    'separator': {
      'enabled': false,
      'width': '100%',
      'height': 1,
      'margin': {
        'top': 0,
        'right': 5,
        'bottom': 0,
        'left': 5
      },
      'orientation': 'top',
      'fill': [
        '0 #333333 0',
        '0.5 #333333 1',
        '1 #333333 0'
      ],
      'stroke': 'none',
      'zIndex': 1
    },
    'content': {
      'enabled': true,
      'fontSize': 10,
      'fontFamily': 'Verdana',
      'fontColor': '#232323',
      'fontWeight': 'bold',
      'vAlign': 'top',
      'hAlign': 'left',
      'textWrap': 'byLetter',
      'text': 'Tooltip Text',
      'background': {
        'enabled': false
      },
      'padding': {
        'top': 5,
        'right': 10,
        'bottom': 5,
        'left': 10
      },
      'width': '100%',
      'height': null,
      'anchor': 'leftTop',
      'offsetX': 0,
      'offsetY': 0,
      'position': 'leftTop',
      'minFontSize': 8,
      'maxFontSize': 72,
      'adjustFontSize': {
        'width': false,
        'height': false
      },
      'rotation': 0,
      'zIndex': 1
    },
    'fontSize': 10,
    'fontFamily': 'Verdana',
    'fontColor': '#232323',
    'fontWeight': 'bold',
    'vAlign': 'top',
    'hAlign': 'left',
    'textWrap': 'byLetter',
    'text': 'Tooltip Text',
    'width': '100%',
    'height': null,
    'minFontSize': 8,
    'maxFontSize': 72,
    'adjustFontSize': {
      'width': false,
      'height': false
    },
    'rotation': 0,
    'background': {
      'enabled': true,
      'fill': [
        '0 #fff 1',
        '0.5 #f3f3f3 1',
        '1 #fff 1'
      ],
      'stroke': [
        '0 #ddd 1',
        '1 #d0d0d0 1'
      ],
      'cornerType': 'none',
      'corners': 10,
      'zIndex': 0
    },
    'padding': {
      'top': 0,
      'right': 0,
      'bottom': 0,
      'left': 0
    },
    'offsetX': 5,
    'offsetY': 5,
    'valuePrefix': '',
    'valuePostfix': '',
    'position': 'leftTop',
    'anchor': 'centerBottom',
    'hideDelay': 0,
    /**
     * @this {*}
     * @return {*}
     */
    'titleFormatter': function() {
      return this['value'];
    },
    /**
     * @this {*}
     * @return {*}
     */
    'textFormatter': function() {
      return this['valuePrefix'] + this['value'] + this['valuePostfix'];
    }
  },

  // global axis settings
  'defaultAxis': {
    'enabled': true,
    'startAngle': 0,
    'drawLastLabel': true,
    'drawFirstLabel': true,
    'staggerMaxLines': 2,
    'staggerMode': false,
    'staggerLines': null,
    'width': null,
    'overlapMode': 'noOverlap',
    'stroke': {'color': '#474747', 'lineJoin': 'round', 'lineCap': 'square'},
    'title': {
      'text': 'Axis title',
      'margin': {'top': 10, 'right': 5, 'bottom': 10, 'left': 5},
      'background': {
        'enabled': false,
        'stroke': {'keys': ['#ddd', '#d0d0d0'], 'angle': '90'},
        'fill': {'keys': ['#fff', '#f3f3f3', '#fff'], 'angle': '90'}
      },
      'zIndex': 35
    },
    'labels': {
      'enabled': true,
      'rotation': 0,
      'offsetX': 0,
      'offsetY': 0,
      'minFontSize': 8,
      'maxFontSize': 72,
      'anchor': 'center',
      'padding': {'top': 1, 'right': 2, 'bottom': 1, 'left': 2},
      'fontFamily': 'Tahoma',
      'fontSize': 11,
      'textWrap': 'noWrap',
      'background': {
        'enabled': false,
        'stroke': {'keys': ['#ddd', '#d0d0d0'], 'angle': '90'},
        'fill': {'keys': ['#fff', '#f3f3f3', '#fff'], 'angle': '90'}
      },
      /**
       * @this {*}
       * @return {*}
       */
      'textFormatter': function() {
        return (this['value']);
      },
      /**
       * @this {*}
       * @return {*}
       */
      'positionFormatter': function() {
        return this['value'];
      },
      'zIndex': 35
    },
    'minorLabels': {
      'minFontSize': 8,
      'maxFontSize': 72,
      'enabled': false,
      'rotation': 0,
      'offsetX': 0,
      'offsetY': 0,
      'anchor': 'center',
      'padding': {
        'top': 1,
        'right': 1,
        'bottom': 0,
        'left': 1
      },
      'fontFamily': 'Tahoma',
      'fontSize': 11,
      'textWrap': 'noWrap',
      'background': {
        'enabled': false,
        'stroke': {'keys': ['#ddd', '#d0d0d0'], 'angle': '90'},
        'fill': {'keys': ['#fff', '#f3f3f3', '#fff'], 'angle': '90'}
      },
      /**
       * @this {*}
       * @return {*}
       */
      'textFormatter': function() {
        return (this['value']);
      },
      /**
       * @this {*}
       * @return {*}
       */
      'positionFormatter': function() {
        return this['value'];
      },
      'zIndex': 35
    },
    'ticks': {
      'enabled': true,
      'length': 5,
      'position': 'outside',
      'stroke': {'color': '#313131', 'lineJoin': 'round', 'lineCap': 'butt'},
      'zIndex': 35
    },
    'minorTicks': {
      'enabled': false,
      'length': 2,
      'position': 'outside',
      'stroke': {'color': '#313131', 'lineJoin': 'round', 'lineCap': 'butt'},
      'zIndex': 35
    },
    'zIndex': 35
  },

  // base/separated chart
  'chart': {
    'enabled': true,
    'title': {
      'text': 'Chart Title',
      'margin': {
        'bottom': 15
      },
      'zIndex': 80
    },
    'background': {
      'enabled': true,
      'fill': ['#fff', '#f3f3f3', '#fff'],
      'stroke': 'none',
      'zIndex': 1
    },
    'margin': {
      'top': 0,
      'right': 0,
      'bottom': 0,
      'left': 0
    },
    'padding': {
      'top': 10,
      'right': 20,
      'bottom': 10,
      'left': 20
    },
    'legend': {
      'enabled': false,
      'fontSize': '11',
      'fontFamily': 'Tahoma',
      'itemsLayout': 'horizontal',
      'itemsSpacing': 15,
      'iconSize': 13,
      'items': null,
      'itemsFormatter': null, // effectively equals current settings
      'itemsTextFormatter': null,
      'itemsSourceMode': 'default',
      'inverted': false,
      'hoverCursor': 'pointer',
      'iconTextSpacing': 5,
      'width': null,
      'height': null,
      'position': 'bottom',
      'align': 'center',
      'margin': {
        'top': 0,
        'right': 0,
        'bottom': 0,
        'left': 10
      },
      'padding': {
        'top': 7,
        'right': 7,
        'bottom': 7,
        'left': 7
      },
      'background': {
        'enabled': true,
        'fill': ['#fff', '#f3f3f3', '#fff'],
        'stroke': '#ddd',
        'corners': 5
      },
      'title': {
        'enabled': false,
        'fontSize': '10',
        'fontFamily': 'Verdana',
        'text': 'Legend title',
        'background': {
          'enabled': false,
          'fill': {
            'keys': [
              '#fff',
              '#f3f3f3',
              '#fff'
            ],
            'angle': '90'
          },
          'stroke': {
            'keys': [
              '#ddd',
              '#d0d0d0'
            ],
            'angle': '90'
          }
        },
        'margin': {
          'top': 0,
          'right': 0,
          'bottom': 3,
          'left': 0
        },
        'padding': {
          'top': 0,
          'right': 0,
          'bottom': 0,
          'left': 0
        },
        'orientation': 'top'
      },
      'titleSeparator': {
        'enabled': false,
        'width': '100%',
        'height': 1,
        'margin': {
          'top': 3,
          'right': 0,
          'bottom': 3,
          'left': 0
        },
        'orientation': 'top',
        'fill': ['#000 0', '#000', '#000 0'],
        'stroke': 'none'
      },
      'paginator': {
        'enabled': true,

        'background': {
          'enabled': false,
          'fill': {
            'keys': [
              '#fff',
              '#f3f3f3',
              '#fff'
            ],
            'angle': '90'
          },
          'stroke': {
            'keys': [
              '#ddd',
              '#d0d0d0'
            ],
            'angle': '90'
          }
        },
        'padding': {
          'top': 0,
          'right': 0,
          'bottom': 0,
          'left': 0
        },
        'margin': {
          'top': 0,
          'right': 0,
          'bottom': 0,
          'left': 0
        },
        'orientation': 'right',
        'layout': 'horizontal',
        'zIndex': 30
      },
      'tooltip': {
        'title': {
          'enabled': false,
          'margin': {
            'top': 3,
            'right': 3,
            'bottom': 0,
            'left': 3
          },
          'padding': {
            'top': 0,
            'right': 0,
            'bottom': 0,
            'left': 0
          }
        }
      },
      'zIndex': 20
    },
    'credits': {
      'enabled': true,
      'text': 'AnyChart',
      'url': 'http://anychart.com',
      'alt': 'AnyChart.com',
      'inChart': false
      // we cannot determine the protocol statically :(
      //'logoSrc': 'http://static.anychart.com/logo.png'
    },
    'defaultLabelSettings': {
      'enabled': true,
      'fontSize': 11,
      'fontFamily': 'Tahoma',
      'fontWeight': 'bold',
      'textWrap': 'byLetter',

      'text': 'Chart label',
      'background': {
        'enabled': false
      },
      'padding': {
        'top': 0,
        'right': 0,
        'bottom': 0,
        'left': 0
      },
      'width': null,
      'height': null,
      'anchor': 'leftTop',
      'position': 'leftTop',
      'offsetX': 0,
      'offsetY': 0,
      'minFontSize': 8,
      'maxFontSize': 72,
      'adjustFontSize': {
        'width': false,
        'height': false
      },
      'rotation': 0,
      'zIndex': 50
    },
    'chartLabels': [],
    'animation': {
      'enabled': false,
      'duration': 1000
    },
    'bounds': {
      'top': null,
      'right': null,
      'bottom': null,
      'left': null,
      'width': null,
      'height': null,
      'minWidth': null,
      'minHeight': null,
      'maxWidth': null,
      'maxHeight': null
    },
    'interactivity': {
      'hoverMode': 'single',
      'selectionMode': 'multiSelect',
      'spotRadius': 2,
      'allowMultiSeriesSelection': true
    },
    'tooltip': {
      'allowLeaveScreen': false,
      'allowLeaveChart': true,
      'displayMode': 'single',
      'positionMode': 'float',
      'title': {
        'enabled': true
      },
      'separator': {'enabled': true},
      /**
       * @this {*}
       * @return {*}
       */
      'titleFormatter': function() {
        return 'Union Tooltip';
      },
      /**
       * @this {*}
       * @return {*}
       */
      'textFormatter': function() {
        return this['formattedValues'].join('\n');
      }
    }
  },

  // merge with chart
  'cartesianBase': {
    'defaultSeriesSettings': {
      'base': {
        /**
         * @this {*}
         * @return {*}
         */
        'fill': function() {
          return this['sourceColor'];
        },
        /**
         * @this {*}
         * @return {*}
         */
        'hoverFill': function() {
          return window['anychart']['color']['lighten'](this['sourceColor']);
        },
        /**
         * @this {*}
         * @return {*}
         */
        'selectFill': function() {
          //todo need define cool color.
          return window['anychart']['color']['darken'](this['sourceColor']);
        },
        /**
         * @this {*}
         * @return {*}
         */
        'stroke': function() {
          return window['anychart']['color']['darken'](this['sourceColor']);
        },
        /**
         * @this {*}
         * @return {*}
         */
        'hoverStroke': function() {
          return window['anychart']['color']['darken'](this['sourceColor']);
        },
        /**
         * @this {*}
         * @return {*}
         */
        'selectStroke': function() {
          //todo need define cool color.
          return window['anychart']['color']['darken']('red');
        },
        'hatchFill': false,
        //'hoverHatchFill': null,

        'labels': {
          'enabled': false,
          'fontFamily': 'Arial',
          'fontSize': 11,

          'background': {
            'enabled': false
          },
          'padding': {
            'top': 2,
            'right': 4,
            'bottom': 2,
            'left': 4
          },
          'position': 'centerTop',
          'anchor': 'center',
          'offsetX': 0,
          'offsetY': 0,
          'rotation': 0,
          'width': null,
          'height': null,
          /**
           * @this {*}
           * @return {*}
           */
          'textFormatter': function() {
            return this['value'];
          },
          /**
           * @this {*}
           * @return {*}
           */
          'positionFormatter': function() {
            return this['value'];
          }
        },
        'hoverLabels': {
          'enabled': null
        },
        'markers': {
          'enabled': false,
          'disablePointerEvents': false,
          'position': 'centerTop',
          'rotation': 0,
          'anchor': 'center',
          'offsetX': 0,
          'offsetY': 0,
          //'type': null,
          'size': 4,
          //'fill': '', // autoFill
          //'stroke': '', // autoStroke
          /**
           * @this {*}
           * @return {*}
           */
          'positionFormatter': function() {
            return this['value'];
          }
        },
        'hoverMarkers': {
          'enabled': null,
          'size': 6
        },

        'clip': true,
        'color': null,

        'tooltip': {
          /**
           * @this {*}
           * @return {*}
           */
          'titleFormatter': function() {
            return this['name'];
          },
          /**
           * @this {*}
           * @return {*}
           */
          'textFormatter': function() {
            return this['x'] + ': ' + this['valuePrefix'] + this['value'] + this['valuePostfix'];
          }
        },
        'xScale': null,
        'yScale': null,
        'error': {
          'mode': 'both',
          'xError': null,
          'xUpperError': null,
          'xLowerError': null,
          'valueError': null,
          'valueUpperError': null,
          'valueLowerError': null,
          'xErrorWidth': 10,
          'valueErrorWidth': 10,
          'xErrorStroke': '#1D8BD1',
          'valueErrorStroke': '#1D8BD1'
        },
        // series legend item is managed by the legend
        //'legendItem': {
        //'iconTextSpacing': '',
        //'iconEnabled': '',
        //'iconType': '',
        //'iconStroke': '',
        //'iconFill': '',
        //'iconHatchFill': '',
        //'iconMarkerType': '',
        //'iconMarkerFill': '',
        //'iconMarkerStroke': '',
        //'text': '',
        //'disabled': ''
        //},
        // overruled by chart auto distribution setup by
        // cartesian.barsPadding() and cartesian.barGroupsPadding()
        //'pointWidth': '90%',
        //'xPointPosition': 0.5
        'connectMissingPoints': false
      },
      'area': {
        'labels': {
          'anchor': 'bottom'
        }
      },
      'bar': {
        'markers': {
          'position': 'rightCenter'
        },
        'labels': {
          'position': 'rightCenter'
        }
      },
      'box': {
        'markers': {
          'position': 'centerTop'
        },
        'labels': {
          'position': 'centerTop',
          /**
           * @this {*}
           * @return {*}
           */
          'textFormatter': function() {
            return this['x'];
          }
        },
        /**
         * @this {*}
         * @return {*}
         */
        'fill': function() {
          return window['anychart']['color']['lighten'](
              window['anychart']['color']['lighten'](
              this['sourceColor']));
        },
        /**
         * @this {*}
         * @return {*}
         */
        'medianStroke': function() {
          return this['sourceColor'];
        },
        /**
         * @this {*}
         * @return {*}
         */
        'hoverMedianStroke': function() {
          return window['anychart']['color']['darken'](this['sourceColor']);
        },
        /**
         * @this {*}
         * @return {*}
         */
        'stemStroke': function() {
          return this['sourceColor'];
        },
        /**
         * @this {*}
         * @return {*}
         */
        'hoverStemStroke': function() {
          return window['anychart']['color']['darken'](this['sourceColor']);
        },
        /**
         * @this {*}
         * @return {*}
         */
        'whiskerStroke': function() {
          return this['sourceColor'];
        },
        /**
         * @this {*}
         * @return {*}
         */
        'hoverWhiskerStroke': function() {
          return window['anychart']['color']['darken'](this['sourceColor']);
        },
        'whiskerWidth': '20%',
        'hoverWhiskerWidth': '20%',
        'outlierMarkers': {
          'enabled': true,
          'disablePointerEvents': false,
          'position': 'center',
          'rotation': 0,
          'anchor': 'center',
          'offsetX': 0,
          'offsetY': 0,
          //'type': null, // there is a super default in code, DIAGONAL_CROSS
          'size': 4,
          //'fill': '', // autoFill
          //'stroke': '', // autoStroke
          /**
           * @this {*}
           * @return {*}
           */
          'positionFormatter': function() {
            return this['value'];
          }
        },
        'hoverOutlierMarkers': {
          'enabled': null,
          'size': 6
        },
        'tooltip': {
          'content': {
            'hAlign': 'left'
          },
          /**
           * @this {*}
           * @return {*}
           */
          'textFormatter': function() {
            return 'lowest: ' + this['valuePrefix'] + parseFloat(this['lowest']).toFixed(2) + this['valuePostfix'] + '\n' +
                'q1: ' + this['valuePrefix'] + parseFloat(this['q1']).toFixed(2) + this['valuePostfix'] + '\n' +
                'median: ' + this['valuePrefix'] + parseFloat(this['median']).toFixed(2) + this['valuePostfix'] + '\n' +
                'q3: ' + this['valuePrefix'] + parseFloat(this['q3']).toFixed(2) + this['valuePostfix'] + '\n' +
                'highest: ' + this['valuePrefix'] + parseFloat(this['highest']).toFixed(2) + this['valuePostfix'];
          }
        }
      },
      'bubble': {
        'markers': {
          'position': 'center'
        },
        'labels': {
          'position': 'center',
          'anchor': 'center'
        },
        'displayNegative': false,
        /**
         * @this {*}
         * @return {*}
         */
        'negativeFill': function() {
          return window['anychart']['color']['darken'](
              window['anychart']['color']['darken'](
                  window['anychart']['color']['darken'](this['sourceColor'])));
        },
        /**
         * @this {*}
         * @return {*}
         */
        'hoverNegativeFill': function() {
          return window['anychart']['color']['darken'](
              window['anychart']['color']['darken'](
              window['anychart']['color']['darken'](
              window['anychart']['color']['darken'](this['sourceColor']))));
        },
        /**
         * @this {*}
         * @return {*}
         */
        'negativeStroke': function() {
          return window['anychart']['color']['darken'](
              window['anychart']['color']['darken'](
              window['anychart']['color']['darken'](
              window['anychart']['color']['darken'](this['sourceColor']))));
        },
        /**
         * @this {*}
         * @return {*}
         */
        'hoverNegativeStroke': function() {
          return window['anychart']['color']['darken'](
              window['anychart']['color']['darken'](
              window['anychart']['color']['darken'](
              window['anychart']['color']['darken'](
                  window['anychart']['color']['darken'](this['sourceColor'])))));
        },
        'negativeHatchFill': null,
        'hoverNegativeHatchFill': null,
        'tooltip': {
          /**
           * @this {*}
           * @return {*}
           */
          'textFormatter': function() {
            return this['valuePrefix'] + parseFloat(this['value']).toFixed(2) + this['valuePostfix'];
          }
        }
      },
      'candlestick': {
        'markers': {
          'position': 'centerTop'
        },
        /**
         * @this {*}
         * @return {*}
         */
        'risingFill': function() {
          return window['anychart']['color']['lighten'](this['sourceColor']);
        },
        /**
         * @this {*}
         * @return {*}
         */
        'hoverRisingFill': function() {
          return window['anychart']['color']['lighten'](
              window['anychart']['color']['lighten'](this['sourceColor']));
        },
        /**
         * @this {*}
         * @return {*}
         */
        'selectRisingFill': function() {
          //todo need define cool color.
          return window['anychart']['color']['lighten'](
              window['anychart']['color']['lighten']('red'));
        },
        /**
         * @this {*}
         * @return {*}
         */
        'fallingFill': function() {
          return window['anychart']['color']['darken'](this['sourceColor']);
        },
        /**
         * @this {*}
         * @return {*}
         */
        'hoverFallingFill': function() {
          return window['anychart']['color']['darken'](
              window['anychart']['color']['darken'](this['sourceColor']));
        },
        /**
         * @this {*}
         * @return {*}
         */
        'selectFallingFill': function() {
          //todo need define cool color.
          return window['anychart']['color']['darken'](
              window['anychart']['color']['darken']('blue'));
        },
        'risingHatchFill': null,
        'hoverRisingHatchFill': null,
        'fallingHatchFill': null,
        'hoverFallingHatchFill': null,
        /**
         * @this {*}
         * @return {*}
         */
        'risingStroke': function() {
          return this['sourceColor'];
        },
        /**
         * @this {*}
         * @return {*}
         */
        'hoverRisingStroke': function() {
          return window['anychart']['color']['lighten'](this['sourceColor']);
        },
        /**
         * @this {*}
         * @return {*}
         */
        'selectRisingStroke': function() {
          //todo need define cool color.
          return window['anychart']['color']['lighten']('red');
        },
        /**
         * @this {*}
         * @return {*}
         */
        'fallingStroke': function() {
          return window['anychart']['color']['darken'](
              window['anychart']['color']['darken'](this['sourceColor']));
        },
        /**
         * @this {*}
         * @return {*}
         */
        'hoverFallingStroke': function() {
          return window['anychart']['color']['darken'](
              window['anychart']['color']['darken'](
              window['anychart']['color']['darken'](this['sourceColor'])));
        },
        /**
         * @this {*}
         * @return {*}
         */
        'selectFallingStroke': function() {
          //todo need define cool color.
          return window['anychart']['color']['darken'](
              window['anychart']['color']['darken'](
                  window['anychart']['color']['darken']('blue')));
        },
        'tooltip': {
          'content': {
            'hAlign': 'left'
          },
          /**
           * @this {*}
           * @return {*}
           */
          'textFormatter': function() {
            return 'O: ' + this['valuePrefix'] + parseFloat(this['open']).toFixed(4) + this['valuePostfix'] + '\n' +
                'H: ' + this['valuePrefix'] + parseFloat(this['high']).toFixed(4) + this['valuePostfix'] + '\n' +
                'L: ' + this['valuePrefix'] + parseFloat(this['low']).toFixed(4) + this['valuePostfix'] + '\n' +
                'C: ' + this['valuePrefix'] + parseFloat(this['close']).toFixed(4) + this['valuePostfix'];
          }
        },
        'labels': {
          'position': 'centerTop',
          /**
           * @this {*}
           * @return {*}
           */
          'textFormatter': function() {
            return this['x'];
          },
          'offsetY': -10
        }
      },
      'column': {
        'markers': {
          'position': 'centerTop'
        },
        'labels': {
          'position': 'centerTop'
        }
      },
      'line': {
        'markers': {
          'enabled': true
        },
        'labels': {
          'anchor': 'bottom'
        },
        /**
         * @this {*}
         * @return {*}
         */
        'stroke': function() {
          return this['sourceColor'];
        },
        /**
         * @this {*}
         * @return {*}
         */
        'hoverStroke': function() {
          return window['anychart']['color']['lighten'](this['sourceColor']);
        }
      },
      'marker': {
        'size': 10,
        'hoverSize': 12,
        'selectSize': 12,
        'hatchFill': false,
        'tooltip': {
          /**
           * @this {*}
           * @return {*}
           */
          'textFormatter': function() {
            return this['valuePrefix'] + parseFloat(this['value']).toFixed(2) + this['valuePostfix'];
          }
        }
      },
      'ohlc': {
        /**
         * @this {*}
         * @return {*}
         */
        'risingStroke': function() {
          return this['sourceColor'];
        },
        /**
         * @this {*}
         * @return {*}
         */
        'hoverRisingStroke': function() {
          return window['anychart']['color']['lighten'](this['sourceColor']);
        },
        /**
         * @this {*}
         * @return {*}
         */
        'selectRisingStroke': function() {
          //todo need define cool color.
          return window['anychart']['color']['darken']('red');
        },
        /**
         * @this {*}
         * @return {*}
         */
        'fallingStroke': function() {
          return window['anychart']['color']['darken'](
              window['anychart']['color']['darken'](this['sourceColor']));
        },
        /**
         * @this {*}
         * @return {*}
         */
        'hoverFallingStroke': function() {
          return window['anychart']['color']['darken'](
              window['anychart']['color']['darken'](
              window['anychart']['color']['darken'](this['sourceColor'])));
        },
        /**
         * @this {*}
         * @return {*}
         */
        'selectFallingStroke': function() {
          //todo need define cool color.
          return window['anychart']['color']['darken']('blue');
        },
        'tooltip': {
          'content': {
            'hAlign': 'left'
          },
          /**
           * @this {*}
           * @return {*}
           */
          'textFormatter': function() {
            return 'O: ' + this['valuePrefix'] + parseFloat(this['open']).toFixed(4) + this['valuePostfix'] + '\n' +
                'H: ' + this['valuePrefix'] + parseFloat(this['high']).toFixed(4) + this['valuePostfix'] + '\n' +
                'L: ' + this['valuePrefix'] + parseFloat(this['low']).toFixed(4) + this['valuePostfix'] + '\n' +
                'C: ' + this['valuePrefix'] + parseFloat(this['close']).toFixed(4) + this['valuePostfix'];
          }
        },
        'labels': {
          /**
           * @this {*}
           * @return {*}
           */
          'textFormatter': function() {
            return this['x'];
          },
          'offsetY': -10
        }
      },
      'rangeArea': {
        'labels': {
          'anchor': 'bottom'
        },
        /**
         * @this {*}
         * @return {*}
         */
        'highStroke': function() {
          return window['anychart']['color']['darken'](this['sourceColor']);
        },
        /**
         * @this {*}
         * @return {*}
         */
        'hoverHighStroke': function() {
          return window['anychart']['color']['darken'](this['sourceColor']);
        },
        /**
         * @this {*}
         * @return {*}
         */
        'lowStroke': function() {
          return window['anychart']['color']['darken'](this['sourceColor']);
        },
        /**
         * @this {*}
         * @return {*}
         */
        'hoverLowStroke': function() {
          return window['anychart']['color']['darken'](this['sourceColor']);
        },
        'tooltip': {
          'content': {
            'hAlign': 'left'
          },
          /**
           * @this {*}
           * @return {*}
           */
          'textFormatter': function() {
            return 'High: ' + this['valuePrefix'] + parseFloat(this['high']).toFixed(2) + this['valuePostfix'] + '\n' +
                'Low: ' + this['valuePrefix'] + parseFloat(this['low']).toFixed(2) + this['valuePostfix'];
          }
        }
      },
      'rangeBar': {
        'markers': {
          'position': 'rightCenter'
        },
        'labels': {
          'position': 'rightCenter'
        },
        'tooltip': {
          'content': {
            'hAlign': 'left'
          },
          /**
           * @this {*}
           * @return {*}
           */
          'textFormatter': function() {
            return 'High: ' + this['valuePrefix'] + parseFloat(this['high']).toFixed(2) + this['valuePostfix'] + '\n' +
                'Low: ' + this['valuePrefix'] + parseFloat(this['low']).toFixed(2) + this['valuePostfix'];
          }
        }
      },
      'rangeColumn': {
        'tooltip': {
          'content': {
            'hAlign': 'left'
          },
          /**
           * @this {*}
           * @return {*}
           */
          'textFormatter': function() {
            return 'High: ' + this['valuePrefix'] + parseFloat(this['high']).toFixed(2) + this['valuePostfix'] + '\n' +
                'Low: ' + this['valuePrefix'] + parseFloat(this['low']).toFixed(2) + this['valuePostfix'];
          }
        }
      },
      'rangeSplineArea': {
        'labels': {
          'anchor': 'bottom'
        },
        /**
         * @this {*}
         * @return {*}
         */
        'highStroke': function() {
          return window['anychart']['color']['darken'](this['sourceColor']);
        },
        /**
         * @this {*}
         * @return {*}
         */
        'hoverHighStroke': function() {
          return window['anychart']['color']['darken'](this['sourceColor']);
        },
        /**
         * @this {*}
         * @return {*}
         */
        'lowStroke': function() {
          return window['anychart']['color']['darken'](this['sourceColor']);
        },
        /**
         * @this {*}
         * @return {*}
         */
        'hoverLowStroke': function() {
          return window['anychart']['color']['darken'](this['sourceColor']);
        },
        'tooltip': {
          'content': {
            'hAlign': 'left'
          },
          /**
           * @this {*}
           * @return {*}
           */
          'textFormatter': function() {
            return 'High: ' + this['valuePrefix'] + parseFloat(this['high']).toFixed(2) + this['valuePostfix'] + '\n' +
                'Low: ' + this['valuePrefix'] + parseFloat(this['low']).toFixed(2) + this['valuePostfix'];
          }
        }
      },
      'rangeStepArea': {
        'labels': {
          'anchor': 'bottom'
        },
        /**
         * @this {*}
         * @return {*}
         */
        'highStroke': function() {
          return window['anychart']['color']['darken'](this['sourceColor']);
        },
        /**
         * @this {*}
         * @return {*}
         */
        'hoverHighStroke': function() {
          return window['anychart']['color']['darken'](this['sourceColor']);
        },
        /**
         * @this {*}
         * @return {*}
         */
        'lowStroke': function() {
          return window['anychart']['color']['darken'](this['sourceColor']);
        },
        /**
         * @this {*}
         * @return {*}
         */
        'hoverLowStroke': function() {
          return window['anychart']['color']['darken'](this['sourceColor']);
        },
        'tooltip': {
          'content': {
            'hAlign': 'left'
          },
          /**
           * @this {*}
           * @return {*}
           */
          'textFormatter': function() {
            return 'High: ' + this['valuePrefix'] + parseFloat(this['high']).toFixed(2) + this['valuePostfix'] + '\n' +
                'Low: ' + this['valuePrefix'] + parseFloat(this['low']).toFixed(2) + this['valuePostfix'];
          }
        }
      },
      'spline': {
        'legendItem': {
          'iconType': 'spline'
        },
        'markers': {
          'enabled': true
        },
        'labels': {
          'anchor': 'bottom'
        },
        /**
         * @this {*}
         * @return {*}
         */
        'stroke': function() {
          return this['sourceColor'];
        },
        /**
         * @this {*}
         * @return {*}
         */
        'hoverStroke': function() {
          return window['anychart']['color']['lighten'](this['sourceColor']);
        }
      },
      'splineArea': {
        'labels': {
          'anchor': 'bottom'
        }
      },
      'stepLine': {
        'legendItem': {
          'iconType': 'stepline'
        },
        'markers': {
          'enabled': true
        },
        'labels': {
          'anchor': 'bottom'
        },
        /**
         * @this {*}
         * @return {*}
         */
        'stroke': function() {
          return this['sourceColor'];
        },
        /**
         * @this {*}
         * @return {*}
         */
        'hoverStroke': function() {
          return window['anychart']['color']['lighten'](this['sourceColor']);
        }
      },
      'stepArea': {
        'labels': {
          'anchor': 'bottom'
        }
      }
    },
    'defaultGridSettings': {
      'enabled': true,
      'isMinor': false,
      //'layout': null, //depends on barChartMode
      'drawFirstLine': true,
      'drawLastLine': true,
      'oddFill': '#fff',
      'evenFill': '#f5f5f5',
      'stroke': '#c1c1c1',
      'scale': 1,
      'zIndex': 10
    },
    'defaultMinorGridSettings': {
      'enabled': true,
      'isMinor': true,
      //'layout': null, //depends on barChartMode
      'drawFirstLine': true,
      'drawLastLine': true,
      'oddFill': '#fff',
      'evenFill': '#f5f5f5',
      'stroke': '#c1c1c1',
      'scale': 1,
      'zIndex': 10
    },
    'defaultXAxisSettings': {
      'enabled': true,
      'orientation': 'bottom',
      'title': {
        'enabled': true,
        'text': 'X-Axis'
      },
      'width': null,
      'scale': 0
    },
    'defaultYAxisSettings': {
      'enabled': true,
      'orientation': 'left',
      'title': {
        'enabled': true,
        'text': 'Y-Axis'
      },
      'minorTicks': {
        'enabled': true
      },
      'width': null,
      'scale': 1
    },
    'defaultLineMarkerSettings': {
      'enabled': true,
      'value': 0,
      'layout': 'horizontal',
      'stroke': {
        'color': '#DC0A0A',
        'thickness': 1,
        'opacity': 1,
        'dash': '',
        'lineJoin': 'miter',
        'lineCap': 'square'
      },
      'zIndex': 25.2,
      'scale': 1
    },
    'defaultTextMarkerSettings': {
      'enabled': true,

      'fontSize': 11,
      'fontFamily': 'Tahoma',
      'fontColor': '#222222',
      'fontWeight': 'bold',

      'value': 0,
      'anchor': 'center',
      'align': 'center',
      'layout': 'horizontal',
      //'rotation': undefined,
      'offsetX': 0,
      'offsetY': 0,
      'text': 'Text marker',
      'width': null,
      'height': null,
      'zIndex': 25.3,
      'scale': 1
    },
    'defaultRangeMarkerSettings': {
      'enabled': true,
      'from': 0,
      'to': 0,
      'layout': 'horizontal',
      'fill': '#000 0.3',
      'zIndex': 25.1,
      'scale': 1
    },

    'title': {
      'enabled': false
    },
    'background': {
      'enabled': false
    },
    'legend': {
      'enabled': false
    },
    'margin': {
      'top': 0,
      'right': 0,
      'bottom': 0,
      'left': 0
    },
    'padding': {
      'top': 0,
      'right': 0,
      'bottom': 0,
      'left': 0
    },

    'series': [],
    'grids': [],
    'minorGrids': [],
    'xAxes': [],
    'yAxes': [],
    'lineAxesMarkers': [],
    'rangeAxesMarkers': [],
    'textAxesMarkers': [],

    'scales': [
      {
        'type': 'ordinal',
        'inverted': false,
        'names': [],
        'ticks': {
          'interval': 1
        }
      },
      {
        'type': 'linear',
        'inverted': false,
        'maximum': null,
        'minimum': null,
        'minimumGap': 0.1,
        'maximumGap': 0.1,
        'softMinimum': null,
        'softMaximum': null,
        'ticks': {
          'mode': 'linear',
          'base': 0,
          'minCount': 4,
          'maxCount': 6
        },
        'minorTicks': {
          'mode': 'linear',
          'base': 0,
          'count': 5
        },
        'stackMode': 'none',
        'stickToZero': true
      }
    ],
    'xScale': 0,
    'yScale': 1,

    'barsPadding': 0.1,
    'barGroupsPadding': 0.5,
    'maxBubbleSize': '20%',
    'minBubbleSize': '5%',
    'barChartMode': false,
    'crosshair': {
      'enabled': false,
      'displayMode': 'float',
      'xStroke': '#000',
      'yStroke': '#000',
      'xLabel': {
        'x': 0,
        'y': 0,
        'axisIndex': 0,
        /**
         * @this {*}
         * @return {*}
         */
        'textFormatter': function() {
          return this['value'];
        },
        'enabled': true,
        'fontSize': 11,
        'fontFamily': 'Tahoma',
        'fontColor': '#fff',
        'fontWeight': 400,
        'textWrap': 'byLetter',
        'disablePointerEvents': true,

        'text': 'Label text',
        'background': {
          'enabled': true,
          'fill': '#000 .85',
          'stroke': 'none'
        },
        'padding': {
          'top': 6,
          'right': 10,
          'bottom': 6,
          'left': 10
        },
        'width': null,
        'height': null,
        'anchor': null,
        'offsetX': 0,
        'offsetY': 0,
        'position': null,
        'minFontSize': 8,
        'maxFontSize': 72,
        'adjustFontSize': {
          'width': false,
          'height': false
        },
        'rotation': 0
      },
      'yLabel': {
        'x': 0,
        'y': 0,
        'axisIndex': 0,
        /**
         * @this {*}
         * @return {*}
         */
        'textFormatter': function() {
          return this['value'];
        },
        'enabled': true,
        'fontSize': 11,
        'fontFamily': 'Tahoma',
        'fontColor': '#fff',
        'fontWeight': 400,
        'textWrap': 'byLetter',
        'disablePointerEvents': true,

        'text': 'Label text',
        'background': {
          'enabled': true,
          'fill': '#000 .85',
          'stroke': 'none'
        },
        'padding': {
          'top': 6,
          'right': 10,
          'bottom': 6,
          'left': 10
        },
        'width': null,
        'height': null,
        'anchor': null,
        'offsetX': 0,
        'offsetY': 0,
        'position': null,
        'minFontSize': 8,
        'maxFontSize': 72,
        'adjustFontSize': {
          'width': false,
          'height': false
        },
        'rotation': 0
      },
      'zIndex': 41
    },
    'xZoom': {
      'continuous': true,
      'startRatio': 0,
      'endRatio': 1
    },
    'xScroller': {
      'enabled': false,
      'fill': '#fff',
      'selectedFill': '#1976d2 0.2',
      'outlineStroke': 'none',
      'height': 10,
      'minHeight': null,
      'maxHeight': null,
      'autoHide': false,
      'orientation': 'bottom',
      'position': 'afterAxes',
      'allowRangeChange': true,
      'thumbs': {
        'enabled': true,
        'autoHide': false,
        'fill': '#f7f7f7',
        'stroke': '#7c868e',
        'hoverFill': '#ffffff',
        'hoverStroke': '#545f69'
      },
      'zIndex': 35
    }
  },

  // merge with cartesian
  'area': {
    'title': {
      'enabled': true
    },
    'background': {
      'enabled': true
    },
    'xAxes': [{'scale': 0}],
    'yAxes': [{'scale': 1}],
    'grids': [
      {
        'layout': 'horizontal'
      },
      {
        'layout': 'vertical',
        'evenFill': 'none',
        'oddFill': 'none',
        'scale': 0
      }
    ],
    'minorGrids': [
      {
        'evenFill': 'none',
        'oddFill': 'none',
        'stroke': '#000 0.075',
        'layout': 'horizontal'
      }
    ],
    'padding': {
      'top': 10,
      'right': 20,
      'bottom': 10,
      'left': 20
    },
    'interactivity': {
      'hoverMode': 'byX'
    }
  },
  'bar': {
    'title': {
      'enabled': true
    },
    'background': {
      'enabled': true
    },
    'barChartMode': true,
    'defaultXAxisSettings': {
      'orientation': 'left'
    },
    'defaultYAxisSettings': {
      'orientation': 'bottom'
    },
    'defaultLineMarkerSettings': {
      'layout': 'vertical'
    },
    'defaultTextMarkerSettings': {
      'layout': 'vertical'
    },
    'defaultRangeMarkerSettings': {
      'layout': 'vertical'
    },
    'xAxes': [{}],
    'yAxes': [{}],
    'grids': [
      {
        'layout': 'vertical'
      },
      {
        'layout': 'horizontal',
        'evenFill': 'none',
        'oddFill': 'none',
        'scale': 0
      }
    ],
    'minorGrids': [
      {
        'evenFill': 'none',
        'oddFill': 'none',
        'stroke': '#000 0.075',
        'layout': 'vertical'
      }
    ],
    'scales': [
      {
        'type': 'ordinal',
        'inverted': true,
        'names': [],
        'ticks': {
          'interval': 1
        }
      },
      {
        'type': 'linear',
        'inverted': false,
        'maximum': null,
        'minimum': null,
        'minimumGap': 0.1,
        'maximumGap': 0.1,
        'softMinimum': null,
        'softMaximum': null,
        'ticks': {
          'mode': 'linear',
          'base': 0,
          'minCount': 4,
          'maxCount': 6
        },
        'minorTicks': {
          'mode': 'linear',
          'base': 0,
          'count': 5
        },
        'stackMode': 'none',
        'stickToZero': true
      }
    ],
    'padding': {
      'top': 10,
      'right': 20,
      'bottom': 10,
      'left': 20
    },
    'xScroller': {
      'orientation': 'left'
    }
  },
  'box': {
    'title': {
      'enabled': true
    },
    'background': {
      'enabled': true
    },
    'xAxes': [{}],
    'yAxes': [{}],
    'grids': [
      {
        'layout': 'horizontal',
        'evenFill': '#fff',
        'oddFill': '#fff'
      }
    ],
    'minorGrids': [
      {
        'evenFill': 'none',
        'oddFill': 'none',
        'stroke': '#000 0.075',
        'layout': 'horizontal'
      }
    ],
    'padding': {
      'top': 10,
      'right': 20,
      'bottom': 10,
      'left': 20
    }
  },
  'column': {
    'title': {
      'enabled': true
    },
    'background': {
      'enabled': true
    },
    'xAxes': [{}],
    'yAxes': [{}],
    'grids': [
      {
        'layout': 'horizontal'
      },
      {
        'layout': 'vertical',
        'evenFill': 'none',
        'oddFill': 'none',
        'scale': 0
      }
    ],
    'minorGrids': [
      {
        'evenFill': 'none',
        'oddFill': 'none',
        'stroke': '#000 0.075',
        'layout': 'horizontal'
      }
    ],
    'padding': {
      'top': 10,
      'right': 20,
      'bottom': 10,
      'left': 20
    }
  },
  'financial': {
    'title': {
      'enabled': true
    },
    'background': {
      'enabled': true
    },
    'defaultXAxisSettings': {
      'minorTicks': {
        'enabled': true
      }
    },
    'xAxes': [
      {
        'labels': {
          /**
           * @this {*}
           * @return {*}
           */
          'textFormatter': function() {
            var date = new Date(this['tickValue']);
            var day = date.getUTCDate();
            var month = date.getUTCMonth();
            var year = date.getUTCFullYear();
            var res = [' ', day, ', ', year].join('');
            switch (month) {
              case 0:
                return 'Jan' + res;
              case 1:
                return 'Feb' + res;
              case 2:
                return 'Mar' + res;
              case 3:
                return 'Apr' + res;
              case 4:
                return 'May' + res;
              case 5:
                return 'Jun' + res;
              case 6:
                return 'Jul' + res;
              case 7:
                return 'Aug' + res;
              case 8:
                return 'Sep' + res;
              case 9:
                return 'Oct' + res;
              case 10:
                return 'Nov' + res;
              case 11:
                return 'Dec' + res;
            }
            return 'Invalid date';
          }
        }
      }
    ],
    'yAxes': [{}],
    'grids': [
      {
        'layout': 'horizontal'
      },
      {
        'layout': 'vertical',
        'evenFill': 'none',
        'oddFill': 'none',
        'scale': 0
      }
    ],
    'minorGrids': [
      {
        'evenFill': 'none',
        'oddFill': 'none',
        'stroke': '#000 0.075',
        'layout': 'horizontal'
      }
    ],
    'scales': [
      {
        'type': 'dateTime',
        'inverted': false,
        'maximum': null,
        'minimum': null,
        'minimumGap': 0.1,
        'maximumGap': 0.1,
        'softMinimum': null,
        'softMaximum': null,
        'ticks': {
          'count': 4
        },
        'minorTicks': {
          'count': 4
        }
      },
      {
        'type': 'linear',
        'inverted': false,
        'maximum': null,
        'minimum': null,
        'minimumGap': 0.1,
        'maximumGap': 0.1,
        'softMinimum': null,
        'softMaximum': null,
        'ticks': {
          'mode': 'linear',
          'base': 0,
          'minCount': 4,
          'maxCount': 6
        },
        'minorTicks': {
          'mode': 'linear',
          'base': 0,
          'count': 5
        },
        'stackMode': 'none',
        'stickToZero': true
      }
    ],
    'padding': {
      'top': 10,
      'right': 20,
      'bottom': 10,
      'left': 20
    }
  },
  'line': {
    'title': {
      'enabled': true
    },
    'background': {
      'enabled': true
    },
    'xAxes': [{}],
    'yAxes': [{}],
    'grids': [
      {
        'layout': 'horizontal'
      },
      {
        'layout': 'vertical',
        'evenFill': 'none',
        'oddFill': 'none',
        'scale': 0
      }
    ],
    'minorGrids': [
      {
        'evenFill': 'none',
        'oddFill': 'none',
        'stroke': '#000 0.075',
        'layout': 'horizontal'
      }
    ],
    'padding': {
      'top': 10,
      'right': 20,
      'bottom': 10,
      'left': 20
    },
    'interactivity': {
      'hoverMode': 'byX'
    }
  },

  // merge with chart
  'heatMap': {
    'scales': [
      {
        'type': 'ordinal',
        'inverted': false,
        'names': [],
        'ticks': {
          'interval': 1
        }
      },
      {
        'type': 'ordinal',
        'inverted': true,
        'names': [],
        'ticks': {
          'interval': 1
        }
      },
      {
        'type': 'ordinalColor'
      }
    ],
    'xScale': 0,
    'yScale': 1,
    'colorScale': 2,
    'background': {
      'enabled': true
    },
    'xAxes': [{}],
    'yAxes': [{}],
    'grids': [],
    'padding': {
      'top': 30,
      'right': 20,
      'bottom': 20,
      'left': 20
    },
    'tooltip': {
      'enabled': true,
      'title': {
        'enabled': true,
        'fontSize': 13,
        'fontWeight': 'normal'
      },
      'content': {'fontSize': 11},
      'separator': {'enabled': true},
      /**
       * @this {*}
       * @return {*}
       */
      'titleFormatter': function() {
        return this['name'] || this['x'];
      },
      /**
       * @this {*}
       * @return {*}
       */
      'textFormatter': function() {
        if (goog.isDef(this['heat'])) {
          var value = 'Value: ' + this['valuePrefix'] + this['heat'] + this['valuePostfix'];
          if (!isNaN(+this['heat']))
            value += '\n' + 'Percent Value: ' + (this['heat'] * 100 / this['getStat']('sum')).toFixed(1) + '%';
          return value;
        } else {
          return 'x: ' + this['x'] + ' y: ' + this['y'];
        }
      }
    },
    'legendItem': {
      'iconStroke': null
    },
    'legend': {
      'itemsSourceMode': 'categories'
    },
    'defaultXAxisSettings': {
      'enabled': true,
      'orientation': 'bottom',
      'title': {
        'text': 'X-Axis'
      }
    },
    'defaultYAxisSettings': {
      'enabled': true,
      'orientation': 'left',
      'title': {
        'text': 'Y-Axis'
      }
    },

    /**
     * @this {*}
     * @return {*}
     */
    'fill': function() {
      var color;
      if (this['colorScale']) {
        var value = this['iterator']['get']('heat');
        color = this['colorScale']['valueToColor'](value);
      } else {
        color = window['anychart']['color']['setOpacity'](this['sourceColor'], 0.85, true);
      }
      return color;
    },
    'hoverFill': '#3085be',
    'selectFill': '#333333',
    /**
     * @this {*}
     * @return {*}
     */
    'stroke': function() {
      var color;
      if (this['colorScale']) {
        var value = this['iterator']['get']('heat');
        color = this['colorScale']['valueToColor'](value);
      } else {
        color = this['sourceColor'];
      }
      return window['anychart']['color']['setThickness'](color, 1 , .85);
    },
    /**
     * @this {*}
     * @return {*}
     */
    'hoverStroke': function() {
      return window['anychart']['color']['setThickness'](this['sourceColor'], 1, .85);
    },
    'selectStroke': null,

    'labels': {
      'enabled': false,
      'fontSize': 11,
      'adjustFontSize': {
        'width': true,
        'height': true
      },
      'minFontSize': 7,
      'maxFontSize': 15,
      'hAlign': 'center',
      'vAlign': 'center',
      'textWrap': 'noWrap',
      'fontWeight': 'normal',
      'fontColor': '#333',
      'selectable': false,

      'background': {
        'enabled': false
      },
      'padding': {
        'top': 2,
        'right': 4,
        'bottom': 2,
        'left': 4
      },
      'position': 'center',
      'anchor': 'center',
      'offsetX': 0,
      'offsetY': 0,
      'rotation': 0,
      'width': null,
      'height': null,
      /**
       * @this {*}
       * @return {*}
       */
      'textFormatter': function() {
        return this['heat'];
      },
      /**
       * @this {*}
       * @return {*}
       */
      'positionFormatter': function() {
        return this['value'];
      }
    },
    'hoverLabels': {
      'enabled': null
    },
    'selectLabels': {
      'fontColor': '#f5f500',
      'enabled': null
    },

    'markers': {
      'enabled': false,
      'disablePointerEvents': false,
      'position': 'center',
      'rotation': 0,
      'anchor': 'center',
      'offsetX': 0,
      'offsetY': 0,
      //'type': null,
      'size': 4,
      //'fill': '', // autoFill
      //'stroke': '', // autoStroke
      /**
       * @this {*}
       * @return {*}
       */
      'positionFormatter': function() {
        return this['value'];
      }
    },
    'hoverMarkers': {
      'enabled': null,
      'size': 6
    },
    'selectMarkers': {
      'enabled': null,
      'fill': '#f5f500'
    },
    'labelsDisplayMode': 'drop',

    'hatchFill': false,
    //'hoverHatchFill': null,

    'clip': true,
    'xZoom': {
      'continuous': true,
      'startRatio': 0,
      'endRatio': 1
    },
    'xScroller': {
      'enabled': false,
      'fill': '#fff',
      'selectedFill': '#1976d2 0.2',
      'outlineStroke': 'none',
      'height': 10,
      'minHeight': null,
      'maxHeight': null,
      'autoHide': false,
      'orientation': 'bottom',
      'position': 'afterAxes',
      'allowRangeChange': true,
      'thumbs': {
        'enabled': true,
        'autoHide': false,
        'fill': '#f7f7f7',
        'stroke': '#7c868e',
        'hoverFill': '#ffffff',
        'hoverStroke': '#545f69'
      },
      'zIndex': 35
    },
    'yZoom': {
      'continuous': true,
      'startRatio': 0,
      'endRatio': 1
    },
    'yScroller': {
      'enabled': false,
      'fill': '#fff',
      'selectedFill': '#1976d2 0.2',
      'outlineStroke': 'none',
      'height': 10,
      'minHeight': null,
      'maxHeight': null,
      'autoHide': false,
      'orientation': 'left',
      'position': 'afterAxes',
      'allowRangeChange': true,
      'thumbs': {
        'enabled': true,
        'autoHide': false,
        'fill': '#f7f7f7',
        'stroke': '#7c868e',
        'hoverFill': '#ffffff',
        'hoverStroke': '#545f69'
      },
      'zIndex': 35
    }
  },

  // merge with chart
  'scatter': {
    'defaultSeriesSettings': {
      'base': {
        /**
         * @this {*}
         * @return {*}
         */
        'fill': function() {
          return this['sourceColor'];
        },
        /**
         * @this {*}
         * @return {*}
         */
        'hoverFill': function() {
          return window['anychart']['color']['lighten'](this['sourceColor']);
        },
        /**
         * @this {*}
         * @return {*}
         */
        'stroke': function() {
          return window['anychart']['color']['darken'](this['sourceColor']);
        },
        'hoverStroke': null,
        /**
         * @this {*}
         * @return {*}
         */
        'hatchFill': function() {
          return this['sourceHatchFill'];
        },
        //'hoverHatchFill': undefined,

        'labels': {
          'enabled': false,

          'background': {
            'enabled': false
          },
          'padding': {
            'top': 2,
            'right': 4,
            'bottom': 2,
            'left': 4
          },
          'position': 'center',
          'anchor': 'center',
          'offsetX': 0,
          'offsetY': 0,
          'rotation': 0,
          'width': null,
          'height': null,
          /**
           * @this {*}
           * @return {*}
           */
          'textFormatter': function() {
            return this['value'];
          },
          /**
           * @this {*}
           * @return {*}
           */
          'positionFormatter': function() {
            return this['value'];
          }
        },
        'hoverLabels': {
          'enabled': null
        },
        'markers': {
          'enabled': true,
          //'disablePointerEvents': undefined,
          'position': 'center',
          'rotation': 0,
          'anchor': 'center',
          'offsetX': 0,
          'offsetY': 0,
          //'type': undefined,
          'size': 4,
          //'fill': undefined,
          //'stroke': undefined,
          /**
           * @this {*}
           * @return {*}
           */
          'positionFormatter': function() {
            return this['value'];
          }
        },
        'hoverMarkers': {
          //'enabled': undefined,
          'size': 6
        },

        'clip': true,
        'color': null,

        'tooltip': {
          /**
           * @this {*}
           * @return {*}
           */
          'titleFormatter': function() {
            return this['name'];
          },
          /**
           * @this {*}
           * @return {*}
           */
          'textFormatter': function() {
            return this['x'] + ': ' + this['valuePrefix'] + this['value'] + this['valuePostfix'];
          }
        },
        'xScale': null,
        'yScale': null,
        'error': {
          'mode': 'both',
          'xError': null,
          //'xUpperError': undefined,
          //'xLowerError': undefined,
          'valueError': null,
          //'valueUpperError': undefined,
          //'valueLowerError': undefined,
          'xErrorWidth': 10,
          'valueErrorWidth': 10,
          'xErrorStroke': '#1d8bd1',
          'valueErrorStroke': '#1d8bd1'
        },
        'legendItem': {
          //'iconTextSpacing': undefined,
          //'iconEnabled': undefined,
          //'iconType': undefined,
          //'iconStroke': undefined,
          //'iconFill': undefined,
          //'iconHatchFill': undefined,
          //'iconMarkerType': undefined,
          //'iconMarkerFill': undefined,
          //'iconMarkerStroke': undefined,
          //'text': undefined,
          //'disabled': undefined
        }
      },
      'bubble': {
        'displayNegative': false,
        /**
         * @this {*}
         * @return {*}
         */
        'negativeFill': function() {
          var darken = window['anychart']['color']['darken'];
          return darken(darken(darken(this['sourceColor'])));
        },
        /**
         * @this {*}
         * @return {*}
         */
        'hoverNegativeFill': function() {
          var darken = window['anychart']['color']['darken'];
          return darken(darken(darken(darken(this['sourceColor']))));
        },
        /**
         * @this {*}
         * @return {*}
         */
        'negativeStroke': function() {
          var darken = window['anychart']['color']['darken'];
          return darken(darken(darken(darken(this['sourceColor']))));
        },
        /**
         * @this {*}
         * @return {*}
         */
        'hoverNegativeStroke': function() {
          var darken = window['anychart']['color']['darken'];
          return darken(darken(darken(darken(darken(this['sourceColor'])))));
        },
        'negativeHatchFill': null,
        //'hoverNegativeHatchFill': undefined,
        'hatchFill': false,
        'markers': {
          'enabled': false,
          'position': 'center'
        },
        'tooltip': {
          /**
           * @this {*}
           * @return {*}
           */
          'textFormatter': function() {
            return this['valuePrefix'] + parseFloat(this['value']).toFixed(2) + this['valuePostfix'];
          }
        }
      },
      'line': {
        'connectMissingPoints': false,
        /**
         * @this {*}
         * @return {*}
         */
        'stroke': function() {
          return this['sourceColor'];
        },
        /**
         * @this {*}
         * @return {*}
         */
        'hoverStroke': function() {
          return window['anychart']['color']['lighten'](this['sourceColor']);
        },
        'labels': {
          'anchor': 'bottom'
        }
      },
      'marker': {
        'size': 10,
        'hoverSize': 12,
        'selectSize': 12,
        'hatchFill': false,
        'tooltip': {
          /**
           * @this {*}
           * @return {*}
           */
          'textFormatter': function() {
            return this['valuePrefix'] + parseFloat(this['value']).toFixed(2) + this['valuePostfix'];
          }
        }
      }
    },

    'defaultGridSettings': {
      'enabled': true,
      'isMinor': false,
      'layout': 'horizontal',
      'drawFirstLine': true,
      'drawLastLine': true,
      'oddFill': '#ffffff',
      'evenFill': '#f5f5f5',
      'stroke': '#c1c1c1',
      'zIndex': 10,
      'scale': 1
    },
    'defaultMinorGridSettings': {
      'enabled': true,
      'isMinor': true,
      'layout': 'horizontal',
      'drawFirstLine': true,
      'drawLastLine': true,
      'oddFill': '#ffffff',
      'evenFill': '#f5f5f5',
      'stroke': '#c1c1c1',
      'zIndex': 10,
      'scale': 1
    },
    'defaultXAxisSettings': {
      'enabled': true,
      'orientation': 'bottom',
      'title': {
        'enabled': true,
        'text': 'X-Axis'
      },
      'minorTicks': {
        'enabled': true
      },
      'scale': 0
    },
    'defaultYAxisSettings': {
      'enabled': true,
      'orientation': 'left',
      'title': {
        'enabled': true,
        'text': 'Y-Axis'
      },
      'minorTicks': {
        'enabled': true
      },
      'scale': 1
    },
    'defaultLineMarkerSettings': {
      'enabled': true,
      'value': 0,
      'layout': 'horizontal',
      'stroke': {
        'color': '#DC0A0A',
        'thickness': 1,
        'opacity': 1,
        'dash': '',
        'lineJoin': 'miter',
        'lineCap': 'square'
      },
      'zIndex': 25.2,
      'scale': 1
    },
    'defaultTextMarkerSettings': {
      'enabled': true,

      'fontSize': 11,
      'fontFamily': 'Tahoma',
      'fontColor': '#222222',
      'fontWeight': 'bold',

      'value': 0,
      'anchor': 'center',
      'align': 'center',
      'layout': 'horizontal',
      //'rotation': undefined,
      'offsetX': 0,
      'offsetY': 0,
      'text': 'Text marker',
      'width': null,
      'height': null,
      'zIndex': 25.3,
      'scale': 1
    },
    'defaultRangeMarkerSettings': {
      'enabled': true,
      'from': 0,
      'to': 0,
      'layout': 'horizontal',
      'fill': '#000 0.3',
      'zIndex': 25.1,
      'scale': 1
    },

    'series': [],
    'grids': [
      {
        'oddFill': '#f9f9f9',
        'evenFill': '#ffffff',
        'layout': 'horizontal'
      },
      {
        'oddFill': 'none',
        'evenFill': 'none',
        'layout': 'vertical',
        'scale': 0
      }
    ],
    'minorGrids': [
      {
        'oddFill': 'none',
        'evenFill': 'none',
        'stroke': '#000 0.1',
        'layout': 'horizontal'
      },
      {
        'oddFill': 'none',
        'evenFill': 'none',
        'stroke': '#000 0.1',
        'layout': 'vertical',
        'scale': 0
      }
    ],
    'xAxes': [{}],
    'yAxes': [{}],
    'lineAxesMarkers': [],
    'rangeAxesMarkers': [],
    'textAxesMarkers': [],

    'scales': [
      {
        'type': 'linear',
        'inverted': false,
        'maximum': null,
        'minimum': null,
        'minimumGap': 0.1,
        'maximumGap': 0.1,
        'softMinimum': null,
        'softMaximum': null,
        'ticks': {
          'mode': 'linear',
          'base': 0,
          'minCount': 4,
          'maxCount': 6
        },
        'minorTicks': {
          'mode': 'linear',
          'base': 0,
          'count': 5
        },
        'stackMode': 'none',
        'stickToZero': true
      },
      {
        'type': 'linear',
        'inverted': false,
        'maximum': null,
        'minimum': null,
        'minimumGap': 0.1,
        'maximumGap': 0.1,
        'softMinimum': null,
        'softMaximum': null,
        'ticks': {
          'mode': 'linear',
          'base': 0,
          'minCount': 4,
          'maxCount': 6
        },
        'minorTicks': {
          'mode': 'linear',
          'base': 0,
          'count': 5
        },
        'stackMode': 'none',
        'stickToZero': true
      }
    ],
    'xScale': 0,
    'yScale': 1,

    'maxBubbleSize': '20%',
    'minBubbleSize': '5%',
    'crosshair': {
      'enabled': false,
      'displayMode': 'float',
      'xStroke': '#000',
      'yStroke': '#000',
      'xLabel': {
        'axisIndex': 0,
        /**
         * @this {*}
         * @return {*}
         */
        'textFormatter': function() {
          return this['value'];
        },
        'enabled': true,
        'fontSize': 11,
        'fontFamily': 'Tahoma',
        'fontColor': '#fff',
        'fontWeight': 400,
        'textWrap': 'byLetter',
        'disablePointerEvents': true,

        'text': 'Label text',
        'background': {
          'enabled': true,
          'fill': '#000 .85',
          'stroke': 'none'
        },
        'padding': {
          'top': 6,
          'right': 10,
          'bottom': 6,
          'left': 10
        },
        'width': null,
        'height': null,
        'anchor': 'leftTop',
        'offsetX': 0,
        'offsetY': 0,
        'position': 'leftTop',
        'minFontSize': 8,
        'maxFontSize': 72,
        'adjustFontSize': {
          'width': false,
          'height': false
        },
        'rotation': 0
      },
      'yLabel': {
        'axisIndex': 0,
        /**
         * @this {*}
         * @return {*}
         */
        'textFormatter': function() {
          return this['value'];
        },
        'enabled': true,
        'fontSize': 11,
        'fontFamily': 'Tahoma',
        'fontColor': '#fff',
        'fontWeight': 400,
        'textWrap': 'byLetter',
        'disablePointerEvents': true,

        'text': 'Label text',
        'background': {
          'enabled': true,
          'fill': '#000 .85',
          'stroke': 'none'
        },
        'padding': {
          'top': 6,
          'right': 10,
          'bottom': 6,
          'left': 10
        },
        'width': null,
        'height': null,
        'anchor': 'leftTop',
        'offsetX': 0,
        'offsetY': 0,
        'position': 'leftTop',
        'minFontSize': 8,
        'maxFontSize': 72,
        'adjustFontSize': {
          'width': false,
          'height': false
        },
        'rotation': 0
      }
    }
  },

  // merge with scatter
  'marker': {},
  'bubble': {},

  // merge with chart
  'bullet': {
    'background': {
      'enabled': false
    },
    'defaultRangeMarkerSettings': {
      'enabled': true,
      'from': 0,
      'to': 0,
      'zIndex': 2
      //'layout': 'horizontal'
      //'fill': '#000 0.3'
    },
    'defaultMarkerSettings': {
      'fill': '#000',
      'stroke': 'none',
      'zIndex': 2
    },
    'layout': 'horizontal',
    'rangePalette': {
      'type': 'distinct',
      'items': ['#828282', '#a8a8a8', '#c2c2c2', '#d4d4d4', '#e1e1e1']
    },
    'markerPalette': {
      'items': ['bar', 'line', 'x', 'ellipse']
    },
    'scale': {
      'type': 'linear',
      'ticks': {
        'mode': 'linear',
        'base': 0,
        'explicit': null,
        'minCount': 3,
        'maxCount': 5,
        'interval': NaN
      },
      'minorTicks': {
        'mode': 'linear',
        'base': 0,
        'explicit': null,
        'count': 5,
        'interval': NaN
      },
      'stackMode': 'none',
      'stickToZero': true,
      'minimumGap': 0,
      'maximumGap': 0,
      'softMinimum': null,
      'softMaximum': null,
      'minimum': null,
      'maximum': null,
      'inverted': false
    },
    'axis': {
      'stroke': 'none',
      'title': {
        'enabled': false,
        'zIndex': 3
      },
      'labels': {
        'zIndex': 3
      },
      'minorLabels': {
        'fontSize': 11,
        'padding': {
          'top': 1,
          'right': 1,
          'bottom': 0,
          'left': 1
        },
        'zIndex': 3
      },
      'ticks': {
        'zIndex': 3
      },
      'minorTicks': {
        'enabled': true,
        'zIndex': 3
      },
      'zIndex': 3
    },
    'ranges': [],
    'margin': {
      'top': 10,
      'right': 10,
      'bottom': 10,
      'left': 10
    },
    'title': {
      'enabled': true,
      'text': 'Chart title',
      'rotation': 0
    }
  },

  // merge with chart
  'pie': {
    'title': {
      'text': 'Pie Chart',
      'margin': {
        'bottom': 0
      }
    },
    'group': false,
    'sort': 'none',
    'radius': '45%',
    'innerRadius': 0,
    'startAngle': 0,
    'explode': 15,
    'outsideLabelsSpace': 30,
    'insideLabelsOffset': '50%',
    'overlapMode': 'noOverlap',
    'connectorLength': 20,
    'outsideLabelsCriticalAngle': 60,
    'connectorStroke': '#000 0.3',
    /**
     * @this {*}
     * @return {*}
     */
    'fill': function() {
      return this['sourceColor'];
    },
    /**
     * @this {*}
     * @return {*}
     */
    'hoverFill': function() {
      return window['anychart']['color']['lighten'](this['sourceColor']);
    },
    /**
     * @this {*}
     * @return {*}
     */
    'stroke': function() {
      return window['anychart']['color']['darken'](this['sourceColor'], .2);
    },
    /**
     * @this {*}
     * @return {*}
     */
    'hoverStroke': function() {
      return window['anychart']['color']['darken'](this['sourceColor']);
    },
    'hatchFill': null,
    //'hoverHatchFill': undefined,
    'forceHoverLabels': false,
    'labels': {
      'enabled': true,
      'fontSize': 13,
      'fontColor': null,
      'fontFamily': 'Arial',
      'background': {
        'enabled': false
      },
      'padding': {
        'top': 1,
        'right': 1,
        'bottom': 1,
        'left': 1
      },
      //'position': undefined,
      'anchor': 'center',
      //'offsetX': undefined,
      //'offsetY': undefined,
      'rotation': 0,
      'width': null,
      'height': null,
      'autoRotate': false,
      /**
       * @this {*}
       * @return {*}
       */
      'textFormatter': function() {
        return (this['value'] * 100 / this['getStat']('sum')).toFixed(1) + '%';
      },
      /**
       * @this {*}
       * @return {*}
       */
      'positionFormatter': function() {
        return this['value'];
      },
      'zIndex': 32
    },
    'outsideLabels': {'autoColor': '#000'},
    'insideLabels': {'autoColor': '#fff'},
    'hoverLabels': {
      'enabled': null
    },
    'tooltip': {
      /**
       * @this {*}
       * @return {*}
       */
      'titleFormatter': function() {
        return this['name'] || this['x'];
      },
      /**
       * @this {*}
       * @return {*}
       */
      'textFormatter': function() {
        return (this['name'] || this['x']) + '\n' + this['valuePrefix'] + this['value'] + this['valuePostfix'];
      }
    },
    'legend': {
      'enabled': true,
      'position': 'bottom',
      'align': 'center',
      'itemsLayout': 'horizontal',
      'title': {
        'enabled': false
      },
      'titleSeparator': {
        'enabled': false,
        'margin': {
          'top': 3,
          'right': 0,
          'bottom': 3,
          'left': 0
        }
      },
      'tooltip': {
        /**
         * @this {*}
         * @return {*}
         */
        'textFormatter': function() {
          return (this['value']) + '\n' + this['valuePrefix'] + this['meta']['pointValue'] + this['valuePostfix'];
        }
      }
    }
  },

  // merge with cartesian
  'cartesian3d': {
    'zDepth': 10,
    'zAngle': 45,
    'defaultSeriesType': 'column',
    'zPadding': false,
    'defaultSeriesSettings': {
      'base': {
        'stroke': 'none',
        'hoverStroke': returnSourceColor,
        'selectStroke': returnSourceColor,
        'fill': returnSourceColor,
        'hoverFill': returnLightenSourceColor20,
        'selectFill': returnLightenSourceColor30
      }
    },
    'xAxes': [{}],
    'yAxes': [{}]
  },

  // merge with area
  'bar3d': {
    'zDepth': 10,
    'zAngle': 45,
    'zPadding': false
  },

  // merge with column
  'column3d': {
    'zDepth': 20,
    'zAngle': 45,
    'zPadding': false
  },

  // merge with area
  'area3d': {
    'zDepth': 10,
    'zAngle': 45,
    'zPadding': false
  },

  // merge with pie
  'pie3d': {
    'explode': '5%',
    'connectorLength': '15%'
  },

  // merge with chart
  'pieFunnelPyramidBase': {
    'baseWidth': '90%',
    'connectorLength': 20,
    'connectorStroke': '#000',
    'overlapMode': 'noOverlap',
    'pointsPadding': 5,
    /**
     * @this {*}
     * @return {*}
     */
    'fill': function() {
      return this['sourceColor'];
    },
    /**
     * @this {*}
     * @return {*}
     */
    'hoverFill': function() {
      return window['anychart']['color']['lighten'](this['sourceColor']);
    },
    /**
     * @this {*}
     * @return {*}
     */
    'stroke': function() {
      return window['anychart']['color']['darken'](this['sourceColor'], .2);
    },
    /**
     * @this {*}
     * @return {*}
     */
    'hoverStroke': function() {
      return window['anychart']['color']['darken'](this['sourceColor']);
    },
    'hatchFill': null,
    //'hoverHatchFill': undefined,
    'labels': {
      'enabled': true,
      'fontSize': 13,
      'fontFamily': 'Arial',
      'fontColor': null,
      'disablePointerEvents': false,

      'background': {
        'enabled': false
      },
      'padding': {
        'top': 1,
        'right': 1,
        'bottom': 1,
        'left': 1
      },
      'position': 'outsideLeftInColumn',
      'anchor': 'center',
      //'offsetX': undefined,
      //'offsetY': undefined,
      'rotation': 0,
      'width': null,
      'height': null,
      /**
       * @this {*}
       * @return {*}
       */
      'textFormatter': function() {
        return this['name'] ? this['name'] : this['x'];
      },
      /**
       * @this {*}
       * @return {*}
       */
      'positionFormatter': function() {
        return this['value'];
      },
      'zIndex': 34
    },
    'outsideLabels': {'autoColor': '#000'},
    'insideLabels': {'autoColor': '#fff'},
    'hoverLabels': {
      'enabled': null,

      'padding': {
        'top': 1,
        'right': 1,
        'bottom': 1,
        'left': 1
      }
    },
    'markers': {
      'enabled': false,
      //'disablePointerEvents': undefined,
      //'position': undefined,
      'rotation': 0,
      'anchor': 'center',
      'position': null,
      'offsetX': 0,
      'offsetY': 0,
      //'type': undefined,
      'size': 8,
      //'fill': undefined,
      //'stroke': undefined,
      /**
       * @this {*}
       * @return {*}
       */
      'positionFormatter': function() {
        return this['value'];
      },
      'zIndex': 33
    },
    'hoverMarkers': {
      'enabled': null,
      'size': 12
    },
    'tooltip': {
      'content': {
        'hAlign': 'center'
      },
      'hAlign': 'center',
      /**
       * @this {*}
       * @return {*}
       */
      'titleFormatter': function() {
        return this['name'] || this['x'];
      },
      /**
       * @this {*}
       * @return {*}
       */
      'textFormatter': function() {
        return (this['name'] || this['x']) + '\n' + this['valuePrefix'] + this['value'] + this['valuePostfix'];
      }
    },
    'legend': {
      'margin': {
        'top': 10,
        'right': 0,
        'bottom': 0,
        'left': 0
      },
      'tooltip': {
        /**
         * @this {*}
         * @return {*}
         */
        'textFormatter': function() {
          return (this['value']) + '\n' + this['valuePrefix'] + this['meta']['pointValue'] + this['valuePostfix'];
        }
      },
      'zIndex': 35
    }
  },

  // merge with pyramidFunnel
  'funnel': {
    'title': {
      'text': 'Funnel Chart'
    },
    'neckWidth': '30%',
    'neckHeight': '25%'
  },
  'pyramid': {
    'title': {
      'text': 'Pyramid Chart'
    },
    'reversed': false,
    'legend': {
      'inverted': true
    }
  },

  // merge with chart
  'radar': {
    'defaultSeriesSettings': {
      'base': {
        'enabled': true,
        'hatchFill': null,
        /**
         * @this {*}
         * @return {*}
         */
        'fill': function() {
          return this['sourceColor'];
        },
        /**
         * @this {*}
         * @return {*}
         */
        'hoverFill': function() {
          return window['anychart']['color']['lighten'](this['sourceColor']);
        },
        /**
         * @this {*}
         * @return {*}
         */
        'selectFill': function() {
          //todo need define cool color.
          return window['anychart']['color']['darken'](this['sourceColor']);
        },
        /**
         * @this {*}
         * @return {*}
         */
        'stroke': function() {
          return window['anychart']['color']['darken'](this['sourceColor']);
        },
        /**
         * @this {*}
         * @return {*}
         */
        'hoverStroke': function() {
          return window['anychart']['color']['darken'](this['sourceColor']);
        },
        /**
         * @this {*}
         * @return {*}
         */
        'selectStroke': function() {
          //todo need define cool color.
          return window['anychart']['color']['darken']('red');
        },
        'labels': {
          'enabled': false,
          'position': 'center',
          'anchor': 'bottom'
        },
        'hoverLabels': {'enabled': null},
        'markers': {
          'enabled': false,
          'disablePointerEvents': false,
          'position': 'center',
          'rotation': 0,
          'anchor': 'center',
          'offsetX': 0,
          'offsetY': 0,
          //'type': null,
          'size': 4,
          //'fill': '', // autoFill
          //'stroke': '', // autoStroke
          /**
           * @this {*}
           * @return {*}
           */
          'positionFormatter': function() {
            return this['value'];
          }
        },
        'hoverMarkers': {'size': 6},
        'tooltip': {
          /**
           * @this {*}
           * @return {*}
           */
          'titleFormatter': function() {
            return this['name'];
          },
          /**
           * @this {*}
           * @return {*}
           */
          'textFormatter': function() {
            return this['x'] + ': ' + this['valuePrefix'] + this['value'] + this['valuePostfix'];
          }
        }
      },
      'area': {'markers': {'enabled': false, 'position': 'center'}},
      'line': {
        'markers': {'enabled': true, 'position': 'center'},
        /**
         * @this {*}
         * @return {*}
         */
        'stroke': function() {
          return this['sourceColor'];
        },
        /**
         * @this {*}
         * @return {*}
         */
        'hoverStroke': function() {
          return window['anychart']['color']['lighten'](this['sourceColor']);
        },
        /**
         * @this {*}
         * @return {*}
         */
        'selectStroke': function() {
          return window['anychart']['color']['darken'](this['sourceColor']);
        }
      },
      'marker': {
        /**
         * @this {*}
         * @return {*}
         */
        'fill': function() {
          return this['sourceColor'];
        },
        /**
         * @this {*}
         * @return {*}
         */
        'hoverFill': function() {
          return window['anychart']['color']['lighten'](this['sourceColor']);
        },
        /**
         * @this {*}
         * @return {*}
         */
        'selectFill': function() {
          //todo need define cool color.
          return window['anychart']['color']['darken'](this['sourceColor']);
        },
        /**
         * @this {*}
         * @return {*}
         */
        'stroke': function() {
          return window['anychart']['color']['darken'](this['sourceColor']);
        },
        /**
         * @this {*}
         * @return {*}
         */
        'hoverStroke': function() {
          return window['anychart']['color']['darken'](this['sourceColor']);
        },
        /**
         * @this {*}
         * @return {*}
         */
        'selectStroke': function() {
          //todo need define cool color.
          return window['anychart']['color']['darken']('red');
        },
        'size': 10,
        'hoverSize': 12,
        'selectSize': 12,
        'hatchFill': false,
        'labels': {
          'anchor': 'center'
        },
        'tooltip': {
          /**
           * @this {*}
           * @return {*}
           */
          'textFormatter': function() {
            return this['valuePrefix'] + parseFloat(this['value']).toFixed(2) + this['valuePostfix'];
          }
        }
      }
    },
    'defaultGridSettings': {
      'enabled': true,
      'isMinor': false,
      'layout': 'radial',
      'drawFirstLine': false,
      'drawLastLine': false,
      'oddFill': 'none',
      'evenFill': 'none',
      'stroke': '#DDDDDD',
      'zIndex': 10,
      'xScale': 0,
      'yScale': 1
    },
    'defaultMinorGridSettings': {
      'enabled': false,
      'isMinor': true,
      'layout': 'circuit',
      'drawFirstLine': false,
      'drawLastLine': false,
      'oddFill': 'none',
      'evenFill': 'none',
      'stroke': '#333333',
      'zIndex': 10,
      'xScale': 0,
      'yScale': 1
    },
    'xAxis': {
      'stroke': '#C0C0C0',
      'ticks': {
        'stroke': '#333333'
      },
      'scale': 0,
      'zIndex': 25
    },
    'yAxis': {
      'stroke': '#333333',
      'minorLabels': {
        'padding': {'top': 1, 'right': 1, 'bottom': 0, 'left': 1}
      },
      'minorTicks': {'enabled': true},
      'scale': 1
    },
    'startAngle': 0,
    'grids': [
      {'enabled': true, 'stroke': '#C0C0C0', 'layout': 'circuit', 'oddFill': 'white', 'evenFill': '#fafafa'},
      {'enabled': true} //grid with default settings
    ],
    'minorGrids': [],
    'scales': [
      {
        'type': 'ordinal',
        'inverted': false,
        'names': [],
        'ticks': {
          'interval': 1
        }
      },
      {
        'type': 'linear',
        'inverted': false,
        'maximum': null,
        'minimum': null,
        'minimumGap': 0.1,
        'maximumGap': 0.1,
        'softMinimum': null,
        'softMaximum': null,
        'ticks': {
          'mode': 'linear',
          'base': 0,
          'minCount': 4,
          'maxCount': 6
        },
        'minorTicks': {
          'mode': 'linear',
          'base': 0,
          'count': 5
        },
        'stackMode': 'none',
        'stickToZero': true
      }
    ],
    'xScale': 0,
    'yScale': 1,
    'background': {'enabled': true, 'fill': {'keys': ['#fff', '#f3f3f3', '#fff'], 'angle': 90}, 'stroke': null}
  },

  // merge with chart
  'polar': {
    'defaultSeriesSettings': {
      'base': {
        'enabled': true,
        'hatchFill': null,
        'labels': {'enabled': false, 'position': 'center', 'anchor': 'bottom'},
        'hoverLabels': {'enabled': null, 'position': 'center'},
        /**
         * @this {*}
         * @return {*}
         */
        'fill': function() {
          return this['sourceColor'];
        },
        /**
         * @this {*}
         * @return {*}
         */
        'hoverFill': function() {
          return window['anychart']['color']['lighten'](this['sourceColor']);
        },
        /**
         * @this {*}
         * @return {*}
         */
        'selectFill': function() {
          //todo need define cool color.
          return window['anychart']['color']['darken'](this['sourceColor']);
        },
        /**
         * @this {*}
         * @return {*}
         */
        'stroke': function() {
          return window['anychart']['color']['darken'](this['sourceColor']);
        },
        /**
         * @this {*}
         * @return {*}
         */
        'hoverStroke': function() {
          return window['anychart']['color']['darken'](this['sourceColor']);
        },
        /**
         * @this {*}
         * @return {*}
         */
        'selectStroke': function() {
          //todo need define cool color.
          return window['anychart']['color']['darken']('red');
        },
        'markers': {
          'enabled': false,
          'disablePointerEvents': false,
          'position': 'center',
          'rotation': 0,
          'anchor': 'center',
          'offsetX': 0,
          'offsetY': 0,
          //'type': null,
          'size': 4,
          //'fill': '', // autoFill
          //'stroke': '', // autoStroke
          /**
           * @this {*}
           * @return {*}
           */
          'positionFormatter': function() {
            return this['value'];
          }
        },
        'hoverMarkers': {'size': 6},
        'tooltip': {
          /**
           * @this {*}
           * @return {*}
           */
          'titleFormatter': function() {
            return this['name'];
          },
          /**
           * @this {*}
           * @return {*}
           */
          'textFormatter': function() {
            return this['x'] + ': ' + this['valuePrefix'] + this['value'] + this['valuePostfix'];
          }
        }
      },
      'area': {},
      'line': {
        'markers': {'enabled': true},
        /**
         * @this {*}
         * @return {*}
         */
        'stroke': function() {
          return this['sourceColor'];
        },
        /**
         * @this {*}
         * @return {*}
         */
        'hoverStroke': function() {
          return window['anychart']['color']['lighten'](this['sourceColor']);
        },
        /**
         * @this {*}
         * @return {*}
         */
        'selectStroke': function() {
          return window['anychart']['color']['darken'](this['sourceColor']);
        }
      },
      'marker': {
        /**
         * @this {*}
         * @return {*}
         */
        'fill': function() {
          return this['sourceColor'];
        },
        /**
         * @this {*}
         * @return {*}
         */
        'hoverFill': function() {
          return window['anychart']['color']['lighten'](this['sourceColor']);
        },
        /**
         * @this {*}
         * @return {*}
         */
        'selectFill': function() {
          //todo need define cool color.
          return window['anychart']['color']['darken'](this['sourceColor']);
        },
        /**
         * @this {*}
         * @return {*}
         */
        'stroke': function() {
          return window['anychart']['color']['darken'](this['sourceColor']);
        },
        /**
         * @this {*}
         * @return {*}
         */
        'hoverStroke': function() {
          return window['anychart']['color']['darken'](this['sourceColor']);
        },
        /**
         * @this {*}
         * @return {*}
         */
        'selectStroke': function() {
          //todo need define cool color.
          return window['anychart']['color']['darken']('red');
        },
        'size': 10,
        'hoverSize': 12,
        'selectSize': 12,
        'labels': {
          'anchor': 'bottom'
        },
        'hatchFill': false,
        'tooltip': {
          /**
           * @this {*}
           * @return {*}
           */
          'textFormatter': function() {
            return this['valuePrefix'] + parseFloat(this['value']).toFixed(2) + this['valuePostfix'];
          }
        }
      }
    },
    'defaultGridSettings': {
      'enabled': true,
      'isMinor': false,
      'layout': 'radial',
      'drawFirstLine': false,
      'drawLastLine': false,
      'oddFill': 'none',
      'evenFill': 'none',
      'stroke': '#DDDDDD',
      'zIndex': 10,
      'xScale': 0,
      'yScale': 1
    },
    'defaultMinorGridSettings': {
      'enabled': false,
      'isMinor': true,
      'layout': 'circuit',
      'drawFirstLine': false,
      'drawLastLine': false,
      'oddFill': 'none',
      'evenFill': 'none',
      'stroke': '#333333',
      'zIndex': 10,
      'xScale': 0,
      'yScale': 1
    },
    'xAxis': {
      'stroke': '#C0C0C0',
      'ticks': {
        'stroke': '#333333'
      },
      'scale': 0,
      'zIndex': 25
    },
    'yAxis': {
      'stroke': '#333333',
      'minorLabels': {
        'padding': {'top': 1, 'right': 1, 'bottom': 0, 'left': 1}
      },
      'minorTicks': {'enabled': true},
      'scale': 1
    },
    'startAngle': 0,
    'grids': [
      {'enabled': true, 'stroke': '#C0C0C0', 'layout': 'circuit', 'oddFill': 'white', 'evenFill': '#fafafa'},
      {'enabled': true} //grid with default settings
    ],
    'minorGrids': [],
    'scales': [
      {
        'type': 'linear',
        'inverted': false,
        'maximum': null,
        'minimum': null,
        'minimumGap': 0.1,
        'maximumGap': 0.1,
        'softMinimum': null,
        'softMaximum': null,
        'ticks': {
          'mode': 'linear',
          'base': 0,
          'minCount': 4,
          'maxCount': 6
        },
        'minorTicks': {
          'mode': 'linear',
          'base': 0,
          'count': 5
        },
        'stackMode': 'none',
        'stickToZero': true
      },
      {
        'type': 'linear',
        'inverted': false,
        'maximum': null,
        'minimum': null,
        'minimumGap': 0.1,
        'maximumGap': 0.1,
        'softMinimum': null,
        'softMaximum': null,
        'ticks': {
          'mode': 'linear',
          'base': 0,
          'minCount': 4,
          'maxCount': 6
        },
        'minorTicks': {
          'mode': 'linear',
          'base': 0,
          'count': 5
        },
        'stackMode': 'none',
        'stickToZero': true
      }
    ],
    'xScale': 0,
    'yScale': 1,
    'background': {'enabled': true, 'fill': {'keys': ['#fff', '#f3f3f3', '#fff'], 'angle': 90}, 'stroke': null}
  },

  // merge with chart
  'sparkline': {
    'title': {
      'enabled': false,
      'padding': {
        'top': 0,
        'right': 0,
        'bottom': 0,
        'left': 0
      },
      'margin': {
        'top': 0,
        'right': 0,
        'bottom': 0,
        'left': 0
      },
      'orientation': 'right',
      'rotation': 0
    },
    'background': {
      'enabled': false
    },
    'margin': {
      'top': 0,
      'right': 0,
      'bottom': 0,
      'left': 0
    },
    'padding': {
      'top': 0,
      'right': 0,
      'bottom': 0,
      'left': 0
    },
    'defaultSeriesSettings': {
      'base': {
        'markers': {
          'enabled': false,
          'type': 'circle',
          'size': 1.5,
          'position': 'center'
        },
        'labels': {
          'enabled': false,
          'background': {
            enabled: false
          },
          'position': 'center',
          'anchor': 'centerBottom'
        },
        'color': '#4682B4'
      },
      'area': {
        'stroke': '#1e90ff',
        'fill': '#d2e9ff'
      },
      'column': {
        'markers': {
          'position': 'centerTop'
        },
        'labels': {
          'position': 'centerTop',
          'anchor': 'centerBottom'
        },
        'negativeMarkers': {
          'position': 'centerBottom'
        },
        'negativeLabels': {
          'position': 'centerBottom',
          'anchor': 'centerTop'
        },
        'fill': '#87ceeb',
        'negativeFill': '#ffc0cb'
      },
      'line': {
        'stroke': '#4682b4'
      },
      'winLoss': {
        'markers': {
          'position': 'centerTop',
          'anchor': 'centerTop'
        },
        'labels': {
          'position': 'centerTop',
          'anchor': 'centerTop'
        },
        'negativeMarkers': {
          'position': 'centerBottom',
          'anchor': 'centerBottom'
        },
        'negativeLabels': {
          'position': 'centerBottom',
          'anchor': 'centerBottom'
        },
        'fill': '#305374',
        'negativeFill': '#cb6762'
      }
    },
    'defaultLineMarkerSettings': {
      'enabled': true,
      'value': 0,
      'layout': 'horizontal',
      'stroke': {
        'color': '#DC0A0A',
        'thickness': 1,
        'opacity': 1,
        'dash': '',
        'lineJoin': 'miter',
        'lineCap': 'square'
      },
      'zIndex': 25.2,
      'scale': 1
    },
    'defaultTextMarkerSettings': {
      'enabled': true,

      'fontSize': 11,
      'fontFamily': 'Tahoma',
      'fontColor': '#222222',
      'fontWeight': 'bold',

      'value': 0,
      'anchor': 'center',
      'align': 'center',
      'layout': 'horizontal',
      //'rotation': undefined,
      'offsetX': 0,
      'offsetY': 0,
      'text': 'Text marker',
      'width': null,
      'height': null,
      'zIndex': 25.3,
      'scale': 1
    },
    'defaultRangeMarkerSettings': {
      'enabled': true,
      'from': 0,
      'to': 0,
      'layout': 'horizontal',
      'fill': '#000 0.3',
      'zIndex': 25.1,
      'scale': 1
    },

    //'stroke': undefined,
    //'fill': undefined,
    //'firstFill': undefined,
    //'lastFill': undefined,
    //'negativeFill': undefined,
    //'minFill': undefined,
    //'maxFill': undefined,
    'hatchFill': null,
    //'firstHatchFill': undefined,
    //'lastHatchFill': undefined,
    //'negativeHatchFill': undefined,
    //'minHatchFill': undefined,
    //'maxHatchFill': undefined,

    'markers': {},
    'firstMarkers': {},
    'lastMarkers': {},
    'negativeMarkers': {},
    'minMarkers': {
      'fill': '#00f',
      'stroke': '#000 0.5'
    },
    'maxMarkers': {
      'fill': '#f00',
      'stroke': '#000 0.5'
    },

    'labels': {},
    'firstLabels': {},
    'lastLabels': {},
    'negativeLabels': {},
    'minLabels': {},
    'maxLabels': {},

    'lineAxesMarkers': [],
    'rangeAxesMarkers': [],
    'textAxesMarkers': [],
    'scales': [
      {
        'type': 'ordinal',
        'inverted': false,
        'names': [],
        'ticks': {
          'interval': 1
        }
      },
      {
        'type': 'linear',
        'inverted': false,
        'maximum': null,
        'minimum': null,
        'minimumGap': 0.1,
        'maximumGap': 0.1,
        'softMinimum': null,
        'softMaximum': null,
        'ticks': {
          'mode': 'linear',
          'base': 0,
          'minCount': 4,
          'maxCount': 6
        },
        'minorTicks': {
          'mode': 'linear',
          'base': 0,
          'count': 5
        },
        'stackMode': 'none',
        'stickToZero': true
      }
    ],
    'xScale': 0,
    'yScale': 1,
    'clip': true,
    'seriesType': 'line',
    'connectMissingPoints': false,
    'pointWidth': '95%',

    'tooltip': {
      'title': false,
      'separator': false,
      /**
       * @this {*}
       * @return {*}
       */
      'titleFormatter': function() {
        return this['x'];
      },
      /**
       * @this {*}
       * @return {*}
       */
      'textFormatter': function() {
        return 'x: ' + this['x'] + '\ny: ' + this['value'];
      }
    }
  },

  // merge with chart
  'circularGauge': {
    'title': {
      'enabled': false,
      'margin': {
        'bottom': 5
      }
    },
    'background': {
      'enabled': false
    },
    'padding': {
      'top': 0,
      'right': 0,
      'bottom': 0,
      'left': 0
    },
    'defaultAxisSettings': {
      'startAngle': null,
      'labels': {'position': 'inside', 'adjustFontSize': true},
      'minorLabels': {'position': 'inside', 'adjustFontSize': true},
      'fill': 'black .3',
      'ticks': {
        'hatchFill': false,
        'type': 'line',
        'position': 'center',
        'length': null,
        'fill': 'red',
        'stroke': 'none'
      },
      'minorTicks': {
        'hatchFill': false,
        'type': 'line',
        'position': 'center',
        'length': null,
        'fill': 'red',
        'stroke': 'none'
      },
      'zIndex': 10
    },
    'defaultPointerSettings': {
      'base': {
        'enabled': true,
        'fill': '#f22922',
        'stroke': '#f22922',
        'hatchFill': false,
        'axisIndex': 0
        //'dataIndex': undefined
      },
      'bar': {
        'position': 'center'
        //'width': undefined,
        //'radius': undefined
      },
      'marker': {
        //'size': undefined,
        'position': 'inside',
        'type': 'triangleUp'
        //'radius': undefined
      },
      'needle': {
        //'startRadius': undefined,
        //'middleRadius': undefined,
        //'endRadius': undefined,
        //'startWidth': undefined,
        //'middleWidth': undefined,
        //'endWidth': undefined
      },
      'knob': {
        'fill': {
          'keys': ['rgb(255, 255, 255)', 'rgb(220, 220, 220)'],
          'angle': 135
        },
        'stroke': '2 #ccc',
        'verticesCount': 6,
        'verticesCurvature': .5,
        'topRatio': .5,
        'bottomRatio': .5
        //'topRadius': undefined,
        //'bottomRadius': undefined
      }
    },
    'defaultRangeSettings': {
      'enabled': true,
      'axisIndex': 0,
      //'from': undefined,
      //'to': undefined,
      'fill': '#008000 .5',
      'position': 'center',
      'startSize': 0,
      'endSize': '10%'
      //'radius': undefined
    },
    'fill': {
      'keys': ['#fff', '#dcdcdc'],
      'angle': 315
    },
    //'stroke': undefined,
    'startAngle': 0,
    'sweepAngle': 360,
    'cap': {
      'enabled': false,
      'fill': {
        'keys': ['#D3D3D3', '#6F6F6F'],
        'angle': -45
      },
      'stroke': 'none',
      'hatchFill': false,
      'radius': '15%',
      'zIndex': 50
    },
    'circularPadding': '10%',
    'encloseWithStraightLine': false,
    'axes': [],
    'bars': [],
    'markers': [],
    'needles': [],
    'knobs': [],
    'ranges': [],
    'interactivity': {
      'hoverMode': 'single'
    },
    'tooltip': {
      'enabled': false,
      'title': {
        'enabled': false
      },
      /**
       * @this {*}
       * @return {*}
       */
      'titleFormatter': function() {
        return this['value'];
      },
      /**
       * @this {*}
       * @return {*}
       */
      'textFormatter': function() {
        return this['valuePrefix'] + this['value'] + this['valuePostfix'];
      }
    }
  },

  // merge with chart
  'map': {
    'defaultSeriesSettings': {
      'base': {
        /**
         * @this {*}
         * @return {*}
         */
        'fill': function() {
          var color;
          if (this['colorScale']) {
            var refVale = this['referenceValueNames'][1];
            var value = this['iterator']['get'](refVale);
            color = this['colorScale']['valueToColor'](value);
          } else {
            color = this['sourceColor'];
          }
          return color;
        },
        /**
         * @this {*}
         * @return {*}
         */
        'hoverFill': function() {
          return window['anychart']['color']['lighten'](this['sourceColor']);
        },
        'selectFill': {
          'color': '#64b5f6'
        },
        'stroke': {
          'thickness': 0.5,
          'color': '#545f69'
        },
        'hoverStroke': {
          'thickness': 0.5,
          'color': '#545f69'
        },
        'selectStroke': {
          'thickness': 0.5,
          'color': '#545f69'
        },
        'hatchFill': false,
        //'hoverHatchFill': null,
        //'selectHatchFill': null,

        'labels': {
          'enabled': true,
          'fontSize': 12,
          'adjustFontSize': {
            'width': true,
            'height': true
          },
          /**
           * @this {*}
           * @return {*}
           */
          'textFormatter': function() {
            return this['name'];
          }
        },
        'hoverLabels': {
          'enabled': null
        },
        'selectLabels': {
          'enabled': null
        },
        'markers': {
          'enabled': false,
          'disablePointerEvents': false,
          'size': 4
        },
        'hoverMarkers': {
          'enabled': null,
          'size': 6
        },
        'selectMarkers': {
          'enabled': null,
          'size': 6
        },

        'color': null,
        'allowPointsSelect': null,

        'tooltip': {
          'enabled': true,
          /**
           * @this {*}
           * @return {*}
           */
          'titleFormatter': function() {
            return this['name'];
          },
          /**
           * @this {*}
           * @return {*}
           */
          'textFormatter': function() {
            return this['id'] + ': ' + this['valuePrefix'] + this['value'] + this['valuePostfix'];
          }
        },
        'xScale': null,
        'yScale': null,
        'geoIdField': null
      },
      'choropleth': {},
      'bubble': {
        'displayNegative': false,
        /**
         * @this {*}
         * @return {*}
         */
        'fill': function() {
          return window['anychart']['color']['setOpacity'](this['sourceColor'], 0.7, true);
        },
        /**
         * @this {*}
         * @return {*}
         */
        'hoverFill': function() {
          return window['anychart']['color']['setOpacity'](this['sourceColor'], 0.7, true);
        },
        /**
         * @this {*}
         * @return {*}
         */
        'stroke': function() {
          return window['anychart']['color']['setThickness'](this['sourceColor'], 1.5);
        },
        /**
         * @this {*}
         * @return {*}
         */
        'hoverStroke': function() {
          return window['anychart']['color']['setThickness'](this['sourceColor'], 1.5);
        },
        'legendItem': {
          'iconStroke': null
        },
        /**
         * @this {*}
         * @return {*}
         */
        'negativeFill': function() {
          return window['anychart']['color']['darken'](
              window['anychart']['color']['darken'](
                  window['anychart']['color']['darken'](this['sourceColor'])));
        },
        /**
         * @this {*}
         * @return {*}
         */
        'hoverNegativeFill': function() {
          return window['anychart']['color']['darken'](
              window['anychart']['color']['darken'](
                  window['anychart']['color']['darken'](
                      window['anychart']['color']['darken'](this['sourceColor']))));
        },
        /**
         * @this {*}
         * @return {*}
         */
        'negativeStroke': function() {
          return window['anychart']['color']['darken'](
              window['anychart']['color']['darken'](
                  window['anychart']['color']['darken'](
                      window['anychart']['color']['darken'](this['sourceColor']))));
        },
        /**
         * @this {*}
         * @return {*}
         */
        'hoverNegativeStroke': function() {
          return window['anychart']['color']['darken'](
              window['anychart']['color']['darken'](
                  window['anychart']['color']['darken'](
                      window['anychart']['color']['darken'](
                          window['anychart']['color']['darken'](this['sourceColor'])))));
        },
        'negativeHatchFill': null,
        'hoverNegativeHatchFill': null,
        'tooltip': {
          /**
           * @this {*}
           * @return {*}
           */
          'titleFormatter': function() {
            return this['name'] || this['getDataValue']('name');
          },
          /**
           * @this {*}
           * @return {*}
           */
          'textFormatter': function() {
            return 'Value: ' + this['valuePrefix'] + this['size'] + this['valuePostfix'];
          }
        }
      }
    },
    'colorRange': {
      'enabled': false,
      'stroke': null,
      'orientation': 'bottom',
      'title': {'enabled': false},
      'colorLineSize': 20,
      'padding': {'top': 10, 'right': 0, 'bottom': 20, 'left': 0},
      'align': 'center',
      'length': '70%',
      'marker': {
        'fill': '#545f69',
        'hoverFill': '#545f69',
        'stroke': '#545f69',
        'hoverStroke': '#545f69',
        /**
         * @this {*}
         * @return {*}
         */
        'positionFormatter': function() {
          return this['value'];
        },
        'legendItem': {
          'iconStroke': null
        },
        'enabled': true,
        'disablePointerEvents': false,
        'position': 'center',
        'rotation': 0,
        'anchor': 'center',
        'offsetX': 0,
        'offsetY': 0,
        'type': 'triangleDown',
        'size': 15
      },
      'labels': {'offsetX': 0},
      'ticks': {
        'stroke': {'thickness': 3, 'color': '#fff', 'position': 'center', 'length': 20}
      },
      'minorTicks': {'enabled': false}
    },
    'unboundRegions': {'enabled': true, 'fill': '#F7F7F7', 'stroke': '#B9B9B9'},
    'linearColor': {'colors': ['#fff', '#ffd54f', '#ef6c00']},
    'maxBubbleSize': '20%',
    'minBubbleSize': '5%',
    'geoIdField': 'id',
    'interactivity': {
      'copyFormatter': function() {
        var ths = arguments[0];
        var seriesStatus = ths['seriesStatus'];
        var result = '';
        for (var i = 0, len = seriesStatus.length; i < len; i++) {
          var status = seriesStatus[i];
          if (status['points'].length == 0) continue;
          result += 'Series ' + status['series'].index() + ':\n';
          for (var j = 0, len_ = status['points'].length; j < len_; j++) {
            var point = status['points'][j];
            result += 'id: ' + point['id'] + ' index: ' + point['index'];
            if (j != len_ - 1) result += '\n';
          }
          if (i != len - 1) result += '\n';
        }
        return result || 'no selected points';
      },
      'drag': true,
      'mouseWheel': true
    }
  },

  'defaultDataGrid': {
    'isStandalone': false,
    'titleHeight': 25,
    'backgroundFill': 'none',
    'columnStroke': '#ccd7e1',
    'rowStroke': '#ccd7e1',
    'rowOddFill': '#fff',
    'rowEvenFill': '#fafafa',
    'rowFill': '#fff',
    'hoverFill': '#edf8ff',
    'rowSelectedFill': '#d2eafa',
    'zIndex': 5,
    'titleFill': {
      'keys': ['#f8f8f8', '#fff'],
      'angle': 90
    },
    'editStructurePreviewFill': {
      'color': '#4285F4',
      'opacity': 0.2
    },
    'editStructurePreviewStroke': {
      'color': '#4285F4',
      'thickness': 2
    },
    'editStructurePreviewDashStroke': {
      'color': '#4285F4',
      'dash': '4 4'
    },
    'tooltip': {
      'anchor': 'leftTop',
      'content': {
        'hAlign': 'left'
      },
      'textFormatter': function(data) {
        var name = data['get']('name');
        return (name !== void 0) ? name + '' : '';
      }
    },
    'defaultColumnSettings': {
      'width': 90,
      //'defaultWidth': undefined,
      'cellTextSettings': {
        'anchor': 'leftTop',
        'vAlign': 'middle',
        'padding': {
          'top': 0,
          'right': 5,
          'bottom': 0,
          'left': 5
        },
        'textWrap': 'noWrap',
        'background': null,
        'rotation': 0,
        'width': null,
        'height': null,
        'fontSize': 11,
        'minFontSize': 8,
        'maxFontSize': 72,
        'disablePointerEvents': true
      },
      'depthPaddingMultiplier': 0,
      'collapseExpandButtons': false,
      'title': {
        'margin': {
          'top': 0,
          'right': 0,
          'bottom': 0,
          'left': 0
        },
        'textWrap': 'noWrap',
        'hAlign': 'center',
        'vAlign': 'middle',
        'background': {
          'enabled': false
        }
      },
      'textFormatter': function(item) {
        return '';
      }
    },
    'columns': [
      {
        'width': 50,
        'textFormatter': function(item) {
          var val = item['meta']('index');
          return (val != null) ? (val + 1) + '' : '';
        },
        'title': {
          'text': '#'
        }
      },
      {
        'width': 170,
        'collapseExpandButtons': true,
        'depthPaddingMultiplier': 15,
        'textFormatter': function(item) {
          var val = item['get']('name');
          return (val != null) ? (val + '') : '';
        },
        'title': {
          'text': 'Name'
        }
      }
    ]
  },

  // merge with chart
  'gantt': {
    'base': {
      'splitterPosition': '30%',
      'headerHeight': 70,
      'hoverFill': '#edf8ff',
      'rowSelectedFill': '#d2eafa',
      'columnStroke': '#ccd7e1',
      'rowStroke': '#ccd7e1',
      'title': {
        'enabled': false
      },
      'credits': {
        'inChart': true
      },
      'background': {
        'fill': '#fff'
      },
      'margin': {
        'top': 0,
        'right': 0,
        'bottom': 0,
        'left': 0
      },
      'padding': {
        'top': 0,
        'right': 0,
        'bottom': 0,
        'left': 0
      },
      'dataGrid': {
      },
      'timeline': {
        'columnStroke': '#ccd7e1',
        'rowStroke': '#ccd7e1',
        'backgroundFill': 'none',
        'rowOddFill': '#fff',
        'rowEvenFill': '#fafafa',
        'rowFill': '#fff',
        'hoverFill': '#edf8ff',
        'rowSelectedFill': '#d2eafa',
        'zIndex': 5,
        'headerHeight': 70,
        'editing': false,
        'connectorPreviewStroke': {
          'color': '#0000ff',
          'dash': '3 3',
          'opacity': .6
        },
        'editPreviewFill': {
          'color': '#fff',
          'opacity': 0.00001
        },
        'editProgressFill': '#fff',
        'editProgressStroke': '#000',
        'editIntervalThumbFill': '#fff',
        'editIntervalThumbStroke': '#000',
        'editConnectorThumbFill': '#fff',
        'editConnectorThumbStroke': '#000',
        'editStructurePreviewFill': {
          'color': '#4285F4',
          'opacity': 0.2
        },

        'editStructurePreviewStroke': {
          'color': '#4285F4',
          'thickness': 2
        },

        'editStructurePreviewDashStroke': {
          'color': '#4285F4',
          'dash': '4 4'
        },
        'baseFill': {
          'keys': ['#3CA0DE', '#3085BC'],
          'angle': -90
        },
        'baseStroke': '#0C3F5F',
        'baselineFill': {
          'keys': ['#E1E1E1', '#A1A1A1'],
          'angle': -90
        },
        'baselineStroke': '#0C3F5F',
        'progressFill': {
          'keys': ['#63FF78', '#3DC351', '#188E2D'],
          'angle': -90
        },
        'progressStroke': '#006616',
        'milestoneFill': {
          'keys': ['#FAE096', '#EB8344'],
          'angle': -90
        },
        'milestoneStroke': '#000',
        'parentFill': {
          'keys': ['#646464', '#282828'],
          'angle': -90
        },
        'parentStroke': '#000',
        'selectedElementFill': {
          'keys': ['#f1b8b9', '#f07578'],
          'angle': -90
        },
        'connectorFill': '#000090',
        'connectorStroke': '#000090',
        'minimumGap': 0.1,
        'maximumGap': 0.1,
        'baselineAbove': false,
        'tooltip': {
          'anchor': 'leftTop',
          'content': {
            'hAlign': 'left'
          }
        },
        'labelsFactory': {
          'anchor': 'leftCenter',
          'position': 'rightCenter',
          'padding': {
            'top': 3,
            'right': 5,
            'bottom': 3,
            'left': 5
          },
          'vAlign': 'middle',
          'textWrap': 'noWrap',
          'background': null,
          'rotation': 0,
          'width': null,
          'height': null,
          'fontSize': 11,
          'minFontSize': 8,
          'maxFontSize': 72,
          'zIndex': 40,
          'disablePointerEvents': true
        },
        'markersFactory': {
          'anchor': 'centerTop',
          'zIndex': 50,
          'type': 'star4',
          'fill': '#ff0',
          'stroke': '#000'
        },
        'defaultLineMarkerSettings': {
          'layout': 'vertical'
        },
        'defaultRangeMarkerSettings': {
          'layout': 'vertical'
        },
        'defaultTextMarkerSettings': {
          'layout': 'vertical'
        },
        'header': {
          'labelsFactory': {
            'anchor': 'leftTop',
            'vAlign': 'middle',
            'padding': {
              'top': 0,
              'right': 5,
              'bottom': 0,
              'left': 5
            },
            'textWrap': 'noWrap',
            'background': null,
            'rotation': 0,
            'width': null,
            'height': null,
            'fontSize': 11,
            'minFontSize': 8,
            'maxFontSize': 72,
            'disablePointerEvents': true
          }

        }
      }
    },
    'ganttResource': {
      'dataGrid': {
        'tooltip': {
          /**
           * @this {*}
           * @return {string}
           */
          'titleFormatter': function() {
            return this['name'] || '';
          },
          /**
           * @this {*}
           * @return {string}
           */
          'textFormatter': function() {
            var startDate = this['minPeriodDate'];
            var endDate = this['maxPeriodDate'];
            return (startDate ? 'Start Date: ' + window['anychart']['format']['dateTime'](startDate) : '') +
                (endDate ? '\nEnd Date: ' + window['anychart']['format']['dateTime'](endDate) : '');
          }
        }
      },
      'timeline': {
        'selectedElementStroke': 'none',
        'tooltip': {
          /**
           * @this {*}
           * @return {string}
           */
          'titleFormatter': function() {
            return this['name'] || '';
          },
          /**
           * @this {*}
           * @return {string}
           */
          'textFormatter': function() {
            var startDate = this['periodStart'] || this['minPeriodDate'];
            var endDate = this['periodEnd'] || this['maxPeriodDate'];
            return (startDate ? 'Start Date: ' + window['anychart']['format']['dateTime'](startDate) : '') +
                (endDate ? '\nEnd Date: ' + window['anychart']['format']['dateTime'](endDate) : '');
          }
        }
      }
    },
    'ganttProject': {
      'dataGrid': {
        'tooltip': {
          /**
           * @this {*}
           * @return {string}
           */
          'titleFormatter': function() {
            return this['name'] || '';
          },
          /**
           * @this {*}
           * @return {string}
           */
          'textFormatter': function() {
            var startDate = this['actualStart'] || this['autoStart'];
            var endDate = this['actualEnd'] || this['autoEnd'];
            var progress = this['progressValue'];

            if (progress === void 0) {
              var auto = this['autoProgress'] * 100;
              progress = (Math.round(auto * 100) / 100 || 0) + '%';
            }

            return (startDate ? 'Start Date: ' + window['anychart']['format']['dateTime'](startDate) : '') +
                (endDate ? '\nEnd Date: ' + window['anychart']['format']['dateTime'](endDate) : '') +
                (progress ? '\nComplete: ' + progress : '');
          }
        }
      },
      'timeline': {
        'selectedElementStroke': '#000',
        'tooltip': {
          /**
           * @this {*}
           * @return {string}
           */
          'titleFormatter': function() {
            return this['name'] || '';
          },
          /**
           * @this {*}
           * @return {string}
           */
          'textFormatter': function() {
            var startDate = this['actualStart'] || this['autoStart'];
            var endDate = this['actualEnd'] || this['autoEnd'];
            var progress = this['progressValue'];

            if (progress === void 0) {
              var auto = this['autoProgress'] * 100;
              progress = (Math.round(auto * 100) / 100 || 0) + '%';
            }

            return (startDate ? 'Start Date: ' + window['anychart']['format']['dateTime'](startDate) : '') +
                (endDate ? '\nEnd Date: ' + window['anychart']['format']['dateTime'](endDate) : '') +
                (progress ? '\nComplete: ' + progress : '');

          }
        }
      }
    }
  },

  'stock': {
    'defaultPlotSettings': {
      'defaultSeriesSettings': {
        'base': {
          'pointWidth': '75%',
          'tooltip': {
            /**
             * @this {*}
             * @return {*}
             */
            'textFormatter': function() {
              var val = this['value'];
              if (val === undefined) val = this['close'];
              val = parseFloat(val).toFixed(4);
              return this['seriesName'] + ': ' + this['valuePrefix'] + val + this['valuePostfix'];
            }
          },
          'legendItem': {'iconStroke': 'none'}
        },
        'line': {
          'stroke': '1.5 #64b5f6'
        },
        'column': {
          'fill': '#64b5f6',
          'stroke': 'none'
        },
        'ohlc': {
          'risingStroke': '#1976d2',
          'fallingStroke': '#ef6c00'
        }
      },
      'defaultGridSettings': {
        'enabled': true,
        'isMinor': false,
        'layout': 'horizontal',
        'drawFirstLine': true,
        'drawLastLine': true,
        'oddFill': null,
        'evenFill': null,
        'stroke': '#cecece',
        'scale': 0,
        'zIndex': 11
      },
      'defaultMinorGridSettings': {
        'enabled': true,
        'isMinor': true,
        'layout': 'horizontal',
        'drawFirstLine': true,
        'drawLastLine': true,
        'oddFill': null,
        'evenFill': null,
        'stroke': '#eaeaea',
        'scale': 0,
        'zIndex': 10
      },
      'defaultYAxisSettings': {
        'enabled': true,
        'orientation': 'left',
        'title': {
          'enabled': false,
          'text': 'Y-Axis'
        },
        'staggerMode': false,
        'staggerLines': null,
        'ticks': {
          'enabled': true
        },
        'width': 50,
        'labels': {
          'fontSize': '11px',
          'padding': {
            'top': 0,
            'right': 5,
            'bottom': 0,
            'left': 5
          }
        },
        'minorLabels': {
          'fontSize': '11px',
          'padding': {
            'top': 0,
            'right': 5,
            'bottom': 0,
            'left': 5
          }
        },
        'scale': 0
      },
      'xAxis': {
        'enabled': true,
        'orientation': 'bottom',
        'background': {
          //'stroke': '#cecece'
          //fill: '#F7F7F7'
        },
        'height': 25,
        'scale': 0,
        'labels': {
          'enabled': true,
          'fontSize': '11px',
          'padding': {
            'top': 5,
            'right': 5,
            'bottom': 5,
            'left': 5
          },
          'anchor': 'centerTop',
          /**
           * @this {*}
           * @return {string}
           */
          'textFormatter': function() {
            var date = this['tickValue'];
            switch (this['majorIntervalUnit']) {
              case 'year':
                return window['anychart']['format']['dateTime'](date, 'yyyy');
              case 'semester':
              case 'quarter':
              case 'month':
                return window['anychart']['format']['dateTime'](date, 'yyyy MMM');
              case 'thirdOfMonth':
              case 'week':
              case 'day':
                return window['anychart']['format']['dateTime'](date, 'MMM dd');
              case 'hour':
                return window['anychart']['format']['dateTime'](date, 'MMM-dd HH');
              case 'minute':
                return window['anychart']['format']['dateTime'](date, 'dd HH:mm');
              case 'second':
                return window['anychart']['format']['dateTime'](date, 'HH:mm:ss');
              case 'millisecond':
                return window['anychart']['format']['dateTime'](date, 'HH:mm:ss.SSS');
            }
            return window['anychart']['format']['dateTime'](date, 'yyyy MMM dd');
          }
        },
        'minorLabels': {
          'enabled': true,
          'anchor': 'centerTop',
          'fontSize': '11px',
          'padding': {
            'top': 5,
            'right': 0,
            'bottom': 5,
            'left': 0
          },
          /**
           * @this {*}
           * @return {string}
           */
          'textFormatter': function() {
            var date = this['tickValue'];
            switch (this['majorIntervalUnit']) {
              case 'year':
                return window['anychart']['format']['dateTime'](date, 'yyyy');
              case 'semester':
              case 'quarter':
              case 'month':
                return window['anychart']['format']['dateTime'](date, 'MMM');
              case 'thirdOfMonth':
              case 'week':
              case 'day':
                return window['anychart']['format']['dateTime'](date, 'dd');
              case 'hour':
                return window['anychart']['format']['dateTime'](date, 'HH');
              case 'minute':
                return window['anychart']['format']['dateTime'](date, 'HH:mm');
              case 'second':
                return window['anychart']['format']['dateTime'](date, 'HH:mm:ss');
              case 'millisecond':
                return window['anychart']['format']['dateTime'](date, 'SSS');
            }
            return window['anychart']['format']['dateTime'](date, 'HH:mm:ss.SSS');
          }
        }
      },
      'dateTimeHighlighter': '#B9B9B9',
      'legend': {
        'enabled': true,
        'vAlign': 'bottom',
        'fontSize': 12,
        'itemsLayout': 'horizontal',
        'itemsSpacing': 15,
        'items': null,
        'iconSize': 13,
        'itemsFormatter': null, // effectively equals current settings
        'itemsTextFormatter': null,
        'itemsSourceMode': 'default',
        'inverted': false,
        'hoverCursor': 'pointer',
        'iconTextSpacing': 5,
        'width': null,
        'height': null,
        'position': 'top',
        /**
         * @this {*}
         * @return {*}
         */
        'titleFormatter': function() {
          var date = /** @type {number} */(this['value']);
          switch (this['groupingIntervalUnit']) {
            case 'year':
              return window['anychart']['format']['dateTime'](date, 'yyyy');
            case 'semester':
            case 'quarter':
            case 'month':
              return window['anychart']['format']['dateTime'](date, 'MMM yyyy');
            case 'thirdofmonth':
            case 'week':
            case 'day':
              return window['anychart']['format']['dateTime'](date, 'dd MMM yyyy');
            case 'hour':
            case 'minute':
              return window['anychart']['format']['dateTime'](date, 'HH:mm, dd MMM');
            case 'second':
              return window['anychart']['format']['dateTime'](date, 'HH:mm:ss');
            case 'millisecond':
              return window['anychart']['format']['dateTime'](date, 'HH:mm:ss.SSS');
          }
          return window['anychart']['format']['dateTime'](date, 'dd MMM yyyy');
        },
        'align': 'center',
        'margin': {
          'top': 0,
          'right': 0,
          'bottom': 0,
          'left': 0
        },
        'padding': {
          'top': 10,
          'right': 10,
          'bottom': 10,
          'left': 10
        },
        'background': {
          'enabled': false,
          'fill': '#fff',
          'stroke': 'none',
          'corners': 5
        },
        'title': {
          'enabled': true,
          'fontSize': 12,
          'text': '',
          'background': {
            'enabled': false,
            'fill': {
              'keys': [
                '#fff',
                '#f3f3f3',
                '#fff'
              ],
              'angle': '90'
            },
            'stroke': {
              'keys': [
                '#ddd',
                '#d0d0d0'
              ],
              'angle': '90'
            }
          },
          'margin': {
            'top': 0,
            'right': 15,
            'bottom': 0,
            'left': 0
          },
          'padding': {
            'top': 0,
            'right': 0,
            'bottom': 0,
            'left': 0
          },
          'orientation': 'left',
          'align': 'left',
          'hAlign': 'left',
          'rotation': 0
        },
        'titleSeparator': {
          'enabled': false,
          'width': '100%',
          'height': 1,
          'margin': {
            'top': 3,
            'right': 0,
            'bottom': 3,
            'left': 0
          },
          'orientation': 'top',
          'fill': ['#000 0', '#000', '#000 0'],
          'stroke': 'none'
        },
        'paginator': {
          'enabled': true,

          'fontSize': 12,
          'fontColor': '#545f69',

          'background': {
            'enabled': false,
            'fill': {
              'keys': [
                '#fff',
                '#f3f3f3',
                '#fff'
              ],
              'angle': '90'
            },
            'stroke': {
              'keys': [
                '#ddd',
                '#d0d0d0'
              ],
              'angle': '90'
            }
          },
          'padding': {
            'top': 0,
            'right': 0,
            'bottom': 0,
            'left': 0
          },
          'margin': {
            'top': 0,
            'right': 0,
            'bottom': 0,
            'left': 0
          },
          'orientation': 'right',
          'layout': 'horizontal',
          'zIndex': 30
        },
        'tooltip': {
          'enabled': false,
          'title': {
            'enabled': false,
            'margin': {
              'top': 3,
              'right': 3,
              'bottom': 0,
              'left': 3
            },
            'padding': {
              'top': 0,
              'right': 0,
              'bottom': 0,
              'left': 0
            }
          }
        },
        'zIndex': 20
      },
      'scales': [
        {
          'type': 'linear',
          'inverted': false,
          'maximum': null,
          'minimum': null,
          'minimumGap': 0.1,
          'maximumGap': 0.1,
          'softMinimum': null,
          'softMaximum': null,
          'ticks': {
            'mode': 'linear',
            'base': 0,
            'minCount': 4,
            'maxCount': 6
          },
          'minorTicks': {
            'mode': 'linear',
            'base': 0,
            'count': 5
          },
          'stackMode': 'none',
          'stickToZero': true
        }
      ],
      'yScale': 0,
      'zIndex': 10,
      'xAxes': [{}],
      'yAxes': [{}]
    },
    'padding': [20, 30, 20, 60],
    'plots': [{}],
    'scroller': {
      'defaultSeriesSettings': {
        'base': {
          'pointWidth': '75%'
        },
        'line': {
          'stroke': '#999 0.9',
          'selectedStroke': '1.5 #64b5f6'
        },
        'column': {
          'fill': '#64b5f6 0.6',
          'stroke': 'none',
          'selectedFill': '#64b5f6 0.9',
          'selectedStroke': 'none'
        },
        'ohlc': {
          'risingStroke': '#1976d2 0.6',
          'fallingStroke': '#ef6c00 0.6',
          'selectedRisingStroke': '#1976d2 0.9',
          'selectedFallingStroke': '#ef6c00 0.9'
        }
      },
      'enabled': true,
      'fill': '#fff',
      'selectedFill': '#1976d2 0.2',
      'outlineStroke': '#cecece',
      'height': 40,
      'minHeight': null,
      'maxHeight': null,
      'thumbs': {
        'enabled': true,
        'autoHide': false,
        'fill': '#f7f7f7',
        'stroke': '#7c868e',
        'hoverFill': '#ffffff',
        'hoverStroke': '#545f69'
      },
      'zIndex': 40,
      'xAxis': {
        'background': {
          'enabled': false
        },
        'minorTicks': {
          'enabled': true,
          'stroke': '#cecece'
        },
        'labels': {
          'enabled': true,
          'fontSize': '11px',
          'padding': {
            'top': 5,
            'right': 5,
            'bottom': 5,
            'left': 5
          },
          'anchor': 'leftTop',
          /**
           * @this {*}
           * @return {string}
           */
          'textFormatter': function() {
            var date = this['tickValue'];
            switch (this['majorIntervalUnit']) {
              case 'year':
                return window['anychart']['format']['dateTime'](date, 'yyyy');
              case 'semester':
              case 'quarter':
              case 'month':
                return window['anychart']['format']['dateTime'](date, 'yyyy MMM');
              case 'thirdOfMonth':
              case 'week':
              case 'day':
                return window['anychart']['format']['dateTime'](date, 'MMM dd');
              case 'hour':
                return window['anychart']['format']['dateTime'](date, 'MMM-dd HH');
              case 'minute':
                return window['anychart']['format']['dateTime'](date, 'dd HH:mm');
              case 'second':
                return window['anychart']['format']['dateTime'](date, 'HH:mm:ss');
              case 'millisecond':
                return window['anychart']['format']['dateTime'](date, 'HH:mm:ss.SSS');
            }
            return window['anychart']['format']['dateTime'](date, 'yyyy MMM dd');
          }
        },
        'minorLabels': {
          'enabled': true,
          'anchor': 'leftTop',
          'fontSize': '11px',
          'padding': {
            'top': 5,
            'right': 5,
            'bottom': 5,
            'left': 5
          },
          /**
           * @this {*}
           * @return {string}
           */
          'textFormatter': function() {
            var date = this['tickValue'];
            switch (this['majorIntervalUnit']) {
              case 'year':
                return window['anychart']['format']['dateTime'](date, 'yyyy');
              case 'semester':
              case 'quarter':
              case 'month':
                return window['anychart']['format']['dateTime'](date, 'MMM');
              case 'thirdOfMonth':
              case 'week':
              case 'day':
                return window['anychart']['format']['dateTime'](date, 'dd');
              case 'hour':
                return window['anychart']['format']['dateTime'](date, 'HH');
              case 'minute':
                return window['anychart']['format']['dateTime'](date, 'HH:mm');
              case 'second':
                return window['anychart']['format']['dateTime'](date, 'HH:mm:ss');
              case 'millisecond':
                return window['anychart']['format']['dateTime'](date, 'SSS');
            }
            return window['anychart']['format']['dateTime'](date, 'HH:mm:ss.SSS');
          }
        },
        'zIndex': 75
      }
    },
    'tooltip': {
      'allowLeaveScreen': false,
      'allowLeaveChart': true,
      'displayMode': 'union',
      'positionMode': 'float',
      'title': {
        'enabled': true,
        'fontSize': 13
      },
      'separator': {'enabled': true},
      /**
       * @this {*}
       * @return {*}
       */
      'titleFormatter': function() {
        var date = /** @type {number} */(this['hoveredDate']);
        switch (this['groupingIntervalUnit']) {
          case 'year':
            return window['anychart']['format']['dateTime'](date, 'yyyy');
          case 'semester':
          case 'quarter':
          case 'month':
            return window['anychart']['format']['dateTime'](date, 'MMM yyyy');
          case 'thirdofmonth':
          case 'week':
          case 'day':
            return window['anychart']['format']['dateTime'](date, 'dd MMM yyyy');
          case 'hour':
          case 'minute':
            return window['anychart']['format']['dateTime'](date, 'HH:mm, dd MMM');
          case 'second':
            return window['anychart']['format']['dateTime'](date, 'HH:mm:ss');
          case 'millisecond':
            return window['anychart']['format']['dateTime'](date, 'HH:mm:ss.SSS');
        }
        return window['anychart']['format']['dateTime'](date, 'dd MMM yyyy');
      },
      /**
       * @this {*}
       * @return {*}
       */
      'textFormatter': function() {
        return this['formattedValues'].join('\n');
      }
    }
  },

  // standalone components
  'standalones': {
    'background': {
      'enabled': true,
      'zIndex': 0
    }, // default
    'label': {
      'enabled': true,
      'fontSize': 11,
      'fontFamily': 'Tahoma',
      'fontWeight': 'bold',
      'textWrap': 'byLetter',
      'text': 'Label text',
      'background': {
        'enabled': false
      },
      'padding': {
        'top': 0,
        'right': 0,
        'bottom': 0,
        'left': 0
      },
      'width': null,
      'height': null,
      'anchor': 'leftTop',
      'position': 'leftTop',
      'offsetX': 0,
      'offsetY': 0,
      'minFontSize': 8,
      'maxFontSize': 72,
      'adjustFontSize': {
        'width': false,
        'height': false
      },
      'rotation': 0,
      'zIndex': 0
    },
    'labelsFactory': {
      'enabled': true,
      'background': {
        'enabled': false,
        'stroke': '#000'
      },
      'zIndex': 0
    },
    'legend': {
      'enabled': true,
      'position': 'bottom',
      'align': 'center',
      'itemsSpacing': 15,
      'iconTextSpacing': 5,
      'iconSize': 13,
      'width': null,
      'height': null,
      'itemsLayout': 'horizontal',
      'inverted': false,
      'items': null,
      'itemsSourceMode': 'default',
      'itemsFormatter': function(items) {
        return items;
      },
      'fontColor': '#232323',
      'background': {
        'enabled': true,
        'fill': {
          'keys': [
            '0 #fff 1',
            '0.5 #f3f3f3 1',
            '1 #fff 1'],
          'angle': '90'
        },
        'stroke': {
          'keys': [
            '0 #ddd 1',
            '1 #d0d0d0 1'
          ],
          'angle': '90'
        },
        'cornerType': 'round',
        'corners': 5
      },
      'title': {
        'enabled': true,
        'fontFamily': 'Verdana',
        'fontSize': 10,
        'fontColor': '#232323',
        'text': 'Legend Title',
        'background': {
          'enabled': false,
          'stroke': {
            'keys': [
              '0 #DDDDDD 1',
              '1 #D0D0D0 1'
            ],
            'angle': '90'
          },
          'fill': {
            'keys': [
              '0 #FFFFFF 1',
              '0.5 #F3F3F3 1',
              '1 #FFFFFF 1'
            ],
            'angle': '90'
          }
        },
        'padding': {
          'top': 0,
          'right': 0,
          'bottom': 0,
          'left': 0
        },
        'margin': {
          'top': 0,
          'right': 0,
          'bottom': 3,
          'left': 0
        }
      },
      'paginator': {
        'enabled': true,
        'fontColor': '#232323',
        'orientation': 'right',
        'margin': {
          'top': 0,
          'right': 0,
          'bottom': 0,
          'left': 0
        },
        'padding': {
          'top': 0,
          'right': 0,
          'bottom': 0,
          'left': 0
        },
        'background': {
          'enabled': false,
          'stroke': {
            'keys': [
              '0 #DDDDDD 1',
              '1 #D0D0D0 1'
            ],
            'angle': '90'
          },
          'fill': {
            'keys': [
              '0 #FFFFFF 1',
              '0.5 #F3F3F3 1',
              '1 #FFFFFF 1'
            ],
            'angle': '90'
          }
        },
        'zIndex': 30
      },
      'titleSeparator': {
        'enabled': true,
        'width': '100%',
        'height': 1,
        'margin': {
          'top': 3,
          'right': 0,
          'bottom': 3,
          'left': 0
        },
        'orientation': 'top',
        'fill': {
          'keys': [
            '0 #333333 0',
            '0.5 #333333 1',
            '1 #333333 0'
          ]
        },
        'stroke': 'none'
      },
      'padding': {
        'top': 7,
        'right': 7,
        'bottom': 7,
        'left': 7
      },
      'margin': {
        'top': 5,
        'right': 5,
        'bottom': 5,
        'left': 5
      },
      'zIndex': 0
    },
    'markersFactory': {
      'enabled': true,
      'zIndex': 0
    },
    'title': {
      'enabled': true,
      'zIndex': 0
    },
    // defaultAxis merges into all these axes
    'linearAxis': {
      'enabled': true,
      'zIndex': 0,
      'minorTicks': {
        'enabled': true
      }
    },
    'polarAxis': {
      'enabled': true,
      'stroke': {'color': 'black', 'opacity': .1, 'lineJoin': 'round', 'lineCap': 'square'},
      'zIndex': 0
    },
    'radarAxis': {
      'enabled': true,
      'stroke': {'color': 'black', 'opacity': .1, 'lineJoin': 'round', 'lineCap': 'square'},
      'zIndex': 0
    },
    'radialAxis': {
      'enabled': true,
      'minorLabels': {
        'padding': {
          'top': 1,
          'right': 1,
          'bottom': 0,
          'left': 1
        }
      }
    },
    'linearGrid': {
      'enabled': true,
      'isMinor': false,
      'layout': 'horizontal',
      'drawFirstLine': true,
      'drawLastLine': true,
      'oddFill': '#fff',
      'evenFill': '#f5f5f5',
      'stroke': '#c1c1c1',
      'scale': null
    },
    'polarGrid': {
      'enabled': true,
      'isMinor': false,
      'layout': 'circuit',
      'drawLastLine': true,
      'oddFill': '#fff 0.3',
      'evenFill': '#f5f5f5 0.3',
      'stroke': '#c1c1c1'
    },
    'radarGrid': {
      'enabled': true,
      'isMinor': false,
      'layout': 'circuit',
      'drawLastLine': true,
      'oddFill': '#fff 0.3',
      'evenFill': '#f5f5f5 0.3',
      'stroke': '#c1c1c1'
    },
    'lineAxisMarker': {
      'enabled': true,
      'value': 0,
      'layout': 'horizontal',
      'stroke': {
        'color': '#DC0A0A',
        'thickness': 1,
        'opacity': 1,
        'dash': '',
        'lineJoin': 'miter',
        'lineCap': 'square'
      }
    },
    'textAxisMarker': {
      'enabled': true,
      'fontSize': 11,
      'fontFamily': 'Tahoma',
      'fontWeight': 'bold',
      'value': 0,
      'anchor': 'center',
      'align': 'center',
      'layout': 'horizontal',
      //'rotation': undefined,
      'offsetX': 0,
      'offsetY': 0,
      'text': 'Text marker',
      'width': null,
      'height': null
    },
    'rangeAxisMarker': {
      'enabled': true,
      'from': 0,
      'to': 0,
      'layout': 'horizontal',
      'fill': '#000 0.3'
    },
    'dataGrid': {
      'isStandalone': true,
      'backgroundFill': '#fff',
      'zIndex': 0
    },
    'scroller': {
      'enabled': true,
      'fill': '#fff',
      'selectedFill': '#e2e2e2',
      'outlineStroke': '#fff',
      'height': 40,
      'minHeight': null,
      'maxHeight': null,
      'thumbs': {
        'enabled': true,
        'autoHide': false,
        'fill': '#f7f7f7',
        'stroke': '#545f69',
        'hoverFill': '#ccc',
        'hoverStroke': '#000'
      }
    }
  }
};
