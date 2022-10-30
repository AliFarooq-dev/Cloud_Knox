import * as React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import ProfileAvatar from './ProfileAvatar';
// import './card.css'
const Nav = () => {
  const location = useLocation();
  useEffect(() => {
  }, [location])
  return (
    <>
      <nav className="navbar navbar-expand-sm  navbar-dark bg-dark" >
        <div className="container-fluid">
          <a className="navbar-brand" href='/'><h4  >Cloud Notes</h4></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={`nav-link ${`location.pathname` === '/' ? 'active' : ""} mx-4`} aria-current="page" to="/"><p >Home</p></Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${`location.pathname` === '/about' ? 'active' : ""} mx-4`} to="/about"><p >About</p></Link>
              </li>
              {localStorage.getItem('auth-token') && <li style={{ float: 'right' }} className="nav-item">
                <Link style={{ paddingLeft: '750px' }} className={`nav-link ${`location.pathname` === '/profile' ? 'active' : ""} mx-4`} to="">
                  <ProfileAvatar />
                </Link>
              </li>}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav;