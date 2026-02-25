<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Bitácoras, informes de auditoría
    .row.justify-content-center.mb-5
      .col-lg-1.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema4/1.svg', alt='')
      .col-lg-11
        p El uso de bitácoras en ambientes de seguridad ha sido fundamental para analizar las brechas de la misma, a continuación, se amplía la información sobre estas:
    

    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Generalidades")
        .col-lg-7.mb-4.mb-md-0
          p Debido a los ataques que se presentan diariamente en las redes, si no se tiene una visión de lo que está sucediendo en la red o en los equipos, se podría generar una falla o pérdidas de información masiva. Por esta razón, una opción es la utilización de bitácoras, ya que mostrará eventos en donde se podrán gestionar los dispositivos conectados. Una de las herramientas que puede ayudar en este propósito es el #[em  Active Directory de Windows.]
          p Todas las operaciones del #[em Active Directory] afectan al usuario que accede y al funcionamiento de las máquinas de la red, cada operación de los objetos se convierte en una evidencia. De esta manera, el poder conocer lo que sucede diariamente en la red beneficia directamente la seguridad; pues cada vez que exista una problemática en la infraestructura tecnológica, basta con hacer una revisión de las bitácoras y así poder tomar soluciones a los inconvenientes.
          p Para muchos administradores de TI, cuando se habla de bitácoras se refiere a los registros o #[em log] de los sistemas, puede decirse que una bitácora almacena información de los eventos del sistema y en esta se pueden ver cada uno de los registros del sistema.
        .col-lg-5
          figure
            img(src='@/assets/curso/temas/tema4/2.png', alt='Texto que describa la imagen')
      .row(titulo="¿Para qué se utilizan?")
        .col-lg-7.mb-4.mb-md-0
          p Las bitácoras son comúnmente utilizadas para la detección de actividades sospechosas en el sistema, estas pueden ser almacenadas de manera local o remota, el encargado de recolectar la información de todas las actividades del sistema es el demonio #[em syslogd]. También las bitácoras de tipo #[em log] son herramientas que permiten registrar, analizar, detectar y notificar, todos los eventos del sistema y es la estructura utilizada para guardar todas las acciones generadas en la base de datos.
        .col-lg-5
          figure
            img(src='@/assets/curso/temas/tema4/3.png', alt='Texto que describa la imagen')
      .row(titulo="Se clasifican en")
        .col-lg-7.mb-4.mb-md-0
          ul.lista-ul--color
            li
              i.fas.fa-check
              p.mb-0 #[b Aplicación:] estas se refieren a los sucesos que están activados para guardarse en una aplicación.
            li
              i.fas.fa-check
              p.mb-0 #[b Seguridad:] brindan información de seguridad.

            li
              i.fas.fa-check
              p.mb-0 #[b Sistema:] registran los eventos que suceden en el sistema.
        .col-lg-5
          figure
            img(src='@/assets/curso/temas/tema4/4.png', alt='Texto que describa la imagen')
      .row(titulo="Tipos de bitácora")
        .col-lg-7.mb-4.mb-md-0
          ul.lista-ul--color
            li
              i.fas.fa-check
              p.mb-0 Inicio de sesión.

            li
              i.fas.fa-check
              p.mb-0 Cambios de un objeto.
            li
              i.fas.fa-check
              p.mb-0 Caída de un servidor, posibles ataques.

        .col-lg-5
          figure
            img(src='@/assets/curso/temas/tema4/5.png', alt='Texto que describa la imagen')
      .row(titulo="Importancia")
        .col-lg-7.mb-4.mb-md-0
          p Las bitácoras son esenciales para determinar lo que existe en la red propia. Dentro de los beneficios a destacar se encuentra el ahorro del tiempo por parte del equipo TI, una vez que ya se tiene un plan se pueden monitorear y buscar mejoras para la detección de ataques y poder tomar las medidas necesarias ante un evento de contingencia.
          p Las bitácoras son parte fundamental para poder conocer el entorno, son elementos esenciales de la seguridad, ya que de estas se desprenden medidas preventivas y correctivas a eventos externos e internos. Aunque muchas industrias no consideran a las bitácoras valiosas, debido a que no existe un estándar oficial, pero, si se analizan las situaciones del día a día, se darán cuenta que en las acciones de los #[em hackers] tienen un interés muy grande las bitácoras, ya que a la hora de atacar a un sistema informático su objetivo es el de eliminar sus rastros.
          p En las investigaciones generalmente, se accede a las bitácoras, ya que son las primeras en ser atacadas por un #[em hacker], estos tratarían de apagarlas u ocultar la información para no ser detectados. Por ello, la información de las bitácoras debe clasificarse, ya que muestra información importante acerca de los sistemas y usuarios.
        .col-lg-5
          figure
            img(src='@/assets/curso/temas/tema4/6.png', alt='Texto que describa la imagen')
      .row(titulo="Informes de auditorías")
        .col-lg-7.mb-4.mb-md-0
          p Este es el más usado para comunicar las observaciones y recomendaciones en la organización, dados los resultados que se obtienen sobre un proceso que ya ha sido desarrollado. También se puede decir, que refleja objetivos, alcances, observaciones, recomendaciones y conclusiones del proceso de evaluación, que va directamente relacionado con las áreas de la informática.
        .col-lg-5
          figure
            img(src='@/assets/curso/temas/tema4/7.png', alt='Texto que describa la imagen')

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.acordion__activo
  background-color: #f1f8ff
</style>
