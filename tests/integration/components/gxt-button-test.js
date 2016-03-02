import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('gxt-combo', 'Integration | Component | gxt combo', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{gxt-combo}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#gxt-combo}}
      template block text
    {{/gxt-combo}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
