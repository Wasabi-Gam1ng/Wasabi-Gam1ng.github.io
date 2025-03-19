document.getElementById("facebook").addEventListener("click", function() {
    window.location.href = "https://discord.gg/vmCx6D4VPP";
});

document.getElementById("twitter").addEventListener("click", function() {
    window.location.href = "https://www.youtube.com/@Wasabi_Gam1ng";
});

document.getElementById("instagram").addEventListener("click", function() {
    window.location.href = "https://www.tiktok.com/@wasabi_gam1ng";
});

// Función para agregar la clase de giro
function addRotation(event) {
    event.target.classList.add("rotate");
}

// Función para remover la clase de giro
function removeRotation(event) {
    event.target.classList.remove("rotate");
}

// Asignar eventos a los botones
const buttons = document.querySelectorAll(".buttons button");

buttons.forEach(button => {
    button.addEventListener("mouseover", addRotation);
    button.addEventListener("mouseout", removeRotation);
});

// Redirecciones a redes sociales
document.getElementById("facebook").addEventListener("click", function() {
    window.location.href = "https://discord.gg/vmCx6D4VPP";
});

document.getElementById("twitter").addEventListener("click", function() {
    window.location.href = "https://www.youtube.com/@Wasabi_Gam1ng";
});

document.getElementById("instagram").addEventListener("click", function() {
    window.location.href = "https://www.tiktok.com/@wasabi_gam1ng";
});