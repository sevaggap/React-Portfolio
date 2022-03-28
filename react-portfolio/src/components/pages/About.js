import React from 'react';
const headshot = require('../../images/Headshot.jpg')

export default function About() {

  const styles = {
    h1: {
      marginLeft: '1rem',
    }
  };

  return (
    <div>
      <h1 style={styles.h1}>Welcome to my Portfolio!</h1>
      <div class='d-flex align-items-center row row-cols-2'>
      <div class='col-md-4 mt-4'>
        <img src={headshot} style={{height:'500px', marginLeft: 40, borderRadius: 250}} />
      </div>
      <div class='col-md-7'>
      <p>
      Hi! My name is Sevag Gaprielian and I am an entry-level full stack developer.
      I completed my bachelor’s degree in Aerospace Engineering at Ryerson University in 2019.
      After starting my career in 2020, I suffered a severe knee injury. I did not let this roadblock stop me, so after being completely healed, I enrolled in two Professional Certificate Courses through Coursera in Project Management and Data Analytics. Throughout the data course, I developed a passion for software development which led me to enroll in the UofT SCS Coding Bootcamp. I am eager to enter the software field and am confident that my abilities to pivot, learn new technologies, and build credibility, will help me transition to a role in the software field.
      </p>
      </div>
      </div>
    </div>
  );
}