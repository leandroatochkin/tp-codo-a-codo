window.onload = function() {
    // Selección del formulario
    var form = document.getElementById('contacto-form');

    // Agregar evento de envío del formulario
    form.addEventListener('submit', function(event) {
        // Validar campos antes de enviar el formulario
        if (!form.checkValidity()) {
            // Evitar el envío del formulario si hay campos no válidos
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
    }, false);
};