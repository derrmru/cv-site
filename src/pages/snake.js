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
                <h2>With React JS</h2>
                <Snake 
                    color1="var(--the-black)"
                    color2="var(--main-color)"
                    backgroundColor="var(--the-white)"
                    />
            </Body>
        </div>
    )
}

export default SnakePage