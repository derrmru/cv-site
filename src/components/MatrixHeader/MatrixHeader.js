import React, { useEffect, useState } from 'react'
import Decypher from '../Decypher/Decypher'
import TypeOut from '../TypeOut/TypeOut'
import './MatrixHeader.css'

const MatrixHeader = ({ language, words }) => {
    const [begin, setBegin] = useState(true);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (begin) {
            const add = () => {
                setCount(count + 1)
            }
            const timer = setTimeout(add, 1000);
            return () => clearTimeout(timer)
        }
        if (count > 6) setBegin(false)
    }, [setBegin, begin, count])

    return (
        <div className="headlineContainer">
            <div 
                className="ipadBox"
                style={{
                    display: 'flex', 
                    flexDirection: 'row', 
                    justifyContent: 'center'}}
                    >
            <svg width="280" height="200" viewBox="0 0 230 266.66666">
                <g transform="matrix(1.3333333,0,0,-1.3333333,0,266.66667)">
                    <g transform="translate(113.0957,15.0996)">
                    <path 
                        className="screen" 
                        d="M 0,0 -71.865,51.416 -46.202,169.164 32,124 Z" 
                        style={{
                            stroke:'#191924',
                            strokeWidth:1,
                            strokeLinecap:'butt',
                            strokeLinejoin:'miter',
                            strokeMiterlimit:10,
                            strokeOpacity:1}} 
                            />
                    </g>
                    <g>
                    <g clip-path="url(#clipPath22)">
                        <g transform="translate(106.8682,4.1875)">
                        <path 
                            className="border" 
                            d="m 0,0 -68.212,50.194 c -2.472,1.819 -3.65,4.915 -3.013,7.916 l 27.954,131.637 c 0.598,2.677 3.588,4.042 6.002,2.738 l 79.901,-45.173 c 4.081,-2.556 4,-6 2,-13 L 10.522,3.5 C 9.163,-0.986 3.775,-2.778 0,0 Z" 
                            style={{
                                fill:'none',
                                stroke:'#191924',
                                strokeWidth:1,
                                strokeLinecap:'butt',
                                strokeLinejoin:'miter',
                                strokeMiterlimit:10,
                                strokeOpacity:1}} 
                                />
                        </g>
                        <g transform="translate(107.6992,167.4624)">
                        <path 
                            className="camera"
                            d="M 0,0 C -0.354,-0.775 -1.192,-1.152 -1.872,-0.841 -2.552,-0.531 -2.815,0.35 -2.46,1.125 -2.105,1.9 -1.268,2.277 -0.588,1.967 0.091,1.656 0.354,0.775 0,0" 
                            style={{
                                fill:'#191924',
                                fillOpacity:1,
                                fillRule:'nonzero',
                                stroke:'none' 
                            }}
                                />
                        </g>
                        <g transform="translate(75.606,35.1406)">
                        <path 
                            className="homeButton" 
                            d="m 0,0 c -0.54,-1.493 -2.229,-2.252 -3.775,-1.693 -1.546,0.557 -2.361,2.22 -1.822,3.714 0.539,1.495 2.23,2.252 3.775,1.695 C -0.276,3.157 0.54,1.494 0,0 Z" 
                            style={{
                                fill:'none',
                                stroke:'#191924',
                                strokeWidth:1,
                                strokeLinecap:'butt',
                                strokeLinejoin:'miter',
                                strokeMiterlimit:10,
                                strokeOpacity:1}} 
                                />
                        </g>
                        <g transform="translate(64.1167,195.2085)">
                        <path  
                            className="outline" 
                            d="m 0,0 c 0,0 1.427,4.816 8.975,1.797 l 77.408,-44.505 c 0,0 6,-3 3,-13 L 55.017,-189.167 c 0,0 -3.453,-6.881 -10.784,-2.686" 
                            style={{
                                fill:'none',
                                stroke:'#191924',
                                strokeWidth:1,
                                strokeLinecap:'butt',
                                strokeLinejoin:'miter',
                                strokeMiterlimit:10,
                                strokeOpacity:1}} 
                                />
                        </g>
                    </g>
                    </g>
                </g>
            </svg>
            </div>
            <div style={{width: '100%', textAlign: 'center'}}>
                <svg 
                    style={{
                        width: '200px', 
                        height: '10px'
                        }} 
                    viewbox="0 0 200 10" 
                    stroke-width="1"
                    >
                    <path 
                        className="line"
                        d="M 0 0 L 200 0" 
                        fill='transparent' 
                        stroke='black'
                        />
                </svg>
            </div>
            <div>
                {
                    count > 3 ? <h1 className="peterTitle" style={{marginTop: '20px'}}><TypeOut words={'Peter Sweeney'} /></h1> : <h1 className="peterTitle" style={{color: "rgba(0, 0, 0, 0)", marginTop: '20px'}}>Peter Sweeney</h1>
                }
                <div style={{minHeight: '35px'}}>
                {
                    count > 4 ? <>
                        <div className="fade-in">
                            <Decypher words={words} />
                        </div>
                        <div className="fade-in">
                            <Decypher words={language === 'French' ? ['Développeur'] : ['Developer']} />
                        </div>
                    </>
                    :
                    <>
                        <div>
                            <span style={{color: 'rgba(0, 0, 0, 0)'}}>Web</span>
                        </div>
                        <div>
                            <span style={{color: 'rgba(0, 0, 0, 0)'}}>Developer</span>
                        </div>
                    </>
                }
                </div>
            </div>
        </div >
    )
}

export default MatrixHeader