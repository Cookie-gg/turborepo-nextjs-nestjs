import { Backend, backend } from './backend';

export const client = (baseURL?: string): Backend => {
  return backend(baseURL);
};

export * from '~/apis/@types';

export { mockBackend } from '~/mocks';
