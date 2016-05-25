import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
	firstName: {
		debounce: 500,
		validator: [
			validator('presence', true),
			validator('length', {
				min: 2,
				max: 16
			})
		]
	},
	lastName: {
		debounce: 500,
		validators: [
			validator('presence', true),
			validator('length', {
				min: 2,
				max: 15
			})
		]
	},
	email: {
		debounce: 500,
		validators: [
			validator('presence', true),
			validator('format', {
				type: 'email'
			})
		]
	},
	emailConfirmation: validator('confirmation', {
		on: 'email',
		message: 'Email address do not match',
		debounce: 500
	})
});

export default Ember.Component.extend(Validations, {
});