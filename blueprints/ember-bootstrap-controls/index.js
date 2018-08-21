module.exports = {
  description: 'Ember Bootstrap Controls Install blueprint',
  normalizeEntityName: function() {},
  afterInstall() {
    // Add addons to package.json and run defaultBlueprint
    return this.addAddonsToProject({
      // a packages array defines the addons to install
      packages: [
        {name: 'ember-bootstrap'},
      ]
    })
  }
};
