function startWorker() {
  if (typeof (Worker) !== "undefined") {
    if (typeof (w) == "undefined") {
      window.w = new Worker("demo_workers.js");
      //window.w2 = new Worker("demo_workers.js");
    } else if (typeof (w) != "undefined") {
      w.terminate();
      w = undefined;
      w = new Worker("demo_workers.js");
      // w2.terminate();
      // w2 = undefined;
      // w2 = new Worker("demo_workers.js");
      document.getElementById("result").innerHTML = "Data cleared....";
    }

    w.onmessage = function (event) {
      document.getElementById("result").innerHTML = JSON.stringify(event.data);
      console.log("We bind data in this " + JSON.stringify(event.data));
    };

    // w2.onmessage = function(event) {
    //     document.getElementById("result").insertAdjacentText("beforeend","Adding New Set -"+JSON.stringify(event.data))
    // };
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
  }
}

function stopWorker() {
  //alert("Button Click Working");
  w.terminate();
  w = undefined;
}