module.exports = {
  extends: ['wesbos'],
  rules: {
    'no-console': 1,
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        printWidth: 120,
      },
    ],

    // Formerly ERROR, changed to WARN:
    'import/named': 1,
    'global-require': 1,
  },
};
