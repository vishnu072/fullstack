import { Panel } from 'rsuite';
import ai from'../assets/images/Ai.jpeg';
import cse from'../assets/images/cse.jpg';
import eee from'../assets/images/eee.jpg';
import it from'../assets/images/It.jpeg';
import mech from'../assets/images/mech.jpeg';
const Enroll = () => (
    <div>
        <br/><br/><br/>
    <div style={{display:"flex",justifyContent:"space-evenly"}}>
  <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
    <img src={ai}  width='100%'/>
    <br></br>
      
    <Panel header="Artificial Intelligence">
      <p>
        <small>
        Artificial Intelligence (AI) is a broad field of computer science focused on creating machines or systems that can perform tasks that would typically require human intelligence. 
        These tasks include learning, reasoning, problem-solving, perception
            {/* <br></br>
            Phone: 099444 13232
            <br></br>
            Courses available:5 */}
        </small>
      </p>
    </Panel>
  </Panel>
  <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
    <img src={cse} width='100%' />
    <Panel header="Computer Science and Engineering">
      <p>
      <small>
      Computer Science and Engineering which is an academic and professional discipline that encompasses the study of computer systems, 
      programming languages, software development, algorithms, data structures, and various aspects of computer 
            
        </small>
      </p>
    </Panel>
  </Panel>
  <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
    <img src={eee} width='100%' />
    <Panel header="Electrical and Electronic Engineerin">
      <p>
        <small>
        EEE typically stands for "Electrical and Electronic Engineering," 
        which is a branch of engineering that deals with the study and application of electricity, electronics, and electromagnetism. 
        Here are some key aspects related to EEE
        </small>
      </p>
    </Panel>
    
  </Panel>
  <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
    <img src={it} width='100%' />
    <Panel header="Information Technology">
      <p>
        <small>
           
The field of Information Technology (IT) is a dynamic and ever-evolving domain that encompasses the use of computer systems, 
software, networks, and digital resources to manage, process, and transmit information.
           
        </small>
      </p>
    </Panel>
    
  </Panel>
  <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
    <img src={mech} width='100%' />
    <Panel header="Mechanical Engineering">
      <p>
        <small>
Mechanical Engineering is a branch of engineering that applies principles of physics, mathematics, and material science to design, analyze, and manufacture mechanical systems. 
Professionals in this field, known as mechanical engineer
            <br></br>
            Phone: 0422 263 5600
            <br></br>
            Courses available:5
        </small>
      </p>
    </Panel>
    
  </Panel>
  
  </div>
  </div>
);

export default Enroll;