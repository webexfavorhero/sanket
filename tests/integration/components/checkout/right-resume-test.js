import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('checkout/right-resume', 'Integration | Component | checkout/right resume', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{checkout/right-resume}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#checkout/right-resume}}
      template block text
    {{/checkout/right-resume}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
