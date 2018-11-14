import {
    COLOR_ORANGE,
    COLOR_WHITE,
    COLOR_GREEN_LOADER,
    COLOR_BUTTON_GRAY
} from '../variables-generales.js';

export let newButton = theme => ({

    cssRoot : {
        textTransform   : "capitalize",
        color           : COLOR_WHITE,
        backgroundColor : COLOR_ORANGE,
        borderRadius    : 2,
        height          : 60,
        width           : 200,
        margin          : 4,
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
        marginRight : theme.spacing.unit,
    },

    rightIcon : {
        marginLeft : theme.spacing.unit,
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
        margin : 16
    },

    cssRootNext : {
        color           : '#172434',
        textTransform   : "capitalize",
        backgroundColor : COLOR_BUTTON_GRAY,
        borderRadius    : 2,
        height          : 60,
        width           : 200,
        margin          : 4,
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
