import jwt from 'jsonwebtoken';
import fs from 'fs'

export class Security {
    constructor(token) {
        this.private = fs.readFileSync('priv.pem');
        this.public = fs.readFileSync('key.pub');
        this.token = token;
    }
    verifyToken(token) {
        try {
            let verify = jwt.verify(token, this.public, { algorithm: 'RS256' })
            return verify
        } catch (err) {
            return String(err)
        }
    }
    decodeToken() {
        let decoded = jwt.decode(this.token, this.public, { algorithm: 'RS256' })
        return decoded
    }
    singToken() {
        var time2 = Math.floor(Date.now() / 1000) + (60)
        var older_token = jwt.sign({
            exp: time2,
            data: 'foobar'
        }, this.private, { algorithm: 'RS256' });
        return older_token
    }
}
