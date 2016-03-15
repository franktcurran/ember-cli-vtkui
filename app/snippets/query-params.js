// BEGIN-SNIPPET query-params
import Ember from 'ember';
export default Ember.Route.extend({
  queryParams: {
    "offset": { "refreshModel": true },
    "limit": { "refreshModel": true }
  }
});
// END-SNIPPET
