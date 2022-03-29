import React from 'react';
import Project from '../Project';
const marvelImage = require('../../files/Marvel-Wiki.png');
const weatherImage = require('../../files/Weather-Dashboard.png');
const passwordImage = require('../../files/Password-Generator.png');
const techImage = require('../../files/Tech-Blog.png');
const socialImage = require('../../files/Social-Network-API.png');
const employeeImage = require('../../files/Employee-Management-System.png');

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
            deployedLink: null ,
            walkThrough:'',
            img: socialImage
        }, 
        {
            name: "Employee Management System",
            github: 'https://github.com/sevaggap/Employee-Management-System',
            deployedLink: null ,
            walkThrough:'',
            img: employeeImage
    
        }
    ];

    const styles = {
        h1: {
          marginLeft: '1rem',
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
