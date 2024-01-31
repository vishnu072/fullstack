
import CustomNavbar from "../assets/components/CustomNavbar"
import CustomSidebar from "../assets/components/CustomSidebar"
import { Link } from "react-router-dom";
function Home()
{
    return(
        <>
        <div className="home-body">
        <div><CustomNavbar/></div>
        <div>
    <section className="hero">
      <div className="background-image"  />
      <div className="hero-content-area">
        <h1>INSTITUTION</h1> 
        <h3>Opening doors through literacy. Don’t be mean behind the screen.</h3>
       
        <Link to="/Cor" className="btn"><button className="btn-btn">Courses</button></Link>
      </div>
    </section>
   
  </div>
  </div>
    </>
    );
}
export default Home