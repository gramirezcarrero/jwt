
## JWT Implementation

Para que este ejemplo te funciones debes generar una llave privada y en base a esta  generar la llave publica.

Previantente debes instalar openssl en la terminal. Mac (OS) 
clonar el repositorio y entrar en la carpeta del proyecto.
```
git clone 'url'
cd folder
yarn install

```
## Para instalar Openssl
```
brew install openssl

openssl genrsa -out priv.pem 1024

openssl rsa -in priv.pem -pubout > key.pub

```
# Para correr las pruebas.
```
yarn run test
```
## Para instanciar la clase 
```
import { Security } from './../main.js'
```
## Para obetener un token 
```
var jwt = new Security("");
var token = jwt.singToken();

```
## Para verificar el token 
```
var jwt2 = new Security('');
var token2 =  jwt2.singToken();
var verify_ = jwt2.verifyToken(token2);
```