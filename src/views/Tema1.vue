<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Gestión de redundancia de servidores
    .row.justify-content-center.mb-5
      .col-lg-1.col-5.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/1.svg', alt='')
      .col-lg-11(data-aos="fade-left")
        p Los servidores redundantes se utilizan para hacer copias de los servicios del servidor principal, estos deben ser capaces de gestionar la transición entre otros en caso de alguna falla o incidencia. Es por esto que los sistemas redundantes aseguran los datos ante posibles fallos, para que este, pueda seguir en su continuo funcionamiento.
        p A continuación, se presenta información valiosa sobre la gestión de redundancia de servidores:
    .tarjeta.p-5.mb-5(style="background-color: #f1f8ff")
      SlyderA(tipo='b')
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0
            p Las técnicas que han sido utilizadas en temas de redundancia se han implementado por la industria militar y aeroespacial hace muchos años, para poder alcanzar una alta fiabilidad, debido a esto se puede decir que la redundancia mejora la confiabilidad y disponibilidad del sistema; pero, también obliga a una inversión en infraestructura y diseño del sistema, dando como resultado un incremento en el costo de operación.
            p Ahora bien, un servidor que tiene tolerancia a fallos es aquel que puede tener múltiples fallas en su funcionamiento o componentes internos, no obstante, continuará funcionando adecuadamente.
            p.mb-0 La tolerancia a fallos puede ser necesaria, tanto para la máquina como para el #[em software] y #[em hardware], se puede instalar una secuencia en paralelo donde esta, pueda ser capaz de detectar errores. Dicha falla se debe en muchas ocasiones, a daños físicos como el mal funcionamiento de uno o varios componentes lo que conlleva a la pérdida de la información. (Sinisterra, #[em et al], 2012)
          .col-lg-6.col-8
              img(src='@/assets/curso/temas/tema1/2.jpg', alt='Texto que describa la imagen' style='border-radius: 20px')
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0
            p.mb-0 Por esta razón, se requiere para su implementación un sistema de almacenamiento que guarde los datos en más de un componente o dispositivo. También puede hacerse en otras máquinas, dispositivos externos o grupos de servidores redundantes, de esta manera si en el servidor se llegara a producir una falla que involucre la pérdida de la información, el sistema debe ser capaz de acceder a toda la información recuperando los datos que hagan falta, desde algún respaldo disponible.
          .col-lg-6.col-8
              img(src='@/assets/curso/temas/tema1/3.jpg', alt='Texto que describa la imagen' style='border-radius: 20px')
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0
            p Para entender de la mejor manera el funcionamiento de la tolerancia a fallas en un sistema, primero se debe revisar el significado de ser tolerante a fallos, ya que este se relaciona con los sistemas fiables; término que comprende varios requerimientos, tales como tener disponibilidad, confiabilidad y seguridad. Se puede definir que un sistema tiene disponibilidad cuando está listo para ser utilizado de inmediato, que pueda ser usado de manera correcta en cualquier momento y se encuentre disponible para la realización de cualquiera de sus funciones.
            p.mb-0 Si un sistema de archivos es tolerante a fallos, significa que este tiene un sistema de recuperación de transacciones. Además, debe guardar copias de seguridad en distintas máquinas para asegurar su disponibilidad, para el desarrollo de este se aplica un algoritmo que permita gestionar las copias de forma consistente. Igualmente, es muy recomendable el uso de memorias caché para agilizar el acceso a los archivos.
          .col-lg-6.col-8
              img(src='@/assets/curso/temas/tema1/4.jpg', alt='Texto que describa la imagen' style='border-radius: 20px')
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0
            p Es fundamental hablar de los planes de contingencia, ya que esta es una estrategia planificada con una serie de procedimientos que permiten desarrollar soluciones alternativas y posibiliten reemplazar rápidamente los servicios en las infraestructuras tecnológicas. El objetivo de un plan de contingencia es establecer procedimientos, indicando acciones que deben tomarse a la hora de un incidente o riesgo; también, debe optimizar el uso de los recursos y materiales a utilizar. Por último, llevar el control adecuado de los procedimientos que se establecen.
            p.mb-0 Todo plan de contingencia debe tener las siguientes etapas: evaluación, planificación, pruebas, ejecución y recuperación. Las primeras tres etapas pueden hacer alusión a los componentes preventivos y las últimas a la ejecución del plan. Por su parte, los riesgos se pueden transferir, eliminar o aceptar, esto dependerá de los factores como la probabilidad de ocurrencia o el impacto del riesgo. (Sinisterra, #[em et al], 2012)
          .col-lg-6.col-8
              img(src='@/assets/curso/temas/tema1/5.jpg', alt='Texto que describa la imagen' style='border-radius: 20px')
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0
            p.mb-0 Un alto porcentaje de incumplimientos que se presentan en los acuerdos SLA en proyectos TI, son por causa de las caídas en las infraestructuras de #[em hardware] o #[em software]; esto genera una afectación en los procesos y servicios que se ofrecen. Por esta razón, se brindan planes de contingencia, porque estos son instrumentos de gestión en el soporte y desempeño, debido a que contienen medidas técnicas, humanas y organizativas, que garantizan la continuidad de los procesos.
          .col-lg-6.col-8
              img(src='@/assets/curso/temas/tema1/6.jpg', alt='Texto que describa la imagen' style='border-radius: 20px')
    .titulo-square.d-flex.align-items-center(data-aos="fade-right").mb-5
      i.fas.fa-square(style="color: #ffb30b").me-3
      h3.mb-0 Procedimientos de operación
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        p Se definen como un conjunto de instrucciones que describen pasos y actividades relevantes de un proceso o un procedimiento, generalmente son realizados en las organizaciones por el equipo del área que desarrolla la actividad. Es importante la planeación y desarrollo del procedimiento operativo, ya que estos deben estar asociados a los requisitos y al nivel de detalle necesario para la ejecución de tareas.
        p Para la redacción de procedimientos de operación se deben tener en cuenta cuatro pasos:
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span(style="color: #12263f").fw-bold 1
            | #[b Mantener un formato interno.]
          li
            .lista-ol--cuadro__vineta
              span(style="color: #12263f").fw-bold 2
            p.mb-0  #[b Definir claramente los objetivos del procedimiento:] identificar el tema específico a tratar y la importancia de este documento para los objetivos.
          li
            .lista-ol--cuadro__vineta
              span(style="color: #12263f").fw-bold 3
            p.mb-0  #[b Tener en cuenta las normatividades que rigen y estén vigentes:] para esto es importante definir si la tarea o el procedimiento, debe hacer alusión a alguna normatividad vigente.
          li
            .lista-ol--cuadro__vineta
              span(style="color: #12263f").fw-bold 4
            p.mb-0  #[b Conocer los elementos que deben estar presentes en el procedimiento de operación:] describir y definir aquellos elementos que son imprescindibles para delimitar su alcance y la contextualización del contenido.
      .col-lg-5.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/7.png', alt='Texto que describa la imagen' style='border-radius: 20px')
    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema1/8.svg', alt='Texto que describa la imagen' )
      .col-lg-8(data-aos="fade-left")
        p.mb-4 Para la aprobación de un procedimiento de operación es necesario conocer su ciclo de vida. Este se compone de tres elementos que son:
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span(style="color: #12263f").fw-bold 1
            p.mb-0 #[b El borrador:] donde se guarda una versión preliminar, aquí se pueden realizar cambios y agregar contenido al documento.
          li
            .lista-ol--cuadro__vineta
              span(style="color: #12263f").fw-bold 2
            p.mb-0  #[b El pendiente por aprobación:] es un borrador que se presenta para la aprobación y está listo para ser aprobado o no, en caso de no aprobarse volverá al inicio a la versión borrador.
          li
            .lista-ol--cuadro__vineta
              span(style="color: #12263f").fw-bold 3
            p.mb-0  #[b El aprobado:] este se puede decir que ya está listo para iniciarse (Arencibia, 2019).
    .titulo-square.d-flex.align-items-center(data-aos="fade-right").mb-5
      i.fas.fa-square(style="color: #ffb30b").me-3
      h3.mb-0 Autenticación #[em web]
    p.mb-5(data-aos='fade-right') Hoy en día el usuario se puede autenticar en un servidor #[em web], este deberá suministrarle unas credenciales que se requieren en la solicitud HTTP, luego el servidor analizará la respuesta determinando si la autenticación del usuario se hizo correctamente (Philippe, 2010).
    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="zoom-in"): img(src='@/assets/curso/temas/tema1/9.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/10.png', alt='Texto que describa la imagen' )
      .col-lg-7(data-aos="fade-left")
        p.mb-0 Una directiva de autenticación se compone de una expresión y de una acción, luego de crear la directiva es enviada a un servidor de autenticación y este asigna una prioridad. Es importante aclarar que una autenticación #[em web] no utiliza un formato rígido, en este se debe decir exactamente qué información necesitará y en qué formato al crear la acción. La autenticación #[em web] se puede definir como la comunicación entre el navegador y el servidor #[em web], donde se hace necesario el protocolo de transferencia de hipertexto y los mensajes de error. Esta comunicación se hace de la siguiente manera: el navegador #[em web] hace una solicitud, como HTTP-GET, luego el servidor realiza una verificación de autenticación, si este no es correcto es porque requiere autenticación. Después el navegador #[em web] utiliza la respuesta del servidor para generar una nueva solicitud, esta contendrá información de la autenticación. Finalmente, el servidor #[em web] realiza la verificación de la autenticación, si esta es correcta, el servidor devolverá al navegador #[em web] la información que fue solicitada. (Arencibia, 2019)
    p.mb-5(data-aos='fade-right') Existen varios tipos de autenticación web, esta permite la verificación de la identidad de un miembro y determinar el nivel de acceso que tiene en el sitio. Por ejemplo, si es un miembro solo lector o administrador, por esto es de gran importancia nombrar cada uno de los tipos de autenticación web.
    
    .d-flex.justify-content-center.mb-4
      ImagenInfografica.color-acento-botones
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema1/info_auth_web.svg', alt='Autenticación web')

        .tarjeta.tarjeta.color-tema(x="80%" y="15%" numero="+")

          .p-3
            p Es la más simple, esta forma requiere que el usuario de inicio en la sesión utilizando datos de credenciales como lo es el usuario y la contraseña. Esta información es codificada en #[em base64]; esto quiere decir que la información que es enviada no es segura y hay un riesgo elevado de ser #[em hackeados] por un tercero. (Parra #[em et al], 2019)

        .tarjeta.color-tema(x="80%" y="38%" numero="+")


          .p-3
            p Funciona parecido a la autenticación básica, inicialmente el servidor solicita la información de credenciales, luego el servidor hace una comparación en las credenciales de autenticación con lo que está en el archivo, si este coincide concederá el acceso.
            p La diferencia radica en que la conexión se realiza de manera segura, esto es, porque las contraseñas son gestionadas y almacenadas en la base de datos en un formulario cifrado. De esta manera se asegura la información, ya que ni el administrador podrá acceder a la base de datos, así la integridad de los datos es mucho más segura y solo pueden ser leídos por el servidor #[em web]. (Arencibia, 2019)

        .tarjeta.color-tema(x="80%" y="71%" numero="+")


          .p-3
            p Se logra cuando se combina el protocolo HTTP con el SSL #[em (Socket Layer Secure)], dando como resultado la operatividad del contenido en un circuito cerrado, sin ninguna interferencia, permitiendo que el navegador #[em web] haga la verificación de cada página que se encuentre en el sitio #[em web], haciendo uso de la lectura del certificado de clave pública del #[em secure socket] y haciendo la comparación entre la información guardada del certificado de seguridad del sitio.
            p El protocolo HTTPS es utilizando en entidades donde la información debe ser confidencial como bancos, sitios de compras, entre otras. La autenticación debe proporcionar un nivel alto de seguridad, ya que cada operación de conexión e intercambio cliente-servidor debe estar cifrada.

        .tarjeta.color-tema(x="80%" y="93%" numero="+")


          .p-3
            p Se utiliza para recolectar datos de usuario que no tienen una necesidad alta de seguridad como encuestas, formularios de contactos. Los sitios de registro utilizan la autenticación basada en formulario, por esta razón es fundamental que para la autenticación se identifiquen los campos como requeridos. De esta forma se asegura que los campos sean llenados correctamente y el formulario sea diligenciado en su totalidad.


    .titulo-square.d-flex.align-items-center(data-aos="fade-right").mb-5
      i.fas.fa-square(style="color: #ffb30b").me-3
      h3.mb-0 Cifrado
    p.mb-5(data-aos='fade-right') Se puede definir como la conversión de los datos de un formato legible a un formato codificado, la información cifrada solo se puede leer o procesar luego de descifrarlos. Debe tenerse en cuenta que la base principal de la seguridad es el cifrado, ya que es una forma sencilla y valiosa que garantiza la seguridad de la información, de esta forma no podrá ser robada o leída con fines maliciosos (Parra #[em et al], 2019).
    .row.justify-content-center.mb-5
      .col-lg-10(zoom-in): img(src='@/assets/curso/temas/tema1/12.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right").mb-lg-0.mb-3
        p El cifrado es un componente importante en la seguridad de los datos, tanto para los usuarios y como para grandes empresas, esa información podría incluir todo, desde pagos personales e información del cliente, para esto se utilizan algoritmos de cifrados. Estos aseguran que la información que atraviesa una serie de dispositivos de la red en todo el mundo, no sea interceptada por #[em hackers] y comprometan la seguridad de la información. El cifrado implica convertir el texto sin formato legible en un texto incomprensible, conocido como texto cifrado. Este implica utilizar una clave criptográfica, un conjunto de valores matemáticos, que acuerdan tanto el emisor como el receptor, de esta forma el receptor utiliza la clave para descifrar los datos y volverlos a convertir en un texto sin formato legible.
        .cajon.color-acento-botones.p-4.mb-4(style="background-color: #d9faff")
          p.mb-0 Mientras más compleja sea la clave criptográfica, más seguro será el cifrado, debido a que, es menos riesgoso que externamente intenten descifrarla. El cifrado también es utilizado para proteger contraseñas.
      .col-lg-5.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/13.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/14.svg', alt='')
      .col-lg-8
        p Existen dos métodos de cifrado comunes, estos son: el cifrado simétrico y el asimétrico. Las claves de cifrado simétrico se dan a conocer como clave privada, la clave que se usa en la codificación es la misma que se utiliza para descodificar, lo que resulta más conveniente para usuarios de nivel individual, este método es más rápido que el cifrado asimétrico.
        p El cifrado asimétrico utiliza dos claves que son diferentes, unas privadas y una pública que tienen una vinculación matemática. Estas son vinculadas, pero no son claves idénticas, es por eso el concepto asimétrico, aquí el propietario mantiene oculta la clave privada, mientras que la clave pública se comparte entre los receptores autorizados.
    p.mb-5(data-aos='fade-right') A continuación, se presentan ejemplos de algoritmos de cifrado, estos se pueden adaptar según los fines. Entre los cuales se encuentran:
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="Cifrado DES")
            p.mb-0 Se define como “el estándar de cifrado de datos” trabaja sobre el método simétrico. Es un cifrado antiguo, por esto no es recomendable su uso.
          div(titulo="Cifrado 3DES")
            p.mb-0 Este se define como “el estándar de cifrado triple de datos” trabaja sobre el método simétrico, al igual que el anterior cifrado. Se usa la palabra triple, ya que los datos pasan tres veces durante el proceso de cifrado. Este tipo de cifrado poco a poco va perdiendo fuerza, aun cuando sigue siendo una solución que brinda confiabilidad en el cifrado del #[em hardware] para las organizaciones financieras e industriales.
          div(titulo="Cifrado AES ")
            p.mb-0 Se traduce en “estándar de cifrado avanzado”, ya que se desarrolló para la actualización del algoritmo DES original. Este cifrado es utilizado comúnmente por las aplicaciones de mensajería, por ejemplo #[em WhatsApp] y el #[em software] de comprensión de archivos WinZip.
          div(titulo="Cifrado RSA")
            p.mb-0 Es un algoritmo de cifrado asimétrico con disponibilidad amplia para el público, este es popular por la longitud de su clave, por lo tanto genera confiabilidad en la transmisión de datos. RSA es la sigla de #[em “Riverst, Shamir y Adleman”] estos son los apellidos de los autores que describieron en primera instancia este algoritmo.
          div(titulo="Cifrado <em>Twofish</em>")
            p.mb-0 Es un algoritmo de cifrado utilizado tanto para el #[em software] como para el #[em hardware]. Es considerado como uno de los cifrados más rápidos, no está patentado, lo cual hace su disponibilidad de manera gratuita, este cifrado es utilizado en el #[em software] como #[em TrueCrypt].
          div(titulo="Cifrado RC4 ")
            p.mb-0 Es utilizado generalmente en enrutadores inalámbricos, ya que se implementa en WEP y WPA.
      .col-lg-5.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/14.png', alt='')
    p.mb-5(data-aos='fade-right') La utilización de cifrados ayuda a mantener la integridad de los datos, brindando seguridad ante amenazas externas como hackers y personas mal intencionadas, que pretenden cometer fraudes y robos de la información.
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .bloque-texto-g.p-3.p-sm-4.p-md-5(style="background-color: #ffe4a9")
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/15.svg')})`}"
          )

          .bloque-texto-g__texto.p-4.border-dash.bg-transparent.p-4
            .bg-white.p-3
              p.mb-0 El cifrado también permite a las organizaciones adherirse a las normativas y garantizar el cumplimiento de las mismas. Además, brinda otros beneficios como lo es el cifrado en todos los dispositivos, ya sean móviles, servidores, tabletas, entre otros; garantizando que todos estos dispositivos tengan medidas adicionales de autenticación avanzada. De esta forma ayuda a disuadir aquellos usuarios que no han sido autorizados.
    p.mb-5(data-aos='fade-right') Por otra parte, el cifrado ayuda al movimiento seguro de la información en la nube. Este permite mantener la privacidad de los datos, garantizando que, durante el trayecto o movimiento de la información, estos datos se sigan usando de forma confiable. Otro beneficio del cifrado es que posibilita la protección de la propiedad intelectual, ya que los sistemas que administran el cifrado de datos lo hacen en reposo, para evitar la ingeniería inversa y el uso no autorizado de la reproducción material.
    .titulo-square.d-flex.align-items-center(data-aos="fade-right").mb-5
      i.fas.fa-square(style="color: #ffb30b").me-3
      h3.mb-0 Seguridad en la nube
    p.mb-5(data-aos='fade-right') A continuación, se presentan aspectos acerca de la seguridad en la nube, como su definición, proveedores, objetivos y amenazas:
    TabsA.color-secundario.mb-5
      .tarjeta.color-secundario--borde.p-4(titulo="Definición " style="background-color: #f5faff")
        .row.justify-content-center.align-items-center
          .col-lg-2.col-4(data-aos="fade-right").mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema1/16.svg', alt='')
          .col-lg-10(data-aos="fade-left")
            p Es una disciplina de la ciberseguridad, esta ayuda a garantizar los datos y #[em software] que son almacenados en la nube, incluyendo credenciales privadas y datos seguros que utilizan infraestructura tecnológica en línea. El aseguramiento de los servicios en la nube implica esfuerzos de los proveedores y de los clientes que los usan, ya sea un usuario personal u organización.
      .tarjeta.color-secundario--borde.p-4(titulo="Proveedores" style="background-color: #f5faff")
        .row.justify-content-center.align-items-center
          .col-lg-2.col-4(data-aos="fade-right").mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema1/17.svg', alt='')
          .col-lg-10(data-aos="fade-left")
            p Alojan servicios en sus servidores utilizando conexiones de internet que siempre estarán activas, estos usan métodos de seguridad, para que la información en la nube se mantenga privada y segura; pero no todo recae sobre el proveedor, la seguridad de igual manera está parcialmente en las manos del cliente. La seguridad en la nube se compone de las siguientes categorías: seguridad en la información, gestión de accesos, políticas de prevención y detección, planificación de retención de datos, cumplimiento legal.
      .tarjeta.color-secundario--borde.p-4(titulo="Comprende" style="background-color: #f5faff")
        .row.justify-content-center.align-items-center
          .col-lg-2.col-4(data-aos="fade-right").mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema1/18.svg', alt='')
          .col-lg-10(data-aos="fade-left")
            p La seguridad en la nube comprende los protocolos, tecnología y buenas prácticas que ayudan a protegerse de los entornos de la nube. El soporte de vulnerabilidades de seguridad está en manos del proveedor, los clientes deben gestionar la configuración adecuada del servicio para generar entornos seguros. Para saber cuál es el alcance de los componentes de la seguridad en la nube se describen algunos de estos elementos: redes físicas, servidores, sistemas operativos, datos, aplicaciones, #[em middleware], plataformas de virtualización, entre otros.
      .tarjeta.color-secundario--borde.p-4(titulo="Objetivos" style="background-color: #f5faff")
        .row.justify-content-center.align-items-center
          .col-lg-2.col-4(data-aos="fade-right").mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema1/19.svg', alt='')
          .col-lg-10(data-aos="fade-left")
            ul.lista-ul--color
              li
                i.fas.fa-check
                span Permitir recuperar la información en caso de un fallo o contingencia.
              li
                i.fas.fa-check
                span Brindar protección al almacenamiento mediante cifrados avanzados.
              li
                i.fas.fa-check
                span Evitar errores humanos.
              li
                i.fas.fa-check
                span Reducir el impacto de cualquier compromiso del sistema.
      .tarjeta.color-secundario--borde.p-4(titulo="Amenazas" style="background-color: #f5faff")
        .row.justify-content-center.align-items-center
          .col-lg-2.col-4(data-aos="fade-right").mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema1/20.svg', alt='')
          .col-lg-10(data-aos="fade-left")
            p La seguridad en la nube, como todo tiene riesgos, una seguridad débil expone a los usuarios a todo tipo de amenazas, algunas de estas son:
            ul.lista-ul--color
              li
                i.fas.fa-check
                span Riesgos en la infraestructura e interrupciones de los servicios.
              li
                i.fas.fa-check
                span Amenazas generadas por errores humanos, como lo es la mala administración de los entornos.
              li
                i.fas.fa-check
                span Amenazas externas generadas por agentes externos como lo son #[em hacker, phishing, malware].
    .titulo-square.d-flex.align-items-center(data-aos="fade-right").mb-5
      i.fas.fa-square(style="color: #ffb30b").me-3
      h3.mb-0 Problemas con la privacidad
    .row.justify-content-center.mb-5
      .col-lg-5.col-8.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/21.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p El reglamento de protección de datos (GDPR) limita la forma en que se deben almacenar los datos y acceder a ellos, ya que estas leyes ayudan a los usuarios finales frente a la venta y mercadeo de los datos confidenciales. La ley #[em Cloud] les da a los proveedores de servicio en la nube sus propias limitaciones legales, fundamentalmente proteger la privacidad del usuario.
        p Afortunadamente, existen muchas opciones para proteger la información de los usuarios, una de estas es el cifrado, ya que permite al proveedor brindar soluciones de seguridad en la nube. Debe tenerse en cuenta que en la nube se maneja el cifrado de las comunicaciones, el cifrado de datos confidenciales y el cifrado de comunicación de extremo a extremo, esto garantizará el flujo seguro de la información (Noreña y Calderón, 2018).
        .cajon.color-acento-botones.p-4.mb-4(style="background-color: #d9faff")
          p.mb-0 En la nube, los datos son más propensos a ser #[em hackeados] cuando la información está en movimiento, por este motivo el cifrado de extremo a extremo es la mejor solución en la seguridad.
    .row.justify-content-center.mb-5
      .col-lg-9(data-aos="fade-right").mb-lg-0.mb-3
        p Hay que tener claro que, en el manejo de la seguridad en la nube, el proveedor de servicio se encargará de gestionar la seguridad en la infraestructura, servicios de informática, servicios de red, servicios de almacenamiento y, por su parte el cliente deberá ser responsable de gestionar la seguridad de todo lo que se encuentra encima del hipervisor, como lo son: los sistemas operativos, las aplicaciones, los usuarios, los datos. Este modelo en la nube demuestra que la responsabilidad es compartida. Es así como los clientes que gestionan proyectos en la nube, deben aplicar diversas medidas de seguridad para proteger las aplicaciones y los datos mitigando los riesgos de seguridad. (Noreña y Calderón, 2018)
      .col-lg-3(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/22.svg', alt='')
    .titulo-square.d-flex.align-items-center(data-aos="fade-right").mb-5
      i.fas.fa-square(style="color: #ffb30b").me-3
      h3.mb-0 Conexiones VPN
    p.mb-5(data-aos='fade-right') A continuación, se presentan aspectos acerca de las conexiones VPN, como su definición, importancia, usos, ventajas y desventajas.
    .row.justify-content-center.mb-5
      .col-lg-5.col-7(data-aos="fade-right").mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema1/23.svg', alt='')
      .col-lg-7(data-aos="fade-left")
        LineaTiempoD.color-acento-botones
          p(numero="1" titulo="Definición ") Ayudan a establecer la unión segura entre el usuario y la internet. Esta información es transmitida a través de un túnel virtual cifrado, que esconderá la dirección IP cuando se utiliza el internet, creando invisibilidad y brindando seguridad desde ataques externos, ya que las conexiones VPN ofrecen acceso a los datos desde un túnel cifrado.
          p(numero="2" titulo="Importancia") Una VPN ayudará a acceder a la información con restricción local desde cualquier parte que se acceda, es importante resaltar que las VPN no funcionan como antivirus, tampoco protegen el computador de intrusos externos. Lo que permite es poder crear una red local, sin la necesidad de que los usuarios estén físicamente conectados en la red, sino a través de la internet.<br><br>Son de gran importancia en el sector corporativo, ya que pueden ofrecer varios usos como el teletrabajo, este es el caso de los trabajadores que no están en una oficina o que están por fuera, o de compañías con sucursales en varios sitios, que necesitan estar en una red privada. En este sentido, el riesgo en la seguridad de una empresa disminuye si el trabajador y la empresa se conectan mediante una conexión VPN, ya que este acceso siempre estará protegido gracias al cifrado y el trabajador podrá acceder como si estuviera físicamente en la red de la empresa.
          p(numero="3" titulo="Usos") El bloqueo de contenidos y censuras a sitios no autorizados, se ha popularizado haciendo uso de VPN falsificando la ubicación geográfica donde se encuentra el usuario. Por ejemplo, si una persona que está en Colombia y el servidor está en Francia, utilizando una VPN los servidores creerán que está navegando desde el país de Francia, dejando acceder a contenidos disponibles. Igualmente, con esta misma lógica, se puede acceder a aquellos sitios o contenidos que tuvieran una limitación o bloqueos en su país, pero no donde se encuentra el servidor VPN. En las descargas P2P #[em (peer-to-peer)], en donde algunos proveedores bloquean por completo dichas descargas, de igual forma puede usarse una red VPN, para evitar la censura de la descarga, evitando que el proveedor impida hacer este uso.
          div(numero="4" titulo="Ventajas")
            ul.fa-ul
              li.mb-2
                i.fa-li.fas.fa-check(style="color:#ffb30b")
                span Pueden funcionar en todas las aplicaciones, ya que se enruta todo el tráfico de internet. Además, se conecta y desconecta de manera sencilla.
              li
                i.fa-li.fas.fa-check(style="color:#ffb30b")
                span Brinda una seguridad adicional y permite falsificar la ubicación de los equipos, evitando que el proveedor del servicio no sepa que pasa mirando videos musicales en #[em YouTube], con una VPN no sabrán a qué se dedica.
          div.text-small(numero="5" titulo="Desventajas")
            ul.fa-ul
              li.mb-2
                i.fa-li.fas.fa-check(style="color:#ffb30b")
                span Costo
              li.mb-2
                i.fa-li.fas.fa-check(style="color:#ffb30b")
                span Limitación de navegación.

              li.mb-2
                i.fa-li.fas.fa-check(style="color:#ffb30b")
                span Seguridad no tan fiable.

              li.mb-2
                i.fa-li.fas.fa-check(style="color:#ffb30b")
                span No siempre se puede falsear la ubicación.

              li
                i.fa-li.fas.fa-check(style="color:#ffb30b")
                span No se puede navegar en anonimato.

    p.mb-5(data-aos='fade-right') Para conocer acerca de gestión de redundancia de servidores, se invita a observar el siguiente video atentamente:
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/HFeziqsnZRU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)




</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
.img-infografica__card, .img-infografica-b__card
  width: 80%

.tarjeta.color-tema
  background: #fff
  border: 2px solid #26DEFC
  border-radius: 12px !important

.tarjeta-header
  background: #26DEFC
  .h5
    text-align: center

.img-infografica.color-acento-botones .img-infografica__item__numero, .img-infografica-b.color-acento-botones .img-infografica__item__numero
  color: $color-sistema-texto

.acordion__activo
  background-color: #e8e8e8

.tabs-a__tab
  background-color: #084a93
  .tabs-a__tab__text
    color: white
.tabs-a.color-secundario .tabs-a__tab__selected
  .tabs-a__tab__text
    color: $color-sistema-texto !important
</style>
