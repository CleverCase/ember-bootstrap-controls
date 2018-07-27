import { helper as buildHelper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

export function parseColumns(params/*, hash*/) {
  let record = params[0];
  let attrName = params[1];
  if (record && attrName) {
    let result = record.get(attrName);

    return new htmlSafe(result);
  }
}

export default buildHelper(parseColumns);
