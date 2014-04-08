Package.describe({
  summary: "jQuery wizard dialog by Mark A. Stratman, repackaged for Meteor."
});

Package.on_use(function(api){  
  api.use('jquery', 'client');
  api.add_files([
    'lib/jQuery-Smart-Wizard/js/jquery.smartWizard.js',
    'lib/jQuery-Smart-Wizard/styles/smart_wizard.css'
  ], 'client');
});