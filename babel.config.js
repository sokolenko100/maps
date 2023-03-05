module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js', //?
          '.android.tsx',
          '.ios.js', //?
          '.ios.tsx',
        ],
        root: ['./src'],
        alias: {
          '@base': './src/base',
          '@assets': './src/assets',
          '@bridges': './src/bridges',
          '@components': './src/components',
          '@constants': './src/constants',
          '@helpers': './src/helpers',
          '@wrappers': './src/wrappers',
          '@interfaces': './src/interfaces',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@redux': './src/redux',
          '@test-mocks': './__mocks__',
          '@test-helpers': './__helpers__',
        },
      },
    ],
  ],
};
