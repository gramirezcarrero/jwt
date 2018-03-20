'use strict'
import { Security } from './../main.js'

import { expect } from 'chai'


describe('jwt', function () {
    it('Jwt instance an token string', function () {
        var jwt = new Security("");
        var token = jwt.singToken();
        expect(token).to.be.a('string');
    })
})
describe('Verify ==> token expired', function () {
    it('verify token expired', function () {
        var token_ = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MjE1MDMzNDIsImRhdGEiOiJmb29iYXIiLCJpYXQiOjE1MjE1MDMyODJ9.QQU8dDyzjp5m71-OaeUJhAL0wbHkfa4OKfP6sFeMX3D5xBcR1We4DP8qCtHu3KSRV7EVpV9zXfMZYRmCKRxJ3Pn8nr1wC1xTwKqvkWIMwFncHCXGbIncd7O1sXlp-lwMwkw0-bV_pp0V1spPyWTrOVQ2II5_p5k8KcLGAmwy3Pw';
        var jwt2 = new Security('');
        var verify_ = jwt2.verifyToken(token_);
        expect(verify_).to.be.a('string');
    })
})
describe('Return object with a keys', function () {
    it('verify spect a "object" with object and keys "data, exp, iat" ', function () {
        var jwt2 = new Security('');
        var token2 =  jwt2.singToken();
        var verify_ = jwt2.verifyToken(token2);
        expect(verify_).to.be.an('object').to.have.all.keys('data','exp','iat');

    })
})
