import Ember from 'ember';
import layout from '../templates/components/g-grid';

export default Ember.Component.extend({
  layout,
  tagName: 'table',
  classNames: ['g-grid'],
  attributeBindings: ['cellspacing'],
  cellspacing: 0,

  children: null,

  init() {
    this._super(...arguments);
    this.set('childrenKeys', new Ember.A([]));
    this.set('children', new Ember.A([]));
  },

  registerChild(child) {
    console.log('Registering a child of: ' + child);
    Ember.run.debounce(this, function() {
      let keys = this.get('childrenKeys');
      let childKey = child.get('heading');
      if (!keys.contains(childKey)) {
        keys.push(childKey);
        this.get('children').pushObject(child);
      }
    }, 150);
  }

});
