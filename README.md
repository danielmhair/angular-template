# angular-template - A Lightweight Angular Template

This project is an application skeleton for a typical [AngularJS](http://angularjs.org/) web app.
You can use it to quickly bootstrap your angular webapp projects and dev environment for these
projects.

The template app doesn't do much, just shows how to wire components together in Angular 1.5.x's way;
using a Component-based Architecture with UI-Router.

## Getting Started
Below are your instructions. Here is an outline:
* 1. Prerequisites
* 2. Clone this repository
* 3. Install dependencies
* 4. Run the App
* 5. Go to the app at the url

### 1. Prerequisites

You need git to clone the angular-template repository. You can get git from:
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize the angular-template. You must have node.js and
its package manager (npm) installed. You can install this from:
[http://nodejs.org/](http://nodejs.org/).

### 2. Clone this Repository
```bash
git clone --depth=1 https://github.com/danielmhair/angular-template.git <your-project-name> # The `depth=1` tells git to only pull down one commit worth of historical data.
cd <your-project-name>
```

### 3. Install dependencies
```bash
npm install
bower install
```
We have two kinds of dependencies in this project: tools for our Node server and Angular Framework code (libraries).  The tools help
us manage the application.

* We get the Node server tools via `npm`, the [node package manager](http://npmjs.org).
* We get the angular code via `bower`, a [client-side code package manager](http://bower.io).

Currently, we only have you do 'npm install'. Normally, you would do 'bower install'
as well, but because Angular's NgComponentRouter is not supported in npm, so we had to
move that directory over to our lib folder. So for now, just do:

You should find that you have one new folder in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/lib` - Should you ever add new libraries via bower, you will see that package appear in this folder.

*Note that the `lib` folder would normally be found under a 'bower_components' folder installed in the root
folder but angular-template changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### 4. Run the App
```bash
npm start
```
### 5. Go to the app at the url:
`http://localhost:3001`.

NOTE: There is a `config.js` file that has those presets to run the app at `localhost:3001`.
Should you need to change the port number, simply change it there.

## Directory Layout

    .
    ├── app                                              # Angular Application
    │   ├── app.js                                       # File that manages the Angular App
    │   ├── app.routes.js                                # Manages the routes within your Angular App
    │   ├── app.css                                      # Main CSS File
    │   ├── lib                                          # Bower components (via 'bower install...') - defined by the .bowerrc config file
    │   ├── assets                                       # Any files you need for your app that don't involve code (images, fonts, css, etc)
    │        ├── fonts                                   # Fonts folder
    │        ├── img                                     # Images folder
    │   ├── services                                     # Services - The facade between Angular and the Server
    │   ├── directives                                   # Directives - Linked directly with your View
    │   └── components                                   # All your components
    │        └── <component-name>                        # A component
    │        │   ├── <component-name>.component.js       # The component's definition object
    │        │   ├── <component-name>.html               # The component's view
    │        │   ├── <component-name>.controller.js      # The component's controller (optional)
    │        │   └── <component-name>.css                # The component's styling (optional)
    │        └── <another-component-name>                # Another component
    ├── node_modules                                    # Your modules installed by npm (when you run 'npm install ...'
    ├── LICENSE
    ├── README.md
    ├── package.json                                    # Config for npm dependencies (the --save attribute will add that dependency to this file)
    ├── bower.json                                      # Config for bower dependencies (the --save attribute will add that dependency to this file)
    ├── .bowerrc                                        # Config file for bower (tells bower where to put its dependencies)
    ├── .gitignore                                      # A file for GIT to know which files to not push up
    ├── config.js                                       # A config file for your app
    ├── server.routes.js                                # The routes you allow your angular app to use
    └── server.js                                       # The server to runs your angular application

## Updating Bower and NPM dependencies

You can update the tool dependencies by running:
```bash
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.

You can update the Angular dependencies by running:

```bash
bower update
```

This will find the latest versions that match the version ranges specified in the `bower.json` file.

## Angular Cheat Sheet

I have made an Angular Cheat sheet to go along with this project.
* ![Angular 1.5 Cheat Sheet](https://raw.githubusercontent.com/danielmhair/angular-template/master/angular-cheatsheet.jpg)

## To-do List
- [ ] Upload Angular Cheatsheet
- [x] Setup Component-based architecture in Angular App
- [x] Create a Robust Service showing the $q and $http service
- [ ] Add components that use UI-Router
- [ ] Add Component lifecycle as an example
- [ ] Convert this to TypeScript and ECMAScript 2016

## Contact

For more information on AngularJS please check out:
* [AngularJS](http://angularjs.org/)
* [GIT](http://git-scm.com/)
* [Bower](http://bower.io)
* [NPM](https://www.npmjs.org/)
* [NodeJS](http://nodejs.org)