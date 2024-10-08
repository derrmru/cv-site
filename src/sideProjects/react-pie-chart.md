---
type: "side-project"
slug: /projects/react-pie-chart
date: "2021-11-19"
title: "React Pie Chart"
period: ["novembre 2021", "November 2021"]
specialisms: ["reactjs", "D3 JS", "NPM", "Google Maps API"]
repository: "https://github.com/derrmru/react-pie-chart"
description: "A reusable and responsive React Pie Chart component using D3."
---

# Minimal Pie Chart For React

A reusable and responsive React Pie Chart component using D3

## Demo

![demo](https://raw.githubusercontent.com/derrmru/react-pie-chart/master/resources/example.gif)

## Setup

1. In your CLI and once navigated to your React JS project, install with the following command:

```javascript
npm i react-js-pie-chart
```

2. Implement in your app, as per the following example:

```javascript
import PieChart from "react-js-pie-chart"

function App() {
  return (
    <PieChart
      data={data}
      width={300}
      height={300}
      thickness={70}
      colors={["#248ec2", "#1b67d3", "#1d35e2", "rgb(0, 0, 100)", "#000000"]}
      legendPosition="left"
      animation
    />
  )
}

export default App
```

The props are of the following types:

```
data: Array (see below for required structure),
width: number
height: number
thickness: number [0 - 100] (choice of pie or donut)
colors: An array of colors for your pie segments. You must provide at least as many colors as there are data points.
legendPosition: string: 'top' | 'bottom' | 'right' | 'left'
animation: boolean. Include this attribute if you want an animated entrance.
```

## Data Structure Requirements

```javascript
const dataExample = [
  { value: 12, name: "Data Point" },
  { value: 24, name: "Another Data Point" },
  { value: 67, name: "Data Point 3" },
  { value: 18, name: "Yet Another Point" },
  { value: 37, name: "A Fifth Data Point" },
]
```

## Dependencies

None, just use it in your React project.

## That's it!
