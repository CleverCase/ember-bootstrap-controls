import TextField from '@ember/component/text-field';

export default TextField.extend({
  classNames: ['form-control'],
  attributeBindings: ['aria-describedby', 'maxlength'],
});
