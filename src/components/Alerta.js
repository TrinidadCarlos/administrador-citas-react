import React from 'react';
import PropTypes from 'prop-types';

const Alerta = ({mensaje}) => (
            <p className="alerta-error">{mensaje}</p>
    )

Alerta.propTypes = {
    mensaje: PropTypes.string.isRequired
}

export default Alerta;