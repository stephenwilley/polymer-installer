Package.describe({
  name: 'stephenwilley:polymer-installer',
  version: '0.1.0',
  summary: 'Installer tools for stephenwilley:polymer',
  git: 'https://github.com/stephenwilley/polymer-installer',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('underscore','server');
  api.addFiles('installer.js', 'server');
  api.export('BowerInstaller','server');
});

Npm.depends({
  bower: '1.5.2'
});
