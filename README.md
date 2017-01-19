# Ember-bootstrap-controls

Ember-bootstrap-controls is a small library for quickly creating EmberJS forms that utilize the Bootstrap form and input stylings.

This README outlines the details of using and collaborating on this Ember addon.

## Upgrade Instructions
 - Find the `ember-bootstrap-controls` in your `package.json` which can be found in the root ember directory and update the version to the latest release.
 - Run `npm install`
 - Move into your root ember directory and run `ember g ember-bootstrap-controls`

## Installation

Add the following the list of dependencies in your `package.json` which can be found in the root ember directory:
- `"ember-bootstrap-controls": "wildland/ember-bootstrap-controls#v0.9.1",`

Now run `npm install`.


Move into your root ember directory and run:

`ember g ember-bootstrap-controls`

## Usage
See a [live demo](http://wildland.github.io/ember-bootstrap-controls/).

- [`bootstrap-form` form helper](#bootstrap-form)
- [`bootstrap-debounce-input` input field helper](#bootstrap-debounce-input)
- [`bootstrap-input` input field helper](#bootstrap-input)
- [`bootstrap-checkbox` checkbox input field helper](#bootstrap-checkbox)
- [`bootstrap-currency-input ` currency field helper](#bootstrap-currency-input)
- [`bootstrap-textarea` text area helper](#bootstrap-textarea)
- [`bootstrap-datepicker` calendar style date select helper](#bootstrap-datepicker)
- [`bootstrap-radio-group` radio button helper](#bootstrap-radio-group)
- [`bootstrap-radio-group` checkbox button helper](#bootstrap-checkbox-group)
- [`bootstrap-power-select` select tag helper](#bootstrap-power-select)
- [`bootstrap-multi-select` multi-select tag helper](#bootstrap-multi-select)
- [`bootstrap-pagination-nav` pagination navigation helper](#bootstrap-pagination-nav)
- [`bootstrap-data-table` table helper](#bootstrap-data-table)

---

### Bootstrap Form

> We should write some documentation for this.

---

### Bootstrap Debounce Input
A field helper to simplify making an input field with a delay until the user stops typing or hits enter.

*Use Example:*

```html
{{bootstrap-debounce-input value=search placeholder='Search'}}
```

*Required Arguments:*
- `value` - The attribute attached to the input.

*Optional Arguments:*
- `label` - String displayed as the labels text.
- `placeholder` - String displayed as the placeholder text.
- `debounce` - Time in milliseconds to wait for the user to pause before updating the value attribute. Defaults to `1000`.
- `errors` - Collection of DS.errors.

---

### Bootstrap Input
A field helper to simplify making an input field for a form.

*Use Example:*

```html
{{bootstrap-input value=user.email  label="Email”}}
```

Would render

```html
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
- `srOnly` - Boolean srOnly class to the label for screen readers. This hides the label, but still allows screen readers/computers to read the label by keeping it in the DOM. If it is desirable to hide the label, set this to `true`.

---

### Bootstrap Checkbox
A field helper to simplify making a checkbox field for a form.

*Use Example:*

```html
{{bootstrap-checkbox isChecked=false label="Email”}}
```

Would render

```html
<div class="checkbox">
  <label>
    <input
      type="checkbox"
      checked=false
      disabled=false
      required=false
      autofocus=false
      readonly=""
      tabindex=0>
  </label>
<div>
```

*Optional Arguments:*
- `label` - String displayed as the labels text.
- `name` - Set the input name attribute.
- `isChecked` - Set the checked value of the checkbox when initializing.
- `readonly` - Sets the checkbox to read only and is not changeable.
- `disabled` - Sets the checkbox to disabled.
- `autofocus` - Sets the checkbox focus when initialized.
- `tabindex` - Sets the tab index attribute of the input.
- `required` - Sets the checkbox input to required.
- `errors` - Collection of DS.errors.
- `srOnly` - Boolean srOnly removes the label when set to true.
- `onclick` - An action passed to the control to call when value changes. Sends checked value as param.

---

### Bootstrap Currency Input
A field helper to simplify making an currency input field for a form.

*Use Example:*

```html
{{bootstrap-currency-input
  value=model.rate
  label="Rate"
  required=true
  errors=model.errors.rate}}
```

$'s are also allowed to be prefixed to the number al la `$55.45`, so this might need to be handled by business logic somewhere in the application. One pattern that could be used to achive this is (using `ember-cli-accounting`):
```js
import accounting from "accounting"

...

rateInCents: attr('number'),
rate: computed('rateInCents', {
  get() {
    return `${accounting.formatMoney(this.get('rateInCents') / 100.0)}`;
  },

  set(key, value) {
    if (value) {
      this.set('rateInCents', accounting.unformat(value) * 100);

      return value;
    } else {
      this.set('attorneyBillRateInCents', null);
    }
  }
}),
```

This pattern stores the rate in cents, and converts it to/from a currency string through a computed property.

*Required Arguments:*
- `value` - Ember model attribute attached to the input.
- `label` - String displayed as the labels text.

*Optional Arguments:*
- `mask` - Optionally change the default currency mask (see [ember-text-mask](https://github.com/text-mask/text-mask/tree/master/ember) for details)
- `errors` - Collection of DS.errors.
- `placeholder` - Placeholder value.
- `srOnly` - Boolean srOnly class to the label for screen readers. This hides the label, but still allows screen readers/computers to read the label by keeping it in the DOM. If it is desirable to hide the label, set this to `true`.
- `key-press` - Key press action.
- `key-up` - Key up action.
- `key-down` - Key down action.

----

### Bootstrap TextArea

A helper for simplifying textarea input fields.

*Use Example:*

```html
{{bootstrap-textarea
  value=value
   label="label"
   content=content
   disabled=isNotEditing
   placeholder="Enter text..."}}
```
Rendered output:

```html
<textarea id="bootstrap-component-3" placeholder="Enter text here..." class="ember-view ember-text-area form-control"></textarea>

```

*Required Arguments:*
- `value` - Ember model attribute attached to the input.
- `label` - String displayed as the labels text.

*Optional Arguments:*
- `errors` - Collection of DS.errors.
- `customLabelCss` - Custom css to be added to the label.
- `srOnly` - Boolean srOnly class to the label for screen readers. This hides the label, but still allows screen readers/computers to read the label by keeping it in the DOM. If it is desirable to hide the label, set this to `true`.

---

### Bootstrap Datepicker

*Use Example*

```html
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
- `format` - Format for date. Defaults to 'mm/dd/yyyy'.
- `changeDate` - The changeDate action is triggered when the selected date changes.
- `srOnly` - Boolean srOnly class to the label for screen readers. This hides the label, but still allows screen readers/computers to read the label by keeping it in the DOM. If it is desirable to hide the label, set this to `true`.

---

### Bootstrap Radio Group

*Use Example:*

Template
```html
{{#bootstrap-radio-group
  label="Favorite Animal"
  selected=selectedItem
  options=names
  errors=errors
  onChange=(action 'selectValue')
  as |option|}}
    <span>{{option}}</span>
{{/bootstrap-radio-group}}

```

Controller
```javascript
import Ember from 'ember';

export default Ember.Controller.extend({
  names: ['Cat', 'Dog', 'Hamster'],
  selectedItem: null,
  actions: {
    selectValue(selectedItem) {
      this.set("selectedItem", selectedItem);
    }
  }
});
```

*Required Arguments:*
- `label` - String displayed as the fieldset legend.
- `selected` - The selected option
- `options` - Colletion of options to display in the component
- `onChange` -  The function to be invoked when the user checks an option.

*Optional Arguments:*
- `errors` - Collection of DS.errors.

---

### Bootstrap Checkbox Group

*Use Example:*

Template
```html
{{#bootstrap-checkbox-group
  label="What pets do you own?"
  selected=selectedItems
  options=names
  errors=errors
  onChange=(action 'selectValue')
  as |option|}}
    <span>{{option}}</span>
{{/bootstrap-checkbox-group}}

```

Controller
```javascript
import Ember from 'ember';

export default Ember.Controller.extend({
  names: ['Cat', 'Dog', 'Hamster'],
  selectedItems: [],
  actions: {
    selectValue(newSelections, oldSelections) {
      this.set('selectedItems', newSelections);
    }
  }
});
```

*Required Arguments:*
- `label` - String displayed as the fieldset legend.
- `selected` - The selected option
- `options` - Colletion of options to display in the component
- `onChange` -  The function to be invoked when the user checks an option.

*Optional Arguments:*
- `errors` - Collection of DS.errors.

---

### Bootstrap Power Select

*Use Example:*

Template
```html
{{#bootstrap-power-select
  label="Name"
  selected=selectedItem
  options=names
  placeholder="Pick a name"
  onChange=(action "foo")
  allowClear=true
  srOnly=false
  loadingMessage="Loading..."
  as |option|}}
    <span>{{option}}</span>
{{/bootstrap-power-select}}
```

Controller
```javascript
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
- `searchEnabled` - When falsey, hides the search in single selects
- `searchField` - When the options are objects and no custom matches function is provided, this option tells the component what property of the options should the default matches use to filter
- `srOnly` - When set to true, this will apply the "sr-only" class to the the label element causing it to be hidden
- `disabled` - When truthy the component cannot be interacted
- `renderInPlace` - When truthy, the list of options will be rendered in place instead of being attaches to the root of the body and positioned with javascript. Enabling this option also adds a wrapper div around the trigger and the content with class .ember-power-select. Useful when the power-select is inside of a modal.
- `matcher` - Sometimes the default matcher is not enough for you, for example if you need to match against several fields or you need to perform fuzzy matching. If that is the case just pass your own matcher function. It will receive the option and the search term and you can do whatever you feel like inside as long as it returns -1 if it doesn't match and a positive number if it does.

Example `matcher` that searches from the start of each item string:
```javascript
firstLetterMatcher(listItem, term) {
  if(listItem.toLowerCase().startsWith(term.toLowerCase())) {
    return 1;
  } else {
    return -1;
  }
},
```

---

### Bootstrap Multi Select

*Use Example:*

Template
```html
{{#bootstrap-multi-select
  label="Name"
  selected=selectedItems
  options=names
  placeholder="Pick a name"
  onChange=(action (mut selectedOptions))
  allowClear=true
  loadingMessage="Loading..."
  as |option|}}
    <span>{{option}}</span>
{{/bootstrap-multi-select}}
```

Same options as `bootstrap-power-select`.

---

### Bootstrap Pagination Nav

**Note that this requires [api_me](https://github.com/wildland/api_me) >= v0.7.0**

*Use Example:*

Template
```html
{{bootstrap-pagination-nav
  pageNumber=pageNumber
  pageSize=pageSize
  totalPages=totalPages
  moveToPage=(action (mut pageNumber))}}
```

Controller
```javascript
import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['pageNumber', 'pageSize']
/*
    Note that you would combine these with existing queryParams.
    So if you had:
  queryParams: ['search']
    It would become:
  queryParams: ['search', 'pageNumber', 'pageSize']
*/
  pageNumber: 1,
  pageSize: 15,

});
```

Router
```javascript
import Ember from 'ember';
import PaginatedRouteMixin from 'ember-bootstrap-controls/mixins/routes/pagination'; // Import the mixin

export default Ember.Route.extend(PaginatedRouteMixin, { //Extend from the mixin

  model: function(params) {
    return this.get('store').query('someModel', {
      page: this.paginationParams(params), // Pass this information along with the query.
    });
  },

  afterModel: function(model) {
    this._super(...arguments); // Call the afterModel from the mixin
  },
});
```

---

### Bootstrap Data Table

*Use Example:*

```html
{{bootstrap-data-table
  dataArray=users
  title="User Index"
  bordered=true
  columns=(array
    (hash
      attr="fullName"
      label="Name"
    )
    (hash
      attr="username"
      label="Username"
      hasLink=true
      idOnRoute=true
      url="users.show"
    )
    (hash
      attr="phone"
      label="Contact #"
    )
    (hash
      attr="email"
      label="Email"
      hasLink=true
      idOnRoute=false
      url="contacts.index"
    )
    (hash
      attr="employment_organization.label"
      label="Work"
    )
    <!-- NOTE: When calling an association of the dataArray model, you must use snke case instead oc camel case. -->
  )
}}
```

*Rendered Output:*

```html
<h3 class="text-center">{{title}}</h3>
<table class="table table-bordered">
  <thead>
    <tr>
      <th>Name</th>
      <th>Username</th>
      <th>Contact #</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{user.fullName}}</td>
      <td><a href="users/show/:id">{{user.username}}</a></td>
      <td>{{user.phone}}</td>
      <td><a href="contacts/index">{{user.email}}</a></td>
    </tr>
    <tr>
      <td>{{user.fullName}}</td>
      <td><a href="users/show/:id">{{user.username}}</a></td>
      <td>{{user.phone}}</td>
      <td><a href="contacts/index">{{user.email}}</a></td>
    </tr>
    <tr>
      <td>{{user.fullName}}</td>
      <td><a href="users/show/:id">{{user.username}}</a></td>
      <td>{{user.phone}}</td>
      <td><a href="contacts/index">{{user.email}}</a></td>
    </tr>
    <!-- ...etc... -->
  </tbody>
</table>
```

*Required Arguments:*
- `dataArray` - Array of Ember models to display on the table as rows (**Note:** At this time only Ember model objects work in the `dataArray`).
- `columns` - Array of **Hashes** containing column data.
  * `attr` - Name of Model's attribute to be displayed in column.
  * `label` - String displayed as the column's header text.

*Optional Arguments:*
- `title` - String displayed as the table's title.
- `titleSmall` - Boolean, when `true` reduces the size of the table's title.
- `striped` - Boolean, when `true` adds alternating shaded rows to table.
- `responsive` - Boolean, when `true` enabled horizontal scrolling on table and hides y-axis overflow.
- `bordered` - Boolean, when `true` adds border to table and columns
- `canHover` - Boolean, when `true` enables row shading on mouse hover.
- `condensed` - Boolean, when `true` removes cell padding for a smaller table.
- `numberedRows` - Boolean, when `true` displays row number in first column.
  * *Optional Column Arguments*
  * `hasLink` - Boolean, when `true` wraps the column's content in a link tag.
  * `idOnRoute` - Boolean, when `true` adds the id of the row's model to the url (used mainly for show and edit routes).
  * `url` - String value of Ember route (i.e. `"posts.show"`)

*All optional argument values are* `false` *as default*

*Styling:*

Adding custom styling to the table is simple, just add a few handy class selectors to your css, scss, or less files and style normally. Here are the class selectors:

- `ember-bs-data-table-control` - The outside wrap `<div>` for the table component.
- `ember-bs-data-table` - Selector for the `<table>` element itself
- `ember-bs-table-header-row` - The `<tr>` element inside of `<thead>`.
- `ember-bs-table-header-cell` - The `<td>` element inside of `<thead>`.
- `ember-bs-table-row` - The `<tr>` element inside of `<tbody>`.
- `ember-bs-table-cell` - The `<td>` element inside of `<tbody>`.

**Note:** Width is determined by size of the table's parent element.

For more information on Bootstrap style tables, visit the [Bootstrap](http://getbootstrap.com/css/#tables) website.

---

## Freestyle
If you are running [ember-freestyle](https://github.com/chrislopresto/ember-freestyle) then you can add the following component to get a `{{freestyle-section}}` that contains all of this library's components.
```
{{#freestyle-guide
...

  {{ember-bootstrap-controls-freestyle}}

...
{{/freestyle-guide}}
```

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
