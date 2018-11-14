import {
    COLOR_ORANGE,
    COLOR_BLUE,
    FONTS_14,
    AVENIR
} from '../variables-generales.js';

export let rightButton = theme => ({
    containerButton : {
      margin   : 0,
      position : 'fixed',
      bottom   : 34,
      right    : '2%',
      zIndex   : 90,
    },
    button : {
        zIndex : 10000,
        backgroundColor: COLOR_ORANGE,
        '&:hover' : {
            opacity : 0.93,
            backgroundColor: COLOR_ORANGE,
        },
        '&:active' : {
            outline : 'none'
        },
        '&:focus' : {
            outline : 'none'
        },
    },

    extendedIcon : {
      marginRight : theme.spacing.unit,
    },

    tooltipStyle: {
        background : theme.palette.common.white,
        color      : theme.palette.text.primary,
        boxShadow  : theme.shadows[1],
        fontSize   : FONTS_14,
        color      : COLOR_BLUE,
        fontFamily : AVENIR,
        marginBottom     : '5px'
    }
  });
