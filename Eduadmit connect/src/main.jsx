import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from './pages/home.jsx'
// import Login from './pages/login.jsx'/
import Login from './pages/login.jsx'
// import Register from './pages/Signup.jsx' 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Login/> */}
    <App/>
    {/* <Register /> */}
  </React.StrictMode>,
)

