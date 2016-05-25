import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('checkout', {path:'/'}, function() {
    this.route('checkout', {path: '/checkout/product/package/order/:orderId'});
  });
});

export default Router;
