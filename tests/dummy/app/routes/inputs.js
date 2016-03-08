import Ember from 'ember';
import Person from '../models/person';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      person: Person.create(Ember.getOwner(this).ownerInjection(), {
      }),

      // person: Person.create(Ember.getOwner(this).ownerInjection(){
      //   firstName: "Joe",
      //   middleName: "G",
      //   lastName: "Developer",
      //   bday: '2000-02-29',
      //   robot: {id: 2, name: 'C3PO'},
      //   notes: "fictional character"
      // }),
      robots: Ember.A([
        {id: 1, name: 'R2D2'},
        {id: 2, name: 'C3PO'},
        {id: 3, name: 'T3-H8'},
        {id: 4, name: 'BB-8'}
      ]),
      carMakes: Ember.A([
        { id: 1, name: 'volvo' },
        { id: 2, name: 'ford' }
      ]),
      carModels: Ember.A([
        { id: 1, name: 'xc90', make: 1 },
        { id: 2, name: '240dl', make: 1 },
        { id: 3, name: 'pinto', make: 2 }
      ]),
    });
  },

  setupController(controller, models) {
    controller.setProperties({
      person: models.person,
      robots: models.robots,
      carMakes: models.carMakes,
      carModels: models.carModels,
      selectedModels: Ember.A([])
    });
  },

  actions: {
    submit() {
      console.log('saving...');
      let person = this.modelFor('inputs').person;
      console.log(person.get('validations.isValid'));
      console.log(person.get('validations.isInvalid'));
    },
    setCarModels(make) {
      let controller = this.controllerFor('inputs');
      let selectedModels = controller.get('selectedModels');
      selectedModels.clear();
      controller.get('carModels').forEach((i) => {
        if (i.make === make.id) {
          selectedModels.pushObject(i);
        }
      });
    }
  }

});
