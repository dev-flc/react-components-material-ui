import { black } from 'material-ui/styles/colors';
import { FONTS_17, FONTS_8, AVENIR, COLOR_RED, COLOR_ORANGE, COLOR_GRAY_WHITE, COLOR_BLUE} from '../variables-generales.js';

export let textBoxPassword = {
    underlineStyle: {
        borderColor: COLOR_ORANGE,
    },
    underlineStyleError: {
        borderColor: COLOR_RED,
    },
    underlineDisabledStyleError: {
        borderColor: COLOR_RED,
    },
    underlineDisabledStyle: {
        borderColor: COLOR_GRAY_WHITE,
    },
    floatingLabelFocusStyle: {
        color: black,
    },
    floatingLabelStyle: {
        color: COLOR_ORANGE,
    },
    inputText: {
        color: COLOR_BLUE,
        fontSize: FONTS_17,
    },
    inputTextHeight: {
        height: '40px',
    },
    invisible: {
        display: 'none',
    },
    visible: {
        display: 'inline',
    }
};
