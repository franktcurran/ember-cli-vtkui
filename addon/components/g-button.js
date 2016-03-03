import Ember from 'ember';
import layout from '../templates/components/g-button';

export default Ember.Component.extend({
  layout,
  tagName: 'button',
  classNames: ['g-button'],

  click() {
    this.sendAction('action', this.get('actionArg'));
  }
});
