# Instant React

A React boilerplate, enabling the quick development and deployment of React applications on the Firebase platform.

Initially created using [`create-react-app`](https://github.com/facebook/create-react-app) the framework has been extended to include the following features out the box:

- [React Router](https://reacttraining.com/react-router/)
- UI frameworks ([Material UI](https://material-ui.com) and [React-Bootstrap](https://react-bootstrap.github.io/))
- Config, via [node-config](https://www.npmjs.com/package/config). The React app has already been 'ejected' to enable this
- [Redux](https://redux.js.org/introduction)
- [Code Splitting](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#code-splitting)
- [Helmet](https://github.com/nfl/react-helmet)
- [Firebase](https://firebase.google.com/)
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)
- [Debugging in VSCode](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#debugging-in-the-editor)

## Table of Contents

- [Installation](#installation)
- [UI Frameworks](#ui-frameworks)
  - [Enabling React Bootstrap](#enabling-react-bootstrap)
  - [Disabling Material UI](#disabling-material-ui)
- [Config](#config)
  - [Accessing Evironment Variables](#accessing-environment-variables)
- [Firebase](#firebase)
- [Folder Structure](#folder-structure)
- [Routing & Code Splitting](#routing--code-splitting)
- [React Helmet](#helmet)
- [ESLint & Prettier](#eslint--prettier)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)

## Installation

### Create Project

There are three ways to create your new React project.

#### Option 1 - Generator (recommended)

Install the [`instant-tools`](https://www.npmjs.com/package/@hbagroup/instant-tools) package from npm, and create a new project from the command line, much like you would with `create-react-app`:

`$ npm i @hbagroup/instant-tools -g`

This will install `instant-tools` globally and enable the `instant` command to be available in terminal.

Create your React application and (optionally) install dependencies (by specifiying the `-i` parameter):

`$ instant create react my-app-name -i`

#### Option 2 - Clone Repository

Clone this repository, remembering to specify a name for your new project (in this case we're calling it `my-app-name`):

`$ git clone https://github.com/JSJInvestments/react-project-template.git my-app-name`

Open the new directory and remove the existing `git` folder - this will ensure that we don't make changes to the React Project Template repository:

```bash
$ cd my-app-name
$ rm -rf .git
```

**Important:** Failure to remove the existing .git directory will result in future git commands updating the core `react-project-template` repository, rather than your new repository.

#### Option 3 - Download Repository

Navigate to the Github repository at https://github.com/JSJInvestments/react-project-template. Click the green `Clone or download` button and click `Download ZIP`.

Extract the zip at the desired location into the directory `my-app-name`.

### Setup Project

#### Change Working Directory

Ensure you're in the root of the project directory:

`$ cd my-app-name`

#### Install Dependencies

Download dependencies to the `node_modules` folder if you haven't already (remember the generator can do this for us):

`$ npm i`

#### Initialise Git

`$ git init`

#### Initialise Firebase

`$ firebase use --add`

The `firebase use` command will provide you with a list of available Firebase projects with which to associate your codebase with (this assumes you've created a Firebase project to assign to your application and you've logged into Firebase using the cli tool `firebase-tools`):

#### `package.json`

Modify the `package.json` file to customise the `name` and `description` fields for your project (and add a `version` field if necessary - [Semantic Versioning](https://semver.org/) is strongly recommended).

### Run the Application

Start the application.

`$ npm start`

Navigate to `http://localhost:3000/` to see your new application up and running (or wait for React to open a browser window automatically).

## UI Frameworks

React Project Template comes with support for
[React-Bootstrap](https://react-bootstrap.github.io/) and
[Material UI](https://material-ui.com). Depending on your project you may choose
to use one, both or neither of these frameworks.

Material UI is enabled by default and it's the recommended framework for any new
projects. However, if you would like to enable React Bootstrap please follow the
instructions below. You may also choose to disable Material UI.

**Please note**: enabling both frameworks may cause collisions or styling
issues.

### Enabling React Bootstrap

**Please note**: React-Bootstrap currently targets Bootstrap v3, and not the
latest version of Bootstrap, v4.

Enable the Bootstrap css in `public/index.html`.

```html
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
  integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
  crossorigin="anonymous"
/>
```

### Disabling Material UI

Material UI utilises the
[Google Roboto](https://fonts.google.com/specimen/Roboto) font and
[Material Font Icons](https://material.io/tools/icons/). These are referenced in
`public/index.html`, and should be removed (or commented out, but then they'd
still be visible when viewing the page source which can be untidy).

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
/>
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
```

You may also choose to remove the Material UI and Material Icons npm packages in
`package.json`.

```json
"@material-ui/core": "^1.4.0",
"@material-ui/icons": "^1.1.0",
```

Remove references to `CssBaseline` from `App.js` - this component acts like `Normalize`, ensuring the app's CSS has a consistent canvas to start from.

```js
import CssBaseline from '@material-ui/core/CssBaseline';
...
<CssBaseline />;
...
```

Remove any Material UI references in the `containers` and `components` folders.

## Config

React Project Template relies on [node-config](https://github.com/lorenwest/node-config), as this negates the need for managing environment variables in different ways depending on the underlying environment. For example, Firebase requires environment variables to be set manually using the Firebase CLI, and Heroku requires environment variables to be set from the project dashboard, whereas locally we might want to use Docker or Terminal to set the variables at run time.

With node-config we can define a standard set of variables or settings that apply across _all_ environments in a `config/default.json` or `config/default.js` file and then override these for each envioronment by defining a `config/test.json` or `config/production.json` file for example.

**Please note**: Sensitive config values should only be committed to the repository after being encrypted. Please see https://github.com/lorenwest/node-config/wiki/Securing-Production-Config-Files for more information.

### Accessing Environment Variables

Right now `node-config` doesn't work with `Webpack` out of the box because it reads the config files at runtime, which can't be done when the code is running on a browser. Therefore, the `Webpack` config file has been amended to enable config values to be read at runtime (see https://github.com/lorenwest/node-config/wiki/Webpack-Usage#option-2 for more information).

**Please note:** We opted for Option 2 over Option 4 (even though 4 enabled the config `get()` method) as Option 4 causes warnings to be displayed. It may be worth reassessing this in future versions of `node-config`, `Webpack` and `react-scripts`.

Assuming your `config/default.json` file looks like this

```json
{
  "testing": 123
}
```

It would be possible to access this value from within your React code as follows

```js
import config from 'config';
console.log(CONFIG.testing);
```

**Please note**: If you add new configuration values to these files and you're running Webpack Dev Server (by virtue of running `npm start`, then you'll need to restart the server in order to view these settings in your application).

**Please note**: The `CONFIG` object has been added to the `globals` option of `.eslintrc` to hide warnings regarding the non-declaration of this variable.

## Firebase

Firebase is enabled by default and it's recommended for any new projects. Firebase has a host of constantly expanding features including, but not limited to:

- Authentication
- Storage
- Database
- Static web hosting (e.g React apps)
- Dynamic web hosting (e.g Node apps)

It's easy to set up, does a lot of the hard work for us (e.g. user management), and provides mechanisms and rules to restrict access to databases and storage. It's also scalable.

### Configuration

React Project Template assumes that you have the following configuration settings (please see [config](#config)).

```json
  "firebase": {
    "projectId": "your project id",
    "apiKey": "your api key",
    "authDomain": "your-project-id.firebaseapp.com",
    "databaseURL": "https://your-project-id.firebaseio.com",
    "storageBucket": "your-project-id.appspot.com",
    "messagingSenderId": "your message sender id"
  }
```

You can find these values in the Firebase console. React Project Template will only set up the services you need, depending on your configuration file. For example, if you provide an `authDomian` the Firebase authorisation module will be initialised. In order to use Firebase in your application simply import the modules that you need from `/firebase`.

```js
import firebase, { auth, storage, firestore } from './firebase';
```

### Serve

In order to serve from the build folder run `npm run serve`. The default username has been set up as follows:

| Username                    | Password   |
| --------------------------- | ---------- |
| test@instantfeedback.com.au | DauGHTIREa |

### Deployment

In order to deploy to Firebase run `npm run deploy`. This will ensure the application is built for production and then deployed to Firebase.

**Please note:** If you run `firebase deploy` it will deploy the `build` folder. Please either run `npm run deploy` to ensure the latest code is used to create the `build` folder, or run `npm run build` before `firebase deploy`.

## Folder Structure

After creation, your project should look like this:

```
my-app/
  build/
  config/
  firebase/
  images/
  node_modules/
  public/
    index.html
    favicon.ico
    manifest.json
  scripts/
    build.js
    start.js
    test.js
  src/
    components/
    containers/
    App.js
    App.test.js
    index.css
    index.js
    registerServiceWorker.js
    Routes.js
  .gitignore
  package.json
  README.md
```

For the project to build, **these files must exist with exact filenames**:

- `public/index.html` is the page template;
- `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

The `src/containers` directory contains React components that should be used as the entry point for routes (please see [Routing](#routing) below. These are not intended to be referenced in the application more than once. The following containers come out the box with React Project Template and should be customised for your own needs.

The `src/components` directory contains low level React components that are intended to be refenced by containers, perhaps even multiple times throughout your application, such as buttons and menus.

## Routing & Code Splitting

React Project Template has been configured to utilise [React Router](https://reacttraining.com/react-router) and [Code Splitting](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#code-splitting). The `Routes.js` file contains code to asynchronously load React components (that we store in the `containers` directory) depending on the matched route path.

For example the `Home` container is loaded using the `asyncComponent()` helper and the `AppliedRoute` component.

```js
const AsyncHome = asyncComponent(() => import('./containers/Home'));
<AppliedRoute path="/" exact component={AsyncHome} props={childProps} />;
```

Although you can choose not to implement components using asynchronous loading, Code Splitting is recommended in order to only load the components required, when they are required.

There are three types of `Route` components.

### AppliedRoute

This component should be used for containers that can be visible to both authenticated and unauthenticated users, for example a homepage.

### AuthenticatedRoute

This component should be used for containers that need to exist behind the authentication wall, for example a user profile or billing page. Navigation to a route that utilises this component will redirect the user to `/signin` and the attempted page URL will be appended as a `redirect` url parameter (once successfully signed in, the user will be redirected to that page).

### UnauthenticatedRoute

This component should be used for containers that exist outside of the authentication wall, for example a signup or pricing page.

## Helmet

[React Helmet](https://github.com/nfl/react-helmet) enables us to modify page headers at runtime, for example the page title or meta data. To use Helmet, simply import the library and wrap your HTML in a `<Hemlmet>` tag.

```js
import React from 'react';
import { Helmet } from 'react-helmet';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Home</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        ...
      </div>
    );
  }
}
```

## ESLint & Prettier

ESLint[ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) have been configured to ensure consistent code formatting and style. ESLint highlights areas of the code that don't adhere to a coding standard, and Prettier automatically fixes code to match the standard. To enable these to work in VSCode, you'll need to install the ESLint and Prettier extensions, as well as modifying your settings so that files can be updated on save.

```json
"editor.formatOnSave": true
```

Prettier is also configured to run as a precommit hook so that any staged files are automatically updated before commit.

For more information please see https://medium.com/technical-credit/using-prettier-with-vs-code-and-create-react-app-67c2449b9d08.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.
