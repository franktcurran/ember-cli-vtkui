import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: `${window.location.pathname.replace('/', '')}api`
});
