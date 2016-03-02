import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    alertme(arg) {
      window.alert('You clicked the button with actionArg: ' + arg);
    }
  }
});
