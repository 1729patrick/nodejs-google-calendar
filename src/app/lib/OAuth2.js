import { google } from 'googleapis';

import googleConfig from '../../config/google';

class OAuth2 {
  constructor() {
    this.init();
  }

  init() {
    this.client = new google.auth.OAuth2(googleConfig);
  }

  setCredentials = refresh_token => {
    this.client.setCredentials({ refresh_token });

    google.options({ auth: this.client });
  };

  calendar = () => {
    return google.calendar({ version: 'v3', googleConfig });
  };
}

export default new OAuth2();
