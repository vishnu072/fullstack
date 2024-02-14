import { Panel } from 'rsuite';
import ai from'../assets/images/Ai.jpeg';
import cse from'../assets/images/cse.jpg';
import eee from'../assets/images/eee.jpg';
import it from'../assets/images/It.jpeg';
import mech from'../assets/images/mech.jpeg';
import { Link } from 'react-router-dom';
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
}
from 'mdb-react-ui-kit';

const Enroll = () => (
    <div>
        <br/><br/><br/>
    <div style={{display:"flex",justifyContent:"space-evenly"}}>
  <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
    <img src={ai}  width='100%'/>
    <br></br>
      
    <Panel header="Artificial Intelligence">
      <p style={{height:300}}>
        <small>
        Artificial Intelligence (AI) is a broad field of computer science focused on creating machines or systems that can perform tasks that would typically require human intelligence. 
        These tasks include learning, reasoning, problem-solving, perception
         
        </small>
      </p>
      <MDBBtn className='mb-4' size='lg '><Link to="/Apply" style={{color:'white'}}> Enroll </Link></MDBBtn>
    </Panel>
  </Panel>
  
  
  <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 245 }}>
    <img src={cse} width='100%' />
    <Panel header="Computer Science and Engineering">
      <p style={{height:260}}>
      <small>
      Computer Science and Engineering which is an academic and professional discipline that encompasses the study of computer systems, 
      programming languages, software development, algorithms, data structures, and various aspects of computer 
            
        </small>
      </p>
      <MDBBtn className='mb-4' size='lg '><Link to="/Apply" style={{color:'white'}}> Enroll </Link></MDBBtn>
    </Panel>
  </Panel>
 
 
  <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
    <img src={eee} width='100%' />
    <Panel header="Electrical and Electronic Engineerin">
      <p style={{height:260}}>
        <small>
        EEE typically stands for "Electrical and Electronic Engineering," 
        which is a branch of engineering that deals with the study and application of electricity, electronics, and electromagnetism. 
        Here are some key aspects related to EEE
        </small>
      </p>
      <MDBBtn className='mb-4' size='lg '><Link to="/Apply" style={{color:'white'}}> Enroll </Link></MDBBtn>
    </Panel>
    
  </Panel>
    
    
    <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
    <img src={it} width='100%' />
    <Panel header="Information Technology">
      <p style={{height:285}}>
        <small>
           
The field of Information Technology (IT) is a dynamic and ever-evolving domain that encompasses the use of computer systems, 
software, networks, and transmit information.These courses cover programming languages (such as Python, Java, C++, etc.)
           
        </small>
      </p>
      <MDBBtn className='mb-4' size='lg '><Link to="/Apply" style={{color:'white'}}> Enroll </Link></MDBBtn>
    </Panel>  
  </Panel>
  
  
  
  <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
    <img src={mech} width='100%' />
    <Panel header="Mechanical Engineering">
      <p style={{height:300}}>
        <small>
Mechanical Engineering is a branch of engineering that applies principles of physics, mathematics, and material science to design, analyze, and manufacture mechanical systems. 
Professionals in this field, known as mechanical engineer
            {/* <br></br>
            Phone: 0422 263 5600
            <br></br>
            Courses available:5 */}
        </small>
      </p>
            <MDBBtn className='mb-4' size='lg '><Link to="/Apply" style={{color:'white'}}> Enroll </Link></MDBBtn>
    </Panel>
  </Panel>
  </div>
  </div>
);

export default Enroll;