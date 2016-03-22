import Ember from 'ember';
import layout from '../templates/components/g-grid-heading';
import Grid from './g-grid';

export default Ember.Component.extend({
  layout,
  tagName: 'th',
  isSortAsc: true,
  sortDir: Ember.computed('isSortAsc', function() {
    return this.get('isSortAsc') ? 'ASC' : 'DESC';
  }),

  _getParent() {
    return this.nearestOfType(Grid);
  },

  click() {
    console.log('clicked me: setting to: ' + this.get('sortPath'));
    let parent = this._getParent();
    this.toggleProperty('isSortAsc');
    parent.set('sortField', this.get('sortPath'));
    parent.set('sortDir', this.get('sortDir'));
  }
});
