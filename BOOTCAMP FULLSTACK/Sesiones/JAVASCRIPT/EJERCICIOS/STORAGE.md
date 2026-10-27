

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text" id="name" placeholder="Ingresa tu nombre">
    <button id="button-save">Guardar</button>
    <p id="paragraph-greeting"></p>

    <script>
        const nameInput = document.getElementById('name');
        const saveButton = document.getElementById('button-save');
        const greetingParagraph = document.getElementById('paragraph-greeting');

        saveButton.addEventListener('click', () => {
            const name = nameInput.value;
            localStorage.setItem('name', name);
            greetingParagraph.textContent = `Hola, ${name}!`;
        });

        const savedName = localStorage.getItem('name');
        if (savedName) {
            nameInput.value = savedName;
            greetingParagraph.textContent = `Hola, ${savedName}!`;
        }
    </script>
</body>
</html>