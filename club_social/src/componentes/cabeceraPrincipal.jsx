import styles from '../css/cabeceraPrincipal.module.css';
import { Boton } from './boton';

export function CabeceraPrincipal() {
    return (
    <>
      <div className={styles.cabecera}>
        <h2 className={`${styles.titulo} ${styles.letra}`}>Club</h2>
        <h3 className={`${styles.subtitulo} ${styles.letra}`}>enjoy you time</h3>  
      </div>
      <Boton/>
      </>
    );
  };
  

  