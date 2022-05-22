import { z } from 'zod';
import { extendApi } from '@anatine/zod-openapi';
import { zUser } from '../user';

export const zAuth = z.object({
  token: extendApi(z.string(), {
    description: 'The token of authentication availables for 2 hours',
    readOnly: true,
    nullable: false,
    type: 'string',
  }),
  refreshToken: extendApi(z.string(), {
    description: 'The refreshtoken of authentication availables for 2 weeks',
    readOnly: true,
    nullable: false,
    type: 'string',
  }),
  user: extendApi(zUser, {
    readOnly: true,
    nullable: false,
  }),
});

export const zLoginInput = z.object({
  uniqueInfo: extendApi(z.string(), {
    description: 'Uid and email are unique value',
    nullable: false,
    type: 'string',
    minLength: 4,
  }),
  password: extendApi(z.string(), {
    description: 'The password of the user',
    nullable: false,
    type: 'string',
    minLength: 8,
  }),
});
