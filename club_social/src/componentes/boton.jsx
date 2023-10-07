import React from 'react';
import styles from '../css/boton.module.css';
import { Link } from "react-router-dom";//link para las rutas hacia los componentes


export function Boton() {
  return (
    <div className={styles.contBtn}>
      
          <Link to="/Actividades" className={styles.button}>
              Entrar
          </Link>
      
    </div>
  );
}
