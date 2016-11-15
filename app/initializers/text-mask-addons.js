import createNumberMask from 'npm:text-mask-addons/dist/createNumberMask';

export default {
  name: 'ember-dnd-core',
  initialize() {
    console.assert(createNumberMask);
    // no-op, just loading dnd-core from browserify
  }
};
