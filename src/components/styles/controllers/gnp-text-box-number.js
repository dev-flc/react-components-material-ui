import { orange500, black } from 'material-ui/styles/colors';
import { FONTS_17, FONTS_15, FONTS_12, AVENIR, COLOR_BLACK_LIGHT, COLOR_RED, COLOR_BLUE } from '../variables-generales.js';

export let textBoxNumber = {
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
    floatingLabelFocusStyle: {
        color: black,
    },
    floatingLabelStyle: {
        color: orange500,
    },
    inputText: {
        color: COLOR_BLUE,
        fontSize: FONTS_15,
    },
    inputTextHeight: {
        height: '40px',
        text: AVENIR,
        fontSize: FONTS_15
    },
    invisible: {
        display: 'none',
    },
    visible: {
        display: 'inline',
    },
    title: {
        color: COLOR_BLACK_LIGHT,
        fontFamily: AVENIR,
        fontSize: FONTS_17
    },
    underlineDisabled: {
        border: '1px solid #cecece'
    }
};
