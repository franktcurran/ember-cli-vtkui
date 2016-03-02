import Ember from 'ember';
import layout from '../templates/components/gxt-button';

export default Ember.Component.extend({
  layout,
  // tagName: 'table',
  classNames: ['x-btn', 'x-component', 'x-btn-text', 'x-unselectable', 'x-btn-over'],

  click() {
    if (!this.get('disabled')) {
      this.sendAction('action', this.get('actionArg'));
    }
  }

});
