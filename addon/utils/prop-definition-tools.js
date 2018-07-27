export function BuilderForPropTypes(propDefinitions) {
  let types = {};
  for (var key in propDefinitions) {
    if (propDefinitions.hasOwnProperty(key)) {
      types[key] = propDefinitions[key].type
    }
  }
  return types;
}

export function BuilderForPropDefaults(propDefinitions) {
  let defaults = {};
  for (var key in propDefinitions) {
    if (propDefinitions.hasOwnProperty(key) && typeof(propDefinitions[key].default) !== undefined) {
      defaults[key] = propDefinitions[key].default
    }
  }
  return defaults;
}

export function BuilderForDynamicProperties(propDefinitions) {
  let dynamicProperties = {};
  let inputType = '';
  let type = null;
  let value = null;
  let options = [];
  for (var key in propDefinitions) {
    type = null;
    value = null;
    inputType = '';
    options= [];
    if (propDefinitions.hasOwnProperty(key)) {
      value = propDefinitions[key].dynamicExampleValue;
      if(Ember.isBlank(value)) {
        value = propDefinitions[key].default
      }
      if(typeof(propDefinitions[key].type) === 'object') {
        type = propDefinitions[key].type;
      } else if (typeof(propDefinitions[key].type) === 'function') {
        type = propDefinitions[key].type();
      } else {
        window.alert("Unknown type: " + type + " at key " + key + ". Double check your PropTypes");
      }
      switch(type.type) {
        case 'bool':
          inputType = 'checkbox';
          break;
        case 'number':
          inputType = 'number';
          break;
        case 'oneOf':
          inputType = 'select';
          options = type.valueOptions;
          break;
        case 'string':
          inputType ='';
          break;
        default:
          continue
          break;
      }

      dynamicProperties[key] = {
        value: value,
        inputType: inputType,
        options: options,
        description: propDefinitions[key].description,
      }
    }
  }
  return dynamicProperties;
}
