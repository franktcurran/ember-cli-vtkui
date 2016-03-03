import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('g-selectize', 'Integration | Component | g selectize', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"
  this.render(hbs`{{g-selectize}}`);
  assert.equal(this.$().text().trim(), '');
});
