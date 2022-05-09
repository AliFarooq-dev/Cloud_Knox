import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
const Nav = () => {
  const Navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {    
  }, [location])
  const handleLogout=()=>{
    localStorage.removeItem('auth-token');
    Navigate('/login');
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href='/'>iNoteBook</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className= {`nav-link ${`location.pathname`==='/'?'active':""}`} aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${`location.pathname`==='/about'?'active':""}`} to="/about">About</Link>
          </li>
          
            {(!localStorage.getItem('auth-token'))?<li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Profile
            </a><ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><Link className="dropdown-item" to="/login">Login</Link></li>
              <li><Link className="dropdown-item" to="/sign">signup</Link></li>
            </ul></li> : <Button  onClick={handleLogout}>Logout</Button>}
        </ul>
      </div>
    </div>
  </nav>
  </>
  )
}

export default Nav;