
var baseurl = require('../Lib/base');
var loginPage = require('../POM/loginPage');
describe('Verify login with valid credentials', ()=> {
    var LoginPage
    beforeEach(()=> {
        LoginPage = new  loginPage()
        browser.ignoreSynchronization = true; // for non-angular websites
        browser.driver.manage().window().maximize();
        baseurl();
        browser.driver.sleep(2000);
LoginPage.Username.sendKeys('santosh.kumar@crestsolution.com');
browser.driver.sleep(1000);
LoginPage.Password.sendKeys('Crest@123');
browser.driver.sleep(1000);
LoginPage.signin.click();
browser.driver.sleep(3000);
    });
    
    //testcase 1
it("Verify login with valid credentials", ()=> {


})

})

