const { defineConfig } = require('@vue/cli-service')

const webpackParams = {
  title: 'Choose the Correct Study Design',
  description:
    'Online step-based wizard tool to help clinical study investigators select the correct study design for their circumstances.',
  site_name:
    'Applets from Clinical Outcomes Research at Washington University in St Louis',
  url: 'https://outcomesresearch.github.io/clinical-research-study-design/',
};

module.exports = defineConfig({
  publicPath:
    process.env.NODE_ENV === 'production' ? '/clinical-research-study-design/' : '/',
  transpileDependencies: true,
  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    }
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      Object.entries(webpackParams).forEach(([key, value]) => {
        args[0][key] = value;
      });
      return args;
    });
  },
})
