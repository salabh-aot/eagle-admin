(function (window) {
  window.__env = window.__env || {};

  // Ideally in our app we have a wrapper around our logger class in the angular front ends to
  // turn on/off the console.log's
  window.__env.debugMode = true;

  // Environment name
  window.__env.ENVIRONMENT = 'local';  // local | dev | test | prod
  window.__env.BANNER_COLOUR = 'red'
  window.__env.API_LOCATION = 'http://localhost:3000';
  window.__env.API_PATH = '/api';
  window.__env.API_PUBLIC_PATH = '/api/public';
  window.__env.KEYCLOAK_CLIENT_ID = 'eagle-admin-console';//'forms-flow-web';
  window.__env.KEYCLOAK_URL = 'https://oidc.gov.bc.ca/auth';//'http://localhost:8080/auth';
  window.__env.KEYCLOAK_REALM = 'eagle';//'forms-flow-ai';
  window.__env.KEYCLOAK_ENABLED = true;

  // Add any feature-toggles
  // window.__env.coolFeatureActive = false;
})(this);
