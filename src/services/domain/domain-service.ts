import { get, post } from '~services/data/data-access-service';
import { randomNumber } from '~services/util';

const fakeError = new Error('Fake Error!');

/**
 * Example of utilizing DataAccessService
 */
export const fetchFoo = (id: string) => get(`/foo/${id}`);
export const postFoo = (id: string, data: any) => post(`/foo/${id}`, data);

/**
 * Mock an API response
 * @param doReject
 */
export const fetchMockData = (doReject = false) => {
  const delay: number = randomNumber();
  const payload = { delay };
  return new Promise((resolve, reject) => {
    setTimeout(() => (doReject ? reject(fakeError) : resolve(payload)), delay * 1000);
  });
};
