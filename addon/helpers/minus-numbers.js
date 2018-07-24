import { helper as buildHelper } from '@ember/component/helper';

export function minusNumbers(params) {
  var result = params[0];

  for (var i = 1; i < params.length; i++) {
    result = result - params[i];
  }

  return result;
}

export default buildHelper(minusNumbers);
