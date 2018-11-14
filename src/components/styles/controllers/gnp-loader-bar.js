import {
    COLOR_GREEN_LOADER,

} from '../variables-generales.js';

export let loaderBar = theme => ({

    root : {
        position : 'relative',
        height   : 2,
        overflow : 'hidden'
    },

    colorPrimary : {
        backgroundColor : 'transparent',
    },

    barColorPrimary : {
        backgroundColor : COLOR_GREEN_LOADER,
    }

});
