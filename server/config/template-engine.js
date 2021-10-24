import ExpHbs from 'express-handlebars';
import path from 'path';

// Exportando una funcion de configuración
export default(app) => {
  // 1. Registrar el motor de platillas
  app.engine(
    'hbs',
    ExpHbs({
      extname: '.hbs',
      defaultLayout: 'main',
    }),
  );

  // 2. Selccionar el motor de plantillas recien registrado.
  app.set('view engine', 'hbs');
  // 3. Estableciendo la ruta de las vistas
  app.set('views', path.join(__dirname, '..', 'views'));

  //Retornamos el valor de entrada.
  return app;
};
