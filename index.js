'use strict';

// importamos el objeto app
/*
* Este me permite controlar el ciclo de vida
* de la aplicacion asi como:
* Eventos
* Acciones a ejecutar
*
* BROWSER WINDOW -> ventanas
* */
const { app, BrowserWindow } = require('electron');

// leer propiedad
console.dir(app);

// escuchar un evento y ejecutar antes de que salga
app.on('before-quit', () =>
{
    console.log("Saliendo");
});

// nuestra primera ventana
app.on('ready',() =>
{
    // creando una ventana luego de que este lista la app
    let win = new BrowserWindow();

    // ponemos a escuchar el evento de cierre de ventana
    win.on('closed', () => {
        // eliminando de la memoria el objeto y cerrando
        win = null;
        app.quit();
    })
});
