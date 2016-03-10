import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.A([
      {id: 1, firstName: 'Joe', middleName: 'G', lastName: 'Dev', bday: '2000-02-29' },
      {id: 2, firstName: 'Jane', middleName: 'Z', lastName: 'Doe', bday: '1974-01-15' },
      {id: 3, firstName: 'Jar', middleName: 'J', lastName: 'Binks', bday: null },
      {id: 4, firstName: 'Luke', middleName: 'M', lastName: 'Skywalker', bday: '1978-07-01' }
    ]);
  },

  actions: {
    didGridDblClick(arg) {
      window.alert('you doubleclicked: ' + JSON.stringify(arg));
    }
  }
});
