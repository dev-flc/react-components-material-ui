import { emphasize } from '@material-ui/core/styles/colorManipulator';
import { FONTS_17, FONTS_15, FONTS_14, AVENIR, COLOR_RED, COLOR_BLUE } from '../variables-generales.js';

export let comboSearch = theme => ({
    input: {
        display: 'flex',
        padding: 0
    },
    valueContainer: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        width: '90%',
        overflow: 'hidden'
    },
    valueContainerMulti: {
        display: 'flex',
        flexWrap: 'wrap',
        flex: 1,
        alignItems: 'center',
        width: '90%'
    },
    label: {
        margin: `${theme.spacing.unit / 4}px ${theme.spacing.unit / 4}px`,
        overflow: 'hidden',
        textAlign: 'left',
        whiteSpace: 'nowrap',
        wordWrap: 'break-word',
        height: 'auto',
        fontSize: FONTS_17,
        color: COLOR_BLUE,
        fontFamily: AVENIR,
        paddingBottom: '5px',
        paddingTop: '5px',
    },
    chipFocused: {
        backgroundColor: emphasize(
            theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
            0.08,
        ),
        fontSize: FONTS_17,
        color: COLOR_BLUE,
        fontFamily: AVENIR,
    },
    noOptionsMessage: {
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
        fontSize: FONTS_15,
        color: COLOR_RED,
        fontFamily: AVENIR,
    },
    singleValue: {
        fontSize: FONTS_17,
        color: COLOR_BLUE,
        fontFamily: AVENIR,
        wordWrap: 'break-word',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: '98%',
        whiteSpace: 'nowrap',
    },
    tooltipStyle: {
        background : theme.palette.common.white,
        boxShadow  : theme.shadows[1],
        fontSize   : FONTS_14,
        color      : COLOR_BLUE,
        fontFamily : AVENIR,
    },
    placeholder: {
        position: 'absolute',
        left: 2,
        fontSize: FONTS_17,
        color: COLOR_BLUE,
        fontFamily: AVENIR,
    },
    divider: {
        height: theme.spacing.unit * 2,
    },
});

export let comboStyle = {
    invisible: {
        display: 'none',
    },
    visible: {
        display: 'inline',
    }
};

