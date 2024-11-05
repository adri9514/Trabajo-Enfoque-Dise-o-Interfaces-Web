// Selecciona todos los productos destacados y agrega eventos de ratón
document.querySelectorAll('#destacados .producto').forEach((producto) => {
    producto.addEventListener('mouseenter', () => {
        producto.querySelector('.descripcion').style.display = 'block';
    });

    producto.addEventListener('mouseleave', () => {
        producto.querySelector('.descripcion').style.display = 'none';
    });
});
