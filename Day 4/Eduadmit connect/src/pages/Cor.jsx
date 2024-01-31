import { Panel } from 'rsuite';
import Image from '../assets/images/cit.jpeg';
import Kct from '../assets/images/KCT.avif';
import kpr from'../assets/images/KPR.jpg';
import { Link } from 'react-router-dom';
const Cor = () => (
    <div>
        <br/><br/><br/>
    <div style={{display:"flex",justifyContent:"space-evenly"}}>
  <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
    <img src={Image}  width='300px'/>
    <Panel header="Coimbatore Institute of Technology">
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
    </Panel>
    
  </Panel>
  <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
    <img src={Kct} height="240" />
    <Panel header="Kumaraguru College of Technology">
      <p>
      <small>
            Address: Saravanampatti, Coimbatore, Tamil Nadu 641006
            <br></br>
            Phone: 099444 13232
            <br></br>
            Courses available:5
        </small>
        <Link to="/Enroll"><p>Learn More</p></Link>

      </p>
    </Panel>
  </Panel>
  <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
    <img src={kpr} height="240" />
    <Panel header="KPR Institute of Engineering and Technology">
      <p>
        <small>
            Address: Avinashi - Coimbatore Road, Arasur, Uthupalayam, Tamil Nadu 641407
            <br></br>
            Phone: 0422 263 5600
            <br></br>
            Courses available:5
        </small>
        <Link to="/Enroll"><p>Learn More</p></Link>

      </p>
    </Panel>
  </Panel>
  </div>
  </div>
);

export default Cor;