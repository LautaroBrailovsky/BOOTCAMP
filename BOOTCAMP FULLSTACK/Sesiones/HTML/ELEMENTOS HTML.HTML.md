

<!DOCTYPE html>
<html lang="es">

<head>

    <!-- ============================================================
         HEAD
         Información sobre la página que no se muestra directamente
         como contenido de la web.
    ============================================================= -->

    <!-- Indica que utilizamos la codificación UTF-8 -->
    <meta charset="UTF-8">

    <!-- Hace que la página se adapte correctamente a móviles -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Descripción de la página -->
    <meta name="description" content="Página de ejemplo para aprender HTML">

    <!-- Autor de la página -->
    <meta name="author" content="Nombre del alumno">

    <!-- Color utilizado por algunos navegadores -->
    <meta name="theme-color" content="#ffffff">


    <!-- ============================================================
         REDES SOCIALES
         Metadatos que pueden utilizar las redes sociales cuando
         alguien comparte nuestra página.
    ============================================================= -->

    <!-- Open Graph -->
    <meta property="og:title" content="Mi página web">
    <meta property="og:description" content="Una página de ejemplo HTML">
    <meta property="og:type" content="website">
    <meta property="og:image" content="https://ejemplo.com/imagen.jpg">

    <!-- Twitter / X -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Mi página web">
    <meta name="twitter:description" content="Una página de ejemplo HTML">
    <meta name="twitter:image" content="https://ejemplo.com/imagen.jpg">


    <!-- Título que aparece en la pestaña del navegador -->
    <title>Mi página web</title>


    <!-- Favicon: pequeño icono que aparece en la pestaña -->
    <link rel="icon" href="./favicon.ico">


    <!-- ============================================================
         CSS
         Podemos escribir CSS directamente dentro de este elemento.
         Más adelante utilizaremos archivos CSS externos.
    ============================================================= -->

    <style>

        /* Aquí podemos escribir nuestros estilos CSS */

    </style>


</head>


