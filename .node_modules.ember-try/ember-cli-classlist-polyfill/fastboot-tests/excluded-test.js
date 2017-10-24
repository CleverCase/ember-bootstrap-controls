/* eslint-env node, mocha */
'use strict';

const expect = require('chai').expect;
const setupTest = require('ember-fastboot-addon-tests').setupTest;

describe('Exclude polyfill', function() {
  setupTest('excluded');

  it('works with FastBoot', function() {
    return this.visit('/')
      .then(function(res) {
        let $ = res.jQuery;
        let response = res.response;

        // add your real tests here
        expect(response.statusCode).to.equal(200);
        expect($('body').length).to.equal(1);
        expect($('h1').text().trim()).to.equal('ember-fastboot-addon-tests');
      });
  });

  it('skips polyfill for modern browsers', function() {
    return this.visit('/assets/vendor.js')
      .then(function(res) {
        let body = res.response.body;

        expect(body.includes('classList.js')).to.be.false;
      });
  });

});