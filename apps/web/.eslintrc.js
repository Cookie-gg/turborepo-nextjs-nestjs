module.exports = {
  extends: ['../../.eslintrc.js'],
  env: { browser: true, es6: true },
  extends: ['next'],
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            patterns: ['../'],
          },
        ],
      },
    },
  ],
};
