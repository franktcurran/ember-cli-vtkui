import Ember from 'ember';
import layout from '../templates/components/g-selectize';
const { Component, computed, defineProperty } = Ember;

export default Component.extend({
  layout,
  classNames: ['g-input'],

  classNameBindings: ['isValid::g-selectize-invalid'],

  placeholder: 'Select...',
  id: computed('elementId', function() {
    return `${this.get('elementId')}-g-selectize`;
  }),


  init() {
    this._super(...arguments);
    var path = this.get('path');
    defineProperty(this, 'validation', computed.oneWay(`model.validations.attrs.${path}`));
    defineProperty(this, 'value', computed.alias(`model.${path}`));
  },

  isValid: computed('validation.isValid', function() {
    let validation = this.get('validation');
    return (validation) ? validation.get('isValid') : true;
  }),

  actions: {
    'select-item': function(item) {
      this.sendAction('onChange', item);
    }
  }
});
