import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/home';
import Sidebar from './pages/Sidebar';
import "./assets/css/home.css"
import AdminDashBoard from './pages/Dashboard';
import Cor from './pages/Cor';
import Enroll from './pages/Enroll';
import Ai from './pages/Ai';
import Apply from './pages/Apply';
import Pay from './pages/pay';
import About from './pages/About';
function App() {
  const router= createBrowserRouter([
  
    {
      path:'/login',
      element:<Login/>
    }, 
    {
      path:'/signup',
      element:<Signup/>
    },
    {
      path:'/home',
      element:<Home/>
    },
    {
      path:'/sidebar',
      element:<Sidebar/>
    },
    {
      path:'/Dashboard',
      element:<AdminDashBoard/>
    },
    {
      path:'/Cor',
      element:<Cor/>
    },
    {
      path:'/Enroll',
      element:<Enroll/>
    },
    {
      path:'/Ai',
      element:<Ai/>
    },
    {
      path:'/Apply',
      element:<Apply/>
    },
    {
      path:'/Pay',
      element:<Pay/>
    },
    {
      path:'/about',
      element:<About/>
    }
  
  
  ])
  return (
    <RouterProvider router={router}/>

    
  )
}
export default App
