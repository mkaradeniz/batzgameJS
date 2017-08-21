# Batzgame – Nach Hause batzen.

This is a JavaScript implementation of the famous [batzgame](https://github.com/schmanu/batzgame) authored by [Schmanu](https://github.com/schmanu/). All commands and texts are in German.

## Features
- Animations! (Also introduction the Batzgame Promod. Skips all animations.)
- Change background & text color.
- Save & load game.
- Settings preserved from session to session.

## Stack
- [React](https://github.com/facebook/react) (Bootstrapped with [create-react-app](https://github.com/facebookincubator/create-react-app).)
- [Semantic UI](https://github.com/Semantic-Org/Semantic-UI-React)
- [Terminal in React](https://github.com/nitin42/terminal-in-react)

## Todo
- The holy trinity: Tests, Types & Documentation. 🤥
- Chapter 2

## Known Issues
- `yarn build` will not work out-of-the box because a dependency of [Terminal in React](https://github.com/nitin42/terminal-in-react) ([camelcase](https://github.com/sindresorhus/camelcase)) will [not use ES5](https://github.com/sindresorhus/ama/issues/446) in their package. One workaround is to manually transpile the index.js in `node_modules\terminal-in-react\node_modules\camelcase`. This is so JS.