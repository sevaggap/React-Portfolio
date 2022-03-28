import React from 'react';
import Project from '../Project';

function  Portfolio () {
    const projects = [
        {
            name: "Marvel Comics Dashboard",
            github: 'https://github.com/sevaggap/Marvel-Comics-Wiki' ,
            deployedLink: 'https://sevaggap.github.io/Marvel-Comics-Wiki/'
        },
        {
            name: "Weather Dashboard",
            github: 'https://github.com/sevaggap/Weather-Dashboard' ,
            deployedLink: 'https://sevaggap.github.io/Weather-Dashboard/'
        },
        {
            name: "Password Generator",
            github: 'https://github.com/sevaggap/Password-Generator' ,
            deployedLink: 'https://sevaggap.github.io/Password-Generator/'
        },
        {
            name: "Tech Blog",
            github: 'https://github.com/sevaggap/Tech-Blog' ,
            deployedLink: 'https://nameless-basin-17829.herokuapp.com/'
        },
        {
            name: "Social Network API",
            github: 'https://github.com/sevaggap/Social-Network-API',
            deployedLink: 'https://nameless-basin-17829.herokuapp.com/'
        }, 
        {
            name: "Employee Management System",
            github: 'https://github.com/sevaggap/Employee-Management-System',
            deployedLink: 'https://nameless-basin-17829.herokuapp.com/'
    
        }
    ];

    return (
        <div className='col-md-12'>
            <h1>Portfolio</h1>
            <Project project={projects[0]}/>
            <Project project={projects[1]}/>
            <Project project={projects[2]}/>
            <Project project={projects[3]}/>
            <Project project={projects[4]}/>
            <Project project={projects[5]}/>
        </div>
    ) 
}

export default Portfolio;
