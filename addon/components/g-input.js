import Ember from 'ember';
import layout from '../templates/components/g-input';

export default Ember.Component.extend({
  layout,
  classNames: ['g-input'],
  id: Ember.computed('elementId', function() {
    return `${this.get('elementId')}-g-input`;
  })
});
