import React, { Component } from "react";
class Cliente extends Component {
  state = {};
  render() {
    return (
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Fluid jumbotron</h1>
          <p>Bienvenidos ala Seccion Clientes</p>
          <a class="btn btn-primary btn-lg" href="#" role="button">
            Clientes
          </a>
        </div>
      </div>
    );
  }
}

export default Cliente;
