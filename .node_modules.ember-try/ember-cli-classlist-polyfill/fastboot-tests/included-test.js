/* eslint-env node, mocha */
'use strict';

const expect = require('chai').expect;
const setupTest = require('ember-fastboot-addon-tests').setupTest;
const fs = require('fs');

describe('Include polyfill', function() {
  setupTest('included');

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

  it('includes polyfill for IE', function() {
    return this.visit('/assets/vendor.js')
      .then(function(res) {
        let body = res.response.body;

        expect(body.includes('classList.js')).to.be.true;
      });
  });

});