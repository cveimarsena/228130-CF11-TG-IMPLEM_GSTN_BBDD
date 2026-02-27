<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 El siguiente mapa integra los criterios y especificidades de los conocimientos expuestos en el presente componente formativo:


    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La imagen muestra un esquema sobre la gestión de servidores en el contexto de la ciberseguridad. Relaciona la seguridad en la nube y el uso de VPN con amenazas como delitos informáticos, ataques y ciberterrorismo. Además, destaca medidas clave como redundancia, autenticación, cifrado, gestión de clientes, bitácoras y buenas prácticas para garantizar la protección y continuidad de los servicios.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

<style lang="sass"></style>
