import React from 'react'
import './SideProject.css'

const SideProject = (props) => {
    return (
        <div className="side-project">
            <p>
                <strong>Application:</strong> <a href={props.projectLink} target="_blank" rel="noreferrer">{props.title}</a>
                <br />
                <strong>{props.language === 'French' ? 'La Date' : 'Date'}:</strong> {props.date}
                <br />
                <strong>{props.language === 'French' ? 'Spécialités' : 'Specialisms'}:</strong> {props.specialisms.map((specialism, i) => {
                       return i === props.specialisms.length - 1 ? 
                                <span key={'specialisms' + i}>{specialism}</span> : 
                                    <span key={'specialisms' + i}>{specialism} | </span>
                    })
                }
                {
                props.repository && 
                    <>
                        <br />
                        <strong><a href={props.repository} target="_blank" rel="noreferrer">{props.language === 'French' ? 'Aller au dépôt' : 'Go To Repository'}</a></strong>
                    </>
                }
                <br />
                <strong>{props.language === 'French' ? 'La description' : 'Description'}:</strong> {props.description}
            </p>
            <p>________</p>
        </div>
    )
}

export default SideProject