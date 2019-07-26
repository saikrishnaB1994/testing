var username =  element(by.css("*[id='username']"));
var password =  element(by.css("*[id='password']"));
var loginbtn = element(by.css("*[id='login-button']"));
var loginbuyer = function() {
    username.sendKeys('TestJasonBuyer');
     password.sendKeys('TestJasonBuyer');
     loginbtn.click();
     browser.driver.sleep(3000);
 }
 module.exports = loginbuyer;