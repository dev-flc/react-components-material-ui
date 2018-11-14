import { FONTS_17, COLOR_BLUE, AVENIR} from '../variables-generales.js';

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
    }
};
