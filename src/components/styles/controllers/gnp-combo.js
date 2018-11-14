import { orange500 } from 'material-ui/styles/colors';
import { FONTS_17, FONTS_15, FONTS_12, AVENIR, COLOR_BLACK_LIGHT, COLOR_RED, COLOR_ORANGE, COLOR_BLUE } from '../variables-generales.js';

export let combo = {
    underlineStyle: {
        borderColor: orange500,
    },
    underlineStyleError: {
        borderColor: '#f44336',
    },
    underlineDisabledStyleError: {
        borderColor: '#f44336',
    },
    underlineDisabledStyle: {
        borderColor: '#e0e0e0',
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
        fill: COLOR_ORANGE
    },
     colorItemMenu : {
        color: COLOR_ORANGE
     },
    underlineDisabled: {
        border: '1px solid #cecece'
    }
};
