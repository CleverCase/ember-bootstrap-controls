module.exports = {
  description: 'Ember Bootstrap Controls Install blueprint',
  normalizeEntityName: function() {},

  afterInstall: function(options) {
    return this.addAddonsToProject({
      packages: [
        {
          name: "ember-cli-bootstrap-datepicker",
          target: "0.5.5"
        },
        {
          name: "ember-power-select",
          target: "0.10.3"
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
