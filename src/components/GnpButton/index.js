import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
/* newButton */
import LinearProgress from '@material-ui/core/LinearProgress';

import { newButton as styles } from './../styles/index.js'

class GnpButton extends Component {

    shouldComponentUpdate(nextP, nextState) {
        const { disabled,  next, title, rightIcon, loading } = this.props;
        if (
            nextP.disabled !== disabled
            || nextP.title !== title
            || nextP.next !== next
            || nextP.loading !== loading
            || nextP.rightIcon !== rightIcon ) {
                return true;
        }

        return false;
    }

    render (){

        const { classes, disabled, onClickButton, icon, next, title, rightIcon, loading, id } = this.props;

        return (
            <div className = { classes.containerButton } >

                <Button
                    id = {id}
                    variant   = "contained"
                    disabled  = { disabled }
                    className = { next ? classes.cssRootNext : classes.cssRoot }
                    onClick   = { () => onClickButton() }
                >
                    { rightIcon  ?
                        <div className = { classes.rightIcon }>
                            { icon } { title }
                        </div>
                        :
                        <div className = { classes.leftIcon }>
                                { title } { icon }
                        </div>
                    }

                </Button>

                { loading &&
                    <LinearProgress
                        classes = { {
                            colorPrimary    : classes.colorPrimary,
                            barColorPrimary : classes.barColorPrimary,
                            root            : classes.root
                        } }
                    />
                }

            </div>
        );
    }
}

GnpButton.propTypes = {
    classes : PropTypes.object.isRequired,
};

GnpButton.defaultProps = {
    next     : false,
    title    : "Title",
    icon     : "",
    loading  : false,
    disabled : false
}

export default withStyles( styles )( GnpButton );
