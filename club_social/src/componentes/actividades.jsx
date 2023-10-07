import * as React from 'react';
import { useState, useEffect } from 'react'; 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styles from '../css/actividades.module.css';
import { GetElemento } from './getElemento';
import lectura from '../imagenes/lectura.png';
import talleres from '../imagenes/taller.png';
import cursos from '../imagenes/cursos.png';
import ocio from '../imagenes/ocio.png';

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

  const tarjetasPorFila = 2;

  return (
    <>
   <div className={styles.flexContainer}>
      {rows.map((actividad) => (
        <div className={`${styles.container}`} style={{ minWidth: 345, maxWidth: '345px' }}>
        <Card key={actividad.id} sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={actividad.actividad === "Lectura" ? lectura : 
            actividad.actividad === "Talleres" ? talleres : 
            actividad.actividad === "Cursos" ? cursos : 
            actividad.actividad === "Ocio" ? ocio : null}
            title={actividad.titleImg}
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
    </div>
   </>
  );
}
