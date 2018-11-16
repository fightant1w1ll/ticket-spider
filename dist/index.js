'use strict';

var _https = require('https');

var _https2 = _interopRequireDefault(_https);

var _constants = require('./util/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = {
    hostname: _constants.hostname,
    path: '/',
    method: 'GET'
};

var req = _https2.default.request(options, function (res) {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);

    res.on('data', function (d) {
        console.log(d);
    });

    if (res.statusCode === 302) {
        _https2.default.request(res.headers.location, function (res) {
            console.log('statusCode:', res.statusCode);
            console.log('headers:', res.headers);
            res.setEncoding('utf-8');
            res.on('data', function (d) {
                console.log(d);
            });
        }).on('error', function (e) {
            console.error(e);
        }).end();
    }
});

req.on('error', function (e) {
    console.error(e);
});

req.end();