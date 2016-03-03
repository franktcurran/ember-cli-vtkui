import Ember from 'ember';
export default Ember.Route.extend({
  model() {
    return Ember.Object.create({
      firstName: "Joe",
      middleName: "G",
      lastName: "Developer",
      bday: '2000-02-29'
    });
  }
});
