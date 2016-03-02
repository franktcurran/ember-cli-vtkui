import Ember from 'ember';
import layout from '../templates/components/gxt-toolbar';

export default Ember.Component.extend({
  layout,
  classNames: ['x-toolbar', 'x-component', 'x-border-panel', 'x-toolbar-layout-ct'],
  attributeBindings: ['style'],
  style: 'height:30px; width:100%;'
});
