function doSomething() {
  postMessage( test);
}
setTimeout ( "doSomething()", 3000 );
var test = {
  "name": "webworker",
  "version": "1.0.0",
  "description": "will be building a demo app to see WebWorker working",
  "main": "index.html",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/MishraAshish/WebWorker.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/MishraAshish/WebWorker/issues"
  },
  "homepage": "https://github.com/MishraAshish/WebWorker#readme"
}
