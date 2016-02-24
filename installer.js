BowerInstaller = {};
BowerInstaller.install  = function(pkg) {
if (process.env.NODE_ENV == 'development'){
  var bower = Npm.require("bower");
  var path = Npm.require('path');
  var Future = Npm.require("fibers/future");

  dest_dir = process.env.POLYMER_DIR || 'public/bower_components';

  var bowerCommand = function () {
    var fut = new Future();
    argsArray = _.toArray(arguments);
    var command = argsArray.shift();
    bower.commands[command].apply(this, argsArray)
    .on('end', function(res) { fut['return'](res); })
    .on('error', function(err) { console.error(err); fut['return'](null); });
    return fut.wait();
  };

  var dir = path.join(path.relative(process.cwd(), process.env.PWD), dest_dir);
  var localCache = _.values(bowerCommand("list" , null, {offline: true, directory: dir}).pkgMeta.dependencies);
  if (!_.contains(localCache, pkg)){
    console.log('installing ' + pkg);
    bowerCommand("install", [pkg], {save: true}, {directory: dir});
  }
}
}
