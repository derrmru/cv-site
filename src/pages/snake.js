import React from 'react'
import Body from "../templates/Body/Body"
import SEO from '../components/SEO/SEO'
import Snake from '../components/Snake/Snake'
import './snake.css'

const SnakePage = () => {
    return (
        <div className='gatsby-snake-container'>
            <Body>
                <SEO 
                    title="Snake - reusable React component" 
                    description="Classic mobile game, Snake, built as reusable React Component."
                    />
                <h1>Snake</h1>
                <h2 className="snake-h2">With React JS</h2>
                <Snake 
                    color1="var(--the-black)"
                    color2="rgb(140, 140, 140)"
                    backgroundColor="var(--the-white)"
                    />
                <hr />
                <div className="snake-page-text">
                    <strong>Repository:</strong> <a className="snake-links" href="https://github.com/derrmru/react-snake" target="_blank" rel="noreferrer">JS version</a> | <a className="snake-links" href="https://github.com/derrmru/react-snake-404" target="_blank" rel="noreferrer">Typescript version</a>
                    <p>Available on NPM <a className="snake-links" href="https://www.npmjs.com/package/snake-game-react" target="_blank" rel="noreferrer">here</a>.</p>
                    <p><strong>Description: </strong></p>
                    <p>Classic (and addictive) Snake game - built as a reusable react component.</p>
                    <p><strong>Installation:</strong></p>
                    <pre>
                        <code>
                            &nbsp;npm i snake-game-react --save
                        </code>
                    </pre>
                    <p><strong>Usage: </strong></p>
                    <pre>
                    <code>
                            &nbsp;import React from 'react';<br />
                            &nbsp;import Snake from 'snake-game-react';<br />
                            <p></p>
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
                            <p></p>
                            &nbsp;export default App;
                    </code>
                    </pre>
                    <p style={{marginTop: '20px'}}><strong>Props: </strong></p>
                    <div className="snake-table">
                        <div className="table-cell">color1</div><div className="table-cell">string</div>
                        <div className="table-cell">color2</div><div className="table-cell">string</div>
                        <div className="table-cell">backgroundColor</div><div className="table-cell">string</div>
                    </div>
                </div>
                <hr />
            </Body>
        </div>
    )
}

export default SnakePage