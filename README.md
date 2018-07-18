# Ember-bootstrap-controls

WildlandUX is a library for quickly creating EmberJS forms that utilize the Bootstrap4 form and input styles and HTML &mdash; it includes accessiblity.

This README outlines the details of using and collaborating on this Ember addon.

Checkout our [Releases](../../releases/latest) or [Changelog](CHANGELOG.md) for what has changed.

Issues or ideas? Checkout our [contributing guide](CONTRIBUTING.md) for how to help contribute to this project.

Here's a [list](https://github.com/wildland/ember-bootstrap-controls/graphs/contributors) of
all the people who have contributed to the development of this library.

## Upgrade Instructions

### 0.18.1 - v1.0.0-alpha.x
 - Updated to bootstrap 4, still an alpha release, public API/class names are subject to change before a 1.0 release.

### 0.14.0 - 0.15.0
 - `keyPress`, `keyDown`, `keyUp` events were all renamed to `key-press`, `key-down`, and `key-up` respectively. This was to prevent it from conflicting with Ember.Component `keyPress`, `keyDown`, and `keyUp` events. An assert is thrown to help the developer identify and fix these issues, but it is further recommeneded to do a project find, and replace where used.

### 0.X - 0.14.0
### This version is likely not backwards compatible with ember-cli < 2.11.0 and ember-cli-htmlbars < 1.1.1
### If you need to support a version less than one of these, please use 0.11.x instead.
 - Find the `ember-bootstrap-controls` in your `package.json` which can be found in the root ember directory and update the version to the latest release.
 - Run `npm install`
 - Move into your root ember directory and run `ember g ember-bootstrap-controls`

## Installation

Add the following the list of dependencies in your `package.json` which can be found in the root ember directory:
- `"ember-bootstrap-controls": "wildland/ember-bootstrap-controls#v0.17.0",`

Now run `npm install`.


Move into your root ember directory and run:

`ember g ember-bootstrap-controls`

## Usage
See the [live documentation](http://wildland.github.io/ember-bootstrap-controls/).

## Freestyle
If you are running [ember-freestyle](https://github.com/chrislopresto/ember-freestyle) then you can add the following component to get a `{{freestyle-section}}` that contains all of this library's components.
```
{{#freestyle-guide
...

  {{ember-bootstrap-controls-freestyle}}

...
{{/freestyle-guide}}
```

## Deploying Documentation

Run `npm run deploy-documentation`

## Running

To run the dummy app, from the root directory, simply run `npm install` then `npm start`. You'll then find the style-guide application at http://localhost:4200.

## Troubleshooting
* Node Sass does not yet support your current environment => `npm rebuild node-sass`

## Running Tests

### Browser
* `npm start`
* `localhost:4200/tests`

### Cli
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
