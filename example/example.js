import React, { Component } from 'react';

import  { GnpButton, GnpCheckBox, GnpTextFieldCoin }  from './../dist/index.js'

class Example extends Component {

    componentWillMount() {

    }

    handleChangeNumberFormat = ( event, propertyNameError, value, type, title, controlName, id ) => {

    }

    handlerChangeFocus = ( event, propertyNameError, value, type, title ) => {

    }

    render () {
        return(
        	<div>
                <h1> Example Validations</h1>
                <GnpButton />
                <GnpCheckBox
                        label = "example"
                    />

                 <GnpTextFieldCoin
                    id           = "coin"
                    type         = { "C" }
                    controlName  = { "NAME" }
                    title        = { "title" }
                    required     = { true }
                    value        = { 1 }
                    icon         = '%'
                    min          = { 1 }
                    max          = { 10 }
                    handleChange = { ( event, propertyNameError, value, type, title, controlName, id ) => this.handleChangeNumberFormat( event, propertyNameError, value, type, title, controlName, id ) }
                    textError    = { "errorCajones" }
                    propertyNameError = { "error" }
                    nextControlTab    = "r_rb-acomodadores"
                    onBlurPressPage   = { ( event, propertyNameError, value, type, title ) => this.handlerChangeFocus( event, propertyNameError, value, type, title ) }
                    // executeFunctionOnEnter={() => this.setState({ acomodadoresIndex: true })}
                />
        	</div>
        );
    }
}

export default Example;