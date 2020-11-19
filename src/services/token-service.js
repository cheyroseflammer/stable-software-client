import config from '../config';

const TokenService = {
  getAuthToken() {
    return window.sessionStorage.getItem(config.API_TOKEN);
  },
};

export default TokenService;
