import { Link, useLocation } from "react-router-dom";

const NavLinks = ({windowWith}) => {
  const location = useLocation();
  const { pathname } = location;
  const windowWithChecker = windowWith >= 653 ? 
    {borderBottom: "3px solid white"}
    : 
    {borderRight: "3px solid white"};
  
  
  return (
    <ul>
      {/* Home Page link */}
      <li 
        // Here im checking the path of the page if it's the same as the Link path it will add border style to the li element,
        // next im checking the window with of the page that is pass as prop from the NavBar component if it's less than 653px the border style will change
        style={
          pathname == "/" ? 
            windowWithChecker
          :
            null
        }
      ><Link to="/"><span>00</span> Home</Link></li>

      {/* Destination Page link */}
      <li 
        style={
          pathname == "/destination" ? 
            windowWithChecker
          :
            null
        }
      ><Link to="/destination"><span>01</span> Destination</Link></li>

      {/* Crew Page link */}
      <li 
        style={
          pathname == "/crew" ? 
            windowWithChecker
          :
            null
        }
      ><Link to="/crew"><span>02</span> Crew</Link></li>

      {/* Technology Page link */}
      <li 
        style={
          pathname == "/technology" ? 
            windowWithChecker
          :
            null
        }
      ><Link to="/technology"><span>03</span> Technology</Link></li>
    </ul>
  );
};

export default NavLinks;
