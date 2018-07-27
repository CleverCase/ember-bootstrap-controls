import Component from '@ember/component';
import layout from '../../../templates/components/freestyle/bootstrap-inputs/-text';
import { BuilderForPropDefaults, BuilderForDynamicProperties } from 'ember-bootstrap-controls/utils/prop-definition-tools';
import { propDefinitions } from '../../bootstrap-inputs/-text';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  propDefinitions,
  data: Object.assign(BuilderForPropDefaults(propDefinitions), {
    value: '',
    label: 'Simple Text',
  }),
  dynamicProperties: BuilderForDynamicProperties(propDefinitions),
  basicValue: '',
});
