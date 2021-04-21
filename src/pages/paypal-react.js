import React from 'react';
import Body from '../templates/Body/Body';
import Seo from '../components/Seo/Seo';
import PayPalButton from 'react-paypal-smart-button';
import {
    ppContainer,
    ppButton
} from './payPalReact.module.css';

const PayPalReact = () => {
    
    return (
        <div>
            <Body>
                <Seo 
                    title="React Paypal Button | A Reusable React Component" 
                    description="Simple, small and easy react component to render a PayPal Button in your react application. Available via NPM."
                    />
                <h1>React Paypal Button</h1>
                <h2>Reusable React Component</h2>
                <div className={ppContainer}>
                    <h2>Links</h2>
                    <strong>Repository:</strong> <a href="https://github.com/derrmru/paypal-smart-button-react" target="_blank" rel="noreferrer">Github</a>
                    <p>Available on NPM <a href="https://www.npmjs.com/package/react-paypal-smart-button" target="_blank" rel="noreferrer">here</a>.</p>

                    <h2>Description</h2>
                    <p>Sometimes you just want a react component to be simple and work straight away. No Config and only a handful of required props.</p>
                    <p>This is a PayPal smart button that just works.</p>

                    <h2>Setup</h2>
                    <p>1. The Hard Bit - if you have not already done so, follow <a href="https://developer.paypal.com/docs/checkout/integrate/?_ga=2.152185595.332577341.1618841693-1038715808.1617958209" target="_blank" rel="noreferrer">PayPal's instructions</a> to get your Client ID</p>
                    <p>2. In your CLI and once navigated to your React JS project, install with the following command:</p>

                    <pre>
                        <code>
                            npm i react-paypal-smart-button
                        </code>
                    </pre>

                    <p>3. Implement in your app, as per the following example:</p>

                    <pre>
                        <code>
                            import PayPalButton from 'react-paypal-smart-button'<br /><br />

                            function App() &#123;<br />
                            return (<br />
                                &nbsp;&nbsp;&lt;PayPalButton <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;price=&#123;100&#125;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;description="YOUR_PRODUCT_DESCRIPTION"<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;clientId="YOUR_PAYPAL_APP_CLIENT_ID"<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;currency="USD"<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;paySubmit=&#123;() =&gt; handlePaypalSuccess()&#125;<br />
                                &nbsp;&nbsp;/&gt;<br />
                            );<br />
                            &#125;<br /><br />

                            export default App;<br />
                        </code>
                    </pre>

                    <p>Props are of the following types:</p>
                    <ul>
                        <li>price: Number</li>
                        <li>description: String</li>
                        <li>clientId: String</li>
                        <li>current: String</li>
                        <li>paySubmit: Function - this will handle a successful payment transaction in your App.</li>
                    </ul>

                    <h2>Example:</h2>
                    <p>As below. If you find the component useful, consider buying me a cup of coffee.</p>
                    <h3 style={{textAlign: 'center', marginTop: '30px'}}>Make A Donation</h3>
                    <div className={ppButton}>
                        <PayPalButton 
                            price={3.5}
                            description={'A cup of coffee for Peter.'}
                            clientId="AUq1bPKfXDXKrxCS9Djp16XrfzPoy0eD2b63F-j9h3Fkq0WE5YDQ73Fli-MdrMIzLs_VEMvrLqC4v-oA"
                            currency="GBP"
                        />
                    </div>
                </div>
            </Body>
        </div>
    )
}

export default PayPalReact