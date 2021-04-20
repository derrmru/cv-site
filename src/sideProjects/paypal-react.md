---
type: 'side-project'
slug: /projects/paypal-react
date: '2021-04-20'
title: 'React PayPal Smart Button'
projectLink: 'https://thepetersweeney.com'
period: ['avril 2021', 'April 2021']
specialisms: ['reactjs', 'NPM', 'PayPal SDK']
repository: 'https://github.com/derrmru/paypal-smart-button-react'
description: 'Reusable React Component to render Paypal button, available via NPM.'
---

# Paypal Smart Button

Sometimes you just want a react component to be simple and work straight away. No Config and only a handful of required props.

This is a PayPal smart button that just works.

## Setup

1. The Hard Bit - if you have not already done so, follow [PayPal's instructions](https://developer.paypal.com/docs/checkout/integrate/?_ga=2.152185595.332577341.1618841693-1038715808.1617958209) to get your Client ID

2. In your CLI and once navigated to your React JS project, install with the following command:

```javascript
npm i react-paypal-smart-button
```

3. Implement in your app, as per the following example:

```javascript
import PayPalButton from 'paypal-smart-button-react'

function App() {
  return (
      <PayPalButton 
        price={100}
        description="YOUR_PRODUCT_DESCRIPTION"
        clientId="YOUR_PAYPAL_APP_CLIENT_ID"
        currency="USD"
        paySubmit={() => handlePaypalSuccess()}
       />
  );
}

export default App;
```

The props are of the following types:

```
price: number,
description: string,
clientId: string,
currency: string  || this is a three digit currency code e.g. 'EUR', 'GBP' or 'USD'
paySubmit: function || this function will be called following successful payment transaction in your application. Handle the successful transaction however you like.
```

## Dependencies

None, just use it in your react project.

## That's it!

