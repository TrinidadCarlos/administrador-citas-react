import React,{Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import CardCita from './components/CardCita';

function App() {
  let citasStorage = JSON.parse(localStorage.getItem('citas'));
  if (!citasStorage) {
    citasStorage = [];
  }

  const [agendaCitas, setAgendaCitas] = useState(citasStorage);

  //useeffect para revisar cambios del estate
  useEffect(() => {
    if (citasStorage) {
      localStorage.setItem('citas', JSON.stringify(agendaCitas));
    }else{
      localStorage.setItem('citas', JSON.stringify('citas',JSON.stringify([])));
    }
  },[agendaCitas, citasStorage])

  //listar citas nuevas
  const listarCitas = (cita) => {
    setAgendaCitas([...agendaCitas, cita]);
  }

  //actualizar si se elimina cita
  const eliminarCita = (citaId) => {
    const citasActualizadas = agendaCitas.filter(c => c.id !== citaId );
    setAgendaCitas(citasActualizadas);
  }

  //titulo condicional
  const titulo = agendaCitas.length === 0 ? 'No hay citas' : 'Citas Pendientes' ; 


  return (
    <Fragment>
       <h1 className="h1-header"> Administrador de citas </h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
              <Formulario listarCitas = {listarCitas}/>
          </div>
          <div className="one-half column">

            <h2>{titulo}</h2>
            {
              agendaCitas.map(cita => (
                <CardCita key={cita.id} cita={cita} eliminarCita={eliminarCita}/>
              ))
            }
          </div>
        </div>
      </div>

    </Fragment>
  );
}



export default App;
