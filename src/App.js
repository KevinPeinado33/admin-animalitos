import React, { Fragment, useState, useEffect } from 'react';
import './App.css';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales) {
    citasIniciales = [];
  }

  const [citas, guardarCitas] = useState(citasIniciales);

  useEffect(() => {
    if(citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  },[citas]);

  const crearCita = cita => {
    guardarCitas([...citas, cita]);
  }

  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  }

  const titulo = citas.length === 0 ? 'No hay Citas' : 'Administra Tus Citas';

  return (
    <Fragment>
      <h1>Administador De Pacientes Animales</h1>
      <Container maxWidth="md" >
        <Grid container spacing={3}>

          <Grid item xs={6}>
            <Formulario
              crearCita={crearCita}
            />
          </Grid>

          <Grid item xs={6}>
            <h2>{titulo}</h2>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </Grid>

        </Grid>
      </Container>

    </Fragment>
  );
}

export default App;
