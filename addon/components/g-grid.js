import Ember from 'ember';
import layout from '../templates/components/g-grid';

export default Ember.Component.extend({
  layout,
  tagName: 'table',
  classNames: ['g-grid']
});
