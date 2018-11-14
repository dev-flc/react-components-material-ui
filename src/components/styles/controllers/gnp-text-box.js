import { orange500 } from 'material-ui/styles/colors';
import {
    FONTS_17,
    COLOR_RED,
    COLOR_ORANGE_LIGHT,
    COLOR_BORDER_GRAY,
    COLOR_GRAY_WHITE,
    COLOR_BLUE,
    COLOR_BLACK_LIGHT,
    COLOR_DISABLE,
    AVENNIR,
    COLOR_GREEN_LOADER
} from '../variables-generales.js';

export let textBox = {
    underlineStyle : {
        borderColor : COLOR_ORANGE_LIGHT,
        bottom: '4px'
    },
    underlineStyleError : {
        borderColor : COLOR_RED,
        bottom: '4px'
    },
    underlineDisabledStyleError : {
        borderColor : COLOR_RED,
        bottom: '4px'
    },
    underlineDisabledStyle : {
        borderColor : COLOR_GRAY_WHITE,
        bottom: '4px'
    },
    floatingLabelFocusStyle : {
        color : orange500,
    },
    floatingLabelStyle : {
        color : COLOR_ORANGE_LIGHT,
    },
    inputText : {
        color    : COLOR_BLUE,
        fontSize : FONTS_17,
    },
    inputTextCapitalize : {
        color    : COLOR_BLUE,
        fontSize : FONTS_17,
        textTransform :'capitalize',
    },
    inputTextHeight : {
        height : '40px'
    },
    invisible : {
        display : 'none',
    },
    visible : {
        display : 'inline',
    },
    title: {
        color: COLOR_BLACK_LIGHT,
        fontFamily: AVENNIR,
        fontSize: FONTS_17
    },
    underlineDisabled: {
        border: '.5px solid',
        borderColor: COLOR_DISABLE
    },

    root : {
        flexGrow : 1,
        top      : -6,
        height   : 2
    },

    colorPrimary : {
        backgroundColor : COLOR_BORDER_GRAY,
    },

    barColorPrimary : {
        backgroundColor: COLOR_GREEN_LOADER,
    },
};
