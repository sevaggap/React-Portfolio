import React from 'react';

export default function Resume() {

    const styles = {
        h1: {
          marginLeft: '1rem',
        },
        list: {
            marginLeft: '1rem'
        }
      };

    return (
        <div>
        <div>
        <div class='row mt-3'>
          <div className='col-md-6' style={styles.list}>
          <h1 class='resume-list'>Here's what I can do: </h1>
          <ul class="list-group ">
            <li class="list-group-item">HTML</li>
            <li class="list-group-item">CSS</li>
            <li class="list-group-item">JavaScript</li>
            <li class="list-group-item">NodeJS</li>
            <li class="list-group-item">Express including Express-Sessions</li>
            <li class="list-group-item">Express including Express-Sessions</li><li class="list-group-item">SQL</li>
            <li class="list-group-item">Progressive Web Applications (PWA)</li>
            <li class="list-group-item">React</li>
            <li class="list-group-item">Implementation of the MERN Stack to build full-stack applications</li>
            <li class="list-group-item">JWT Authentication</li>
            <li class="list-group-item">GraphQL using Apollo Sandbox</li>
            <li class="list-group-item">Redux</li>
            <li class="list-group-item">Stripe Payment Platform</li>

            
        </ul>
          <div className='col-md-6'>
            
          </div>
        </div>
      </div>
      </div>
      </div>
    );
  }