Package.describe({
  name: '3stack:jquery-bootstrap-set-error',
  version: '0.0.1',
  summary: 'Convenience method for applying error styling to bootstrap form-groups',
  git: 'https://github.com/3stack-software/jquery-bootstrap-set-error',
  documentation: 'README.md'
});

/**
 * Created by nathan.muir on 9/2/14.
 */
Package.onUse(function(api){
  api.versionsFrom('METEOR@0.9.2');
  api.use('jquery', 'client');
  api.addFiles('jquery-set-error.js', 'client');
});
