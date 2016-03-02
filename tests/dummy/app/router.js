import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('gxt-panel');
  this.route('gxt-input');
  this.route('gxt-button');

  this.route('mashup');
});

export default Router;
