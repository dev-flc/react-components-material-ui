import { orange500 } from 'material-ui/styles/colors';
import { FONTS_17, FONTS_15, FONTS_12, AVENIR, COLOR_BLACK_LIGHT, COLOR_RED, COLOR_ORANGE, COLOR_BLUE } from '../variables-generales.js';

export let comboPackegeCustomized = {
    underlineStyle: {
        top: 28,
        borderColor: orange500,
    },
    content : {
       // background: 'black',
        height : 28
    },

    underlineStyleError: {
        borderColor: '#f44336',
            top: 28
    },
    underlineDisabledStyleError: {
        borderColor: '#f44336',
            top: 28

    },
    underlineDisabledStyle: {
            top: 28,
        borderColor: 'transparent',
    },
    invisible: {
        display: 'none',
    },
    visible: {
        display: 'inline',
    },
    styleGeneric: {
        color: COLOR_BLUE,
        fontFamily: AVENIR,
        fontSize: FONTS_15,
        paddingRight:0,
        lineHeight: 'inherit',
        top:2,
        height: 20
    },
    styleComboDescription: {
        fontFamily: AVENIR,
        fontSize: FONTS_12,
        color: COLOR_BLUE,
        whiteSpace: 'normal',
        lineHeight: '15px',
        padding: '10px 0px',
    },
    title: {
        color: COLOR_BLACK_LIGHT,
        fontFamily: AVENIR,
        fontSize: FONTS_17
    },
    textHint: {
        fontFamily: AVENIR,
        fontSize: FONTS_12,
    },
    styleIcon: {
        fill: COLOR_ORANGE,
        right: -13,
    top: -15
    },
     colorItemMenu : {
        color: COLOR_ORANGE
     },
    underlineDisabled: {
            top: 28,

        border: '1px solid #cecece'
    }
};
