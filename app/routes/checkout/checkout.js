import Ember from 'ember';

// const {
// 	assign,
// 	get,
// 	RSVP,
// 	getWithDefault
// } = Ember;

export default Ember.Route.extend({

	// queryParams: {
	// 	quartos: {
	// 		refreshModel: true,
	// 		as: 'quartos'
	// 	},
	// 	adultos: {
	// 		refreshMOdel: true
	// 	}
	// 	criancas: {
	// 		refreshModel: true
	// 	}
	// },
	model(params) {
		// let orderId = get(params, 'orderId');
		// let parentModel = this.modelFor('orders');
		return this.store.find('order', params.orderId);
	}
});
