const prettierOptions = require('./.prettierrc.js')

const isProduction = process.env.NODE_ENV === 'production'

// http://eslint.org/docs/user-guide/configuring
// https://github.com/prettier/prettier#eslint
module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },
  plugins: ['prettier', 'json'],
  rules: {
    camelcase: 0,
    'prefer-promise-reject-errors': 0,
    'prettier/prettier': ['error', prettierOptions],
    'no-console': isProduction ? 2 : 1,
    'no-debugger': isProduction ? 2 : 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': [2, { devDependencies: true }],
    'react/forbid-prop-types': 0,
    'react/no-unused-prop-types': isProduction ? 2 : 1,
    'react/sort-prop-types': [1, { callbacksLast: true }],
    'react/jsx-no-bind': 2,
    'react/jsx-sort-props': [1, { callbacksLast: true }],
    'react/jsx-boolean-value': 2,
    'react/jsx-handler-names': 2,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/destructuring-assignment': 0,
    'react/forbid-foreign-prop-types': 0,
    'react/state-in-constructor': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/label-has-for': 0,
    'no-redeclare': [2, { builtinGlobals: true }],
    'no-underscore-dangle': ['error', { allow: ['_id', '_rev'] }],
    'no-unused-vars': 1,
    'no-shadow': [
      2,
      {
        builtinGlobals: true,
        allow: [
          'location',
          'event',
          'history',
          'find',
          'root',
          'name',
          'close',
          'Map',
          'Text',
          'Request',
          'Image',
          'fetch',
          'Element',
          'status',
          'stop',
          'Range',
          'top',
          'height',
          'Option',
        ],
      },
    ],
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      classes: true,
    },
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
}
