import https from 'https';
import * as util from './util/constants';

const getOptions = {
    headers:{
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36",
    },
    hostname: util.hostname,
    method: 'GET'
};

getOptions.path = util.kyfwUrl.captchaImage;

let req = https.request(getOptions, (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);
    res.setEncoding('utf-8');
    res.on('data', (d) => {
        console.log(d);
    });
});
req.on('error', (e) => {
    console.error(e);
});
req.end();