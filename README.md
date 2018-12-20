# Instant React

React boilerplate bundled with [React Router](https://github.com/ReactTraining/react-router), [Material-UI](https://material-ui.com/), layouts, and Redux ([Redux Thunk](https://github.com/reduxjs/redux-thunk) implementing [Ducks](https://github.com/erikras/ducks-modular-redux) with optional [localstorage persistence](https://www.npmjs.com/package/redux-localstorage)). Integrates seemlessly with the [Firebase](https://firebase.google.com/) platform to enable services such as [Firebase Authentication](https://firebase.google.com/docs/auth/), [Cloud Firestore](https://firebase.google.com/docs/firestore/), [Cloud Storage](https://firebase.google.com/docs/storage/) and [Firebase Hosting](https://firebase.google.com/docs/hosting/). Part of the [`instant`](https://cjmyles.github.io/instant/) suite of rapid application development tools and can be used in conjunction with [`instant-express`](https://cjmyles.github.io/instant-express/) if an API/server solution is also required.

Initially created using an _ejected_ version of [`create-react-app`](https://github.com/facebook/create-react-app), the framework has been extended to include the following features out the box:

- [Config](https://www.npmjs.com/package/config)
- [React Router](https://reacttraining.com/react-router/)
- [Material UI](https://material-ui.com/)
- [Redux](https://redux.js.org/)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [Redux Localstorage](https://github.com/elgerlambert/redux-localstorage)
- [Firebase](https://firebase.google.com/) Hosting, Authentication, Cloud Firestore & Cloud Storage
- [Code Splitting](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#code-splitting)
- [Helmet](https://github.com/nfl/react-helmet)
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)
- [Debugging in VSCode](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#debugging-in-the-editor)

## Table of Contents

- [Creating an App](#creating-an-app)
- [Core Concepts](#core-concepts)
  - [Config](#config)
  - [Components & Containers](#components-containers)
  - [Routing](#routing)
  - [Material-UI](#material-ui)
  - [Redux](#redux)
  - [Firebase](#firebase)
  - [Helmet](#helmet)
  - [ESLint & Prettier](#eslint-prettier)
- [Customization](#customization)
  - [`package.json`](#packagejson)
  - [Modifying Config](#modifying-config)
  - [Addding Components & Containers](#adding-components-containers)
  - [Addding Routes](#adding-routes)
  - [Themeing](#themeing)
  - [Styling](#styling)
  - [Layouts](#layouts)
  - [Redux](#redux)
  - [Using Helmet](#using-helmet)
- [FAQ](#faq)

## Creating an App

Similar to [`create-react-app`](https://github.com/facebook/create-react-app), you can create an application using [instant-tools](https://www.npmjs.com/package/instant-tools).

**Please note:** This will clone the [instant-react](https://github.com/cjmyles/instant-react) boilerplate into the specified `my-app` directory, and the optional `-i` parameter will install all dependencies.

### npx

```sh
$ npx instant-tools create react my-app -i
```

### npm

```sh
$ npm i instant-tools -g
$ instant create react my-app -i
```

**Please note:** This will install the [instant-tools](https://www.npmjs.com/package/instant-tools) CLI globally, which will come in useful later on for generating new project files such as components and Redux modules.

It will create a directory called `my-app` inside the current folder. Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
my-app
├── LICENCE
├── README.md
├── node_modules
├── package.json
├── database.json
├── firebase.json
├── firestore.indexes.json
├── firestore.rules
├── .env
├── .eslintrc
├── .gitignore
├── .prettierrc
├── config
│   ├── default.json
│   ├── development.json
│   ├── env.js
│   ├── paths.js
│   ├── polyfills.js
│   ├── production.json
│   ├── webpack.config.dev.js
│   ├── webpack.config.prod.js
│   └── webpackDevServer.config.js
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── scripts
│   ├── build.js
│   ├── firebase.js
│   └── start.js
│   └── test.js
└── src
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── registerServiceWorker.js
    ├── Routes.js
    ├── Theme.js
    ├── config
        └── theme.js
    ├── containers
        ├── About.js
        ├── Home.js
        ├── PageNotFound.js
        ├── Profile.js
        ├── Settings.js
        └── SignIn.js
    ├── layouts
        └── Default.js
    └── redux
        └── modules
            ├── auth.js
            ├── client.js
            └── reducer.js
```

Just like `create-react-app`, `instant-react` assumes the following.

> For the project to build, **these files must exist with exact filenames**:
>
> - `public/index.html` is the page template;
> - `src/index.js` is the JavaScript entry point.
>
> You can delete or rename the other files.
>
> You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
> You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.
>
> Only files inside `public` can be used from `public/index.html`.<br>
> Read instructions below for using assets from JavaScript and HTML.
>
> You can, however, create more top-level directories.<br>
> They will not be included in the production build so you can use them for things like documentation.

Once the installation is done, you can open your project folder:

```sh
cd my-app
```

Inside the newly created project, you can run some built-in commands:

### `firebase use --add`

Associates the project with a Firebase project. You will be provided with a list of Firebase projects to choose from.

**Please note:** This assumes you have created a Firebase project for this purpose and you've logged into Firebase using the [`firebase-tools`](https://firebase.google.com/docs/cli/) CLI.

**Please note:** This is currently a pre-requisite and the application won't load without an associated Firebase project. However, this dependency may be removed in the future.

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code. You will see the build errors and lint warnings in the console.

<p align='center'>
<img src='https://cdn.rawgit.com/marionebl/create-react-app/9f62826/screencast-error.svg' width='600' alt='Build errors'>
</p>

### `npm test`

Runs the test watcher in an interactive mode. By default, runs tests related to files changed since the last commit.

[Read more about testing.](https://facebook.github.io/create-react-app/docs/running-tests)

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed.

### `firebase deploy`

Deploys the `build` folder to the associated Firebase project, via Firebase Hosting. Once deployed you'll see the deployed URL in the console.

### `npm run deploy`

Builds the app for production and deploys the `build` folder to the associated Firebase project. A combination of the `npm run build` and `firebase deploy` commands.

## Core Concepts

### Config

`instant-react` (and in fact most of the [`instant`](https://cjmyles.github.io/instant/) suite) relies heavily on [node-config](https://github.com/lorenwest/node-config). Although the default _ejected_ application generated by `create-react-app` utilizes `.env` files (you can see how to implement them in this [helpful article](https://medium.com/@trekinbami/using-environment-variables-in-react-6b0a99d83cf5)), `instant-react` utilizes `node-config` as it can be used for both client and server-side applications with only slightly varying usage. This ensures consistent behaviour across all the `instant` tools.

With `node-config` we can define a standard set of variables or settings that apply across _all_ environments, and then define a specific set of environment variables than be used to override the defaults.

In our case the settings that apply across _all_ environments are stored in `config/default.json`; local development settings are stored in `config/development.json`; and all production settings are stored in `config/production.json`.

In addition to the settings you define in these files, the Firebase project settings are automatically pulled down via `firebase-tools` when the `npm start` and `npm build` commands are executed.

Please see the [Modfiying Config](#modfiying-config) section for information on how to add custom settings to your application.

### Components & Containers

Although not enforced, `instant-react` adheres to the concept that all reusable React components are stored in `src/components`. This could include atomic elements such as buttons, alerts or progress bars. Components which map to URL routes are stored in `src/containers` and should only be referenced once by your application, in the `src/Routes.js` file (please see [Routing](#routing) for more information). This could include the Homepage, the About page, the Sign-in page and so on. Although similar to components in technical design, containers allow us to separate application pages from the atomic components they utilize.

See the [Components & Containers](#omponents-containers) section for information on how to add new components and containers to your applicaton.

### Routing

The `src/Routes.js` file contains the URL routing configuration and implements [React Router](https://reacttraining.com/react-router/) and [Code Splitting](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#code-splitting).

Routes are split into three different types:

- Authenticated: Access is only granted if the user is _authenticated_, e.g user profile page.
- Unathenticated: Access is only granted if the user is _unauthenticated_, e.g pricing page.
- Applied: Access is granted whether the user is _authenticated_ or _unauthenticated_, e.g. homepage.

Attempted access to an authenticated route by a user that isn't authenticated will result in the user being redirected to `/signin` and the attempted page URL will be appended as a `redirect` url parameter (once successfully signed in, the user will be redirected to that page).

You'll notice another, special, type of route too:

- Core: If authentication has been enabled then this will act as an Authenticated route. If authentication has been disabled then this will act as an Unauthenticated route. This can be useful if you want hide or show all routes in one go without having to alter the `Routes.js` file. Authentication can be enabled or disabled by toggling the `app.useAuth` setting in `config`.

Your application can implement any of these routes.

Containers are imported asyncronously so that they are only loaded into memory when the revelant URL route is triggered. This prevents all of our containers being loaded at once unecessarily.

A default 'catch all' route is also specified which displays the `PageNotFound` container.

See the [Routes](#routes) section for information on how to add new routes to your applicaton.

### [Material UI](https://material-ui.com)

Material UI is enabled by default and is utilized by the core components and containers. On top of this, `instant-react` provides template theming, styling guidelines and layouts.

Material UI utilises the [Google Roboto](https://fonts.google.com/specimen/Roboto) font and [Material Font Icons](https://material.io/tools/icons/) which are referenced in `public/index.html`.

See the [Themeing](#themeing), [Styling](#styling) and [Layouts](#layouts) sections for information on how to customize the look and feel of your application.

### Redux

`instant-react` has been configured to utilise [Redux](https://github.com/reduxjs/redux), [Redux Thunk](https://github.com/reduxjs/redux-thunk) and [Redux Localstorage](https://www.npmjs.com/package/redux-localstorage). We've opted to use the [Ducks Modular Redux](https://github.com/erikras/ducks-modular-redux) pattern for Redux modules.

Redux is useful for large applications and can be integrated into your application with very little effort. Please see the [Using Redux](#using-redux) section for information on how to use Redux in your application.

## Firebase

@todo

## Helmet

[React Helmet](https://github.com/nfl/react-helmet) enables us to modify page headers at runtime, for example the title or meta data attributes.

See [Using Helmet](#using-helmet) for more information on how to customize page headers at runtime.

## ESLint & Prettier

ESLint[ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) have been configured to ensure consistent code formatting and style. ESLint highlights areas of the code that don't adhere to a coding standard, and Prettier automatically fixes code to match the standard. To enable these to work in VSCode, you'll need to install the ESLint and Prettier extensions, as well as modifying your settings so that files can be updated on save.

```json
"editor.formatOnSave": true
```

Prettier is also configured to run as a precommit hook so that any staged files are automatically updated before commit.

For more information please see [this useful article](https://medium.com/technical-credit/using-prettier-with-vs-code-and-create-react-app-67c2449b9d08).

## Customization

### `package.json`

It's recommended that you modify the `package.json` file to customise the `name` and `description` fields for your project (and add a `version` field if necessary - [Semantic Versioning](https://semver.org/) is strongly recommended). This information is accessed by the application and displayed in the `About` page by default (via the `/about` URL route).

### Modifying Config

**Please note**: Sensitive config values should only be committed to the repository after being encrypted. As a consequence, the `development.json` and `production.json` files are excluded by git via the `.gitignore` file by default. Please see [Securing Production Config Files](https://github.com/lorenwest/node-config/wiki/Securing-Production-Config-Files) for more information.

Assuming your `config/default.json` file looks like this

```json
{
  "testing": 123
}
```

It would be possible to access this value from within your React code as follows.

```js
import config from 'config';
console.log(CONFIG.testing);
```

**Please note**: If you add new configuration values to these files and you're running Webpack Dev Server (by virtue of running `npm start`, then you'll need to restart the server in order to view these settings in your application).

**Please note**: The `CONFIG` object has been added to the `globals` option of `.eslintrc` to hide warnings regarding the non-declaration of this variable.

Please see the [`node-config`](https://github.com/lorenwest/node-config) documentation for more information.

### Addding Components & Containers

### Adding Routes

@todo

### Themeing

@todo

### Styling

@todo

### Layouts

@todo

### Using Redux

@todo

### Using Helmet

To use Helmet, simply import the library and wrap your page headers in a `<Helmet>` tag.

```js
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

function() {
  return (
    <Fragment>
      <Helmet>
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div>
        Your content
      </div>
    </Fragment>
  );
}
```

## FAQ

### How does `node-config` know which environment file to use?

The `process.env.NODE_ENV` variable is set to `development` in `package.json` when the `npm start` command is executed, and Firebase automatically sets the `process.env.NODE_ENV` variable to `production` in hosting. The

### How does `node-config` work with Webpack?

`node-config` doesn't work with `Webpack` out of the box because it reads the config files at runtime, which can't be done when the code is running on a browser. Therefore, the `Webpack` config file has been amended to enable config values to be read at runtime (see https://github.com/lorenwest/node-config/wiki/Webpack-Usage#option-2 for more information).

**Please note:** We opted for Option 2 over Option 4 (even though 4 enabled the config `get()` method) as Option 4 causes warnings to be displayed. It may be worth reassessing this in future versions of `node-config`, `Webpack` and `react-scripts`.

## Contributing

We'd greatly appreciate any [contribution](CONTRIBUTING.md) you make.

## License

[MIT](LICENSE)

- [Routing & Code Splitting](#routing--code-splitting)
- [React Helmet](#helmet)
- [ESLint & Prettier](#eslint--prettier)
