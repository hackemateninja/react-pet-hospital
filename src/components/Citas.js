import React from 'react';
import Cita from "./Cita";
import PropTypes from 'prop-types';

const Citas = ({citas, eliminarCita})=>{
    const msj = Object.keys(citas).length === 0 ? 'No hay Citas' : 'Lista de citas';

    return (
        <div className="card py-2">
            <div className="card-body">
                <h2 className="card-title text-center">{msj}</h2>
                <div className="lista-citas">
                    {citas.map(cita => (
                        <Cita
                            key={cita.id}
                            cita={cita}
                            eliminarCita={eliminarCita}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

Citas.propTypes = {
    citas : PropTypes.array.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

export default Citas;
