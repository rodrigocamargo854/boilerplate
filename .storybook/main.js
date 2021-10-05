module.exports = {
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-essentials',
           'storybook-addon-next-router',
           '@storybook/preset-typescript',
           '@storybook/addon-actions',
           '@storybook/addon-links',
           '@storybook/addon-knobs/register',
          ],
  babel: async (options) => ({
    ...options,
    plugins: [
      ...options.plugins,
      require.resolve('@babel/plugin-transform-react-jsx')
    ]
  }),
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}
