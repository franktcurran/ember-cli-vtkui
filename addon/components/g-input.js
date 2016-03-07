import Ember from 'ember';
import layout from '../templates/components/g-input';

export default Ember.Component.extend({
  layout,
  classNames: ['g-input'],
  id: Ember.computed('elementId', function() {
    return `${this.get('elementId')}-g-input`;
  }),

  init() {
   this._super(...arguments);
   var path = this.get('path');
   Ember.defineProperty(this, 'validation', Ember.computed.oneWay(`model.validations.attrs.${path}`));
  //  defineProperty(this, 'value', computed.alias(`model.${valuePath}`));
 }

});