<body>


    <!-- ============================================================
         HEADER
         Cabecera de la página.
    ============================================================= -->

    <header>

        <!-- Título principal de la página -->
        <h1>Mi página web</h1>


        <!-- ========================================================
             NAV
             Contiene los enlaces de navegación de la página.
        ========================================================= -->

        <nav>

            <!--
                Enlace a index.html.
                ./ significa "desde la carpeta actual".
                index.html está en la misma carpeta que esta página.
            -->
            <a href="./index.html">Inicio</a>


            <!--
                Enlace a una página externa.
                En este caso, Google.
            -->
            <a href="https://www.google.com">Google</a>


            <!--
                Enlace a otra página de nuestra web.
                contacto.html estaría en la misma carpeta.
            -->
            <a href="./contacto.html">Contacto</a>


            <!--
                Enlace interno o enlace ancla.

                #formulario busca dentro de esta misma página
                un elemento que tenga id="formulario".
            -->
            <a href="#formulario">Ir al formulario</a>

        </nav>

    </header>


    <!-- ============================================================
         MAIN
         Contenido principal de la página.
    ============================================================= -->

    <main>


        <!-- ========================================================
             SECTION
        ========================================================= -->

        <section>

            <h2>Textos</h2>

            <p>
                Este es un párrafo de ejemplo.
            </p>

            <p>
                Podemos escribir una palabra en
                <strong>negrita e importante</strong>.
            </p>

            <p>
                También podemos utilizar
                <b>negrita</b>,
                <i>cursiva</i>,
                <em>énfasis</em> y
                <mark>texto marcado</mark>.
            </p>

            <p>
                Texto <small>más pequeño</small>,
                texto <del>eliminado</del> y
                texto <ins>insertado</ins>.
            </p>

            <p>
                Fórmula: H<sub>2</sub>O
                y 10<sup>2</sup>.
            </p>

        </section>


        <!-- ========================================================
             SECTION + ARTICLE
             Una sección puede contener diferentes artículos.
        ========================================================= -->

        <section>

            <h2>Artículos</h2>


            <!-- Primer artículo -->
            <article>

                <h3>Primer artículo</h3>

                <p>
                    Este es el contenido del primer artículo.
                </p>

            </article>


            <!-- Segundo artículo -->
            <article>

                <h3>Segundo artículo</h3>

                <p>
                    Este es el contenido del segundo artículo.
                </p>

            </article>


        </section>


        <!-- ========================================================
             LISTAS
        ========================================================= -->

        <section>

            <h2>Listas</h2>


            <!-- Lista sin ordenar -->
            <h3>Lista sin ordenar</h3>

            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>


            <!-- Lista ordenada -->
            <h3>Lista ordenada</h3>

            <ol>
                <li>Aprender HTML</li>
                <li>Aprender CSS</li>
                <li>Aprender JavaScript</li>
            </ol>

        </section>


        <!-- ========================================================
             IMÁGENES
        ========================================================= -->

        <section>

            <h2>Imagen</h2>

            <!--
                src indica dónde está la imagen.
                alt contiene un texto alternativo.
            -->

            <img
                src="https://via.placeholder.com/300"
                alt="Imagen de ejemplo"
            >

        </section>


        <!-- ========================================================
             FORMULARIO
             
             Este id permite que el enlace
             <a href="#formulario">
             pueda llevarnos directamente hasta aquí.
        ========================================================= -->

        <section id="formulario">

            <h2>Formulario</h2>

            <form>


                <!-- Input de texto -->
                <label for="nombre">Nombre:</label>

                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                >


                <br><br>


                <!-- Input de email -->
                <label for="email">Email:</label>

                <input
                    type="email"
                    id="email"
                    name="email"
                >


                <br><br>


                <!-- Input de contraseña -->
                <label for="password">Contraseña:</label>

                <input
                    type="password"
                    id="password"
                    name="password"
                >


                <br><br>


                <!-- Input numérico -->
                <label for="edad">Edad:</label>

                <input
                    type="number"
                    id="edad"
                    name="edad"
                >


                <br><br>


                <!-- Input de fecha -->
                <label for="fecha">Fecha de nacimiento:</label>

                <input
                    type="date"
                    id="fecha"
                    name="fecha"
                >


                <br><br>


                <!-- Checkbox -->
                <label>

                    <input
                        type="checkbox"
                        name="acepto"
                    >

                    Acepto los términos y condiciones

                </label>


                <br><br>


                <!-- Radio buttons -->
                <p>Sexo:</p>

                <label>

                    <input
                        type="radio"
                        name="sexo"
                        value="hombre"
                    >

                    Hombre

                </label>


                <label>

                    <input
                        type="radio"
                        name="sexo"
                        value="mujer"
                    >

                    Mujer

                </label>


                <label>

                    <input
                        type="radio"
                        name="sexo"
                        value="otro"
                    >

                    Otro

                </label>


                <br><br>


                <!-- Select -->
                <label for="pais">País:</label>

                <select id="pais" name="pais">

                    <option value="">
                        Selecciona un país
                    </option>

                    <option value="es">
                        España
                    </option>

                    <option value="fr">
                        Francia
                    </option>

                    <option value="it">
                        Italia
                    </option>

                </select>


                <br><br>


                <!-- Textarea -->
                <label for="mensaje">Mensaje:</label>

                <br>

                <textarea
                    id="mensaje"
                    name="mensaje"
                    rows="5"
                    cols="40"
                ></textarea>


                <br><br>


                <!-- Input de archivo -->
                <label for="archivo">
                    Selecciona un archivo:
                </label>

                <input
                    type="file"
                    id="archivo"
                    name="archivo"
                >


                <br><br>


                <!-- Input de color -->
                <label for="color">Color:</label>

                <input
                    type="color"
                    id="color"
                    name="color"
                >


                <br><br>


                <!-- Input de rango -->
                <label for="nivel">Nivel:</label>

                <input
                    type="range"
                    id="nivel"
                    name="nivel"
                    min="0"
                    max="10"
                >


                <br><br>


                <!-- Input de hora -->
                <label for="hora">Hora:</label>

                <input
                    type="time"
                    id="hora"
                    name="hora"
                >


                <br><br>


                <!-- Input de URL -->
                <label for="web">Página web:</label>

                <input
                    type="url"
                    id="web"
                    name="web"
                    placeholder="https://ejemplo.com"
                >


                <br><br>


                <!-- Botón para enviar el formulario -->
                <button type="submit">
                    Enviar formulario
                </button>


                <!-- Botón para limpiar el formulario -->
                <button type="reset">
                    Limpiar formulario
                </button>


            </form>

        </section>


        <!-- ========================================================
             OTROS ELEMENTOS BÁSICOS
        ========================================================= -->

        <section>

            <h2>Otros elementos</h2>

            <!-- Salto de línea -->
            <p>
                Primera línea<br>
                Segunda línea
            </p>


            <!-- Línea horizontal -->
            <hr>


            <!-- Fecha -->
            <p>

                Hoy es

                <time datetime="2026-09-25">
                    25 de septiembre de 2026
                </time>

            </p>


            <!-- Abreviatura -->
            <p>

                <abbr title="HyperText Markup Language">
                    HTML
                </abbr>

            </p>

        </section>


    </main>


    <!-- ============================================================
         FOOTER
         Pie de página.
    ============================================================= -->

    <footer>

        <p>
            © 2026 Mi página web
        </p>

    </footer>


    <!-- ============================================================
         JAVASCRIPT
         
         El código JavaScript está directamente dentro del elemento
         <script>. No utilizamos ningún archivo externo.
    ============================================================= -->

    <script>

        // Aquí escribiremos nuestro código JavaScript.

        console.log("Hola desde JavaScript");

    </script>


</body>

</html>