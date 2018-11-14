import {
    COLOR_ORANGE,
    COLOR_WHITE,
    COLOR_GREEN_LOADER,
    COLOR_BUTTON_GRAY
} from '../variables-generales.js';

export let newButtonIcon = theme => ({

    cssRoot : {
        textTransform   : "none",
        color           : COLOR_WHITE,
        backgroundColor : COLOR_ORANGE,
        borderRadius    : 2,
        height          : 45,
        width           : 'auto',

        '&:hover' : {
            backgroundColor : COLOR_ORANGE,
            opacity         : 0.93
        },
        '&:active' : {
            border  : 'none',
            outline : 'none'
        },
        '&:focus' : {
            boxShadow : 'none',
            outline   : 'none'
        },

    },

    leftIcon : {
        marginRight : 0,
    },

    rightIcon : {
        marginLeft : 0,
    },

    root : {
        flexGrow : 1,
        top      : -7,
        height   : 3,
        width    : "96%",
        left     : 4
    },

    colorPrimary : {
        backgroundColor : 'transparent',
    },

    barColorPrimary : {
        backgroundColor : COLOR_GREEN_LOADER,
    },

    containerButton : {
        margin : 0
    },

    cssRootNext : {
        color           : '#172434',
        textTransform   : "none",
        backgroundColor : COLOR_BUTTON_GRAY,
        borderRadius    : 2,
        height          : 45,
        width           : 'auto',

        '&:hover' : {
            backgroundColor : COLOR_BUTTON_GRAY,
            opacity         : 0.93
        },
        '&:active' : {
           /*  border: 'none', */
            backgroundColor : COLOR_BUTTON_GRAY,
            outline: 'none'
        },
        '&:focus' : {
           /*  boxShadow    : 'none', */
            backgroundColor : COLOR_BUTTON_GRAY,
            outline         : 'none'
        },
    },

});
