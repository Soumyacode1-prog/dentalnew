import React from 'react';
import './Navbar.scss';
import logo from './../../assets/log.jpeg';
import {Link} from 'react-router-dom';
// import log from './../../assets/1.PNG';
// import  backgroundImg from './../../assets/12475.jpg';

const Navbar = () => {

    const navbarItems = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'About ',
            path: '/about',
        },
        {
            name: 'Services',
            path: '/singleservice',
        },
        {
           name: 'Experts',
            path: '/blogs',
         },
        {
            name: 'Contact ',
            path: '/contact',
        }
    ];

    return (
        <div className='main-nav'>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        {/* Logo */}
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="logo" className='image-main'  />
                            {/* <img src={log} alt="log" /> */}

                            {/* <img src={} alt="logo" /> */}

                        </Link>
                         < div className="container1"> 
                       
                        {/* <div class="font-effect-shadow-multiple">
                            <h3>Max Clinic and Hospital</h3>

                        </div> */}

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* Navbar Link */}
                            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                               { 
                                navbarItems.map (navSingle =>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={navSingle.path}>{navSingle.name}</Link>
                                    </li>
                                    ) 
                                }
                            </ul>
                            
                            {/* Navbar Button */}
                            <div className="theme-btn">
                                <Link to="/contact">Book appointment </Link>
                            </div>
                        </div>
                    </div>
                    </div>
                </nav>
                
            </div>
        </div>
    );
};

export default Navbar;