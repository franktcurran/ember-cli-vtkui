import Ember from 'ember';
import layout from '../templates/components/g-textarea';

export default Ember.Component.extend({
  layout,
  classNames: ['g-textarea'],
  id: Ember.computed('elementId', function() {
    return `${this.get('elementId')}-g-textarea`;
  })
});
