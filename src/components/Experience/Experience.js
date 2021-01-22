import React from 'react'
import './Experience.css'

const Experience = (props) => {
    return (
        <div key={props.title} className="experience">
            <p>
                <strong>Application:</strong> <a href={props.projectLink} target="_blank" rel="noreferrer">{props.title}</a>
                <br />
                <strong>{props.language === 'French' ? 'Nom du Client' : 'Client'}:</strong> <a href={props.clientLink} target="_blank" rel="noreferrer">{props.client}</a>
                <br />
                <strong>{props.language === 'French' ? 'La Date' : 'Date'}:</strong> {props.date}
                <br />
                <strong>{props.language === 'French' ? 'Spécialités' : 'Specialisms'}:</strong> {props.specialisms.map((specialism, i) => {
                       return i === props.specialisms.length - 1 ? 
                                <span key={"experience" + i}>{specialism}</span> : 
                                    <span key={"experience" + i}>{specialism} | </span>
                    })
                }
                {
                props.repository && 
                    <>
                        <br />
                        <strong><a href={props.repository} target="_blank" rel="noreferrer">
                            {props.language === 'French' ? 'Aller au dépôt' : 'Go To Repository'}
                        </a></strong>
                    </>
                }
            </p>
            <p>________</p>
        </div>
    )
}

export default Experience