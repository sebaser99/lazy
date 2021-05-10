/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/dist',
  },
  buildOptions: {
    baseUrl: ' ',
  },
  plugins: [
    [
      '@snowpack/plugin-webpack',
      {
        output: {
          filename: 'bundle.js',
        },
      },
    ],
  ],
}
