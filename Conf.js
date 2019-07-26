var jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {         
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //allScriptsTimeout: 120000,
    // framework: 'custom',
    // frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: [
      './Spec/login.js'
    ],
    
   // suites: {
    //  homepage: './publishedmaterial/publishedmaterial.js',
     // search: ['tests/e2e/contact_search/**/*Spec.js',
       // 'tests/e2e/venue_search/**/*Spec.js']
    //},

    onPrepare: function() {
       jasmine.getEnv().addReporter(new jasmine2HtmlReporter({
savePath :'./test',
screenshotsFolder: 'images',
takeScreenshots: true,
takeScreenshotsOnlyOnFailures: true
       }))
        
    },
    
	onPrepare: function() {
        // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
        jasmine.getEnv().addReporter(new HtmlReporter({
           baseDirectory: 'tmp/screenshots'
        }).getJasmine2Reporter());
     },
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 100000,
    //print: function() {}
  },
  }