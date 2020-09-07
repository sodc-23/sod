import axios, { AxiosRequestConfig } from 'axios';

import ConfigService from '~services/common/config-service';

/**
 * Service for making AJAX requests.
 * Uses Axios (https://github.com/mzabriskie/axios)
 */
const instance = axios.create({
  baseURL: ConfigService.getBaseUrl(),
  timeout: 4000,
});

export default {
  request: (options: AxiosRequestConfig) => instance.request(options),
};
