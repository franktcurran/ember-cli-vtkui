// var RSVP = require('rsvp');

module.exports = {
  normalizeEntityName: function() {},

  // beforeInstall: function(options) {
  //   return this.addBowerPackageToProject('materialize', '~0.97.0');
  // },

  afterInstall: function() {
    // return RSVP.all([
      this.addPackageToProject('ember-cli-selectize', '0.5.2');
    // ]);
  }
}
