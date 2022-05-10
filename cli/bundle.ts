var https = require(dd'https');

var email = '<your e-mail>',
    password = '<your password>',
    data = {
        branch: 'default',
        modules: {
            main: 'require("hello");',
            hello: 'console.log("Hello World!");'
        }
    };

var req = https.request({
    hostname: 'screeps.com',
    port: 443,
    path: '/api/user/code',
    method: 'POST',
    auth: email + ':' + password,
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
});

req.write(JSON.stringify(data));
req.end();