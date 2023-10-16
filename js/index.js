const ropaHombre = [
    {
      id: 1,
      nombre: "Short Chicago negro",
      precio: 300.00,
      imagen: "ropa-hombre/chicago-short.jpg",
      cantidad: 1,
      sexo: "Hombre"
    },
    {
      id: 2,
      nombre: "Short Chicago blanco",
      precio: 450.00,
      imagen: "ropa-hombre/chicago-short-blanco.jpg",
      cantidad: 1,
      sexo: "Hombre"
    },
    {
      id: 3,
      nombre: "Remera de compresión negra",
      precio: 700.00,
      imagen: "ropa-hombre/compresion-negra.jpg",
      cantidad: 1,
      sexo: "Hombre"
    },
    {
      id: 4,
      nombre: "Remera de Spiderman",
      precio: 250.00,
      imagen: "ropa-hombre/remera-spiderman.jpg",
      cantidad: 1,
      sexo: "Hombre"
    },
    {
      id: 5,
      nombre: "Short Berserk",
      precio: 500.00,
      imagen: "ropa-hombre/short-berserk.jpg",
      cantidad: 1,
      sexo: "Hombre"
    },
    {
      id: 6,
      nombre: "Zapatos Vans negros",
      precio: 200.00,
      imagen: "ropa-hombre/zapatos-vans.jpg",
      cantidad: 1,
      sexo: "Hombre"
    },
  ];
  
  const ropaMujer = [
    {
      id: 7,
      nombre: "Bikini negro",
      precio: 600.00,
      imagen: "ropa-mujer/bikini-negro.jpg",
      cantidad: 1,
      sexo: "Mujer"
    },
    {
      id: 8,
      nombre: "Botas blancas",
      precio: 350.00,
      imagen: "ropa-mujer/botas-blancas.jpg",
      cantidad: 1,
      sexo: "Mujer"
    },
    {
      id: 9,
      nombre: "Botas negras",
      precio: 400.00,
      imagen: "ropa-mujer/botas-negras.jpg",
      cantidad: 1,
      sexo: "Mujer"
    },
    {
      id: 10,
      nombre: "Turtle neck negro",
      precio: 450.00,
      imagen: "ropa-mujer/turtle-neck-black.jpg",
      cantidad: 1,
      sexo: "Mujer"
    },
    {
      id: 11,
      nombre: "Vestido negro",
      precio: 30.00,
      imagen: "ropa-mujer/vestido-negro.jpg",
      cantidad: 1,
      sexo: "Mujer"
    },
    {
      id: 12,
      nombre: "Pantalones Capri",
      precio: 25.00,
      imagen: "ropa-mujer/vestido-rojo.jpg",
      cantidad: 1,
      sexo: "Mujer"
    },
];
  


const productosContainer = document.getElementById("productos");

function mostrarProductos(listaProductos) {
  listaProductos.forEach(producto => {
    const productoElement = document.createElement("div");
    productoElement.classList.add("producto", "productoY");

    // Crea un div que contendrá todos los elementos del producto
    const contenidoProducto = document.createElement("div");
    contenidoProducto.classList.add("contenido-producto");

    const imagenContainer = document.createElement("div"); // Contenedor para la imagen
    imagenContainer.classList.add("imagen-container"); // Agrega una clase para el contenedor de la imagen

    const imagenElement = document.createElement("img");
    imagenElement.src = producto.imagen;

    imagenContainer.appendChild(imagenElement); // Agrega la imagen al contenedor de imagen

    contenidoProducto.appendChild(imagenContainer); // Agrega el contenedor de imagen al contenido del producto

    const nombreElement = document.createElement("h2");
    nombreElement.textContent = producto.nombre;
    contenidoProducto.appendChild(nombreElement);

    const precioElement = document.createElement("p");
    precioElement.textContent = `$${producto.precio.toFixed(2)}`;
    contenidoProducto.appendChild(precioElement);

    // Agregar el botón "Añadir al carrito"
    const botonAgregar = document.createElement("button");
    botonAgregar.textContent = "Añadir al carrito";
    botonAgregar.classList.add("boton-carrito");
    contenidoProducto.appendChild(botonAgregar);

    // Agregar el contenido del producto al elemento del producto
    productoElement.appendChild(contenidoProducto);

    // Agregar el producto al contenedor de productos
    productosContainer.appendChild(productoElement);
  });
}


// Llama a la función para mostrar productos para hombres o mujeres
mostrarProductos(ropaHombre); // Muestra productos para hombres
// O
// mostrarProductos(ropaMujer); // Muestra productos para mujeres
const htmlElement = document.querySelector("html")
const cartIcon = document.getElementById("cart");
const overlay = document.querySelector(".overlay");
const carrito = document.querySelector(".carrito");

cartIcon.addEventListener("click", () => {
    // Aquí puedes agregar la lógica para mostrar u ocultar el carrito y el overlay.
    if (carrito.classList.contains("visible")) {
        // Si el carrito ya está visible, lo ocultamos.
        htmlElement.style.overflow = "auto";
        carrito.classList.remove("visible");
        overlay.style.display = "none";
    } else {
        // Si el carrito no está visible, lo mostramos.
        htmlElement.style.overflow = "hidden";
        carrito.classList.add("visible");
        overlay.style.display = "flex";
    }
});

const carritoLista = document.getElementById("carrito-lista");
const botonAgregar = document.querySelectorAll(".boton-carrito"); // Selecciona todos los botones "Añadir al carrito"
const carritoVacio = document.querySelector(".carrito__vacio");
const carritoLleno = document.querySelector(".carrito_lleno");

botonAgregar.forEach((boton, index) => {
    boton.addEventListener("click", () => {
        // Obten el producto correspondiente según el índice
        const producto = ropaHombre[index];

        // Verifica si el producto ya está en el carrito
        const productosEnCarrito = carritoLista.querySelectorAll("li");
        let productoExistente = null;

        productosEnCarrito.forEach((item) => {
            if (item.textContent.includes(producto.nombre)) {
                productoExistente = item;
            }
        });

        if (productoExistente) {
            // Si el producto ya está en el carrito, aumenta la cantidad
            const cantidadElement = productoExistente.querySelector(".cantidad");
            const cantidadActual = parseInt(cantidadElement.textContent.split(" ")[1]);
            cantidadElement.textContent = `Cantidad: ${cantidadActual + 1}`;
        } else {
            // Si el producto no está en el carrito, crea un nuevo elemento
            const productoEnCarrito = document.createElement("li");
            productoEnCarrito.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}" width="50">
                <span>${producto.nombre}</span>
                <span class="cantidad">Cantidad: 1</span>
                <span>$${producto.precio.toFixed(2)}</span>
            `;

            // Agrega el producto a la lista del carrito
            carritoLista.appendChild(productoEnCarrito);
        }

        // Incrementa el contador de carrito
        const contadorCarrito = document.querySelector(".contador__carrito");
        contadorCarrito.textContent = (parseInt(contadorCarrito.textContent) + 1).toString();

        // Muestra el carrito lleno y oculta el carrito vacío
        carritoVacio.style.display = "none";
        carritoLleno.style.display = "block";
    });
});
