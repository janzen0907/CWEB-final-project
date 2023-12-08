/*
 * Create form to request access token from Google's OAuth 2.0 server.
 */
// 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 - secret
// 258639327-m885274s4g563cvhf639df70sqt30oo2.apps.googleusercontent.com



export default function oauthSignIn(store: any) {
  // Google's OAuth 2.0 endpoint for requesting an access token
  const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

  // Create <form> element to submit parameters to OAuth 2.0 endpoint.
  const form = document.createElement('form');
  form.setAttribute('method', 'GET'); // Send as a GET request.
  form.setAttribute('action', oauth2Endpoint);

  // Parameters to pass to OAuth 2.0 endpoint.
  const params: any = {
    client_id: '258639327-m885274s4g563cvhf639df70sqt30oo2.apps.googleusercontent.com',
    redirect_uri: 'http://localhost:8080/browse',
    response_type: 'token',
    scope: ['email'],
    include_granted_scopes: 'true',
    state: 'pass-through value',
  };

  // Add form parameters as hidden input values.
  // eslint-disable-next-line guard-for-in
  for (const p in params) {
    const input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', p);
    input.setAttribute('value', params[p]);
    form.appendChild(input);
  }

  // Add form to page and submit it to open the OAuth 2.0 endpoint.
  document.body.appendChild(form);
  form.submit();

  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.substring(1);
    const urlParams = new URLSearchParams(hash);
    const accessToken = urlParams.get('access_token');

    if (accessToken) {
      store.commit('setUser', {
        email: urlParams.get('email'),
        accessToken,
      });
    }
  });
}
