import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('panels');
  this.route('inputs');
  this.route('combos');
  this.route('buttons');
  this.route('grids');
  this.route('paginator');
});

export default Router;
