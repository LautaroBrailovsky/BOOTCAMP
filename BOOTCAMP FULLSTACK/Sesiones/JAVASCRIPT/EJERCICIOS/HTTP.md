

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <script>
        async function obtenerPublicacion() {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/posts/1"
                );

                console.dir(response);

                if (!response.status === 200) {
                    throw new Error(`Error HTTP: ${response.status}`);
                }

                const data = await response.json();

                console.log(data.title);
                console.log(data.body);
            } catch (error) {
                console.error("No se pudo obtener la publicación:", error.message);
            }
        }

        obtenerPublicacion();


        /*async function crearPublicacion() {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/posts",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            title: "Aprendiendo JavaScript",
                            body: "Mi primera petición POST",
                            userId: 1
                        })
                    }
                );

                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status}`);
                }

                const data = await response.json();
                console.log("Publicación creada:", data);
            } catch (error) {
                console.error("No se pudo crear la publicación:", error.message);
            }
        }

        crearPublicacion();

        async function ejemploSecuencial() {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts/1"
            );
            const post = await response.json();
            console.log(post);
            console.log(post.userId);
            const userResponse = await fetch(
                `https://jsonplaceholder.typicode.com/users/${post.userId}`
            );
            const user = await userResponse.json();
            console.log(user);
            
            console.log(post.title);
            console.log(user.name);
        }

        ejemploSecuencial();
        */
    </script>
</body>

</html>