import Ember from 'ember';
import layout from '../templates/components/bootstrap-power-select';
import InputableMixin from '../mixins/components/inputable';

export default Ember.Component.extend(InputableMixin, {
  tagName: '',
  classNames: '',
  layout: layout,

  selected: null,
  placeholder: null,
  options: null,
  onChange: null,
  label: null,
  matcher: null,

  disabled: false,
  loadingMessage: 'Loading',
  renderInPlace: false,
  allowClear: true,
  search: null,
  searchEnabled: Ember.computed('matcher', 'search', 'searchField', function(){
    const matcher = this.get('matcher');
    const search = this.get('search');
    const searchField = this.get('searchField');

    return (matcher || search || searchField);
  }),
  searchField: null,
  required: false,
  srOnly: null,
});
