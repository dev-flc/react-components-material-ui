import React, { Component } from 'react';

import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import { phoneMaskStyle as styles } from './../styles/index.js'

import { withStyles } from '@material-ui/core/styles';

const esNulo = (elemento) => {
    if (elemento !== null && elemento !== undefined && elemento !== "undefined") {
        return false;
    }
    else {
        return true;
    }
};

const moveNextControl = (nextControlId) => {

    if (!esNulo(nextControlId)) {
        let typeControl = nextControlId.substring(0, 2);
        let elemento = null;
        if (typeControl.indexOf('t_') !== -1) {
            elemento = document.getElementById(nextControlId.substring(2, nextControlId.length));
        }
        else if (typeControl.indexOf('b_') !== -1) {
            let subElemento = document.getElementById(nextControlId.substring(2, nextControlId.length));
            if (!esNulo(subElemento)) {
                elemento = subElemento;
            }
        }
        else if (typeControl.indexOf('c_') !== -1) {
            let subElemento = document.getElementById(nextControlId.substring(2, nextControlId.length));
            if (!esNulo(subElemento)) {
                elemento = subElemento.getElementsByTagName("Input")[0];
            }
        }
        if (typeControl.indexOf('r_') !== -1) {
            elemento = document.getElementById(nextControlId.substring(2, nextControlId.length));
        }
        if (!esNulo(elemento) && typeControl.indexOf('r_') == -1 ) {
            elemento.focus();
        }
        else{
            elemento.focus();
        }
    }
};

class GnpTextFieldCoin extends Component {

    shouldComponentUpdate( nextP, nextState ) {

        const { value, textError, min, max } = this.props;

        if ( nextP.textError !== textError
            || nextP.value !== value
            || nextP.min !== min
            || nextP.max !== max
        ) {
                return true;
        }
        return false;

    }

    /* ALAN: quitar el this de las props. */
    render(){
        let { value, min, max , classes, centerText} = this.props;

        let inputProps =  {min, max,}
        if(centerText){
            inputProps = { min, max, className : classes.inputType  }
        }

        return (
            <div>
                <div>
                    <span className="gnp-text-box-font-14">{this.props.title}</span>&nbsp;<span style={this.props.required ? styles.visible : styles.invisible} className="asterisco-red">*</span>
                </div>

                <Input
                    type ='number'
                    name = {this.props.controlName}
                    className={ this.props.textError ? "phoneMask-line-color-error" : "phoneMask-line-color"}
                    style={styles.inputText}
                    id={this.props.id}
                    value={ value }
                    onChange={ (event) => { this.props.handleChange(event, this.props.propertyNameError, this.props.value, this.props.type, this.props.title, this.props.controlName, this.props.id) } }
                    endAdornment={<InputAdornment position="end">{this.props.icon}</InputAdornment>}
                    inputProps={inputProps}
                    disabled={this.props.disabled}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            if (!esNulo(this.props.nextControlTab)) {
                                moveNextControl(this.props.nextControlTab);
                            }

                            if (!esNulo(this.props.executeFunctionOnEnter)) {
                                this.props.executeFunctionOnEnter();
                            }
                        }
                    }
                    }
                    onBlur={(event) => {
                        this.props.onBlurPressPage(event, this.props.propertyNameError, this.props.value, this.props.type, this.props.title, this.props.controlName);
                    }
                    }
                    onKeyDown={(e) => {
                        //console.log(e.key, e.keyCode);
                        // Allow: Supr, delete, tab, escape, enter
                        if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
                            // Allow: Ctrl/cmd+A
                            (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
                            // Allow: Ctrl/cmd+C
                            (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
                            // Allow: Ctrl/cmd+X
                            (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
                            // Allow: home, end, left, right
                            (e.keyCode >= 35 && e.keyCode <= 39)) {
                            // let it happen, don't do anything
                            //console.log('returning....');
                            return;
                        }
                        // Ensure that it is a number and stop the keypress
                        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                        // console.log('cancelar el evento...');
                            e.preventDefault();
                        }
                    }
                    }
                />
                <br />
                {
                    esNulo(this.props.textError) ? null : (this.props.textError.trim() !== '' ? <div className="texbox-error-label padding-error-label">{this.props.textError}</div> : null)
                }
            </div>
        );
    }

}


GnpTextFieldCoin.defaultProps = {
    min        :  0,
    max        : 10,
    centerText : false
}

export default withStyles(styles)(GnpTextFieldCoin);

