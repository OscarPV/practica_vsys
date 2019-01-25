import React, { Component } from 'react';
import Tabla from '../components/Tabla';
import CamposBusqueda from '../components/CamposBusqueda';
import Paginador from '../components/Paginador';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contrataciones: [],
      usuarioFiltro: '',
      productoFiltro: '',
      estatusFiltro: '',
      totalResultados: 0,
      totalPaginas: 0,
      pagina: 1
    }; 
  }

  componentDidMount() {
    this.obtenContrataciones();
  }

  obtenContrataciones = () => {
    const { usuarioFiltro, productoFiltro, estatusFiltro, pagina } = this.state;
    const url = `/api/busqueda?usr=${usuarioFiltro}&pro=${productoFiltro}&est=${estatusFiltro}&pag=${pagina}`;

    fetch(url)
      .then(response => response.json())
      .then(contrataciones => this.setState({ 
          contrataciones: contrataciones.docs,
          totalResultados: contrataciones.total,
          totalPaginas: contrataciones.pages
        })
      );

      
  }

  onFiltroChange = (event) => {
    let nuevoEstado = this.state;

    if (event.target.name === "usuario") {
      nuevoEstado.usuarioFiltro = event.target.value;
    }

    if (event.target.name === "producto") {
      nuevoEstado.productoFiltro = event.target.value;
    }

    if (event.target.name === "estatus") {
      nuevoEstado.estatusFiltro = event.target.checked ? 1 : 0;
    }

    nuevoEstado.pagina = 1;

    this.setState(nuevoEstado);
    this.obtenContrataciones();
  }

  onPaginaClick = (event) => {
    this.setState({ 
      pagina: parseInt(event.target.getAttribute('data-num-pag')) 
    }, this.obtenContrataciones);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Conferencias</h1>
          </div>
          <div className="col-12">
            <CamposBusqueda filtroChange={this.onFiltroChange} />
          </div>
          <div className="col-12">
            <Tabla contrataciones={this.state.contrataciones} />
          </div>
          <div className="col-12">
            <Paginador 
              totalResultados={this.state.totalResultados}
              totalPaginas={this.state.totalPaginas}
              paginaActual={this.state.pagina}
              paginaClick={this.onPaginaClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
