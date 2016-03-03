import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.A([
      {id: 1, name: 'R2D2'},
      {id: 2, name: 'C3PO'},
      {id: 3, name: 'T3-H8'},
      {id: 4, name: 'BB-8'}
    ]);
  }
});
