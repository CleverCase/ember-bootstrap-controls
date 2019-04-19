module.exports = {
  description: 'Ember Bootstrap Controls Install blueprint',
  normalizeEntityName: function() {},

  afterInstall() {
    return this.addAddonsToProject({ packages: ['ember-power-select'] })
      .then(() => this.addPreprocessorStyleImport());
  },
  addPreprocessorStyleImport() {
    let preprocessor = this.preprocessor;
    let importStatement = '\n@import "bootstrap-power-select/themes/bootstrap-4";\n';

    if (preprocessor === 'none') {
      return;
    }

    let extension = preprocessor === 'sass' ? 'scss' : 'less';

    let stylePath = path.join('app', 'styles');
    let file = path.join(stylePath, `app.${extension}`);

    if (!fs.existsSync(stylePath)) {
      fs.mkdirSync(stylePath);
    }
    if (fs.existsSync(file)) {
      this.ui.writeLine(`Added import statement to ${file}`);
      return this.insertIntoFile(file, importStatement, { before: '@import "ember-power-select";' });
    } else {
      this.ui.writeLine(`Created ${file}`);
      return writeFile(file, importStatement);
    }
  },
};
