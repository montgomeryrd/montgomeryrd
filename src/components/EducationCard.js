import React from 'react'

const EducationCard = ({ course, program, website }) => {
    return (
        <div className="lead skills-and-education-card">
            <h5>{course}</h5>
            <ul className="sae-course"><strong>{program}</strong></ul>
            <a href={website} className="text-primary sae-website" target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>
                visit website
            </a>
        </div>
    )
}

export default EducationCard;