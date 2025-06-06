const {resta,sum, enviarNotificacion} = require('./sum');//importar


test('adds 1 + 2 to equal 3', () => {
    //el resultado de la funcion sum. tobe=>deberia ser 3
  expect(sum(1, 2)).toBe(3);
});

test('envía notificación correctamente a un usuario con nombre', () => {
  const usuario = { nombre: 'María' };
  expect(enviarNotificacion(usuario)).toBe('📩 Notificación enviada a María');
});

test('lanza error si el usuario es null', () => {
  expect(() => enviarNotificacion(null)).toThrow('Usuario no válido');
});