import React from 'react';
import Body from '../templates/Body/Body';
import Seo from '../components/Seo/Seo';
import AutoComplete from 'places-autocomplete-react';
import {
    acContainer
} from './autocomplete.module.css';

const AddressComplete = () => {
    
    return (
        <div>
            <Body>
                <Seo 
                    title="Places Autocomplete React | A Reusable React Component" 
                    description="Simple, small and easy react component to incorporate predictive and autocomplete functionality to the address section in your form. Available via NPM."
                    />
                <h1>Places Autocomplete React</h1>
                <h2>Reusable React Component</h2>
                <div className={acContainer}>

                    <h2>Description</h2>
                    <p>This is a reusable React component for quickly and easily adding an Address section to your forms.</p>
                    <p>It uses Google Maps Places Autocomplete service to predict and autocomplete your input fields.</p>
                    <p>This component offers a fast setup and inherits the styling of your app.</p>

                    <h2>Example:</h2>
                    <div>
                    <AutoComplete 
                        placesKey="AIzaSyAkuPHNHz8Ki1KV6n6iI1-EFVIC3ZAm0QY"
                        inputId="address"
                        setAddress={(addressObject) => console.log(addressObject)}
                        />
                    </div>

                    <h2>Links</h2>
                    <strong>Repository:</strong> <a href="https://github.com/derrmru/address-autocomplete" target="_blank" rel="noreferrer">Github</a>
                    <p>Available on NPM <a href="" target="_blank" rel="noreferrer">here</a>.</p>

                    <h2>Setup</h2>
                    <p>1. Setup the APIS:</p>
                    <p><a href="https://developers.google.com/maps/documentation/javascript/places#enable_apis">Enable Google Maps Places API</a></p>
                    <p><a href="https://developers.google.com/maps/documentation/javascript/get-api-key">Get and API Key</a></p>
                    <p>2. In your CLI and once navigated to your React JS project, install with the following command:</p>

                    <pre>
                        <code>
                            npm i places-autocomplete-react
                        </code>
                    </pre>

                    <p>3. Implement in your app, as per the following example:</p>

                    <pre>
                        <code>
                            import AutoComplete from 'places-autocomplete-react'<br /><br />

                            function App() &#123;<br />
                            return (<br />
                                &nbsp;&nbsp;&lt;AutoComplete <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;placesKey="AIzaSyAkuPHNHz8Ki1KV6n6iI1-EFVIC3ZAm0QY"<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;inputId="address"<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;setAddress=&#123;(addressObject) =&gt; console.log(addressObject)&#125;<br />
                                &nbsp;&nbsp;/&gt;<br />
                            );<br />
                            &#125;<br /><br />

                            export default App;<br />
                        </code>
                    </pre>

                    <p>Props are of the following types:</p>
                    <ul>
                        <li>placesKey: string - this is your api key. The component will handle the rest.</li>
                        <li>inputId: string - using distinct id's will allow you to use multiple instances of this component in your form.</li>
                        <li>setAddress: function - the formatted address and input field state is made available to the parent component via this function. It's up to you what you do with it.</li>
                    </ul>
                </div>
            </Body>
        </div>
    )
}

export default AddressComplete