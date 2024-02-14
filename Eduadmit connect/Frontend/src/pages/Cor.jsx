// import { Panel } from 'rsuite';
// import Image from '../assets/images/cit.jpeg';
// import Kct from '../assets/images/KCT.avif';
// import kpr from'../assets/images/KPR.jpg';
// import { Link } from 'react-router-dom';
// const Cor = () => (
//     <div>
//         <br/><br/><br/>
//     <div style={{display:"flex",justifyContent:"space-evenly"}}>
//   <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
//     <img src={Image}  width='300px'/>
//     <Panel header="Coimbatore Institute of Technology">
//       <p>
//         <small>
//             Address: Avinashi Rd, Civil Aerodrome Post, Coimbatore, Tamil Nadu 641014
//             <br></br>
//             Phone: 099444 13232
//             <br></br>
//             Courses available:5
//         </small>
//         <Link to="/Enroll"><p>Learn More</p></Link>
//       </p>
//     </Panel>
    
//   </Panel>
//   <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
//     <img src={Kct} height="240" />
//     <Panel header="Kumaraguru College of Technology">
//       <p>
//       <small>
//             Address: Saravanampatti, Coimbatore, Tamil Nadu 641006
//             <br></br>
//             Phone: 099444 13232
//             <br></br>
//             Courses available:5
//         </small>
//         <Link to="/Enroll"><p>Learn More</p></Link>

//       </p>
//     </Panel>
//   </Panel>
//   <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
//     <img src={kpr} height="240" />
//     <Panel header="KPR Institute of Engineering and Technology">
//       <p>
//         <small>
//             Address: Avinashi - Coimbatore Road, Arasur, Uthupalayam, Tamil Nadu 641407
//             <br></br>
//             Phone: 0422 263 5600
//             <br></br>
//             Courses available:5
//         </small>
//         <Link to="/Enroll"><p>Learn More</p></Link>

//       </p>
//     </Panel>
//   </Panel>
//   </div>
//   </div>
// );

// export default Cor;


import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from '../assets/components/CustomNavbar';
import { Link } from 'react-router-dom';
function Cor() {
  return (
    <>
    <CustomNavbar/>
    < div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:30}}>
     <div class="card mb-3" style={{width: "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">  
    <img className="t" style={{width:195,height:230}} src="src\assets\images\cit.jpeg"></img>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Coimbatore Institute of Technology</h5>
        {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
        {/* <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p> */}
        <p>
         <small>
             Address: Avinashi Rd, Civil Aerodrome Post, Coimbatore, Tamil Nadu 641014
             <br></br>
             Phone: 099444 13232
             <br></br>
             Courses available:5
         </small>
         <Link to="/Enroll"><p>Learn More</p></Link>
      </p>
      </div>
    </div>
  </div>
</div>
      <br />
    </div>


    < div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:30}}>
     <div class="card mb-3" style={{width: "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">  
    <img className="t" style={{width:195,height:225}} src="src\assets\images\KCT.avif"></img>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Kumaraguru College of Technology</h5>
        {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p> */}
         <p>
         <small>
             Address: Avinashi Rd, Civil Aerodrome Post, Coimbatore, Tamil Nadu 641014
             <br></br>
             Phone: 099444 13232
             <br></br>
             Courses available:5
         </small>
         <Link to="/Enroll"><p>Learn More</p></Link>
      </p>
      </div>
    </div>
  </div>

  
</div>
      <br />
    </div>

    < div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:30}}>
     <div class="card mb-3" style={{width: "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">  
    <img className="t" style={{width:195,height:195}} src="src\assets\images\KPR.jpg"></img>
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <h5 class="card-title">Amrita College of Technology</h5>
        {/* <h5 class="card-title">KPR Institute of Engineering and Technology</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p> */}
         <p>
         <small>
             Address: Avinashi Rd, Civil Aerodrome Post, Coimbatore, Tamil Nadu 641014
             <br></br>
             Phone: 099444 13232
             <br></br>
             Courses available:5
         </small>
         <Link to="/Enroll"><p>Learn More</p></Link>
      </p>
      </div>
    </div>
  </div>

  < div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:30}}>
     <div class="card mb-3" style={{width: "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">  
    <img className="t" style={{width:195,height:195}} src="src\assets\images\PSg.png"></img>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">PSG College Of Technology</h5>
        {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p> */}
         <p>
         <small>
             Address: Avinashi Rd, Civil Aerodrome Post, Coimbatore, Tamil Nadu 641014
             <br></br>
             Phone: 099444 13232
             <br></br>
             Courses available:5
         </small>
         <Link to="/Enroll"><p>Learn More</p></Link>
      </p>
      </div>
    </div>
  </div>

  
</div>
      <br />
    </div>

    < div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:30}}>
     <div class="card mb-3" style={{width: "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">  
    <img className="t" style={{width:195,height:225}} src="src\assets\images\bit.jpg"></img>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Bannari Amman Institute of Technology</h5>
        {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p> */}
        <p>
         <small>
             Address: Avinashi Rd, Civil Aerodrome Post, Coimbatore, Tamil Nadu 641014
             <br></br>
             Phone: 099444 13232
             <br></br>
             Courses available:5
         </small>
         <Link to="/Enroll"><p>Learn More</p></Link>
      </p>
      </div>
    </div>
  </div>

  
</div>
      <br />
    </div>

  
</div>
      <br />
    </div>
    
    </>
  );
}

export default Cor;