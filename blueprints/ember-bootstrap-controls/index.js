module.exports = {
  description: 'Ember Bootstrap Controls Install blueprint',
  normalizeEntityName: function() {},

  afterInstall: function(options) {
    this.addPackageToProject('text-mask-addons', '~1.0.1');

    return this.addAddonsToProject({
      packages: [
        {
          name: "ember-cli-bootstrap-datepicker",
          target: "~0.5.6"
        },
      ]
    });
  }
};
