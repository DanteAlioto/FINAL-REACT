import React from 'react'
import CartWidget from '../CartWidget';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <h1 className="navbar-brand">CafeReact</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link active lead" aria-current="page" to='/'>Inicio</NavLink>
                        <NavLink className="nav-link lead" to='/categoria/caliente'>Cafe Caliente</NavLink>
                        <NavLink className="nav-link lead" to='/categoria/frio'>Cafe Frio</NavLink>
                        <NavLink className="nav-link lead" to='/cart'><CartWidget /></NavLink>
                    </div>
                </div>
            </div>
        </nav>
  )
}

export default NavBar;