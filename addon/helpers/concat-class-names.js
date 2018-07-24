import { helper as buildHelper } from '@ember/component/helper';

export function concatClassNames([classNames = []]/*, hash*/) {
  if (classNames.join) {
    return classNames.join(' ');
  }

  return classNames;
}

export default buildHelper(concatClassNames);
