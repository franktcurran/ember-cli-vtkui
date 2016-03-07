import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('g-grid', 'Integration | Component | g grid', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"
  this.set('model', Ember.A([
    { id:1, name: "Bubba" }
  ]));

  // Template block usage:"
  this.render(hbs`
    {{#g-grid content=model}}
      template block text
    {{/g-grid}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
