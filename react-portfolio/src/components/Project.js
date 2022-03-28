import React from 'react';

function Project({project}) {

  const styles = {
    card: {
      marginLeft: '1rem',
      width: '22rem'
    }
  };

    return (
    <div className="card mb-4" style={styles.card}>
    <img src={project.img} class="card-img-top" alt="..."/>
    <div class="card-body">
    <h5 class="card-title">{project.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href={project.github} class="card-link">Github</a>
    <a href={project.deployedLink} class="card-link">Deployed Application</a>
  </div>
</div>
)
}


export default Project;
