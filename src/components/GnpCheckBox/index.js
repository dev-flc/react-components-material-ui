import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const styles = {
    root : {
        position    : 'absolute',
        color       : "#ff570a",
        '&$checked' : {
            color : "#ff570a",
            //height : 0
            position: 'absolute'
        },
    },
    checked: { },
    label : {
        color       : '#004681',
        position    : 'relative',
        left        : 39,
        fontFamily  : "Avenir-Book",
        fontSize    : 15,
        top         : 2
    },
    container : {
    },
};

class GnpCheckBox extends React.Component {
    state = {
        checkedG : true,
    };

    handleChange = name => event => {
        this.setState( { [ name ] : event.target.checked } );
    };

    render() {

        const { classes, label } = this.props;

        return (
            <div className = { classes.container }>
                <FormControlLabel
                    control = {
                        <Checkbox
                            checked     = { this.state.checkedG }
                            onChange    = { this.handleChange( 'checkedG' ) }
                            value       = "checkedG"
                            disabled    = { false }
                            icon        = { <CheckBoxOutlineBlankIcon/>  }
                            checkedIcon = { <CheckBoxIcon/> }
                            classes     = { {
                                root    : classes.root,
                                checked : classes.checked,
                            } }
                        />
                    }
                    label   = { label }
                    classes = { {
                        label : classes.label
                    }}
                />
            </div>
        );
    }
}

GnpCheckBox.propTypes = {
    classes : PropTypes.object.isRequired,
};


GnpCheckBox.defaultProps = {
    label : "",
}


export default withStyles( styles )( GnpCheckBox );
