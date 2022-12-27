import React,{useState} from "react";
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from "react-router-dom";


function NavBar(){
  const [toggle, setToggle] = useState(false);
  function handleToggle(){
    setToggle(!toggle)}

  function NavBarList(){
    return(
      <div className="dropDown">
          <nav>
              <li className="Link"><Link to='/'>Home</Link></li>
              <li className="Link"><Link to="/Contacts">Contacts</Link></li>
              <li className="Link"><Link to="/Products">Products</Link></li>
              <li className="Link"><Link to="/Support">Support</Link></li> 
          </nav>

      </div>
    )
  };


  return (
    
        <nav className='Menu'>
          <h2 className="logo">Logo</h2>
          <div className="toggle-icon" >
            <button onClick={handleToggle} className='MenuButton'>{toggle ? <FaTimes/>:<FaBars/>}</button>
            {toggle? <NavBarList/>:''}
          </div> 
        </nav>   
  );
}




export default NavBar;