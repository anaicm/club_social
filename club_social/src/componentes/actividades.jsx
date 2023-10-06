import * as React from 'react';
import { useState, useEffect } from 'react'; 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styles from '../css/actividades.module.css';
import { GetElemento } from './getElemento';

const url = 'http://localhost:3000/publicaciones';

export function Actividades() {
  const [rows, setRows] = useState([]);
  
  useEffect(() => {
    // Realizar la solicitud HTTP para obtener los datos de actividades
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Suponiendo que la respuesta es un array de objetos
        // donde cada objeto representa una actividad
        setRows(data);
      })
      .catch((error) => {
        console.error('Error al obtener las actividades:', error);
      });
  }, []); 

  return (
    <>
      {rows.map((actividad) => (
        <div className={styles.container}>
        <Card key={actividad.id} sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {actividad.actividad}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {actividad.descripcion}
            </Typography>
          </CardContent>
        </Card>
        </div>
      ))}
   </>
  );
}
