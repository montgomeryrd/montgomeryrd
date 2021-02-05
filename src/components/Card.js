import React from 'react'

const Card = ({ image, title, subtitle, text, link }) => {
    return (
        <div className="card">
            <img src={image} alt={title} />
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
                <p className="card-text">{text}</p>
                <a href={link} className="card-link" target="_blank" rel="noreferrer">visit website</a>
            </div>
        </div>
    )
}

export default Card;