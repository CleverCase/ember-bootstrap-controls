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
