const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  module: {
    rules: [
      // ... other rules omitted

      // this will apply to both plain `.scss` files
      // AND `<style lang="scss">` blocks in `.vue` files
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"]
      }
    ],
    plugins: [
      new WorkboxPlugin.InjectManifest({
        swSrc: './src/registerServiceWorker.js',
      })
    ]
  }
  // plugin omitted
};
