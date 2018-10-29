# ember-string-ishtmlsafe-polyfill [![Build Status](https://travis-ci.org/workmanw/ember-string-ishtmlsafe-polyfill.svg?branch=master)](https://travis-ci.org/workmanw/ember-string-ishtmlsafe-polyfill)

This provides a polyfill for the `Ember.String.isHTMLSafe` feature added in Ember 2.8.

RFC: [emberjs/rfcs#139](https://github.com/emberjs/rfcs/pull/139).

PR: [emberjs/ember.js#13666](https://github.com/emberjs/ember.js/pull/13666).

API: [Ember.String.isHTMLSafe](http://emberjs.com/api/classes/Ember.String.html#method_isHTMLSafe)


## Installation

```
ember install ember-string-ishtmlsafe-polyfill
```


## Usage

```javascript
import Ember from 'ember';

var plainString = 'plain string';
var safeString = Ember.String.htmlSafe('<div>someValue</div>');

Ember.String.isHTMLSafe(plainString); // false
Ember.String.isHTMLSafe(safeString);  // true
```


## Migration

### Applications

After you upgrade your application to Ember 2.8, you should remove `ember-string-ishtmlsafe-polyfill`
from your `package.json`.

### Addons

Addons generally support many different Ember versions, so leaving `ember-string-ishtmlsafe-polyfill`
in place for consumers of your addon is perfectly normal.  When the addon no longer supports
Ember versions older than 2.8, we recommend removing `ember-string-ishtmlsafe-polyfill` from
your `package.json` and doing a major version bump.


## Compatibility

This addon is tested against each minor Ember version starting with 1.10 through 2.8
(when `isHTMLSafe()` landed). Additionally tested against, `ember-stable`, `ember-beta`,
and `ember-canary`. A complete list can be found in the
[`ember-try.js`](https://github.com/workmanw/ember-string-ishtmlsafe-polyfill/blob/master/config/ember-try.js)
config.


## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`
