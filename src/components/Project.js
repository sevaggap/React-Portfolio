import React from 'react';

function Project({project}) {

  const styles = {
    card: {
      marginLeft: '1rem',
      width: '22rem'
    },
    img: {
      height: 175,
    }
  };

    return (
    <div className="card mb-4 shadow p-3 mb-5 bg-white rounded" style={styles.card}>
    <img src={project.img} style={styles.img} class="card-img-top" alt="..."/>
    <div class="card-body">
    <h5 class="card-title">{project.name}</h5>
    <a href={project.github} class="card-link btn btn-primary">Github</a>
    <a href={project.deployedLink !== null ? project.deployedLink : project.walkThrough} class="card-link btn btn-primary">{project.deployedLink !== null ? 'Deployed Application' : 'Walkthrough Video'}</a>
  </div>
</div>
)
}


export default Project;
