import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('g-button', 'Integration | Component | g button', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{g-button text="My Button"}}`);
  assert.equal(this.$().text().trim(), 'My Button');
});
