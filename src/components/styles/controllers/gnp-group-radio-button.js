import { FONTS_17,  FONTS_15, AVENIR, COLOR_BLACK_LIGHT, COLOR_RED, COLOR_BLUE, COLOR_DISABLE  } from '../variables-generales.js';

export let groupRadioButton = {
    invisible:{
       display: 'none'
    },
       visible:{
       display: 'inline'
    },
       space:{
       paddingBottom : "12px"
    },
       buttonLine:{
       display: '-webkit-inline-box',
       width  : '60px',
       height : '16px'
    },
    title: {
        color: COLOR_BLACK_LIGHT,
        fontFamily : AVENIR,
        fontSize : FONTS_17
    },
    asteriskRed:{
        color : COLOR_RED
    },
    styleRadioButton: {
        fontFamily: AVENIR,
        fontSize: FONTS_15,
        color: COLOR_BLUE
    },
    containerIcon : {
        marginRight : '5px'
    },
    fillIcon : {
        fill : COLOR_DISABLE
    }
};
