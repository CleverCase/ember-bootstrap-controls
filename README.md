# Ember-bootstrap-controls

This README outlines the details of collaborating on this Ember addon.

## Installation

Add the following to your `package.json`:
- `"ember-bootstrap-controls": "git+https://github.com/wildland/ember-bootstrap-controls#v0.0.7",`

## Usage
- `bootstrap-form` form helper
- `bootstrap-input` input field helper
- `bootstrap-textarea` text area helper

### Bootstrap Form

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

### Bootstrap TextArea

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
