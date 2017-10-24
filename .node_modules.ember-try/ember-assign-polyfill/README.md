# Ember-assign-polyfill

<a href="https://shipshape.io/"><img src="http://i.imgur.com/bU4ABmk.png" width="100" height="100"/></a>

[![npm version](https://badge.fury.io/js/ember-assign-polyfill.svg)](http://badge.fury.io/js/ember-assign-polyfill)
![Download count all time](https://img.shields.io/npm/dt/ember-assign-polyfill.svg)
[![npm](https://img.shields.io/npm/dm/ember-assign-polyfill.svg)]()

This provides a polyfill for the Ember.assign feature added in Ember 2.5.

### Installation

```bash
ember install ember-assign-polyfill
```

### Usage

```js
import Ember from 'ember';

var a = { first: 'Robert' };
var b = { last: 'Wagner' };
var c = { company: 'Ship Shape' };

Ember.assign(a, b, c); // a === { first: 'Robert', last: 'Wagner', company: 'Ship Shape' }, b === { last: 'Wagner' }, c === { company: 'Ship Shape' }
```

## Migration

### Applications

After you upgrade your application to Ember 2.5, you should remove ember-assign-polyfill from your package.json.

### Addons

Addons generally support many different Ember versions, so leaving ember-assign-polyfill in place for consumers of your addon is perfectly normal. When the addon no longer supports Ember versions older than 2.5, we recommend removing ember-assign-polyfill from your package.json and doing a major version bump.
