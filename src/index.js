import https from 'https';

import { hostname, account } from './util/constants';

const options = {
    hostname: hostname,
    path: '/',
    method: 'GET'
};

let req = https.request(options, (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);

    res.on('data', (d) => {
        console.log(d);
    });

    if (res.statusCode === 302) {
        https.request(res.headers.location, (res) => {
            console.log('statusCode:', res.statusCode);
            console.log('headers:', res.headers);
            res.setEncoding('utf-8');
            res.on('data', (d) => {
                console.log(d);
            });
        }).on('error', (e) => {
            console.error(e);
        }).end();
    }
});

req.on('error', (e) => {
    console.error(e);
});

req.end();