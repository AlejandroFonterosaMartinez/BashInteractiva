document.addEventListener("DOMContentLoaded", function () {
    const userBash = document.getElementById("user");
    const storedUser = localStorage.getItem("usuario");
    userBash.textContent = "C:/Users/" + storedUser;

    const welcomeMessage = "¡Bienvenido " + storedUser + "! Soy tu asistente virtual. ¿En qué puedo ayudarte?";
    typeWriterEffect(welcomeMessage, "🤖");
});
const inputElement = document.getElementById("input");
const consolaBody = document.getElementById("consola-body");

let userOptions = [
    "1.🎫 ¿Generame una estructura HTML básica? -> /genhtml",
    "2.🙍‍♂️ ¿Quién ha creado este proyecto? -> /info",
    "3.🔧 ¿Necesitas ayuda? -> /help"
];

const respuesta_1 = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título de tu página</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script>
</head>

<body>
    <header>
        <h1>Encabezado de la Página</h1>
        <nav>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Acerca de</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section>
            <h2>Sección 1</h2>
            <p>Contenido de la sección 1.</p>
        </section>

        <section>
            <h2>Sección 2</h2>
            <p>Contenido de la sección 2.</p>
        </section>
    </main>

    <footer>
        <p>Derechos de autor © 2023. Todos los derechos reservados.</p>
    </footer>
</body>

</html>`;


inputElement.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        const userInput = inputElement.value;
        const newLine = document.createElement("p");
        newLine.textContent = "C:\\Users\\Username: " + userInput;
        consolaBody.appendChild(newLine);

        if (userInput.trim() === "/genhtml") {
            consolaBody.textContent = "Generando...";
            setTimeout(function () {
                consolaBody.textContent = "";
                typeWriterEffect(respuesta_1, "🤖");
            }, 1000);
        } else if (userInput.trim() === "/info") {
            consolaBody.textContent = "...";
            setTimeout(function () {
                consolaBody.textContent = "";
                typeWriterEffectWithHTML("Este proyecto lo ha hecho <b>Alejandro Fonterosa Martinez</b>, su Github es este: <a href='https://github.com/AlejandroFonterosaMartinez' target='_blank'><img src='assets/github.svg'></a>", "🤖");
            }, 1000);
        } else if (userInput.trim() === "/clear") {
            consolaBody.textContent = "";
        } else if (userInput.trim() === "/version") {
            consolaBody.textContent = "";
            typeWriterEffect("Versión: 0.0.1", "🤖");
        }
        else if (userInput.trim() === "/help") {
            consolaBody.textContent = "";
            typeWriterEffect("Comandos disponibles:\n\n" +
                "1. /version - Versión de la aplicacion.\n" +
                "2. /genhtml - Genera una plantilla de HTML .\n" +
                "3. /clear - Limpiar la pantalla.\n" +
                "4. /info - Información sobre la applicación.\n" +
                "5. /navegador - Navegador con el que estas conectado.\n" + "", "🤖");
        }
        else if (userInput.trim() === "/navegador") {
            consolaBody.textContent = "";
            const userAgent = navigator.userAgent;
            let navegador;

            if (userAgent.indexOf("Chrome") !== -1) {
                navegador = "Google Chrome";
            } else if (userAgent.indexOf("Firefox") !== -1) {
                navegador = "Mozilla Firefox";
            } else if (userAgent.indexOf("Safari") !== -1) {
                navegador = "Apple Safari";
            } else if (userAgent.indexOf("Edge") !== -1) {
                navegador = "Microsoft Edge";
            } else if (userAgent.indexOf("Opera") !== -1 || userAgent.indexOf("OPR") !== -1) {
                navegador = "Opera";
            } else {
                navegador = "Desconocido";
            }

            typeWriterEffect(`El usuario está utilizando el navegador: ${navegador}`, "🤖");
        } else {
            consolaBody.textContent = "";
            typeWriterEffect("Comando desconocido. ¡Use una de estas opciones ->", "🤖");

        }

        inputElement.value = "";
    }
});

function typeWriterEffectWithHTML(htmlContent, author) {
    const responseLine = document.createElement("p");
    responseLine.innerHTML = `${author}: ${htmlContent}`;
    consolaBody.appendChild(responseLine);
    const responseParagraph = document.createElement("p");
    responseParagraph.innerHTML = "&nbsp;";
    consolaBody.appendChild(responseParagraph); 
    setTimeout(function () {
        displayUserOptions();
    }, 1500);
}
function typeWriterEffect(text, author) {
    const responseLine = document.createElement("p");
    responseLine.innerHTML = author + ": ";
    consolaBody.appendChild(responseLine);

    let i = 0;
    const typingInterval = setInterval(() => {
        if (text[i] === "\n") {
            responseLine.appendChild(document.createElement("br"));
        } else {
            responseLine.innerHTML += text[i];
        }
        i++;

        if (i === text.length) {
            clearInterval(typingInterval);
            const responseParagraph = document.createElement("p");
            responseParagraph.innerHTML = "&nbsp;";
            consolaBody.appendChild(responseParagraph);
            setTimeout(function () {
                displayUserOptions();
            }, 1500);
        }
    }, 50);
}
function displayUserOptions() {
    const optionsLine = document.createElement("p");
    optionsLine.innerHTML = userOptions.join("<br>");
    consolaBody.appendChild(optionsLine);
}
