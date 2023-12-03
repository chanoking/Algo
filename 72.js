var name = "window name";

function log() {
  console.log(this.name); // 'this' is always an object.
}

var obj = {
  name: "Ken",
  logName: log,
};

log();
obj.logName();
