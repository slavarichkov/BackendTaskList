class OK extends Error {
    constructor(message) {
      super(message);
      this.statusCode = 200;
    }
  }
  
  module.exports = OK;