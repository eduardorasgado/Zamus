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
app.on('ready',() =>{
    let win = new BrowserWindow({
        // definiendo propiedades de la ventana
        width: 1000,
        height: 600,
        title: "Zamus",
        center: true,
        // modificar el maximizable no esta implementado para linux
        maximizable: false,
        show: false
    });

    // ejecutandose solo una vez
    // esperamos la carga completa de un servicio remoto
    win.once("ready-to-show", () => {
        win.show();
    });

    // se ejecuta cada que la ventana es movida
    win.on("move",() =>{
        const position =win.getPosition();
        console.log(`La posicion de la ventana es ${position}`);
    });

    // escuchando al cierre de la aplicacion
    app.on("closed", () => {
        // vaciando la memoria que contiene la ventana
        win = null;
        // cerrando el aplicativo
        app.quit();
    });

    // cargando una web remota
    //win.loadURL("http://devdocs.io/");
    // cargando una web local, los archivos que forman parte de la
    // misma carpeta que el proyecto
    win.loadURL(`file://${__dirname}/index.html`);
});