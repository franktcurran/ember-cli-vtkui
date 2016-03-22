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
  isSorted: Ember.computed('sortPath', 'sortField', function() {
    return (this.get('sortField') === this.get('sortPath'));
  }),

  _getParent() {
    return this.nearestOfType(Grid);
  },

  click() {
    let sortPath = this.get('sortPath');
    if (sortPath) {
      let parent = this._getParent();
      this.toggleProperty('isSortAsc');
      parent.set('sortField', sortPath);
      parent.set('sortDir', this.get('sortDir'));
    }
  }
});
