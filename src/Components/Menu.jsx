import React, { Component } from "react";
import { Link } from "react-router-dom";
class Menu extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <Link className="navbar-brand col-sm-3 col-md-2 mr-0" to="#">
          Mi @Correo
        </Link>
        <input
          className="form-control form-control-dark w-100"
          type="text"
          placeholder="Buscar Correo"
          aria-label="Search"
        />
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <Link className="nav-link" to="#">
              Salir
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Menu;
