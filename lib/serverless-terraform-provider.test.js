'use strict';

const { expect } = require('chai');

const ServerlessTerraformProvider = require('./serverless-terraform-provider');

describe('serverless-terraform-provider', () => {
  describe('#constructor', () => {
    it('creates', () => {
      const mockServerless = {
        setProvider: (name, instance) => {}
      };
      const provider = new ServerlessTerraformProvider(mockServerless);
      expect(provider).to.not.be.null;
    });
  });
});
