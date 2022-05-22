import { client, mockBackend } from '@cookie-gg/client';

export const backend = process.env.NODE_ENV === 'test' ? mockBackend : client(process.env.NEXT_PUBLIC_BASE_URL);
