var fs=require("fs");

exports.monitor = function(req, res, next) {
     var file=fs.readFileSync("monitor.html");
     // var file=fs.readFileSync(__dirname+ "/../public/monitor.html");
     res.end(file);
};
