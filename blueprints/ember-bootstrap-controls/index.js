module.exports = {
  description: 'Ember Bootstrap Controls Install blueprint',
  normalizeEntityName: function() {},

  afterInstall: function(options) {
    return this.addAddonsToProject({
      packages: [
        {
          name: "ember-cli-bootstrap-datepicker",
          target: "0.5.6"
        },
        {
          name: "ember-power-select",
          target: "0.10.3"
        },
        {
          name: "ember-truth-helpers",
          target: "1.2.0"
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
