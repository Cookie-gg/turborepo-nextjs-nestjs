import { setupServer } from 'msw/node';
import { handlers } from '~/libs/msw/handlers';

export const testServer = setupServer(...handlers);
