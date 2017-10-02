import checkInView from '../utils/extensions/jquery';

export function initialize() {
  checkInView();
}

export default {
  name:       'jq-extensions',
  initialize: initialize
};
