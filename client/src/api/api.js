import { Api } from 'web-soft-client';

/**
 * @type {import('./api-types').API}
 */
export let api = {};

export const loadApi = async (config = {}) => {
  const loadedApi = new Api(config);
  await loadedApi.build();
  api = loadedApi;
};