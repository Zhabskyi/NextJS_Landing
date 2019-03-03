import React, { Component } from 'react';

import Button from '../../button/button';
import classes from './signUp.scss';
import Input from '../input/input';

export class SignUp extends Component {
	state = {
		orderForm: {
			email: {
				elementType: 'input',
				elementConfig: {
					type: 'e-mail',
					placeholder: 'Your E-Mail'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			password: {
				elementType: 'input',
				elementConfig: {
					type: 'password',
					placeholder: 'Your password'
				},
				value: '',
				validation: {
					required: true,
					minLength: 6
				},
				valid: false,
				touched: false
			},
			name: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Your Name'
				},
				value: '',
				validation: {
					required: true,
					minLength: 3
				},
				valid: false,
				touched: false
			}
		},
		formIsValid: false
	}

	
	checkValidity(value, rules) {
		let isValid = true;
		if (!rules) {    // this is second approach for valid drop down selectors 
			return true;
		}

		if (rules.required) {
			isValid = value.trim() !== '' && isValid;
		}

		if (rules.minLength) {
			isValid = value.length >= rules.minLength && isValid
		}
		if (rules.maxLength) {
			isValid = value.length <= rules.maxLength && isValid
		}

		return isValid;
	}

	inputChangedHandler = (e, inputIdentifier) => {
		const updatedOrderForm = {
			...this.state.orderForm
		};
		const updatedFormElement = { 
			...updatedOrderForm[inputIdentifier]
		};
		updatedFormElement.value = e.target.value;
		updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
		updatedFormElement.touched = true;
		updatedOrderForm[inputIdentifier] = updatedFormElement;

		let formIsValid = true;
		for (let inputIdentifier in updatedOrderForm) {
			formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid
		}

		this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
	}

	render() {

		const formElementsArray = [];
		for (let key in this.state.orderForm) {
			formElementsArray.push({
				id: key,
				config: this.state.orderForm[key]
			});
		}

		let form = (
			<form>
				{formElementsArray.map(formElement => (
					<Input 
						key = {formElement.id}
						elementType={formElement.config.elementType}
						elementConfig={formElement.config.elementConfig}
						value={formElement.config.value}
						inValid={!formElement.config.valid}
						shouldValidate={formElement.config.validation}
						touched={formElement.config.touched}
						changed={(e) => this.inputChangedHandler(e, formElement.id)}/>
				))}
				<Button 
					btnType="success" 
					disabled={!this.state.formIsValid}
					title='SUBMIT'>
				</Button>
			</form>
		);
		return (
			<div className={classes.signUP}> 
				<h4>Enter your information</h4>
				{form}
			</div>
		)
	}
}

export default SignUp;
