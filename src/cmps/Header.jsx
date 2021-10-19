import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Logo from '../assets/imgs/logo.png'
// import DarkMode from '../cmps/DarkMode'

import { useDispatch, useSelector } from 'react-redux';
import { toggleTemp } from '../store/actions/preferencesAction';
import { setToast } from '../store/actions/toastAction';

function Header() {
    const { isCelsius } = useSelector(state => state.preferenceModule)
    const dispatch = useDispatch();
    const [hamburgerOpen, setHamburgerOpen]=useState(false)

    const toggleTemperature = () => {
        dispatch(toggleTemp())
        dispatch(setToast({ msg: `Temperatures is now displaying in ${isCelsius ? 'fahrenheit' : 'celius'}`, type: 'success' }))
    }
    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    return (
        <header >
            <div className="logo">
                <NavLink exact to="/"><img src={Logo} alt="" /></NavLink>
            </div>
           <div className="hamburger" onClick={toggleHamburger}>☰</div>
            <nav className={`${hamburgerOpen ? "show-menu" : ""}`}>
            {/* <DarkMode/> */}
                <div className="toggle-btn " onClick={() => toggleTemperature()}>{isCelsius ? 'C°' : 'F°'}</div>
                <NavLink exact to="/" className="nav-link " activeClassName="active">Home</NavLink>
                <NavLink exact to="/favorites" className="nav-link" activeClassName="active">Favorites</NavLink>
            </nav>
        </header>
    )
}

export default Header
