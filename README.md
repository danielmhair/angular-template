# angular-template - A Lightweight Angular Template

This project is an application skeleton for a typical [AngularJS](http://angularjs.org/) web app.
You can use it to quickly bootstrap your angular webapp projects and dev environment for these
projects.

The template contains a sample AngularJS application and is preconfigured to install the Angular
framework and a bunch of development and testing tools for instant web development gratification.

The template app doesn't do much, just shows how to wire components together in Angular 1.5.x's way;
using a Component-based Architecture.


## Getting Started

To get you started you can simply clone the angular-template repository and run:
```
npm install
```

### Prerequisites

You need git to clone the angular-template repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize angular-template. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone angular-template

Clone the angular-template repository using [git][git]:

```
git clone https://github.com/danielmhair/angular-template.git
cd angular-template
```

If you just want to start a new project without the angular-template commit history then you can do:

```bash
git clone --depth=1 https://github.com/danielmhair/angular-template.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies

We have two kinds of dependencies in this project: tools for our Node server and Angular Framework code (libraries).  The tools help
us manage the application.

* We get the Node server tools via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

Currently, we only have you do 'npm install'. Normally, you would do 'bower install'
as well, but because Angular's NgComponentRouter is not supported in npm, so we had to
move that directory over to our lib folder. So for now, just do:

```
npm install
```

You should find that you have one new folder in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/lib` - Should you ever add new libraries via bower, you will see that package appear in this folder.

*Note that the `lib` folder would normally be found under a 'bower_components' folder installed in the root
folder but angular-template changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:3000`.

Keep in mind, there is a config.js file that has those presets to run the app at localhost:3000.
Should you need to change the port number, simply change it there.


## Directory Layout

    .
    ├── app                 # Angular Application
    │   ├── app.js              # File that manages the Angular App
    │   ├── app.routes.js       # Manages the routes within your Angular App
    │   ├── app.css             # Main CSS File
    │   ├── lib             # Bower components (via 'bower install...') - defined by the .bowerrc config file
    │   ├── assets          # Any files you need for your app that don't involve code (images, fonts, css, etc)
    │        ├── fonts          # Fonts folder
    │        ├── img            # Images folder
    │   ├── services                    # Services - The facade between Angular and the Server
    │   ├── directives                  # Directives - Linked directly with your View
    │   └── components                  # All your components
    │        └── <component-name>           # A component
    │        │   ├── <component-name>.component.js      # The component's definition object
    │        │   ├── <component-name>.html              # The component's view
    │        │   ├── <component-name>.controller.js     # The component's controller (optional)
    │        │   └── <component-name>.css               # The component's styling (optional)
    │        └── <another-component-name>   # Another component
    ├── node_modules        # Your modules installed by npm (when you run 'npm install ...'
    ├── LICENSE
    ├── README.md
    ├── package.json        # Config for npm dependencies (the --save attribute will add that dependency to this file)
    ├── bower.json          # Config for bower dependencies (the --save attribute will add that dependency to this file)
    ├── .bowerrc            # Config file for bower (tells bower where to put its dependencies)
    ├── .gitignore          # A file for GIT to know which files to not push up
    ├── config.js           # A config file for your app
    ├── server.routes.js    # The routes you allow your angular app to use
    └── server.js           # The server to runs your angular application

## Updating Angular

Previously we recommended that you merge in changes to angular-template into your own fork of the project.
Now that the angular framework library code and tools are acquired through package managers (npm and
bower) you can use these tools instead to update the dependencies.

You can update the tool dependencies by running:

```
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.

You can update the Angular dependencies by running:

```
bower update
```

This will find the latest versions that match the version ranges specified in the `bower.json` file.

## Angular Cheat Sheet

I have made an Angular Cheat sheet to go along with this project.
* ![alt tag](https://raw.githubusercontent.com/danielmhair/angular-template/master/angular-cheatsheet.jpg)

## To-do List
- [ ] Upload Angular Cheatsheet
- [x] Setup Component-based architecture in Angular App
- [ ] Create a Robust Service showing the $q and $http service
- [ ] Create 2 Controllers; 1 in the component.js file, and the other in a separate file
- [ ] Add Component lifecycle for an example
- [ ] Convert this using TypeScript and ECMAScript 2016

## Contact

For more information on AngularJS please check out:
* [AngularJS](http://angularjs.org/)
* [GIT](http://git-scm.com/)
* [Bower](http://bower.io)
* [NPM](https://www.npmjs.org/)
* [NodeJS](http://nodejs.org)