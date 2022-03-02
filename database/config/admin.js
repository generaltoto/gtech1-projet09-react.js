module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c206f8fe999f4129a54d425021c16075'),
  },
});
