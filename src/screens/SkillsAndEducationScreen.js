import React from 'react';
import EducationCard from '../components/EducationCard';

const SkillsAndEducationScreen = () => {
    const codeFellowsCourses = [
        "Code 201: Foundations of Software Development",
        "Code 301: Intermediate Software Development",
        "Code 401: Advanced Software Development in Full-Stack JavaScript"
    ];
    const codecademyModules = [
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
    ];
    const udemyModules = [
        "MERN eCommerce From Scratch",
        "MERN Stack Web Development with Ultimate Authentication"
    ];

    const codefellows = codeFellowsCourses.map((course, index) => <li className="ml-2" key={index}>{course}</li>);
    const codecademy = codecademyModules.map((course, index) => <li className="ml-2" key={index}>{course}</li>);
    const udemy = udemyModules.map((course, index) => <li className="ml-2" key={index}>{course}</li>);

    return (
        <div id="skills-and-education-container">
            <main>
                <h1 className="pt-4 lead skills-title">Skills and Education</h1>          
                <ul className="mt-3 skills-list" style={{listStyle: "none"}}>
                    <li><i className="fab fa-github"></i></li>
                    <li><i className="fab fa-html5"></i></li>
                    <li><i className="fab fa-css3"></i></li>
                    <li><i className="fab fa-js"></i></li>
                    <li><i className="fab fa-node"></i></li>
                    <li><i className="fab fa-react"></i></li>
                    <li><i className="fas fa-database"></i></li>
                    <li><i className="fab fa-mdb"></i></li>
                    <li><i className="fab fa-sass"></i></li>
                </ul>
                <section className="mt-3 education-list">
                    <EducationCard
                        course="Code Fellows of Seattle"
                        program={codefellows}
                        website="https://www.codefellows.org/"
                    />
                    <EducationCard
                        course="Codecademy"
                        program={codecademy}
                        website="https://www.codecademy.com/"
                    />
                    <EducationCard
                        course="Udemy"
                        program={udemy}
                        website="https://www.udemy.com/course/mern-ecommerce/"
                    />
                    <EducationCard
                        course="Codewars"
                        program={<li className="ml-2">Code Challenges - 3kyu Member</li>}
                        website="https://www.codewars.com/"
                    />
                </section>
            </main>
        </div>
    )
}

export default SkillsAndEducationScreen;