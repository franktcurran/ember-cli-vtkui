import Ember from 'ember';
export default Ember.Route.extend({
  model() {
    return Ember.Object.create({
      name: "Camoflauge"
    });
  },

  actions: {
    submit() {
      let model = this.modelFor('application');
      console.log('name = ' + model.get('name'));
      model.set('name', '');
    }
  }
});
