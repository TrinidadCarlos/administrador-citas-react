import React, { useState } from "react";
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from "uuid";
import Alerta from "./Alerta";

const Formulario = ({ listarCitas }) => {
  const [error, setError] = useState(false);
  const [cita, setCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const actualizarState = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  const { mascota, propietario, fecha, hora, sintomas } = cita;

  const submitCita = (e) => {
    e.preventDefault();

    //validar
    if (Object.values(cita).some((c) => c.trim() === "")) {
      setError(true);
      return;
    }
    setError(false);

    //asignarID
    cita.id = uuidv4();

    //crear la cita
    listarCitas(cita);

    //reiniciar el formulario
    setCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <>
      <h2>Registra Cita</h2>
      {error ? <Alerta mensaje="Algún campo se encuentra vacío" /> : ""}
      <form onSubmit={submitCita} method="POST">
        <label>Nombre mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={actualizarState}
          value={mascota}
        />

        <label>Nombre dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Dueño Mascota"
          onChange={actualizarState}
          value={propietario}
        />

        <label>Fecha Cita</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />

        <label>Hora Cita</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />

        <label>Síntomas</label>
        <textarea
          cols="30"
          rows="4"
          name="sintomas"
          className="u-full-width"
          placeholder="Descripción de los síntomas"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>

        <input
          type="submit"
          value="Registrar Cita"
          className="button button-primary"
        />
      </form>
    </>
  );
};

Formulario.propTypes = {
  listarCitas: PropTypes.func.isRequired
}
export default Formulario;
