import { FONTS_14, AVENIR, COLOR_BLUE } from '../variables-generales.js';

export let label = theme => ({
    tooltipStyle: {
        background : theme.palette.common.white,
        color      : theme.palette.text.primary,
        boxShadow  : theme.shadows[1],
        fontSize   : FONTS_14,
        color      : COLOR_BLUE,
        fontFamily : AVENIR,
        margin     : '0px'
    }
});

