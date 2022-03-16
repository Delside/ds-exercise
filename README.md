# ds-exercise

This PoC was created to show how we can create reusable UI component in React with CSS variables located in seperate file.

## Used technologies

- React 17.0.2
- styled-components 5.3.3
- Jest 27.5.1
- Languages: JavaScript, HTML, CSS

## How to run ds-exercise

After downloading, execute npm install in terminal:
```
npm install
```

Then run by executing npm start:
```
npm start
```
Open http://localhost:3000 to view it in the browser.

## Folder Structure

After downloading and running project. The folder structure should look like this:
```
ds-exercise/
  node_modules/
  public/
    index.html
  src/
    components/
      Button.js
      theme.js
    tests/
      Button.test.js
    index.js
  .gitattibutes
  .gitignore
  package-lock.json
  package.json
  README.md
```

## Important files

### `index.html`

index.html is necessary. It is the page template.

### `index.js`

JavaScript entry point. PoC base with implemented **Button** component with several variants. 

⚠️ All additional code, containing onClick events and div-s with hardcoded CSS style were made to enhance UX and show that the PoC is working.

### `Button.js`

Button.js is main component, made with styled-components library. Containing component style made with CSS-in-JS technique. 

All global variables, containing colors, font family, sizes and other is imported from theme.js object. For button sizes differentiation I used ```css``` and ```attrs``` methods.

### `theme.js`

theme.js is component containing global variables used to style styled-components with CSS-in-JS techique. It is used in Button.js component and Button.test.js file. With object structure, CSS properties could be easily editable and reusable in local styles implemented in next styled components.

### `Button.test.js`

Button.test.js is a file containing 10 unit tests. Tests check rendered Button component styling properties.

## Why styled-components?

I used styled-components for a couple of reasons:
- styled-components allow to make truly **reusable and flexible components**, with CSS-in-JS and dynamic styling it is much easier to create many components without code duplication and with additional props
- styled-components provides better performance, as browser don't need to load styles if component is not rendered
- styled-components works well with React Native
- styled-components always create unique class names to avoid bugs
