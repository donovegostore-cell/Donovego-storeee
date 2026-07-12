const productos = [
{
nombre: "Licuadora Procesadora Sokany 5 en 1",
precio: "$120.000 COP",
descripcion: "Optimiza tu tiempo en la cocina con esta potente procesadora 5 en 1. Ideal para batidos, picar vegetales y mucho más.",
imagenes: [
"imagenes/licuadora1.jpg",
"imagenes/licuadora2.jpg",
"imagenes/licuadora3.jpg"
]
},
{
nombre: "Smartwatch T500 Ultra",
precio: "$30.000 COP",
descripcion: "Pantalla HD, llamadas, notificaciones y monitoreo de actividad física.",
imagenes: [
"imagenes/reloj1.jpg",
"imagenes/reloj2.jpg",
"imagenes/reloj3.jpg"
]
},
{
nombre: "Plancha de Keratina Profesional",
precio: "$76.000 COP",
descripcion: "Cabello liso, brillante y sin frizz con resultados de salón.",
imagenes: [
"imagenes/plancha1.jpg",
"imagenes/plancha2.jpg",
"imagenes/plancha3.jpg"
]
},
{
nombre: "Depiladora Láser IPL Profesional",
precio: "$84.000 COP",
descripcion: "Tecnología IPL para una depilación cómoda y duradera desde casa.",
imagenes: [
"imagenes/ipl1.jpg",
"imagenes/ipl2.jpg",
"imagenes/ipl3.jpg"
]
},
{
nombre: "Parrilla Eléctrica Doble Sokany",
precio: "$160.000 COP",
descripcion: "Ideal para preparar carnes, verduras, sándwiches y mucho más.",
imagenes: [
"imagenes/parrilla1.jpg",
"imagenes/parrilla2.jpg",
"imagenes/parrilla3.jpg"
]
},
{
nombre: "Extractor de Jugos Sokany",
precio: "$200.000 COP",
descripcion: "Extrae el máximo de vitaminas y nutrientes de frutas y verduras.",
imagenes: [
"imagenes/extractor1.jpg",
"imagenes/extractor2.jpg",
"imagenes/extractor3.jpg"
]
}
];
const contenedor = document.getElementById("productos");

function mostrarProductos(lista) {
    contenedor.innerHTML = "";

    lista.forEach(producto => {
        const card = document.createElement("div");
        card.className = "producto";

        let imagenes = "";

        producto.imagenes.forEach(img => {
            imagenes += `<img src="${img}" alt="${producto.nombre}">`;
        });

        card.innerHTML = `
            <div class="galeria">
                ${imagenes}
            </div>

            <h2>${producto.nombre}</h2>
            <p>${producto.descripcion}</p>
            <h3>${producto.precio}</h3>

            <a class="boton" target="_blank"
            href="https://wa.me/573201234567?text=Hola,%20quiero%20comprar%20${encodeURIComponent(producto.nombre)}">
            Comprar por WhatsApp
            </a>
        `;

        contenedor.appendChild(card);
    });
}

mostrarProductos(productos);

document.getElementById("buscador").addEventListener("input", function () {
    const texto = this.value.toLowerCase();

    const filtrados = productos.filter(p =>
        p.nombre.toLowerCase().includes(texto)
    );

    mostrarProductos(filtrados);
});
