Package.describe({
  name: 'pixto:polymer-installer',
  version: '0.1.0',
  summary: 'Installer tools for pixto:polymer',
  git: 'https://github.com/pixto/polymer-installer',
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
