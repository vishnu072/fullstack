
import React from "react";
import '../assets/css/home.css'
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import CustomNavbar from "../assets/components/CustomNavbar";
const Home=()=>
{
    return(
        <>
        <CustomNavbar/>
        <div >       
        </div>
        <div style={{backgroundColor:"beige"}}>
        <div style={{flexDirection:'row',display:'flex'}}>
           <img className="t" style={{width:800,height:750}} src="src\assets\images\isometric-university-concept-background_52683-10124-removebg-preview (1).png"></img>
           <div style={{marginLeft:50}}>
            <br></br>
            <br></br>
            <br></br>
            <h1 className="ft" >Gateway to Higher Education: Our College Admission Portal</h1>
            <br></br>
            <br></br>
            <p className="rt">Unlock your potential and open the doors to endless opportunities. Welcome to our college admission portal.</p>
            <p className="rt">Your journey to higher education starts here. Begin your adventure with us.</p>
            <br></br>
            <br></br>
            <div style={{flexDirection:'row',display:'flex'}}>

           <NavLink to="/cor"> <button className="innovation-button">
      Apply
    </button></NavLink>
    <div style={{marginLeft:30}}>
        <NavLink to="/about">
    <button className="innovation-button"> 
     Learn more
    </button>
        </NavLink>
    </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
           </div>
        </div>
        </div>
        <div>
        </div>
       <Footer/>
        </>
    );
};

export default Home;
