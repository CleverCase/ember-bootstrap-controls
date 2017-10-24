# ember-cli-classlist-polyfill

[![Build Status](https://travis-ci.org/kaliber5/ember-cli-classlist-polyfill.svg?branch=master)](https://travis-ci.org/kaliber5/ember-cli-classlist-polyfill)
[![Ember Observer Score](https://emberobserver.com/badges/ember-cli-classlist-polyfill.svg)](https://emberobserver.com/addons/ember-cli-classlist-polyfill)
[![npm version](https://badge.fury.io/js/ember-cli-classlist-polyfill.svg)](https://badge.fury.io/js/ember-cli-classlist-polyfill)

Ember-CLI addon to add a polyfill for the [Element.classList](https://developer.mozilla.org/de/docs/Web/API/Element/classList)
property, based on [classlist-polyfill](https://github.com/yola/classlist-polyfill).

Internet Explorer 9 and lower do not support `classList`, while IE 10 + 11 have incomplete support. 
See full [browser support details](http://caniuse.com/#feat=classlist).

## Installation

```bash
ember install ember-cli-classlist-polyfill
```

## Usage

The addon will import the polyfill by default to your `vendor.js`. 

Beginning with version 2.13 Ember CLI supports a [Targets](http://rwjblue.com/2017/04/21/ember-cli-targets/) feature, 
allowing you to specify the list of browsers your app should support like `last 1 Chrome versions` or `ie 11`.
If the [caniuse database](http://caniuse.com/#feat=classlist) indicates that all browsers you want to support *fully* support the feature, then the 
polyfill will *not* be included into your build, to not increase your bundle size.

### Usage in an addon

This should also work as a nested addon of another addon, just include it as a `dependency`. So if you addon
makes use of `classList`, you can use this to make sure the API is available. Given the above mentioned targets feature,
it will have no negative impact on the consuming app should the polyfill not be needed.