import { moduleForComponent } from 'ember-qunit';
import { skip } from 'qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('g-selectize', 'Integration | Component | g selectize', {
  integration: true
});

skip('it renders', function(assert) {
  let model = [{id:"1",name:'one'}, {id:"2",name:'two'}];
  this.set('model', model);

  this.render(hbs`{{g-selectize content=model optionValuePath="content.id" optionLabelPath="content.name"}}`);
  assert.ok(this.$().hasClass('g-input'));
});
