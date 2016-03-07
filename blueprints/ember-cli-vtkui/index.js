module.exports = {
  normalizeEntityName: function() {},

  beforeInstall: function(options) {
    return this.addAddonsToProject({
      packages: [
        { name: 'ember-cli-selectize', target: '0.5.2' },
        { name: 'ember-cp-validations', target: '2.5.0' }
      ]
    });
  }
}
