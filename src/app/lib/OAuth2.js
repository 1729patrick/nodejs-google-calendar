import { google } from 'googleapis';

import googleConfig from '../../config/google';

class OAuth2 {
  constructor() {
    this.init();
  }

  init() {
    const { client_secret, client_id, redirect_uri } = googleConfig;

    this.client = new google.auth.OAuth2(
      client_id,
      client_secret,
      redirect_uri
    );
  }

  setCredentials = refresh_token => {
    this.client.setCredentials({ refresh_token });

    google.options({ auth: this.client });
  };
}

export default new OAuth2();
