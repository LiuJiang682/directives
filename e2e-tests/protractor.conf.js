exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    '*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8000/app/',

  framework: 'jasmine2',
  
  onPrepare: function() {
	    browser.driver.manage().window().maximize();
	    return browser.get('http://localhost:8000/app'); // Added return statement here
	  },

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
  
};
