import React from 'react'

const Tile = (props) => {
    return (
        <a href={props.project.site} target="_blank" rel="noreferrer">
            <div className="tile" style={{background: `url(${props.project.thumb})`, backgroundSize: 'cover', backgroundPosition: 'center'}} rel="noopener">
                <div className="tile-text">
                    <p>{props.project.name}</p>
                    <small>{props.project.desc}</small>
                </div>
            </div>
        </a>
    )
}

export default Tile
