export default {
  global: {
    componenteFormativo: 'Gestión de servidores',
    descripcionCurso:
      'Este módulo comprende la importancia de la gestión de los servidores en las organizaciones para implementar mejoras en la seguridad, haciendo uso de la autenticación y cifrado de las bases de datos y entendiendo los riesgos de la ciberseguridad y la manera de mitigar los impactos negativos a fin de evitar pérdidas y ataques a la información.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/a2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/a3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/a4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Gestión de redundancia de servidores',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Ciberseguridad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Gestión de clientes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Bitácoras, informes de auditoría',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Gestión TI',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_11_228130_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Gestión de redundancia de servidores.',
      referencia:
        'Fernández, M., Navarro, M., y Otero, M. (2014). <em> Sistemas de gestión de relaciones con clientes en las Empresas (CRM)</em>. Universidad De Alcalá, Print. Textos Universitarios.',
      tipo: 'Libro PDF',
      link:
        'https://dokumen.pub/sistemas-de-gestion-de-relaciones-con-clientes-en-las-empresas-crm-textos-universitarios-tecnologia-spanish-edition-1nbsped-8415834357-9788415834359.html',
    },
    {
      tema: 'Gestión de redundancia de servidores.',
      referencia:
        'Parra, M, y Paul, E. (2019). <em> Servicios de autenticación y autorización orientados a Internet de las cosas.</em> Telem@tica, Vol.17',
      tipo: 'Libro PDF',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_doaj_primary_oai_doaj_org_article_fe2fd93ea30149c5ac6bd70d267159f7',
    },
    {
      tema: 'Gestión TI',
      referencia:
        'Philippe, F. (2010). <em> Windows Server 2008: Los Servicios de red TCP/IP.</em> Ediciones ENI. ',
      tipo: 'Libro PDF',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_biblioteca_eniRIT08TCP ',
    },
    {
      tema: 'Ciberseguridad',
      referencia:
        'Scolnik, H, y Bär, N. (2016). <em>Qué es la seguridad informática.</em> Editorial Planeta Paidós.',
      tipo: 'Libro PDF',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000094337',
    },
  ],
  glosario: [
    {
      termino: '<em>Active Directory</em>',
      significado:
        'es el servicio de correo electrónico basado en la <em> web</em> de Microsoft.',
    },
    {
      termino: 'Cibercrimen',
      significado:
        'es una actividad delictiva que se dirige a una computadora, una red informática o un dispositivo en red.',
    },
    {
      termino: 'Encriptación',
      significado:
        'en criptografía, el cifrado es el proceso de codificación de la información. Este proceso convierte la representación original de la información, conocida como texto plano, en una forma alternativa conocida como texto cifrado.',
    },
    {
      termino: 'GDPR',
      significado:
        'el Reglamento General de Protección de Datos es el reglamento europeo relativo a la protección de las personas físicas, en lo que respecta al tratamiento de sus datos personales y a la libre circulación de estos datos.',
    },
    {
      termino: 'HTTP',
      significado:
        'es el protocolo de transferencia de hipertexto. Es el protocolo de comunicación que permite las transferencias de información a través de archivos en la <em> World Wide Web</em>.',
    },
    {
      termino: '<em>Middleware</em>',
      significado:
        '<em>Middleware</em> o lógica de intercambio de información entre aplicaciones, o agente intermedio, se refiere a un sistema de <em> software</em> que ofrece servicios y funciones comunes para las aplicaciones.',
    },
    {
      termino: 'Proveedor de servicios',
      significado:
        'es una entidad que presta servicios a otras entidades. Por lo general, esto se refiere a un negocio que ofrece la suscripción o servicio web a otras empresas o particulares.',
    },
    {
      termino: '<em>Ransomware</em>',
      significado:
        'es un tipo de programa dañino que restringe el acceso a determinadas partes o archivos del sistema operativo infectado y pide un rescate a cambio de quitar esta restricción.',
    },
    {
      termino: 'SSL',
      significado:
        'seguridad de la capa de transporte y su antecesor <em>Secure Sockets Layer</em> son protocolos criptográficos, que proporcionan comunicaciones seguras por una red, comúnmente internet.​',
    },
    {
      termino: 'VPN',
      significado: 'red privada virtual.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arencibia, A. (2019). <em>Sistema de autenticación, autorización y auditoría (AAA) para aplicaciones basadas en servicios web XML.</em> Serie científica de la universidad de las ciencias informáticas 5.3. ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_doaj_primary_oai_doaj_org_article_e12004c676224980a59c46af2085e858',
    },
    {
      referencia:
        'Arteaga, M., y Pazmiño, M. (2018). <em> Uso de buenas prácticas en la gestión de proyectos de TI.</em> Innova Research Journal 3.2.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_dialnet_primary_oai_dialnet_unirioja_es_ART0001253130',
    },
    {
      referencia:
        'Cardador, A. (2018). <em>Ciberseguridad para usuarios IFCT135PO.</em> 1a Edición. IC Editorial. ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000106036  ',
    },
    {
      referencia:
        'Noreña, P., y Calderón, S. (2018). <em>Técnica de protección para credenciales de autenticación en redes sociales y correo electrónico ante ataques phishing.</em> Publicaciones e investigación 12.2. ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_doaj_primary_oai_doaj_org_article_65642ddd9ec64b629569c1620ab2f5f7',
    },
    {
      referencia:
        'Parra, M., y Guillén, E. (2019). <em>Servicios de autenticación y autorización orientados a internet de las cosas. </em>Telem@tica. 17.2.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_doaj_primary_oai_doaj_org_article_fe2fd93ea30149c5ac6bd70d267159f7',
    },
    {
      referencia:
        'Philippe, F. (2010). <em> Windows Server 2008: Los servicios de red TCP/IP.</em> Ediciones ENI. ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_biblioteca_eniRIT08TCP',
    },
    {
      referencia:
        'Sinisterra, M., Diaz, T., y Ruiz, E. (2012). <em>Clúster de balanceo de carga y alta disponibilidad para servicios web y mail.</em> Informador Técnico 76.76. ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_doaj_primary_oai_doaj_org_article_b8084052896547348e30a7ffb4dec865 ',
    },
    {
      referencia:
        'Scolnik, H., y Bär, N. (2016). <em>Qué es la seguridad informática.</em> Primera edición. ed. Editorial Planeta Paidós.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000094337',
    },
    {
      referencia:
        'Zain, M., Saleem, S., y Ejaz, M. (2019). <em> VPN Traffic detection in SSL-protected channel.</em> ',
      link: 'https://downloads.hindawi.com/journals/scn/2019/7924690.pdf ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
