import Ember from 'ember';
import layout from '../templates/components/g-grid-col';
import Grid from './g-grid';

export default Ember.Component.extend({
  layout,
  tagName: 'td',

  init() {
    this._super(...arguments);
    this._registerWithParent();
  },

  _registerWithParent() {
    let parent = this.nearestOfType(Grid);
    console.log('Got a parent of: ' + parent);
    parent.registerChild(this);
  }

});
