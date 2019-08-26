import React, {Component} from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

const stateInicial = {
    cita : {
        paciente: '',
        encargado: '',
        fecha: '',
        hora: '',
        sintomas: ''
    },
    error: false
};

class Formulario extends Component{
    state = {...stateInicial};

    handleChange = (e)=>{
        //console.log(`${e.target.name} : ${e.target.value}`);
        //setear el estado
        this.setState({
            cita: {
                ...this.state.cita,
                [e.target.name] : e.target.value
            }
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault();

        //extraer los valores del state
        const {paciente,encargado,fecha,hora,sintomas} = this.state.cita;

        //validar si los campos están llenos
        if (paciente === '' || encargado === '' || fecha === '' || hora ==='' || sintomas ===''){
            this.setState({error:true});

            //detener la ejecución
            return;
        }

        //generar objeto con los datos
        const nuevaCita = {...this.state.cita};
        nuevaCita.id = uuid();

        //agregar la cita al estate de app
        this.props.nuevaCita(nuevaCita);

        //colocar en el state el state inicial
        this.setState({...stateInicial})

    }

    render() {

        //extraer el valor del state

        const {error} = this.state;

        return(
            <div className="card mt-5 py-2">
                <div className="card-body">
                    <h4 className="card-title text-center mb-5">Nueva cita</h4>
                    {error ? <div className="alert alert-danger mt-2 mb-2">todos los campos son obligatorios</div> :null}
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <label htmlFor="nombre" className='col-sm-4 col-lg-2 col-form-label'>Nombre:</label>
                            <div className="col-sm-8 col-lg-10">
                                <input className='form-control'
                                       name='paciente'
                                       type="text"
                                       placeholder='Nombre del paciente'
                                       onChange={this.handleChange}
                                       value={this.state.cita.paciente}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="nombre" className='col-sm-4 col-lg-2 col-form-label'>Encargado:</label>
                            <div className="col-sm-8 col-lg-10">
                                <input className='form-control'
                                       name='encargado'
                                       type="text"
                                       placeholder='Nombre del familiar encargado del paciente'
                                       onChange={this.handleChange}
                                       value={this.state.cita.encargado}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="nombre" className='col-sm-4 col-lg-2 col-form-label'>Fecha:</label>
                            <div className="col-sm-8 col-lg-4">
                                <input className='form-control'
                                       name='fecha'
                                       type="date"
                                       onChange={this.handleChange}
                                       value={this.state.cita.fecha}
                                />
                            </div>
                            <label htmlFor="nombre" className='col-sm-4 col-lg-2 col-form-label'>Hora:</label>
                            <div className="col-sm-8 col-lg-4">
                                <input className='form-control'
                                       name='hora'
                                       type="time"
                                       onChange={this.handleChange}
                                       value={this.state.cita.hora}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="nombre" className='col-sm-4 col-lg-2 col-form-label'>Sintomas:</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea className='form-control'
                                          name='sintomas'
                                          placeholder='Síntomas del paciente'
                                          onChange={this.handleChange}
                                          value={this.state.cita.sintomas}>
                                </textarea>
                            </div>
                        </div>
                        <input type="submit" className="py-2 mt-2 btn btn-success btn-block" value="Agregar cita"/>
                    </form>
                </div>
            </div>
        );
    }
}

Formulario.propTypes = {
    nuevaCita: PropTypes.func.isRequired
}
export default Formulario;
