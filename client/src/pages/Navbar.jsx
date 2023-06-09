import React from 'react'
import {NavLink,Outlet} from 'react-router-dom'

function Navbar() {
  return (
    <>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark px-4 fixed-top">
                <button className="navbar-toggler " data-bs-toggle="collapse" data-bs-target="#navToggle">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <NavLink to="/" className="navbar-brand fs-4 fw-bold text-success">
                    <i className="fa fa-eercast"></i> Book Dictionary
                </NavLink>
                <div className="collapse navbar-collapse" id="navToggle">
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">
                                <i className="fa fa-dashboard"></i> Dashboard
                            </NavLink>
                        </li>
                        
                        <li className="nav-item">
                            <NavLink to="/InsertBook" className="nav-link text-light">
                                <i className="fa fa-pencil"></i> Insert
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/" className="nav-link text-light">
                                <i className="fa fa-pencil-square-o"></i> Update
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/" className="nav-link text-light">
                            <i className="fa fa-trash-o"></i> Delete
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
  )
}

export default Navbar
