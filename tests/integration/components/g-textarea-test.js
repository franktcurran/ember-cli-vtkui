import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('g-textarea', 'Integration | Component | g textarea', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"
  this.render(hbs`{{g-textarea label="ta" value="my text"}}`);
  assert.equal(this.$('textarea').val().trim(), 'my text');
});
