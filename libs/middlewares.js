import express from 'express';

/**
 * Injects middleware functions into the provided API object.
 * @param {Object} api - The API object to inject middleware into.
 */
const injectMiddlewares = (api) => {
  api.use(express.json({ limit: '200mb' }));
};

export default injectMiddlewares;
