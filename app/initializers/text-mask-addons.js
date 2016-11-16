import createNumberMask from 'npm:text-mask-addons/dist/createNumberMask';

export default {
  name: 'text-mask-addons',
  initialize() {
    console.assert(createNumberMask);
    // no-op, just loading dnd-core from browserify
  }
};
