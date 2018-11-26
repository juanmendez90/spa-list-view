import axios from 'axios';

const processConfig = (config) => {

  const _config = {
    ...config,
    auth: {
      username: process.env.REACT_APP_API_KEY,
      password: ''
    },
  }

  return _config;
};

class Api {
  static _instance = new Api();

  static getInstance() {
    return Api._instance;
  }

  constructor() {
    if (Api._instance) {
      throw new Error('Instantiation failed: use Api.getInstance() instead of new.');
    }
  }

  get(url, config) {
    return new Promise((resolve, reject) => {
      axios.get(url, processConfig(config))
        .then(({data}) => resolve(data))
        .catch((error) => {
          return reject(error);
        });
    });
  }

  getUrl = url => process.env.REACT_APP_API_URL + url;

}

export default Api.getInstance();
