import { AVENIR, COLOR_BLUE, FONTS_17,COLOR_RED, COLOR_GRAY_WHITE  } from '../variables-generales.js';

export let checkBoxGenerate = {
    fillIcon: {
        fill: COLOR_GRAY_WHITE,
    },
    label : {
        fontFamily: AVENIR,
        fontWeight: 'normal',
        color:COLOR_GRAY_WHITE,
        fontSize : FONTS_17,

    },

    labelDos : {
        fontFamily: AVENIR,
        fontWeight: 'normal',
        color:COLOR_BLUE,
        fontSize : FONTS_17,
        '&:hover fillIcon'  : {
            color:'red  ',

        }
    },
    colorIcon:{
        fill: COLOR_BLUE,
    },


};
