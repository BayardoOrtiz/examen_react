import React, { Component } from "react";
class Productos extends Component {
  state = {};
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Fluid jumbotron</h1>
          <p>Bienvenidos ala Seccion Productos</p>
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Productos
          </a>
        </div>
      </div>
    );
  }
}

export default Productos;
