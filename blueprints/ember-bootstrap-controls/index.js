module.exports = {
  description: 'Ember Bootstrap Controls Install blueprint',
  normalizeEntityName: function() {},

  afterInstall: function(options) {
    this.addPackageToProject('text-mask-addons', '~1.0.1');

    return this.addAddonsToProject({
      packages: [
        {
          name: 'ember-browserify',
          target: '~1.1.14'
        },
        {
          name: 'ember-text-mask',
          target: '~0.1.0'
        },
        {
          name: "ember-cli-bootstrap-datepicker",
          target: "~0.5.6"
        },
        {
          name: "ember-power-select",
          target: "~1.9.1"
        },
        {
          name: "ember-truth-helpers",
          target: "~1.2.0"
        },
        {
          name: 'ember-freestyle',
          target: '~0.6.1'
        }
      ]
    });
  }

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  // afterInstall: function(options) {
  //   // Perform extra work here.
  // }
};
