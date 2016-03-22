import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

// for apps that require info from the main app
let appOptions = {};

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  autoboot: config.autoboot,
  Resolver,
  appOptions
});

loadInitializers(App, config.modulePrefix);

export default App;
