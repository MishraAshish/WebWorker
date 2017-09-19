//https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js;
function doSomething() {  
  //postMessage( test);

  // $.ajax({
  //      url: 'package.json',
  //      dataType: 'json',
  //      success: function(data) {
          
  //         debugger;
  //         postMessage(data);

  //      },
  //     statusCode: {
  //        404: function() {
  //          alert('There was a problem with the server.  Try again soon!');
  //        }
  //      }
  //   });

  ajax('package.json',null, null,null);
}
setTimeout ( "doSomething()", 1000 );
// var test = {
//   "name": "webworker",
//   "version": "1.0.0",
//   "description": "will be building a demo app to see WebWorker working",
//   "main": "index.html",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "repository": {
//     "type": "git",
//     "url": "git+https://github.com/MishraAshish/WebWorker.git"
//   },
//   "author": "",
//   "license": "ISC",
//   "bugs": {
//     "url": "https://github.com/MishraAshish/WebWorker/issues"
//   },
//   "homepage": "https://github.com/MishraAshish/WebWorker#readme"
// }
var ajax = function (url, data, callback, type) {
  var data_array, data_string, idx, req, value;
  if (data == null) {
    data = {};
  }
  if (callback == null) {
    callback = function () { };
  }
  if (type == null) {
    //default to a GET request
    type = 'GET';
  }
  data_array = [];
  for (idx in data) {
    value = data[idx];
    data_array.push("" + idx + "=" + value);
  }
  data_string = data_array.join("&");
  req = new XMLHttpRequest();
  req.open(type, url, false);
  req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  req.onreadystatechange = function () {
    debugger;
    if (req.readyState === 4 && req.status === 200) {
      postMessage(req.responseText);
      debugger;
      return callback(req.responseText);
    }
  };
  req.send(data_string);
  return req;
};