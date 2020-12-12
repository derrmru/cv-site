import React from 'react'
import Body from "../templates/Body/Body"
import SEO from '../components/SEO/SEO'
import Snake from '../components/Snake/Snake'
import './snake.css'

const SnakePage = () => {
    return (
        <div className='gatsby-snake-container'>
            <Body>
                <SEO title="Snake - reusable React component" description="Classic mobile game, Snake, built as reusable React Component."/>
                <h1>Snake</h1>
                <h2 className="snake-h2">With React JS</h2>
                <Snake 
                    color1="var(--the-black)"
                    color2="var(--main-color)"
                    backgroundColor="var(--the-white)"
                    />
                <hr />
                <div className="snake-page-text">
                    <strong>Repository:</strong> <a className="snake-links" href="https://github.com/derrmru/react-snake" target="_blank" rel="no-referrer">JS version</a> | <a className="snake-links" href="https://github.com/derrmru/react-snake-404" target="_blank" rel="no-referrer">Typescript version</a>
                    <p><strong>Description: </strong></p>
                    <p><strong>Usage: </strong></p>
                    <pre>
                    <code>

                        <p>
                            &nbsp;import React from 'react';<br />
                            &nbsp;import Snake from './components/Snake/Snake';<br />
                            &nbsp;import './App.css';
                        </p>
                        <p>
                            &nbsp;const App = () =&gt; &#123; <br />
                            &nbsp;return (<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="App"&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Snake <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color1="#248ec2"<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color2="#1d355e"<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;backgroundColor="#ebebeb"<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
                                &nbsp;&nbsp;);<br />
                                &nbsp; &#125;<br />
                        </p>
                        <p>
                            &nbsp;export default App;
                        </p>
                    </code>
                    </pre>
                    <p style={{marginTop: '20px'}}><strong>Props: </strong></p>
                    <div className="snake-table">
                        <div className="table-cell">color1</div><div className="table-cell">string</div>
                        <div className="table-cell">color2</div><div className="table-cell">string</div>
                        <div className="table-cell">backgroundColor</div><div className="table-cell">string</div>
                    </div>
                </div>
            </Body>
        </div>
    )
}

export default SnakePage