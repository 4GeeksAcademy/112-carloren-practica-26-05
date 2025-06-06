function sum(a, b) {
    return a + b;
}

function resta(a, b) {
    return a + b;
}

function enviarNotificacion(usuario) {
    if (!usuario || !usuario.nombre) {
        throw new Error('Usuario no válido');
    }
    return `📩 Notificación enviada a ${usuario.nombre}`;
}


module.exports = { sum, resta, enviarNotificacion };