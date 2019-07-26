var loginPage = function () {}
 
loginPage.prototype = Object.create({}, {
   Username: {get: function () { return element(by.xpath("//input[@id='username']")) } },
    Password: {get: function () { return element(by.xpath("//input[@id='password']")) } },
    signin: {get: function () { return element(by.xpath("//button[@id='login-button']")) } },
    
})

module.exports = loginPage;