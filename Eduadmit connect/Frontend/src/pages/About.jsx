import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import CustomNavbar from '../assets/components/CustomNavbar';
const About = () => {
  return (
    <div>
      <header>
        <CustomNavbar />
      </header>
      {/* <main> */}
        <div>
          <div style={{ paddingTop: 150, paddingBottom: 200 ,position:'relative'}}>
            <h2 style={{ color: "white", marginLeft: "2em", fontWeight: 800, fontStyle: "italic" }}>
              <img src='src\assets\images\Reimagining-College-Access-common-image-1200x628.jpg' 
              style={{ width: '100%', height: '120%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex:-1}}
              ></img>
              <br></br>
              {/* college admission portal  */}
            </h2>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="haku" style={{ flexDirection: 'row', display: 'flex', paddingRight: 100, paddingLeft: 50, flexWrap: 'wrap' }}>
          <div style={{ flexDirection: 'row', display: 'flex', width: '100%' }}>
            <div style={{ justifyContent: 'space-between', width: '100%', marginTop: '3em', height: '100%', textAlign: 'center' }}>
              <h2 style={{ color: "black" }}>college admission portal </h2>
              <br></br>
              <p style={{ textAlign: 'justify', fontWeight: 'bolder', fontSize: '20px' }}>Welcome to our college admission portal! We are thrilled to introduce you to our institution, a place where academic excellence meets vibrant community engagement. At [College Name], we are committed to nurturing a diverse and inclusive environment that fosters intellectual curiosity, personal growth, and lifelong learning. Our admission portal serves as your gateway to exploring the myriad opportunities available to you as a prospective student. Whether you're seeking a rigorous academic program, vibrant campus life, or supportive community, you'll find it all here at [College Name]. Join us as we embark on a journey of discovery and transformation together.

, </p>
            </div>
          </div>
          <div style={{ flexDirection: 'row', display: 'flex', width: '100%' }}>
            <div style={{ justifyContent: 'space-between', width: '100%', marginTop: '3em', height: '100%', textAlign: 'center' }} >
              <h2 style={{ color: "black" }}>Our Mission:</h2>
              <br></br>
              <p style={{ textAlign: 'justify', fontWeight: 'bolder', fontSize: '20px' }}>
              At [College Name], we are committed to fostering a diverse and inclusive learning environment where students can thrive academically, socially, and personally. Our mission is to empower students to reach their full potential and become responsible global citizens.
              </p>
            </div>
          </div>
          <div style={{ flexDirection: 'row', display: 'flex', width: '100%' }}>
            <div style={{ justifyContent: 'space-between', width: '100%', marginTop: '3em', height: '100%', textAlign: 'center' }} >
              <h2 style={{ color: "black" }}>Admissions Process:</h2>
              <br></br>
              <p style={{ textAlign: 'justify', fontWeight: 'bolder', fontSize: '20px' }}>
              We understand that the college admissions process can be daunting, and we are here to help every step of the way. Explore our admissions requirements, application deadlines, and financial aid options to begin your journey with us.
              </p>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div style={{ flexDirection: 'row', display: 'flex', backgroundColor: '#f2f2f2' }}>
          <div style={{ justifyContent: 'space-between', width: '50%', height: 500, }}>
            {/* <img
              style={{ width: '90%', height: '100%' }}
              src={vision}
              alt='HAKUNAMA TATA'
            /> */}
          </div>

          <div style={{ justifyContent: 'space-between', width: '50%', height: '100%', textAlign: 'center', marginRight: 20 }}>

            <h1 style={{ color: 'black', fontSize: 30, textAlign: 'center', textTransform: 'uppercase', fontWeight: 'bolder' }}>VISION FOR THE FUTURE</h1>
            <br></br>
            <p style={{ fontSize: 15, textAlign: 'justify' }}>At .T2V. , we envision a future where every birthday celebration becomes a timeless masterpiece, a unique reflection of individuality, joy, and unforgettable moments. As pioneers in the realm of birthday event management, our vision extends beyond the ordinary, aiming to redefine the way people experience and celebrate life's milestones.</p>
            <p style={{ fontSize: 15, textAlign: 'justify' }}>As trends evolve and new ideas emerge, our commitment to innovation remains unwavering. We envision staying at the forefront of event design, introducing groundbreaking themes that captivate imaginations and set the stage for unforgettable celebrations. From classic and timeless concepts to cutting-edge and trendy themes, our goal is to create experiences that leave a lasting impression.</p>
            <p style={{ fontSize: 15, textAlign: 'justify' }}>Looking forward, we envision leveraging cutting-edge technology to enhance the overall event experience. From interactive elements and virtual components to streamlined planning processes, our goal is to embrace technology in a way that elevates and modernizes the birthday event management industry.</p>
          </div>
        </div>
      <br>
      </br>
      <br></br>
    
  <h1 style={{textAlign:"center"}}>What people say about us</h1><br/><br/>
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
    {/* <Comp Image={image12} name="Louis Hamilton" content="From concept to celebration, Time2Vibe exceeded my expectations, creating a personalized and enchanting birthday event."/>
    <Comp Image={image12} name="Thomas Shelby" content="Grateful for Time2Vibe's dedication to making my birthday uniquely special – they truly know how to create joyful moments."/>
    <Comp Image={image12} name="Peter De Paul" content="Professionalism, creativity, and a genuine love for what they do – Time2Vibe made my birthday a day to remember."/> */}
  </div>
<br></br>
<br></br>
<br></br>
        
<footer>
        {/* Quick Links */}
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/home">Home</a></li>
            {/* <li><a href="/about">About Us</a></li> */}
            <li><a href="/about">Services</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contacts">Contact</a></li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h3>Get in Touch</h3>
          <p>Follow us on social media for updates and more!</p>
          <div style={{display:'flex'}}>
          <a href="" style={{marginLeft:"5%"}}>< FaTwitter style={{fontSize:'30px'}}/></a><br></br>
          <a href="" style={{marginLeft:"5%"}}><FaInstagramSquare style={{fontSize:'30px'}} /></a><br></br>
          <a href="" style={{marginLeft:"5%"}}><FaFacebook style={{fontSize:'30px'}} /></a><br></br>
          <a href="" style={{marginLeft:"5%"}}><IoLogoWhatsapp style={{fontSize:'30px'}}/></a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div>
          <p>&copy; 2024 Time2Vibe. All rights reserved.</p>
        </div>
      </footer>
      {/* </main> */}
    </div>
  );
};

export default About;