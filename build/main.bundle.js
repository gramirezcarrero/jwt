'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Security = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Security = exports.Security = function () {
    function Security(token) {
        _classCallCheck(this, Security);

        this.private = _fs2.default.readFileSync('priv.pem');
        this.public = _fs2.default.readFileSync('key.pub');
        this.token = token;
    }

    _createClass(Security, [{
        key: 'verifyToken',
        value: function verifyToken(token) {
            try {
                var verify = _jsonwebtoken2.default.verify(token, this.public, { algorithm: 'RS256' });
                return verify;
            } catch (err) {
                return String(err);
            }
        }
    }, {
        key: 'decodeToken',
        value: function decodeToken() {
            var decoded = _jsonwebtoken2.default.decode(this.token, this.public, { algorithm: 'RS256' });
            return decoded;
        }
    }, {
        key: 'singToken',
        value: function singToken() {
            var time2 = Math.floor(Date.now() / 1000) + 60;
            var older_token = _jsonwebtoken2.default.sign({
                exp: time2,
                data: 'foobar'
            }, this.private, { algorithm: 'RS256' });
            return older_token;
        }
    }]);

    return Security;
}();
