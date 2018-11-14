import { FONTS_17, COLOR_BLUE, AVENIR, ORANGE, COLOR_ORANGE_LIGHT} from '../variables-generales.js';

export let textBoxCoin = {
    inputText : {
        color    : COLOR_BLUE,
        fontSize : FONTS_17,
        fontFamily: AVENIR,
        zIndex: 99
    },
    invisible: {
        display: 'none',
    },
    visible: {
        display: 'inline',
    },
    fer : {
        color: 'pink'
    },
    root: {
        '&input':{
            color:'red'
        },
        '&:hover:before' : {
            borderBottom: '0 !important',
        },
    },
    underlineStyle : {
        width : '100%'
    },
    underline : {
        '&:before' : {
            borderBottom: 0,
        },

         '&:after': {
            bottom: -1,
            borderBottom: `2px solid${COLOR_ORANGE_LIGHT}`
        },
    },
    rootIcon :{

    },
    positionEnd : {
        position: 'absolute',
        left : '91%',
        zIndex: 1,
        cursor: 'pointer'
    }
};
