Package.describe({
  summary: "Meteor smart package for meteor-wkhtmltopdf."
})

Npm.depends({
  "wkhtmltopdf": "0.1.4"
});

Package.on_use(function (api, where) {
  api.add_files('wkhtmltopdf-server.js', 'server');
  api.export(['wkhtmltopdf'], 'server');
});
