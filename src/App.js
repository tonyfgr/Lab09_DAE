import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articulos: [
        {
          codigo: 1,
          descripcion: 'coca-cola',
          precio: 2.50
        },
        {
          codigo: 2,
          descripcion: 'inka-cola',
          precio: 2.20
        },
        {
          codigo: 3,
          descripcion: 'fanta',
          precio: 1.70
        }
      ]
    };
    this.borrar = this.borrar.bind(this);
  }

  render() {
    return (
      <div className="container mt-5">
        <h2 className="text-center font-weight-bold" style={{ color: 'blue', fontFamily: 'cursive' }}>
          Productos: Gaseosas
        </h2>
        <table className="table table-bordered table-hover table-3d">
          <thead className="thead-dark">
            <tr>
              <th className="font-weight-bold"style={{ color: 'blue', fontFamily: 'cursive' }}>Código</th>
              <th className="font-weight-bold"style={{ color: 'blue', fontFamily: 'cursive' }}>Descripción</th>
              <th className="font-weight-bold"style={{ color: 'blue', fontFamily: 'cursive' }}>Precio</th>
              <th className="font-weight-bold"style={{ color: 'blue', fontFamily: 'cursive' }}>Borrar</th>
            </tr>
          </thead>
          <tbody>
            {this.state.articulos.map(elemento => (
              <tr key={elemento.codigo}>
                <td>{elemento.codigo}</td>
                <td>{elemento.descripcion}</td>
                <td>${elemento.precio.toFixed(2)}</td>
                <td>
                  <button className="btn btn-warning" onClick={() => this.borrar(elemento.codigo)} style={{  fontFamily: 'cursive' }}>
                    Borrar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  borrar(cod) {
    var temp = this.state.articulos.filter(el => el.codigo !== cod);
    this.setState({
      articulos: temp
    });
  }
}

export default App;
