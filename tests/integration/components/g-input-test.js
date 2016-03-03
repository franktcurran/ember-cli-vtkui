import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('g-input', 'Integration | Component | g input', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{g-input value="my text"}}`);
  assert.equal(this.$('input').val().trim(), 'my text');
});
