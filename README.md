# Typescript and React BMI Calculator

This repository provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Demo

[Application Demo](https://hilarious-torte-968c86.netlify.app/)

## Features

- **TypeScript**: Utilizes TypeScript for static typing and enhanced developer experience.
- **React**: Built with React library for creating interactive user interfaces.
- **Vite**: Uses Vite as the build tool for fast development with HMR (Hot Module Replacement).
- **ESLint**: Includes ESLint for linting and enforcing code quality standards.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```javascript
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
    Replace plugin:@typescript-eslint/recommended to plugin:@typescript-eslint/recommended-type-checked or plugin:@typescript-eslint/strict-type-checked
    Optionally add plugin:@typescript-eslint/stylistic-type-checked
    Install eslint-plugin-react and add plugin:react/recommended & plugin:react/jsx-runtime to the extends list
