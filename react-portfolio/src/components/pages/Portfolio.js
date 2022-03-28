import React from 'react';
import Project from '../Project';
const marvelImage = require('../../images/Marvel-Wiki.png');
const weatherImage = require('../../images/Weather-Dashboard.png');
const passwordImage = require('../../images/Password-Generator.png');
const techImage = require('../../images/Tech-Blog.png');
const socialImage = require('../../images/Social-Network-API.png');
const employeeImage = require('../../images/Employee-Management-System.png');

function  Portfolio () {
    const projects = [
        {
            name: "Marvel Comics Dashboard",
            github: 'https://github.com/sevaggap/Marvel-Comics-Wiki' ,
            deployedLink: 'https://sevaggap.github.io/Marvel-Comics-Wiki/',
            img: marvelImage
        },
        {
            name: "Weather Dashboard",
            github: 'https://github.com/sevaggap/Weather-Dashboard' ,
            deployedLink: 'https://sevaggap.github.io/Weather-Dashboard/',
            img: weatherImage
        },
        {
            name: "Password Generator",
            github: 'https://github.com/sevaggap/Password-Generator' ,
            deployedLink: 'https://sevaggap.github.io/Password-Generator/',
            img: passwordImage
        },
        {
            name: "Tech Blog",
            github: 'https://github.com/sevaggap/Tech-Blog' ,
            deployedLink: 'https://nameless-basin-17829.herokuapp.com/',
            img: techImage
        },
        {
            name: "Social Network API",
            github: 'https://github.com/sevaggap/Social-Network-API',
            deployedLink: 'https://nameless-basin-17829.herokuapp.com/',
            img: socialImage
        }, 
        {
            name: "Employee Management System",
            github: 'https://github.com/sevaggap/Employee-Management-System',
            deployedLink: 'https://nameless-basin-17829.herokuapp.com/',
            img: employeeImage
    
        }
    ];

    const styles = {
        h1: {
          marginLeft: '1rem',
          width: '22rem'
        }
      };
    
    return (
        <div className='mt-3'>
            <h1 style={styles.h1}>Portfolio</h1>
            <div className='col-md-12 mt-5'>
            <div className='row row-col-3 justify-content-center'> 
            <Project project={projects[0]}/>
            <Project project={projects[1]}/>
            <Project project={projects[2]}/>
            <Project project={projects[3]}/>
            <Project project={projects[4]}/>
            <Project project={projects[5]}/>
            </div>
            </div>
        </div>
    ) 
}

export default Portfolio;
