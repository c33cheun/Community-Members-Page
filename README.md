This webpage project was built as part of a take home front-end coding challenge by Christopher Cheung.

## Table of Contents

- [Overview](#overview)
- [Libraries](#libraries)
- [Assumptions and Design Choices](#design)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)

## Overview

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

For more info on Create React App and a more up to date guide on it specifically look: [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

To run this project, run `npm install` to first install npm modules, and then run `npm start` to run locally at http://localhost:3000.
To build for deployment run `npm run build`.
For more details see the [Available Scripts](#available-scripts) section.

## Libraries

This project used many libraries and frameworks, which are listed below:
- ReactJS
- npm
- create-react-app
- tachyons
- mootools
- babel-polyfill

ReactJS was used because of my familiarity with it. I prefer the object oriented modular components that it brings to the table.
Using it allowed for each one of the elements on the page to be a component that has its own properties and state, adding
structure to JavaScript front-end.

npm was used as a package manager, allowing me to bring in node modules as needed. Coming from an object-oriented programming
background, the ability to import and bring in other libraries and modules for specific purposes is very useful.

create-react-app is a Facebook project used to bring up a React application quickly. For the purpose of this programming challenge,
this was the best option to quickly create a React app while minimizing the set-up process of my dev environment.

tachyons is a CSS library, built with the purpose of minimizing the amount of CSS that needs to be written. Using it allowed me to
quickly write responsive CSS without having to write custom CSS styles for each element.

mootools was a JavaScript library included in the initial version of this programming challenge. I installed the npm module of it in order
to use the parseQueryString library from it. Normally, it would be used to implement more object-oriented features in JavaScript, such as classes.

babel-polyfill is an npm package installed in order to add compatibility for some ECMAScript 6 features to older browsers, such as IE11.

## Assumptions and Design Choices

When building this front-end webpage, I approached it from the perspective of wanting to build it as object-oriented as I could
while still in JavaScript. To do this, I used ReactJS as well as many new ECMAScript 6 features, such as JavaScript classes and imports.
As a side effect of using these newer techniques, I risked losing compatibility with Internet Explorer 11. I developed the page, knowing this
downside, and hoping that use of babel-polyfill could overcome the compatibility problems. I made the assumption that either Internet Explorer 11 would be updated with newer ECMAScript features, or it would be phased out entirely by Edge.

Another design decision I made was to rewrite the included apiClient.js. The initial version of the file was written using the Class from Mootools.
However, I had trouble integrating Mootools into my ReactJS application. As a result, I decided to rewrite the apiClient.js file using ECMAScript 6
JavaScript classes. In doing this, I made the assumption that it was allowed to rewrite the apiClient file.

There are some slight font and sizing differences between the mockup and the final product. While implementing the mockup, I reasoned that
while a mockup is the intended end result, it's still a mockup, and lacks the dynamic rendering and interactivity of a webpage. As long as differences between the two are not substantial, and in a real project, the product owner gives the final say, then making the actual webpage exact to the mockup is fine. That said, it is important that sizing, positioning and attention to detail is followed, but I don't believe the webpage is expected to be pixel perfect.

Lastly, I took liberties in the implementation of the mobile version of UI components since there was no mockup. One particular problem area was the mobile version of the header menu. I decided to go with a drop down, however, I am displeased with the final result.

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
