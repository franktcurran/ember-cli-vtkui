import Ember from 'ember';
import layout from '../templates/components/g-selectize';

export default Ember.Component.extend({
  layout,
  classNames: ['g-input'],
  placeholder: 'Select...',

  actions: {
    'select-item': function(item) {
      this.sendAction('onChange', item);
    }
  }
});
