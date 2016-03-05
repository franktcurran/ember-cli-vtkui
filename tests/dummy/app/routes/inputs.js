import Ember from 'ember';
export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      person: Ember.Object.create({
        firstName: "Joe",
        middleName: "G",
        lastName: "Developer",
        bday: '2000-02-29',
        robot: {id: 2, name: 'C3PO'},
        notes: "fictional character"
      }),
      robots: Ember.A([
        {id: 1, name: 'R2D2'},
        {id: 2, name: 'C3PO'},
        {id: 3, name: 'T3-H8'},
        {id: 4, name: 'BB-8'}
      ])
    });
  },

  setupController(controller, models) {
    controller.setProperties({
      person: models.person,
      robots: models.robots
    });
  }

});
