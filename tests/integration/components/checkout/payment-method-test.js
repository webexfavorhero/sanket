import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('checkout/payment-method', 'Integration | Component | checkout/payment method', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{checkout/payment-method}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#checkout/payment-method}}
      template block text
    {{/checkout/payment-method}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
