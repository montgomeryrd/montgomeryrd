import React from 'react'

const EducationCard = ({ course, program, website }) => {
    return (
        <card className="lead skills-and-education-card">
            <h5>{course}</h5>
            <p className="sae-course"><strong>{program}</strong></p>
            <a href={website} className="text-primary sae-website" target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>
                visit website
            </a>
        </card>
    )
}

export default EducationCard;