// ================== SCROLL REVEAL ==================
const elementsToReveal = document.querySelectorAll(`
    section,
    .servicio,
    .stack-item,
    .proyecto-card,
    .contacto-card
`);

elementsToReveal.forEach(el => el.classList.add("reveal"));

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);

elementsToReveal.forEach(el => observer.observe(el));


// ----------------------------------------------------------------
// Funcion boton responsive jeje
const nav = document.getElementById("nav");
const links = document.getElementById("links");

function responsiveMenu() {
    nav.classList.toggle("responsive");
}

function seleccionar(link) {
    // Quita la clase 'seleccionado' de todos
    const opciones = document.querySelectorAll("#links a");
    opciones.forEach(op => op.classList.remove("seleccionado"));

    // Marca el actual
    link.classList.add("seleccionado");

    // Cierra el menú en mobile
    nav.classList.remove("responsive");
}
