import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('checkout/travel-voucher-cvc', 'Integration | Component | checkout/travel voucher cvc', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{checkout/travel-voucher-cvc}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#checkout/travel-voucher-cvc}}
      template block text
    {{/checkout/travel-voucher-cvc}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
