import { COLOR_BLUE, COLOR_GRAY_WHITE } from '../variables-generales.js';


export let chipEmail = ({
    chip : {
        color : COLOR_BLUE,
        border: '1px solid',
        borderColor: COLOR_GRAY_WHITE,
        backgroundColor: "white !important",

    },
    underline : {
        '&:before' : {
            height :'0 !important'

        },

    },

});
