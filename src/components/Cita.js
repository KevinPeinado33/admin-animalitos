import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Cita = ({ cita, eliminarCita }) => {
    console.log('Hora: ' + cita.hora);
    console.log('Fecha: ' + cita.fecha);
    
    return (
        <Card style={{marginBottom: 10}}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {cita.mascota}
                </Typography>
                <Typography variant="body2" component="p">
                    Propietario: {cita.propietario}<br/>
                    sintomas: {cita.sintomas}
                </Typography>
                <CardActions>
                    <Button
                        fullWidth
                        variant="contained"
                        color="secondary"
                        onClick={() => eliminarCita(cita.id)}
                    >Eliminar &times;</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
};

export default Cita;