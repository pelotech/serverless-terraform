'use strict';

class ServerlessTerraformProvider {
  constructor(serverless, options) {
    this.options = options;
    this.serverless = serverless;
    this.serverless.setProvider("terraform", this);
  }
}

module.exports = ServerlessTerraformProvider;
