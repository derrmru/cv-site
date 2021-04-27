---
type: 'side-project'
slug: /projects/react-navigation-menu'
date: '2021-04-27'
title: 'React Navigation Menu'
projectLink: 'https://thepetersweeney.com'
period: ['avril 2021', 'April 2021']
specialisms: ['reactjs', 'css-animation', 'NPM']
repository: 'https://github.com/derrmru/react-navigation-menu'
description: 'A straightfroward navigation menu built as a React component, available via NPM.'
---

## React Navigation Menu

A straightfroward navigation menu built as a React component.

```javascript
npm i react-navigation-menu
```

## Implementation

Implement in your app, as per the following example:

```javascript
import Menu from 'react-navigation-menu'

function App() {
  return (
      <Menu 
        brandColor1="rgb(21, 14, 49)"
        brandColor2="#248ec2"
        items={[
          ['Home', '/'],
          [
            'About', 'dropdown', [
              ['About Me', '/about-me'],
              ['About My Work', '/about-my-work']
            ]
          ],
          [
            'Shop', 'dropdown', [
              ['Pre-Fabricated', '/pre-fabricated'],
              ['Bespoke Apparel', '/bespoke-apparel']
            ]
          ],
          ['Contact', '/contact']
        ]}
        telephone="+33 7 87 20 70 34"
        email="peter@thepetersweeney.com"
        />
  );
}

export default App;
```

The navigation items are passed via props as an array. For principle items pass a tuple, with the following indexes:

1. index 0: the name to appear in nav
2. index 1 the url to link to

For a dropdown item with subitems, pass an array with the following:

1. index 0: Your Nav Item Title
2. index 1: 'dropdown'
3. index 2: An array of tuples in the same format as principle items.

## Dependencies

None, just use it in your react project.

## That's it!