

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .ejercicio {
            font-size: 20px;
            color: darkslategray;
            text-decoration: underline;
        }

        body:last-child {
            margin-bottom: 60rem;
        }
    </style>
</head>

<body>
    <section>
        <h1 class="ejercicio">Ejercicio 2 — Practicar selectores</h1>
        <h1 id="titulo1">Mi web</h1>

        <p class="texto1">Primer texto</p>
        <p class="texto1">Segundo texto</p>
        <p>Texto normal</p>

        <script>
            let titulo = document.getElementById("titulo1");
            let parrafo = document.getElementsByTagName("p");
            let classTexto = document.getElementsByClassName("texto1");
            let primerClassTexto = document.querySelector(".texto1");
            let todosClassTexto = document.querySelectorAll(".texto1");

            console.log(titulo);
            console.log(parrafo);
            console.log(classTexto);
            console.log(primerClassTexto);
            console.log(todosClassTexto);
        </script>
    </section>
    <section>
        <h1 class="ejercicio">Ejercicio 3 — Cambiar contenido</h1>
        <h1 id="titulo2">Título original</h1>
        <p id="texto2">Texto original</p>
        <script>
            //CAMMEL CASE
            //background-color -> backgroundColor
            //const cilindrada de un coche -> cilindradaDeUnCoche
            let titulo2 = document.getElementById("titulo2");
            let parrafo2 = document.getElementById("texto2");
            setTimeout(() => {
                titulo2.innerHTML = "Mi página web";
                parrafo2.innerHTML = "Estoy aprendiendo JavaScript";
            }, 5000);
        </script>
    </section>

    <section>
        <h1 class="ejercicio">Ejercicio 4 — Cambiar estilos</h1>
        <p id="mensaje2">Hola JavaScript</p>
        <script>
            let mensaje2 = document.getElementById("mensaje2");
            setTimeout(() => {
                mensaje2.style.color = "pink";
                mensaje2.style.backgroundColor = "red";
                parrafo2.style.fontSize = "30px";
            }, 5000);
        </script>
    </section>

    <section>
        <h1 class="ejercicio">Ejercicio 5BIS — Crear elementos</h1>
        <div id="contenedor"></div>
        <script>
            let contenedor = document.getElementById("contenedor");
            let nuevoParrafo = document.createElement("p");
            nuevoParrafo.innerHTML = "CONTENIDO";
            setTimeout(() => {
                contenedor.appendChild(nuevoParrafo);
            }, 5000);
        </script>
    </section>

    <section>
        <h1 class="ejercicio">Ejercicio 5 — Modificar un atributo</h1>
        <a id="enlace" href="https://www.google.com">Google</a>
        <script>
            let enlace = document.getElementById("enlace");
            setTimeout(() => {
                enlace.setAttribute("href", "https://thebridge.tech/");
                enlace.innerHTML = "The brigde";
            }, 5000);
        </script>
    </section>

    <section>
        <h1 class="ejercicio">Ejercicio 6 — Crear elementos</h1>
        <div id="lista"></div>
        <script>
            let lista1 = document.getElementById("lista");
            let nuevoParrafo1 = document.createElement("p");
            nuevoParrafo1.innerHTML = "Elemento creado con JavaScript";
            setTimeout(() => {
                lista1.appendChild(nuevoParrafo1);
            }, 5000);
        </script>
    </section>

    <section>
        <h1 class="ejercicio">Ejercicio 8 — Eliminar un elemento</h1>
        <p id="mensaje4">Este mensaje desaparecerá</p>
        <script>
            let mensaje4 = document.getElementById("mensaje4");
            setTimeout(() => {
                mensaje4.remove();
            }, 5000);
        </script>
    </section>

    <section>
        <h1 class="ejercicio">Ejercicio 9 — Primer evento</h1>
        <p id="mensaje5">Este mensaje se cambiará</p>
        <button onclick="saludar(event)">Saludar</button>
        <script>
            let mensaje5 = document.getElementById("mensaje5");
            function saludar(event) {
                mensaje5.innerHTML = "CAMBIADO!"
                //console.log(event);
            }
        </script>
    </section>

    <section>
        <h1 class="ejercicio">Ejercicio 10 — Botón que cambia la página</h1>
        <!--<button id="boton6" onclick="actualizarElementos()">Cambiar</button>-->
        <button id="boton6">Cambiar</button>
        <h1 id="titulo6">Título original</h1>
        <p id="texto6">Texto original</p>
        <script>
            let titulo6 = document.getElementById("titulo6");
            let texto6 = document.getElementById("texto6");
            let boton6 = document.getElementById("boton6");
            /*function actualizarElementos(){
                titulo6.innerHTML = "Título cambiado";
                texto6.innerHTML = "Texto cambiado";
                titulo6.style.color = "red";
            }*/
            boton6.onclick = function () {
                titulo6.innerHTML = "Título cambiado";
                texto6.innerHTML = "Texto cambiado";
                titulo6.style.color = "red";
            };
        </script>
    </section>

    <section>
        <h1 class="ejercicio">Ejercicio 11 — addEventListener()</h1>
        <button id="boton7">Cambiar</button>
        <p id="texto7">Texto original</p>
        <script>
            let texto7 = document.getElementById("texto7");
            let boton7 = document.getElementById("boton7");
            boton7.addEventListener("click", function () {
                boton7.innerHTML = "Cambiado!";
                texto7.style.color = "green";
                texto7.style.fontSize = "20px";
            });
        </script>
    </section>

    <section>
        <h1 class="ejercicio">Ejercicio 12 — Caja interactiva</h1>
        <div id="caja">
            Pasa el ratón por encima
        </div>
        <script>
            let caja = document.getElementById("caja");
            caja.addEventListener("mouseenter", function () {
                caja.style.backgroundColor = "pink";
            });

            caja.addEventListener("mouseleave", function () {
                caja.style.backgroundColor = "green";
            });
        </script>
    </section>

    <section>
        <h1 class="ejercicio">Ejercicio 13 — Imagen interactiva</h1>
        <img id="imagen7" src="https://thebridge.tech/wp-content/uploads/2024/07/Logo.svg" alt="Imagen">
        <script>
            let imagen7 = document.getElementById("imagen7");

            imagen7.addEventListener("mouseover", function () {
                imagen7.style.width = "600px";
            });

            imagen7.addEventListener("mouseout", function () {
                imagen7.style.width = "150px";
            });
        </script>
    </section>

    <section>
        <h1 class="ejercicio">Ejercicio 15 — Ejercicio guiado — Tarjeta interactiva</h1>
        <div id="tarjeta">
            <h2 id="nombre">Ana</h2>
            <p id="descripcion">Desarrolladora web</p>
            <button id="boton9">Cambiar información</button>
            <button id="botonTamano">Cambiar tamaño del título</button>
        </div>
        <script>
            const tarjeta = document.getElementById("tarjeta");
            const nombre = document.getElementById("nombre");
            const descripcion = document.getElementById("descripcion");
            const boton9 = document.getElementById("boton9");
            const botonTamano = document.getElementById("botonTamano");

            boton9.addEventListener("click", function () {
                nombre.textContent = "Lucía";
                descripcion.textContent = "Diseñadora UX/UI";
                tarjeta.style.backgroundColor = "#d8f3dc";
            });

            botonTamano.addEventListener("click", function () {
                nombre.style.fontSize =
                    nombre.style.fontSize === "2.5rem" ? "2rem" : "2.5rem";
            });
        </script>
    </section>

    <section>
        <h1 class="ejercicio">Ejercicio 17 — Reto opcional — Lista dinámica</h1>
        <input id="tarea8">
        <button id="anadir8">Añadir</button>

        <ul id="lista8"></ul>
        <script>
            let tarea8 = document.getElementById("tarea8");
            let lista8 = document.getElementById("lista8");
            let anadir8 = document.getElementById("anadir8");

            anadir8.addEventListener("click", () => {
                const textoTarea = tarea8.value.trim();

                if (textoTarea === "") {
                    return;
                }

                const li = document.createElement("li");
                li.innerHTML = textoTarea;
                li.addEventListener("click", function () {
                    li.remove();
                });
                lista8.appendChild(li);
                tarea8.value = "";
            });
        </script>
    </section>
</body>

</html>