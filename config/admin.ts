export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'testsecret'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'testsalt'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'testsalt1'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
