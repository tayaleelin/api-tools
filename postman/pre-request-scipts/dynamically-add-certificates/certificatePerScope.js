let scope = pm.environment.get('scope');

if (scope.includes('scope1')) {
  pm.environment.set('certificate', 'cert1');
} else if (scope.includes('scope2')) {
  pm.environment.set('certificate', 'cert2');
} else {
  pm.environment.set('certificate', 'default_cert');
}