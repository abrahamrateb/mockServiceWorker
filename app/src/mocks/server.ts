// src/mocks/browser.ts
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// Setup the Mock Service Worker to intercept the requests
export const server = setupServer(...handlers);
