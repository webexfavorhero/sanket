import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
	orderId: attr('string'),
	rooms: hasMany('room'),
	startDate: attr('string'),
	endDate: attr('string'),
	amount: attr('string'),
	taxFee: attr('string'),
	totalAmount: attr('string'),
	period: attr('number'),
	accommodation: attr('string'),
	food: attr('string')
});