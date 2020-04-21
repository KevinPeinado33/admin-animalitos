import React, { Fragment, useState } from 'react';

import 'date-fns';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { v4 as uuidv4 } from 'uuid';

const Formulario = ({ crearCita }) => {

    const [cita, actualizarCitas] = useState({
        mascota: '',
        propietario: '',
        fecha: new Date('2019-01-01T21:11:54'),
        hora: new Date('2019-01-01T21:11:54'),
        sintomas: ''
    });

    const [error, actualizarError] = useState(false);

    const actualizarState = e => {
        actualizarCitas({
            ...cita,
            [e.target.name]: e.target.value
        });
    }

    const actualizarFechaHora = date => {
        actualizarCitas({ ...cita, fecha: date, hora: date });
    }

    const { mascota, propietario, fecha, hora, sintomas } = cita;

    const submitCita = e => {
        e.preventDefault();
        if (mascota.trim() === '' || propietario.trim() === '' || sintomas.trim() === '') {
            actualizarError(true);
            return;
        }

        actualizarError(false);

        cita.id = uuidv4();

        crearCita(cita);

        actualizarCitas({
            mascota: '',
            propietario: '',
            fecha: new Date('2019-01-01T21:11:54'),
            hora: new Date('2019-01-01T21:11:54'),
            sintomas: ''
        })
    }

    return (
        <Fragment>
            <h2>Crear Cita</h2>

            {error ? <p style={{ textAlign: "center" }}>**Hubo Un Problema Al Registrar**</p> : null}

            <form onSubmit={submitCita}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Nombre Mascota"
                            size="small"
                            name="mascota"
                            onChange={actualizarState}
                            value={mascota}

                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Nombre Dueño La Mascota"
                            size="small"
                            name="propietario"
                            onChange={actualizarState}
                            value={propietario}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                fullWidth
                                margin="normal"
                                label="Fecha"
                                variant="outlined"
                                format="dd/MM/yyyy"
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                value={fecha}
                                onChange={actualizarFechaHora}
                            />
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={12}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardTimePicker
                                fullWidth
                                margin="normal"
                                label="Hora"
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                                value={hora}
                                onChange={actualizarFechaHora}
                            />
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            name="sintomas"
                            label="Sintomas"
                            multiline
                            rows={4}
                            onChange={actualizarState}
                            value={sintomas}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Agregar Cita
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Fragment >
    );
}

export default Formulario;