module.exports = {
  description: '',
  normalizeEntityName: function() {},

  afterInstall: function(options) {
    return this.addAddonsToProject({
      packages: [
        {
          name: 'ember-cli-selectize',
          target: "^0.4.0"
        },
        {
          name: "ember-cli-bootstrap-datepicker",
          target: "0.5.5"
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
