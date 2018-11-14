import { COLOR_BORDER_GRAY, COLOR_ORANGE } from '../variables-generales.js';

export let switchStyles = theme => ({
    colorSwitchBase : {
        color : COLOR_BORDER_GRAY,
        '&$colorChecked' : {
            color           : COLOR_ORANGE,
            '& + $colorBar' : {
                backgroundColor : COLOR_ORANGE,
            },
        },
    },
    colorChecked : {},
    colorBar : {
        backgroundColor: COLOR_BORDER_GRAY,
    },
    label : {
        '&$label' : {
            position: 'relative',
            left: '-15px'
        }
    }
  });



