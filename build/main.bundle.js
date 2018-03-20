'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animal = function () {
    function Animal(name, voice) {
        _classCallCheck(this, Animal);

        this.name = name;
        this.voice = voice;

        this._eyes = 2;
    }

    _createClass(Animal, [{
        key: 'speak',
        value: function speak() {
            console.log('The ' + this.name + ' says ' + this.voice + '.');
        }
    }, {
        key: 'eyes',
        get: function get() {
            return this._eyes;
        }
    }]);

    return Animal;
}();

var foo = new Animal('dog', 'woof');
foo.speak(); // The dog says woof.
