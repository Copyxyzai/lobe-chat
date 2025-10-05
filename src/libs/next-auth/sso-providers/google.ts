import Google from 'next-auth/providers/google';

import { authEnv } from '@/envs/auth';

import { CommonProviderConfig } from './sso.config';

const provider = {
  id: 'google',
  provider: Google({
    ...CommonProviderConfig,
    authorization: {
      params: {
        scope:
          'openid https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email openid',
      },
    },
    // TODO(NextAuth ENVs Migration): Remove once nextauth envs migration time end
    clientId: authEnv.GOOGLE_CLIENT_ID ?? process.env.AUTH_GOOGLE_ID,
    clientSecret: authEnv.GOOGLE_CLIENT_SECRET ?? process.env.AUTH_GOOGLE_SECRET,
    // Remove end
  }),
};

export default provider;
