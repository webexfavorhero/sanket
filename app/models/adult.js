import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';
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
	}
});

export default Model.extend(Validations, {
	room: belongsTo('room'),
	firstName: attr('string'),
	lastName: attr('string'),
	birthDate: attr('string'),
	sex: attr('string')
});
