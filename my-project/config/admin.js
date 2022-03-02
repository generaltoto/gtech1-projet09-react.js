module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'eb1a6557288c515d1bc06f8aad898d31'),
  },
});
