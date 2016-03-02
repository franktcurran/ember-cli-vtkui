import Ember from 'ember';
import layout from '../templates/components/content-panel';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['x-panel', 'x-component'],
  attributeBindings: ['style']
});
