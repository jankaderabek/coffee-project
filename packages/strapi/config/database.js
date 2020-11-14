module.exports = ({ env }) => ({
  defaultConnection: env('DATABASE_CONNECTION', 'default'),
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', '.tmp/data.sqlite'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
    production: {
      connector: 'mongoose',
      settings: {
        uri: env('DATABASE_URI'),
      },
      options: {
        ssl: true,
      },
    },
  },
});
