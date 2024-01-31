import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import React from 'react';
import '../assets/css/Ai.css';
import ds from'../assets/images/ds.webp'

import { Link } from 'react-router-dom';
export default function Ai() {
  return (
    <>
    <div className='mb'><img className='img'src={ds} style={{width:'650px',height:'550px'}}></img>
      
      <Card sx={{ minWidth: 650, marginLeft: 8,marginTop:12}}>
        <CardContent>
          <h1 className='cd'>Course Details</h1>
          <ul className='poi'>
          <li>AI Full Form: Artificial Intelligence</li>
  <li>AI Course Level: Post Graduation Degree Course (Master's or PhD) or Certification Programs</li>
  <li>Types of AI Courses: Master's in AI, PhD in AI, AI Certification Programs</li>
  <li>Duration of AI Courses: Master's in AI: Typically 1-2 years; PhD in AI: 3-5 years; Certification Programs: Varies</li>
  <li>AI Admission Process: Admission based on academic qualifications, sometimes with an entrance exam or interview</li>
  <li>Top AI Entrance Exams: GRE (Graduate Record Examination), TOEFL (Test of English as a Foreign Language) for international students</li>
  <li>AI Eligibility: Bachelor's degree in a relevant field (Computer Science, Engineering, Mathematics, etc.)</li>
  <li>AI Fees: Tuition fees vary widely; can range from a few thousand to several tens of thousands of dollars</li>
  <li>Top AI Specializations: Natural Language Processing (NLP), Machine Learning, Computer Vision, Robotics, AI Ethics</li>
  <li>AI Scholarships: Various scholarships are available from universities, organizations, and companies, including Google AI Scholarships, Facebook AI Research (FAIR) Residency, Microsoft AI for Accessibility, etc.</li>
</ul>
          
       
        </CardContent>
        <CardActions>
          <Link to="/Apply">

          <Button size="small"><Link to={'/Apply'}>Apply</Link></Button>
          </Link>
        </CardActions>
      </Card>
    </div>
    </>
  );
}








// import React from 'react';
// import Homepage from './home';
// import Navbar from './Nav';

// export default function Mba() {
//   return (
// <div>
//     <Navbar/>
//     <h1>MBA</h1>
// </div>
//   );
// }