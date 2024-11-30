import createAuth0Client, { Auth0Client } from '@auth0/auth0-spa-js';

let auth0: Auth0Client | null = null;

// Initialize Auth0 client
export async function initAuth(): Promise<Auth0Client> {
  if (!auth0) {
    auth0 = await createAuth0Client({
      domain: 'dev-niaq3be1vf4xc7o2.us.auth0.com', // Replace with your Auth0 domain
      clientId: 'uqylrw77HzyKoqKxpv8OaVYZUfN0E7dc', // Replace with your client ID
      authorizationParams: {
        redirect_uri: `${window.location.origin}`,
      },
    });
  }
  return auth0;
}

// Login function
export async function login(): Promise<void> {
  const client = await initAuth();
  await client.loginWithRedirect();
}

// Logout function
export async function logout(): Promise<void> {
  const client = await initAuth();
  client.logout({ logoutParams: { returnTo: window.location.origin } });
}