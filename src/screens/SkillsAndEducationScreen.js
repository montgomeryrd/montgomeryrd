import React from 'react';
import EducationCard from '../components/EducationCard';

const SkillsAndEducationScreen = () => {
    return (
        <div className="skills-and-education-container">
            <p className="lead home-intro">Skills and Education</p>          
            <ul style={{listStyle: "none"}}>
                <li className="px-2"><i class="fab fa-github"></i></li>
                <li className="px-2"><i class="fab fa-html5"></i></li>
                <li className="px-2"><i class="fab fa-css3"></i></li>
                <li className="px-2"><i class="fab fa-js"></i></li>
                <li className="px-2"><i class="fab fa-node"></i></li>
                <li className="px-2"><i class="fab fa-react"></i></li>
                <li className="px-2"><i class="fab fa-mdb"></i></li>
                <li className="px-2"><i class="fab fa-sass"></i></li>
                <li className="px-2"><i class="fas fa-database"></i></li>
            </ul>
            <section className="education py-3">
                <EducationCard
                    course="Code Fellows of Seattle"
                    program="Full Stack JavaScript"
                    website="https://www.codefellows.org/"
                />
                <EducationCard
                    course="Codewars"
                    program="Code Challenges - 3kyu Member"
                    website="https://www.codewars.com/"
                />
                <EducationCard
                    course="Codecademy"
                    program="HTML, CSS, JS - Web Development"
                    website="https://www.codecademy.com/"
                />
                <EducationCard
                    course="Udemy"
                    program="MERN eCommerce From Scratch"
                    website="https://www.udemy.com/course/mern-ecommerce/"
                />
            </section>
        </div>
    )
}

export default SkillsAndEducationScreen;