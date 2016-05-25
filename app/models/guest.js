import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
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

export default Model.extend(Validations, {
	adults: hasMany('adult'),
	childs: hasMany('child'),
	babies: hasMany('baby'),
	email: attr('string'),
	alternativeVoucherCVC: attr('number'),
	paymentMethod: attr('string'),
	cardNumber: attr('string'),
	expirationDate: attr('string'),
	scurityCode: attr('number'),
	printName: attr('string'),
	plots: attr('number'),
	payBirthDate: attr('string'),
	paySex: attr('string'),
	payCpf: attr('string'),
	payPhone: attr('string'),
	payZipCode: attr('string'),
	streetName: attr('string'),
	streetNumber: attr('number'),
	streetComplement: attr('string'),
	state: attr('string'),
	city: attr('string'),
	neighborhood: attr('string')
});
