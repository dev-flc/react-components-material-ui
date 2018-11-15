import { FONTS_17, COLOR_BLUE, AVENIR, COLOR_TITLE, COLOR_RED , COLOR_ORANGE_LIGHT, COLOR_GRAY_WHITE } from '../variables-generales.js';

export let phoneMaskStyle = {
    inputText : {
        color    : COLOR_BLUE,
        fontSize : FONTS_17,
        fontFamily: AVENIR,
        width: '100%',
    },
    invisible: {
        display: 'none',
    },
    visible: {
        display: 'inline',
    },
    cssUnderline: {
        '&:after': {
          borderBottomColor: 'red',
        },
      },
    inputType : {
        textAlign: 'center'
    },
    textBoxFont : {
        fontFamily : AVENIR,
        fontSize  : 14,
        color      : COLOR_TITLE,
    },

    asteriscoRed : {
        color      : COLOR_RED,

    },
    phoneMaskLineColorError : {
        '&:after' : {
            borderBottom : `2px solid ${COLOR_RED}`
        },
         '&:before' : {
            borderBottom : `1px solid ${COLOR_RED}`

        },
         '&:hover:before' : {
            borderBottom : `1px solid ${COLOR_RED} !important`
        },
    },

    phoneMaskLineColor : {
        '&:after' : {
            borderBottom: `2px solid ${COLOR_ORANGE_LIGHT} !important`
        },
        '&:before' : {
            borderBottom: `1px solid ${COLOR_GRAY_WHITE} !important`
        },
        '&:hover:before' : {
            borderBottom: `1px solid ${COLOR_GRAY_WHITE} !important`
        },

    }

};


/*

.phoneMask-line-color:after{
    border-bottom: 2px solid $color-orange-light !important;
}

.phoneMask-line-color:before {
    border-bottom: 1px solid $color-gray-light  !important;
}

.phoneMask-line-color-error:after{
    border-bottom: 2px solid $color-red !important;
}

.phoneMask-line-color-error:before {
    border-bottom: 1px solid $color-red !important;
}

*/
