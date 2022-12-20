import React from 'react';
const resumeImage = require('../../files/Resume.png');
const resume = require('../../files/Sevag Gaprielian Resume 2022 - Portfolio.pdf');


export default function Resume() {

    const styles = {
        h1: {
          marginLeft: '1rem',
        },
        list: {
            marginLeft: '1rem'
        },
        resume: {
            marginLeft: '1rem'
        },
        img: {
            maginRight: '1rem'
        }
      };

    return (
        <div>
        <div>
        <div class='row mt-3'>
          <div className='col-md-5' style={styles.list}>
          <h1>Here's what I can do: </h1>
          <ul class="list-group mb-4 ">
            <li class="list-group-item">HTML</li>
            <li class="list-group-item">CSS</li>
            <li class="list-group-item">JavaScript</li>
            <li class="list-group-item">NodeJS</li>
            <li class="list-group-item">Object Oriented Programming</li>
            <li class="list-group-item">Express including Express-Sessions</li>
            <li class="list-group-item">SQL</li>
            <li class="list-group-item">mongoDB</li>
            <li class="list-group-item">Progressive Web Applications (PWA)</li>
            <li class="list-group-item">React</li>
            <li class="list-group-item">Implementation of the MERN Stack to build full-stack applications</li>
            <li class="list-group-item">JWT Authentication</li>
            <li class="list-group-item">graphQL using Apollo Sandbox</li>
            <li class="list-group-item">Redux</li>
            <li class="list-group-item">Stripe Payment Platform</li>
            <li class="list-group-item">iOS Application Development</li>
            <li class="list-group-item">Swift</li>
            <li class="list-group-item">Swift UI</li>
            <li class="list-group-item">API Implementation</li>
            </ul>
        </div>
          <div className='col-md-6' style={styles.resume}>
          <h1>Check out my resume!</h1>
            <div className="card mb-4 shadow p-3 mb-5 bg-white rounded" style={styles.card}>
                <img src={resumeImage} style={styles.img} class="card-img-top" alt="Resume"/>
                <div class="card-body">
                <a href={resume}  class="text-decoration-none">View the Full Resume Here</a>
                </div>
            </div>
          </div>
        
      </div>
      </div>
      </div>
    );
  }