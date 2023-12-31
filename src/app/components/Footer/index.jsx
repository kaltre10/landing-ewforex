import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <h3>Información</h3>
          <p><strong>ewforex.net</strong></p>
          <p><strong>RUC</strong>: 20609364212</p>
          <p><strong>Teléfono:</strong> 955 269 142</p>
          <p><strong>Correo Electrónico:</strong> contacto@ewforex.net</p>
          <p><strong>Dirección:</strong> Av del ejército 768, Miraflores</p>
        </div>
        <div className={styles.footerColumn}>
          <h3>Recursos</h3>
          <ul>
            <li><a href="https://ewforex.net/terminos.pdf" target='blank'>Términos y condiciones</a></li>
            <li><a href="https://ewforex.net/politicas.pdf" target='blank'>Política de Privacidad</a></li>
            <li><a href="!#">Libro de Reclamaciones</a></li>
            <li><a href="https://ww1.sunat.gob.pe/ol-ti-itconsultaunificadalibre/consultaUnificadaLibre/consulta" target='blank'>Boletas Electrónicas</a></li>
          </ul>
        </div>
        {/* <div className={styles.footerColumn}>
          <h3>Redes Sociales</h3>
          <ul className={styles.socialLinks}>
            <li><a href="https://facebook.com"><i className={`fa fa-facebook ${styles.icon}`} aria-hidden="true"></i> Facebook</a></li>
            <li><a href="https://twitter.com"><i className={`fa fa-twitter ${styles.icon}`} aria-hidden="true"></i> Twitter</a></li>
            <li><a href="https://instagram.com"><i className={`fa fa-instagram ${styles.icon}`} aria-hidden="true"></i> Instagram</a></li>
          </ul>
        </div> */}
      </div>
      <div className={styles.footerCopyright}>
        &copy; {new Date().getFullYear()} ewforex sac. Todos los derechos reservados.
      </div>
    </footer>
  )
}

export default Footer
