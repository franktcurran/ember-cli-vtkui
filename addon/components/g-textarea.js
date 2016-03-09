import Ember from 'ember';
import layout from '../templates/components/g-textarea';
const { Component, computed, defineProperty } = Ember;

export default Component.extend({
  layout,
  classNames: ['g-textarea'],
  id: computed('elementId', function() {
    return `${this.get('elementId')}-g-textarea`;
  }),

  init() {
    this._super(...arguments);
    let path = this.get('path');
    defineProperty(this, 'validation', computed.oneWay(`model.validations.attrs.${path}`));
    defineProperty(this, 'value', computed.alias(`model.${path}`));
  },

  isValid: computed('validation.isValid', function() {
    let validation = this.get('validation');
    return (validation) ? validation.get('isValid') : true;
  })

});
