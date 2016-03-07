import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  firstName: {
    debounce: 300,
    validators: [
      validator('presence', true),
      validator('length', { min: 2 })
    ]
  },
  lastName: {
    debounce: 300,
    validators: [
      validator('presence', true),
      validator('length', { min: 2 })
    ]
  }
});


export default Ember.Object.extend(Validations, {
  firstName: null,
  middleName: null,
  lastName: null,
  bday: null
});
