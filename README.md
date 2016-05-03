# Ember-bootstrap-controls

Ember-bootstrap-controls is a small library for quickly creating EmberJS forms that utilize the Bootstrap form and input stylings.

This README outlines the details of using and collaborating on this Ember addon.

## Installation

Add the following the list of dependencies in your `package.json` which can be found in the `app-ember` directory:
- `"ember-bootstrap-controls": "git+https://github.com/wildland/ember-bootstrap-controls#v0.2.0",`

Now run `npm install`.


Move into your root ember directory `app-ember` and run:

`ember g ember-bootstrap-controls`

## Usage
- `bootstrap-form` form helper
- `bootstrap-input` input field helper
- `bootstrap-textarea` text area helper
- `bootstrap-selectize` select tag helper
- `bootstrap-datepicker` calendar style date select helper

---

### Bootstrap Form

---

### Bootstrap Input
A field helper to simplify making an input field for a form.

*Use Example:*

```
{{bootstrap-input value=user.email  label="Email”}}
```

Would render

```
<div class="form-group bootstrap-input-component">
  <label for="bootstrap-component-0" class="control-label" >Email</label>
  <input id="bootstrap-component-0" className="form-control ember-view ember-text-field">
<div>
```

*Required Arguments:*
- `value` - Ember model attribute attached to the input.
- `label` - String displayed as the labels text.

*Optional Arguments:*
- `errors` - Collection of DS.errors.
- `customLabelCss` - Custom css to be added to the label.
- `srOnly` - Boolean srOnly class to the label for screen readers.

---

### Bootstrap Date-Picker

*Use Example*

```
{{bootstrap-datepicker
  id=inputId
  value=value
  todayHighlight=todayHighlight
  class="form-control"}}
```

Rendered Output is a `<table>` structured like a calandar which allows the user to choose a specific date.

*Required Arguments:*
- `value` - Ember model attribute attached to the input.
- `label` - String displayed as the labels text.

*Optional Arguments:*
- `errors` - Collection of DS.errors.
- `customLabelCss` - Custom css to be added to the label.
- `todayHighlight` - Highlights the current date on calandar UI.

---

### Bootstrap Power Select

*Use Example:*

Template
```
{{#bootstrap-power-select
  label="Name"
  selected=selectedItem
  options=names
  placeholder="Pick a name"
  onChange=(action "foo")
  allowClear=true
  loadingMessage="Loading..."
  as |option|}}
    <span>{{option}}</span>
{{/bootstrap-power-select}}
```

Controller
```
import Ember from 'ember';

export default Ember.Controller.extend({
  names: ['Stefan', 'Miguel', 'Tomster', 'Pluto'],
  selectedItem: null,
  actions: {
    foo(selectedItem) {
      this.set("selectedItem", selectedItem);
    }
  }
});
```

*Required Arguments:*
- `label` - String displayed as the labels text.
- `selected` - The selected option
- `options` - Colletion of options to display in the component
- `onChange` - 	The function to be invoked when the user selects or unselects an option. 

*Optional Arguments:*
- `errors` - Collection of DS.errors.
- `allowClear` - When truthy, single selects allow to nullify the selection
- `loadingMessage` - Message shown in the list of options while the options are still not resolved, tipically after a search but also when options is a promise.
- `placeholder` - Text to display in the trigger of the component while no option is selected

----

### Bootstrap TextArea

A helper for simplifying textarea input fields.

*Use Example:*

```
{{bootstrap-textarea
  value=value
   label="label"
   content=content
   disabled=isNotEditing
   placeholder="Enter text..."}}
```
Rendered output:

```
<textarea id="bootstrap-component-3" placeholder="Enter text here..." class="ember-view ember-text-area form-control"></textarea>

```

*Required Arguments:*
- `value` - Ember model attribute attached to the input.
- `label` - String displayed as the labels text.

*Optional Arguments:*
- `errors` - Collection of DS.errors.
- `customLabelCss` - Custom css to be added to the label.
- `srOnly` - Boolean srOnly class to the label for screen readers.

---

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
