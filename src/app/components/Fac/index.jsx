'use client'

import React from 'react'
import { Accordion, AccordionTab } from 'primereact/accordion'
import styles from './fac.module.css'

const Fac = () => {
  return (
    <div className={styles.faqSection}>
      <h2 className={styles.title}>Preguntas Frecuentes</h2>
      <div className="card">
        <Accordion className={styles.accordion} multiple activeIndex={[0]}>
          <AccordionTab header="¿Cuáles son sus horas de atención?">
            <p className="m-0">
            Atendemos de lunes a viernes de 9:00 a.m. a 6:00 p.m. y los sábados de 9:00 a.m. a 1:00 p.m.
            </p>
          </AccordionTab>
          <AccordionTab header="¿Atienden por WhatsApp?">
            <p className="m-0">
            Sí, también atendemos por WhatsApp. Puedes enviarnos un mensaje al mismo número, 955 269 142, y te responderemos lo antes posible.
            </p>
          </AccordionTab>
          <AccordionTab header="¿Aceptan otras monedas extranjeras además del dólar?">
            <p className="m-0">
            Sí, aceptamos varias monedas extranjeras como euro, pesos colombianos, pesos chilenos, reales brasileños, libras y mas. Comunícate con nosotros para conocer los detalles específicos sobre las monedas que manejamos
            </p>
          </AccordionTab>
          <AccordionTab header="¿Cómo se actualizan los precios de compra y venta del dólar en su página web?">
            <p className="m-0">
            Actualizamos los precios de compra y venta del dólar en tiempo real para proporcionarte la información más precisa. Los cambios reflejan las fluctuaciones del mercado financiero.
            </p>
          </AccordionTab>
          <AccordionTab header="¿Ofrecen servicios de cambio de criptomonedas?">
            <p className="m-0">
            Sí, también ofrecemos servicios de cambio de criptomonedas. contactanos para obtener asistencia.
            </p>
          </AccordionTab>
        </Accordion>
      </div>
    </div>
  )
}

export default Fac
