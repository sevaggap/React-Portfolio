import React from 'react';

export default function Contact() {
  
  const styles = {
    h1: {
      marginLeft: '1rem',
      
    },
    button: {
      marginTop: '1rem'
    },
    form: {
      marginLeft: '1rem'
    },
    h4: {
      fontSize: '1rem',
    },
    h5: {
      fontSize: '1rem',
      fontStyle: 'italic',
      color: 'grey'
    }
  };
  
  return (
    <div>
      <h1 style={styles.h1}>Reach out, I'd love to chat!</h1>
      <div className='row'>
        <div className='col-md-6'>
        <form style={styles.form}>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="name" class="form-control" id="name" aria-describedby="emailHelp"></input>
            <label for="email">Email address</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp"></input>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <input type="message" class="form-control" id="exampleInputPassword1"></input>
          </div>
          <button class="btn btn-primary" style={styles.button}>Submit</button>
        </form>
        </div>
        <div className='col-md-6'>
          <h4 style={styles.h4}>The portfolio does not have a back end, and thus can't process the submission of forms.</h4>
          <h5 style={styles.h5}> If you would like to contact me, please email me at the email listetd below!</h5>
          <p>Email: sevag.gaprielian@gmail.com</p>
        </div>
      </div>
    </div>
  );
}