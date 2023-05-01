module.exports = {
  name: 'tower',
  exposes: {
    './Routes': 'apps/tower/src/app/remote-entry/entry.routes.ts',
  },
};
