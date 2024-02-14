import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon
} from 'mdb-react-ui-kit';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

const navigate=useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:8181/api/v1/auth/login', { email, password });
      const { token, user } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      setLoading(false);
      navigate('/home');
    } catch (error) {
      setLoading(false);
      setError('Invalid email or password');
    }
  };

  return (
    <MDBContainer fluid className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
      <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Your Email' id='form2' type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password' id='form3' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>

              {error && <p className="text-danger">{error}</p>}

              <MDBBtn className='mb-4' size='lg' onClick={handleLogin} disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </MDBBtn>
              <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <Link to='/signup'>Register</Link></p>

              {/* <MDBBtn className='mb-4' size='lg' onClick={handleLogin} disabled={loading}>
                {loading ? 'Logging in...' : 'Register'}
              </MDBBtn> */}
            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://wallpaperaccess.com/full/1209535.jpg' fluid/>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Login;
