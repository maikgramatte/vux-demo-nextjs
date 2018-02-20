const withSass = require('@zeit/next-sass');

module.exports = withSass({
  webpack: (config, { dev }) => {
    if (dev) {
      config.module.rules.push({
        test: /\.(jsx?|gql|graphql)$/,
        loader: 'eslint-loader',
        exclude: ['/node_modules/', '/.next/', '/helper_scripts/'],
        enforce: 'pre',
      });
    }

    return config;
  },
});
