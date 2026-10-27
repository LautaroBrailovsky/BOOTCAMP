

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi ubicación en Leaflet</title>

    <!-- Dependencia CSS de Leaflet -->
    <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
    >

    <!-- Dependencia JavaScript de Leaflet -->
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

    <style>
        #mapa {
            height: 20rem;
            width: 20rem;
        }
    </style>
</head>

<body>
    <h1>Mi ubicación</h1>

    <button id="ubicacion">¿Dónde estoy?</button>

    <p id="resultado">
        Todavía no hemos consultado la ubicación.
    </p>

    <div id="mapa"></div>

    <script>
        const boton = document.querySelector("#ubicacion");
        const resultado = document.querySelector("#resultado");

        // Crear el mapa con una posición inicial
        const mapa = L.map("mapa").setView([39.4699, -0.3763], 9);

        // Añadir el mapa base
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "&copy; OpenStreetMap contributors"
        }).addTo(mapa);

        // Marcador de la ubicación
        let marcador = null;

        boton.addEventListener("click", () => {
            if (navigator.geolocation === undefined) {
                resultado.textContent =
                    "Este navegador no ofrece geolocalización.";
                return;
            }

            resultado.textContent = "Obteniendo ubicación...";

            navigator.geolocation.watchPosition(
                (position) => {
                    const latitud = position.coords.latitude;
                    const longitud = position.coords.longitude;

                    resultado.textContent =
                        `Latitud: ${latitud.toFixed(4)}, longitud: ${longitud.toFixed(4)}`;

                    // Centrar el mapa en nuestra ubicación
                    mapa.setView([latitud, longitud], 20);

                    // Crear o actualizar el marcador
                    if (marcador === null) {
                        marcador = L.marker([latitud, longitud])
                            .addTo(mapa)
                            .bindPopup("¡Estás aquí!")
                            .openPopup();
                    } else {
                        marcador.setLatLng([latitud, longitud]);
                    }
                },
                (error) => {
                    resultado.textContent =
                        "No se pudo obtener la ubicación. Comprueba el permiso del navegador.";

                    console.error(error);
                }
            );
        });
    </script>
</body>

</html>