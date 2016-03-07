import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('g-paginator', 'Integration | Component | g paginator', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"
  this.render(hbs`{{g-paginator}}`);
  assert.equal(this.$().text().trim(), `<
0 - 0 of 0
>`);
});

test('it renders with meta', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"
  this.setProperties({ offset: 0, limit: 25, total: 49});
  this.render(hbs`{{g-paginator offset=offset limit=limit total=total}}`);
  assert.equal(this.$().text().trim(), `<
1 - 25 of 49
>`);
});
