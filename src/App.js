import React, {Component} from 'react';
import './bootstrap.css';
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Citas from "./components/Citas";

class App extends Component {
  state = {
    citas: []
  };

  //cuando la app carga
  componentDidMount() {
    const citasLS = localStorage.getItem('citas');
    if (citasLS){
      this.setState({
        citas : JSON.parse(citasLS)
      })
    }
  }

  //cuando eliminamos o agregamos una nueva cita
  componentDidUpdate() {
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
  }

  nuevaCita = datos => {
    //copiar el state actual
    const citas = [...this.state.citas, datos];

    //agreagar nuevo state
    this.setState({citas});
  }

  //eliminar las citas del state
  eliminarCita = id => {
    //tomar una copia del state
    const citasActuales = [...this.state.citas];

    //sacar el elemento del arreglo
    const citas = citasActuales.filter(cita => cita.id !== id);

    //actualizar el state
    this.setState({citas});
  }

  render() {
    const titulo = 'React ninja hospital';
    return (
      <div className="container">
        <Header titulo={titulo}/>
        <div className="row">
          <div className="col-md-10 mx-auto">
            <Formulario nuevaCita={this.nuevaCita}/>
          </div>
          <div className="mt-3 col-md-10 mx-auto">
            <Citas
              citas={this.state.citas}
              eliminarCita={this.eliminarCita}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
