import React from 'react';
import EducationCard from '../components/EducationCard';

const SkillsAndEducationScreen = () => {
    const modules = [
        "Learn Git Course",
        "Learn the Command Line Course",
        "Build a Website with HTML, CSS, and Github Pages Skill Path",
        "Web Development Career Path",
        "Laern JavaScript Course",
        "Learn JavaScript Unit Testing Course",
        "Learn Node.js Course",
        "Learn Express Course",
        "Learn jQuery Course",
        "Building Interactive JacaScript Websites Course",
        "Create a Front-End App with React Skill Path",
        "Create a Back-End App with JavaScript Skill Path",
        "Learn React Course",
        "Learn React.js: Part II Course",
        "How to Deploy a Website Course",
        "Learn SQL Course",
        "How to Transform Tables with SQL Course",
        "Learn Node SQLite Course",
        "Learn Navigation Design Course",
        "Learn Color Design Course",
        "Learn Sass Course"
    ]
    const codecademy = modules.map((course, index) => <li className="ml-2" key={index}>{course}</li>);

    return (
        <div className="skills-and-education-container page">
            <p className="lead home-intro">Skills and Education</p>          
            <ul style={{listStyle: "none"}}>
                <li className="px-2"><i className="fab fa-github"></i></li>
                <li className="px-2"><i className="fab fa-html5"></i></li>
                <li className="px-2"><i className="fab fa-css3"></i></li>
                <li className="px-2"><i className="fab fa-js"></i></li>
                <li className="px-2"><i className="fab fa-node"></i></li>
                <li className="px-2"><i className="fab fa-react"></i></li>
                <li className="px-2"><i className="fab fa-mdb"></i></li>
                <li className="px-2"><i className="fab fa-sass"></i></li>
                <li className="px-2"><i className="fas fa-database"></i></li>
            </ul>
            <section className="education py-3">
                <EducationCard
                    course="Code Fellows of Seattle"
                    program={<li className="ml-2">Full Stack JavaScript</li>}
                    website="https://www.codefellows.org/"
                />
                <EducationCard
                    course="Udemy"
                    program={<li className="ml-2">MERN eCommerce From Scratch</li>}
                    website="https://www.udemy.com/course/mern-ecommerce/"
                />
                <EducationCard
                    course="Codewars"
                    program={<li className="ml-2">Code Challenges - 3kyu Member</li>}
                    website="https://www.codewars.com/"
                />
                <EducationCard
                    course="Codecademy"
                    program={codecademy}
                    website="https://www.codecademy.com/"
                />
            </section>
        </div>
    )
}

export default SkillsAndEducationScreen;