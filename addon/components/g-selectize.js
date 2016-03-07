import Ember from 'ember';
import layout from '../templates/components/g-selectize';

export default Ember.Component.extend({
  layout,
  classNames: ['g-input'],
  placeholder: 'Select...',
  id: Ember.computed('elementId', function() {
    return `${this.get('elementId')}-g-selectize`;
  }),

  actions: {
    'select-item': function(item) {
      this.sendAction('onChange', item);
    }
  }
});
