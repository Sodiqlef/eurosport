import { NavLink } from "react-router-dom";
import { useState } from "react";
import './navbar.css'


const NavBar = () => {
    const [hideDrawer, setHideDrawer] = useState(true)
    const hideDrawerHandler = () => {
        setHideDrawer(false)
    }
    const openDrawerHandler = () => {
        setHideDrawer(true)
    }
    return <nav>
        
        <div className="navbar navbar-expand-lg w3-white fixed-top w3-bg-white">
        
            <NavLink to="/" className="navbar-brand" exact><h3>
                <span className="euro">EURO</span>
                <span className="sports">SPORTS</span></h3> 
            </NavLink>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation " onClick={openDrawerHandler}>
                <span className="fas fa-bars"></span>
            </button>
            
            { (hideDrawer) ? <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <hr />
                <ul className="navbar-nav w3-animate-zoom">
                    <li className="nav-item">
                        <NavLink className="nav-link " to="/" exact onClick={hideDrawerHandler}>Home </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link " to="/support" exact onClick={hideDrawerHandler}>Support</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/bet" onClick={hideDrawerHandler} exact>Place Bet </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/b" exact onClick={hideDrawerHandler}>Home </NavLink>
                    </li>
                
                </ul>
            
            </div> : null}
    </div>
</nav>
   
}

export default NavBar;