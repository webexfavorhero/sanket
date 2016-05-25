import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('checkout/guest-info', 'Integration | Component | checkout/guest info', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{checkout/guest-info}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#checkout/guest-info}}
      template block text
    {{/checkout/guest-info}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
