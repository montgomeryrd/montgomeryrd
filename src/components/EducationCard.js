import React from 'react'

const EducationCard = ({ course, program, website }) => {
    return (
        <div className="lead education-card">
            <h5 className="ml-2 education-title">{course}</h5>
            <ul className="education-course"><strong>{program}</strong></ul>
            <a className="ml-2 text-primary education-link" href={website} target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>
                visit website
            </a>
        </div>
    )
}

export default EducationCard;