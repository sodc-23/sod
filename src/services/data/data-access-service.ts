import AjaxService from './ajax-service';

import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

interface HttpError extends AxiosError, AxiosResponse {
  message: string;
}

enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

function deriveError(error: HttpError) {
  if (!error) {
    return new Error('An unknown error occurred');
  } else if (!error.message) {
    return `${error.status} ${error.statusText}`;
  }
  return error;
}

/**
 * HTTP service capable of performing GET and POST requests
 * This service will be injected into domain services (e.g. PatientService, MedicationService)
 * Agnostic of prototype/production
 */
const request = (method: HttpMethod, url: string, data?: any, options?: AxiosRequestConfig) => {
  const defaultOptions: AxiosRequestConfig = {
    url: url,
    method: method,
    responseType: 'json',
  };

  if (data) {
    defaultOptions.data = JSON.stringify(data);
    defaultOptions.headers = {
      'Content-Type': 'application/json',
    };
  }

  let requestOptions = defaultOptions;
  if (options) {
    requestOptions = { ...defaultOptions, ...options };
  }

  // Resolve the original request, and wrap the response in another promise.
  // This allows allows us to peer into the response before giving it back
  // to the caller, which is helpful when handling situations where a response
  // is technically successful from an AJAX perspective (200 OK), but failed
  // server-side due an arbitrary error (i.e. validation error).
  return new Promise((resolve, reject) => {
    AjaxService.request(requestOptions)
      .then(resolve)
      .catch((error) => reject(deriveError(error)));
  });
};

export const get = (url: string, options?: AxiosRequestConfig) => request(HttpMethod.GET, url, undefined, options);

export const post = (url: string, data?: any, options?: AxiosRequestConfig) =>
  request(HttpMethod.POST, url, data, options);
