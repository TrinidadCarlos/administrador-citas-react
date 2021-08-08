import React from 'react';
import PropTypes from 'prop-types';

const CardCita = ({cita, eliminarCita}) => (
    <div className="cita">
        <p>Mascota: <span>{cita.mascota}</span> </p>
        <p>Propietario: <span>{cita.propietario}</span> </p>
        <p>Fecha Cita: <span>{cita.fecha}</span> </p>
        <p>Hora Cita: <span>{cita.hora}</span> </p>
        <p>Sintomas: <span>{cita.sintomas}</span> </p>
        <button className="button button-primary u-full-width" onClick={() => eliminarCita(cita.id)} > Eliminar cita &times; </button>
    </div>
);

CardCita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}
export default CardCita;