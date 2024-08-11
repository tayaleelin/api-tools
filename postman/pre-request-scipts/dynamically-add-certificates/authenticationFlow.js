pm.sendRequest({
  url: 'https://example.com/get-token',
  method: 'POST',
  header: {
    'Content-Type': 'application/json'
  },
  body: {
    mode: 'raw',
    raw: JSON.stringify({
      "username": "your_username",
      "password": "your_password"
    })
  }
}, function (err, res) {
  if (err) {
    console.error(err);
    return;
  }

  let jsonResponse = res.json();
  let token = jsonResponse.token;

  // Decode the JWT token to extract necessary claims
  let claims = JSON.parse(atob(token.split('.')[1]));
  pm.environment.set('jwt_token', token);
  pm.environment.set('scope', claims.scope);

  // Determine the certificate based on scope
  let scope = pm.environment.get('scope');

  if (scope.includes('scope1')) {
    pm.environment.set('certificate', 'cert1');
  } else if (scope.includes('scope2')) {
    pm.environment.set('certificate', 'cert2');
  } else {
    pm.environment.set('certificate', 'default_cert');
  }
});