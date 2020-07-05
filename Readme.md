# React template

## Toolchain from scratch

A JavaScript build toolchain typically consists of:
- A package manager for easily installing or updating third-party packages. This projects uses [Yarn](https://yarnpkg.com/).
- A bundler to bundle all modules together into small packages to optimize load time. This project uses [Webpack](https://webpack.js.org/).
- A transpiler to turn modern JavaScript code into old JavaScript that still works in older browsers. This project uses
  [Babel](https://babeljs.io/).

### Babel

- `babel-core`: main Babel package; does most of the heavy lifting
- `babel-cli`: compiles files from the command line
- `preset-env`: Preset to transform ES6+ into more traditional JavaScript
- `preset-react`: Preset to transform React's JSX into valid JavaScript

### Webpack

Webpack uses *loaders* to process different types of files for bunding. It also provides a handy development server. See
[webpack.config.js](webpack.config.js).

## Directory Map

- `public` handles all static assets, including the `index.html` file used by React to render the application
- `source` contains the rest of the application source code
