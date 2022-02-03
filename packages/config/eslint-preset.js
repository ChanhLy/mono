module.exports = {
  // extends: ['airbnb', 'airbnb-typescript'],
  extends: ['next', 'prettier', 'airbnb', 'airbnb-typescript'],
  settings: {
    next: {
      rootDir: ['apps/web/', 'apps/docs/'],
    },
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'no-console': 'error',
    'react/react-in-jsx-scope': 'off',
  },
};
