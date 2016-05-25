import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('checkout/common/mask-input', 'Integration | Component | checkout/common/mask input', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{checkout/common/mask-input}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#checkout/common/mask-input}}
      template block text
    {{/checkout/common/mask-input}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});