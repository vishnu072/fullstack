import React from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import './login.css'
import { Link } from 'react-router-dom';
function Login() {

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6'style={{marginTop:100}} >

        
          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
           <Link to="/home"> <MDBBtn className="mb-0 px-5" size='lg'>Login</MDBBtn></Link>

            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? 
           <a href="#!" className="link-danger"><Link to="/signup">Register</Link></a></p>
            
          </div>

        </MDBCol>

      </MDBRow>
    </MDBContainer>
  );
}

export default Login;