// ------------------------------------------------------------------------------------------------------------------------
/* EventListeners */
document.querySelector("#buttonRegistrarImportador").addEventListener("click", irSeccionRegistro);
document.querySelector("#buttonInicioSesion").addEventListener("click", inicioSesion );

// Este listener escucha al boton que lleva a la seccion Solicitudes Pendientes
document.querySelector("#buttonVerMisSolicitudes").addEventListener("click", irSolicitudesPendientes);

// Event Listener para ir a Crear Nueva Solicitud
document.querySelector("#irCrearSolicitudes").addEventListener("click", irCrearNuevaSolicitud);
document.querySelector("#irCrearSolicitudesDos").addEventListener("click", irCrearNuevaSolicitud);


document.querySelector("#buttonRegistro").addEventListener("click", usuarioNuevo);
/* Click para iniciar sesion */
document.querySelector("#buttonInicioSesion").addEventListener("click", inicioSesion);

// Este listener es para crear una nueva solicitud 
document.querySelector("#buttonCrearSolicitud").addEventListener("click", crearNuevaSolicitud);

// Este litener es para mostrar todas mis solicitudes pendientes.
document.querySelector("#buttonMostrarTodasSolicitudes").addEventListener("click", mostrarSolicitudesPendientes);

// Este litener es para mostrar todas mis solicitudes pendientes filtrado por descripcion
document.querySelector("#bttnBuscadorSolicitudesPendientes").addEventListener("click", mostrarSolicitudesPendientesFiltroDescripcion);

// Este listener es para ver el select dinamico de mis solicitudes. Seccion cancelar solicitudes
document.querySelector("#cancelarSolicitud").addEventListener("click", cancelarSolicitud);

// Event listener para ir al calendario de importador
document.querySelector("#irCalendarioUno").addEventListener("click", irCalendario);
document.querySelector("#irCalendarioDos").addEventListener("click", irCalendario);
document.querySelector("#irCalendarioTres").addEventListener("click", irCalendario);

// Event listeners para ir estadisticas importador
document.querySelector("#irEstadisticaUno").addEventListener("click", irEstadisticas);
document.querySelector("#irEstadisticaDos").addEventListener("click", irEstadisticas);
document.querySelector("#irEstadisticaTres").addEventListener("click", irEstadisticas);

// Event Listener para crear nuevo viaje de buque
document.querySelector("#botonCrearViajeBuque").addEventListener("click", crearViajeBuque);

// Event Listener para ir a seccion Asignar Solicitudes a Viajes
document.querySelector("#btnIrAsignarSolicitudViaje").addEventListener("click", irAsignarSolicitudes);

// Al hacer click en Asignar trata de asignar la solicitud al viaje
document.querySelector("#bttnAsignar").addEventListener("click", asignarSolicitudeAViaje);

// Al hacer click en boton reasingar. Trata de reasignar la carga. (Hacer Rollover)
document.querySelector("#bttnRollover").addEventListener("click", rolloverSolicitudeViaje);

// voy a la seccion de crear nuevo viaje buque
document.querySelector("#btnIrDeAsigACrear").addEventListener("click", irCrearNuevoViaje);
document.querySelector("#btnIrDeImpoACrear").addEventListener("click", irCrearNuevoViaje);

// Event Listener para cargar el Manifesto de Carga
document.querySelector("#bttnCargarManifesto").addEventListener("click", cargarManifesto);

// Event lister para crear listado de cargas peligrosas
document.querySelector("#bttnCargaPeligrosa").addEventListener("click", mostrarCargasPeligrosas);

// Event listener para ir a seccion habilitar importadores
document.querySelector("#btnirImportadores").addEventListener("click", irSeccionabilitarImportadores);

// Event listener para ignorar solicitud cancelada
document.querySelector("#bttnIgnorarSolicitud").addEventListener("click", ignorarSolicitud);



// ------------------------------------------------------------------------------------------------------------------------

let contadorDeEmpresas = 1;
let contadorDeImportadores = 1;
let contadorDeViajesBuque = 1;
let contadorSolicitudes = 1;

let usuarioConectado = null;
let idUsuarioConectado = null;
let esImportador = null;
let esEmpresa = null;

function registrarNombreUsuarioConectado(nomUsu) {
    usuarioConectado = nomUsu;
}

function registrarIdUsuarioConectado(idUsu) {
    idUsuarioConectado = idUsu;
}

function esImportadorf() {
    esImportador = true;
}

function esEmpresaf() {
    esEmpresa = true;
}


// fecha de hoy
const date = new Date();
let hoy = Number(date.toLocaleDateString('es-UY').split('/').reverse().join(''));

// ------------------------------------------------------------------------------------------------------------------------

/*Creo la clase empresa*/
class Empresa {
    constructor(nombre, usuario, contrasena) {
        this.idEmpresa = contadorDeEmpresas;
        this.nombre = nombre;
        this.usuario = usuario;
        this.contrasena = contrasena;
        contadorDeEmpresas++
    }

    getIdEmpresa() {
        return this.idEmpresa;
    }

    getNombreEmpresa() {
        return this.nombre;
    }

    getUsuarioEmpresa() {
        return this.usuario
    }

    getContrasenaEmpresa() {
        return this.contrasena;
    }
}


/* Creo las empresa de prueba*/
let empresaUno = new Empresa("transportesur", "surtrans", "cotilandia");
let empresaDos = new Empresa("telesur", "telur", "laika");
let empresaTres = new Empresa("brocosur", "broco", "jack");
let empresaCuatro = new Empresa("condorito","condor", "condorveo");
let empresaCinco = new Empresa("leon", "simba","selva");

/* Creo un Array de Empresa */
let empresas = [empresaUno, empresaDos, empresaTres, empresaCuatro, empresaCinco];


/*Creo la clase importadores*/
class Importador {
    constructor(nombre, usuario, contrasena, foto) {
        this.idImportador = contadorDeImportadores;
        this.nombre = nombre;
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.foto = foto
        this.estado = "habilitado"
        contadorDeImportadores++; 
    }

    getIdImportador() {
        return this.idImportador;
    }

    getNombreImportador() {
        return this.nombre;
    }

    getUsuarioImportador() {
        return this.usuario
    }

    getContrasenaImportador() {
        return this.contrasena;
    }

    setEstado(unEstado) {
        this.estado = unEstado;
    }
}

/* Creo los Importadores de prueba*/
let importadorUno = new Importador("roldimar", "roldi", "Coti235");
let importadorDos = new Importador("larrosa", "telur", "Laika123");
let importadorTres = new Importador("edelplus", "broco", "Jack123");
let importadorCuatro = new Importador("marsur", "importasur", "Marsur123");
let importadorCinco = new Importador("pelicano", "importapelicano", "Pelicano123");

/* Creo un Array de importadores*/
let importadores  = [importadorUno, importadorDos, importadorTres, importadorCuatro, importadorCinco];


/*Creo la clase solicitud */
class Solicitud {
    constructor(tipoMercaderia, descripcion, origen, cantidadContenedores, idEmpresa, numeroDeViaje) {
        this.idSolicitud= contadorSolicitudes;
        this.nombreImportador = usuarioConectado;
        this.estado = "pendiente";
        this.tipoMercaderia = tipoMercaderia;
        this.descripcion = descripcion;
        this.origen = origen;
        this.cantidadContenedores = cantidadContenedores;
        this.idEmpresa = idEmpresa; // esta es la empresa dueña del buque
        this.numeroDeViaje = numeroDeViaje; // este es el buque que lo lleva
        contadorSolicitudes++;
    }

    getNombreImportador() {
        return this.nombreImportador;
    }

    getIdSolicitud() {
        return this.idSolicitud;
    }

    getTipo() {
        return this.tipoMercaderia;
    }

    getDescripcion() {
        return this.descripcion;
    }

    getOrigen() {
        return this.origen;
    }

    getCantidadContenedores() {
        return this.cantidadContenedores;
    }

    getIdEmpresa() {
        return this.idEmpresa;
    }

    getNumeroDeViaje() {
        return this.numeroDeViaje;
    }

    setNombreImportador(unImportador){
        this.nombreImportador = unImportador;
    }

    setEstadoSolicitud(unEstado) {
        this.estado = unEstado;
    }
}

let idSolicitud = 0;

let solicitudUno = new Solicitud("CARGAR_GENERAL", "juguetes", "peru", 2, 2, 1);
solicitudUno.setNombreImportador("roldimar");
solicitudUno.setEstadoSolicitud("confirmada")
let solicitudDos = new Solicitud("CARGAR_GENERAL", "tecnologia", "buenosAires", 2, 1, 2);
solicitudDos.setNombreImportador("roldimar");
solicitudDos.setEstadoSolicitud("confirmada")
let solicitudTres = new Solicitud("CARGA_PELIGROSA" , "veneno", "brasil", 1, 1, 3);
solicitudTres.setNombreImportador("edelplus");
solicitudTres.setEstadoSolicitud("confirmada")
let solicitudCuatro = new Solicitud("REFRIGERADO", "pescado", "buenosAires", 2, 3, 4);
solicitudCuatro.setNombreImportador("edelplus");
solicitudCuatro.setEstadoSolicitud("confirmada")
let solicitudCinco = new Solicitud("CARGA_PELIGROSA", "veneno", "buenosAires", 1, 3, 5);
solicitudCinco.setNombreImportador("pelicano");
solicitudCinco.setEstadoSolicitud("confirmada")
let solicitudSeis = new Solicitud("CARGA_PELIGROSA", "plutonio", "rusia", 2, 0, 0);
solicitudSeis.setNombreImportador("roldimar");
solicitudSeis.setEstadoSolicitud("pendiente")
let solicitudSiete = new Solicitud("CARGA_PELIGROSA", "plutonio", "ucrania", 10, 0, 0);
solicitudSiete.setNombreImportador("roldimar");
solicitudSiete.setEstadoSolicitud("pendiente");
let solicitudOcho = new Solicitud("CARGA_PELIGROSA", "plutonio", "usa", 10, 0, 0);
solicitudOcho.setNombreImportador("roldimar");
solicitudOcho.setEstadoSolicitud("cancelada");

// Referencia de lo que va arriba (tipoMercaderia, descripcion, origen, cantidadContenedores, idEmpresa, numeroDeViaje)

let solicitudes = [solicitudUno, solicitudDos, solicitudTres, solicitudCuatro, solicitudCinco, solicitudSeis, solicitudSiete, solicitudOcho];

/* Creo la clase Viaje de Buque */

class ViajeBuque {
    constructor(nombreBuque, maximoContenedores, fechaLlegada) {
        this.idViajeBuque = contadorDeViajesBuque;
        this.nombreBuque = nombreBuque;
        this.maximoContenedores = maximoContenedores;
        this.espacioDisponible = maximoContenedores;
        this.lineaCarga = idUsuarioConectado;
        this.fechaLlegada = fechaLlegada;
        this.solicitudesAsignadas = [];
        contadorDeViajesBuque++;
    }

    getnombreBuque() {
        return this.nombreBuque;
    }

    getMaximoContenedores() {
        return this.maximoContenedores;
    }

    getLineaCarga() {
        return this.lineaCarga
    }

    getFecha() {
        return this.fechaLlegada;
    }

    getIdViaje() {
        return this.idViaje;
    }

    setLineaCarga(idLinea){ // asignar la empresa dueña del viaje
        this.lineaCarga = idLinea;
    }

    asginarSolicitudAlBuque(numeroSolicitud){
        this.solicitudesAsignadas.push(numeroSolicitud);
    }

    setEspacioDisponible(unEspacio){
        this.espacioDisponible = unEspacio;
    }
}

let viajeUno = new ViajeBuque("titanic", 12, "20221202");
viajeUno.setLineaCarga(1);
viajeUno.asginarSolicitudAlBuque(2);
viajeUno.asginarSolicitudAlBuque(3);
let viajeDos = new ViajeBuque("enterprise", 12, "20221203");
viajeDos.setLineaCarga(2);
viajeDos.asginarSolicitudAlBuque(1)
viajeDos.setEspacioDisponible(10);
let viajeTres = new ViajeBuque("nautilus", 15, "20221204");
viajeTres.setLineaCarga(2); // este es de telesur y quedo sin viajes asignados
let viajeCuatro = new ViajeBuque("queen elizabeth", 17, "20221206");
viajeCuatro.setLineaCarga(3);
viajeCuatro.asginarSolicitudAlBuque(4);
viajeCuatro.asginarSolicitudAlBuque(5);
viajeCuatro.asginarSolicitudAlBuque(6);
let viajeCinco = new ViajeBuque("Miranda", 2, "20221023"); // este no aparece en telesur por la fecha pasada del dia de hoy
// se supone ya llego el viaje
viajeCinco.setLineaCarga(2);

let arrayViajes = [viajeUno, viajeDos, viajeTres, viajeCuatro, viajeCinco];

// ------------------------------------------------------------------------------------------------------------------------

/* ------------------------------- Funciones Navegacion ---------------------------------------------------------- */

/* Este inicio ejecuta la funcion inicio que muestra la pantalla de inicio. Esta aca porque en algún lado tiene que estar.
Aca solo la llama */
inicioUsuario();

/* Declaro la funcion inicio */
function inicioUsuario(){
    ocultarTodo()
    document.querySelector("#seccionInicioSesion").style.display="block"

}

/* Cada seccion que creo va en esta funcion  y la oculto con none */
function ocultarTodo(){
    document.querySelector("#seccionInicioSesion").style.display= "none";
    document.querySelector("#seccionUsuarioNuevo").style.display= "none";
    document.querySelector("#seccionCrearNuevaSolicitud").style.display = "none";
    document.querySelector("#seccionSolicitudesPendientes").style.display = "none";
    document.querySelector("#seccionInicioEmpresa").style.display="none"; 
    document.querySelector("#seccionCalendario").style.display = "none";
    document.querySelector("#seccionEstadistica").style.display = "none";
    document.querySelector("#seccionAsignarSolicitudes").style.display = "none"; 
    document.querySelector("#seccionHabilitarImportadores").style.display = "none";
}

function irSeccionRegistro() {
    ocultarTodo();
    document.querySelector("#seccionUsuarioNuevo").style.display= "block";
}

function irSolicitudesPendientes() {
    ocultarTodo();
    document.querySelector("#seccionSolicitudesPendientes").style.display = "block";
    document.querySelector("#cancelacionSolicitudes").innerHTML="";
    cargarSelectSolicitudes();
}

function irCalendario() {
    ocultarTodo();
    calendarioProximasLlegadas();
    document.querySelector("#seccionCalendario").style.display = "block";
}

function irEstadisticas() {
    ocultarTodo();
    calcularCancelacionesContraTotalSolicitudes();
    mostrarParticipacionLineasCarga();
    document.querySelector("#seccionEstadistica").style.display = "block";
}

function irCrearNuevaSolicitud() {
    ocultarTodo();
    document.querySelector("#seccionCrearNuevaSolicitud").style.display="block";
}

function irAsignarSolicitudes(){
    ocultarTodo();
    // cargo para asignar solicitudes a buques
    cargarSolicitudesParaAsignar();
    cargarViajesParaAsignar();
    // cargo para rollover de carga
    cargarSolicitudesAsignadas();
    cargarViajesParaRollear();
    // cargo select para el manifesto
    cargarViajesManifesto();
    // cargo el select para listado cargas peligrosas
    cargarCargasPeligrosas();
    document.querySelector("#seccionAsignarSolicitudes").style.display = "block";
}

function irCrearNuevoViaje(){
    ocultarTodo();
    document.querySelector("#seccionInicioEmpresa").style.display="block";
}

function irSeccionabilitarImportadores(){
    ocultarTodo();
    // cargo solicitudes canceladas en el select
    cargarSolicitudesCanceladas();
    document.querySelector("#seccionHabilitarImportadores").style.display = "block";
}

// ------------------------------------------------------------------------------------------------------------------------

/* ------------------------------- Funciones Inicio Sesion ---------------------------------------------------------- */

/* Funcion para registrar usuario nuevo */
function usuarioNuevo() {

    ocultarTodo()
    document.querySelector("#seccionUsuarioNuevo").style.display="block"

    /* Limpio los mensajes de error si los hay */
    document.querySelector("#errorNombre").innerHTML = "";
    document.querySelector("#errorNombreUsuario").innerHTML = "";
    document.querySelector("#errorPassword").innerHTML = "";

    /* Tomo los datos de la pagina */
    let elNombre = String(document.querySelector("#ingresoNombre").value);
    let nombreImportador = String(document.querySelector("#ingrsoNombreUsuario").value);
    let laPassword = String(document.querySelector("#ingresoPassword").value);

    /* verifico si el nombre de usuario ya está repetido en los importadores */
    let repetido = false;
    for(let i=0; i < importadores.length && !repetido ; i++) {
        let nombres = importadores[i].getNombreImportador();
        if(nombreImportador.toLowerCase() == nombres.toLowerCase()) {
            /* Mensaje de error si el nombre de usuario ya existe */
            document.querySelector("#errorNombreUsuario").innerHTML = "El nombre de usuario ya existe"
            repetido = true;
        }
    }
    /* Verifico si el nombre de usuario ya existe en el nombre de una Empresa */
    for(let i=0; i < empresas.length && !repetido ; i++) {
        let nombres = empresas[i].getNombreEmpresa();
        if(nombreImportador.toLowerCase() == nombres.toLowerCase()) {
            /* Mensaje de error si el nombre de usuario ya existe */
            document.querySelector("#errorNombreUsuario").innerHTML = "El nombre de usuario ya existe"
            repetido = true;
        }
    }
    
    /* Verifico si la contraseña es correcta */
    let largoCorrecto = true;
    let tieneMayuscula = false;
    let tieneMinuscula = false;
    let tieneNumero = false;
    
    /* Verifico que la contraseña tenga mas de 6 caracteres */
    if(laPassword.length < 6) {
        largoCorrecto = false;
        document.querySelector("#errorPassword").innerHTML = "La contraseña debe contener un mínimo 6 caracteres.";
    }

    /* Numeros en string para que no sean tomados como mayusculas o minusculas */
    let numerosEnString = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    /* Verifico si tiene al menos una mayuscula */
    let i = 0;
    while(i < laPassword.length && !tieneMayuscula) {
        if(laPassword[i] === laPassword[i].toUpperCase() && !numerosEnString.includes(laPassword[i])) {
            tieneMayuscula = true;
        }
        i++;
    }
    /* Si no tiene al menos una mayuscula muestra mensaje de error */
    if(!tieneMayuscula) {
        document.querySelector("#errorPassword").innerHTML = "La contraseña debe contener al menos una mayuscula";
    }

    /* Verifico si tiene al menos una minuscula */
    i = 0;
    while(i < laPassword.length && !tieneMinuscula) {
        if(laPassword[i] === laPassword[i].toLowerCase() && !numerosEnString.includes(laPassword[i])) {
            tieneMinuscula = true;
        }
        i++;
    }
    /* Si no tiene al menos una minuscula mostrar mensaje de error */
    if(!tieneMinuscula) {
        document.querySelector("#errorPassword").innerHTML = "La contraseña debe contener al menos una minuscula";
    }

    /* Verifico si tiene al menos un numero */
    i = 0;
    while(i < laPassword.length && !tieneNumero) {
        if(numerosEnString.includes(laPassword[i])) {
            tieneNumero = true;
        }
        i++;
    }
    /* Si no tiene al menos un numero mostrar un mensaje de error */
    if(!tieneNumero) {
        document.querySelector("#errorPassword").innerHTML = "La contraseña debe contener al menos un número";
    }

    /* Verifico que los campos no esten vacíos */
    /* Asumo que los compos del formulario no están vacíos */
    let noVacio = true;
    /* Verifico que el nombre no este vacio */
    if(elNombre.length == 0) {
        noVacio = false;
        document.querySelector("#errorNombre").innerHTML = "El campo nombre no puede estar vacío"
    }
    /* Verifico que el nombre de usuario no este vacío */
    if(nombreImportador.length == 0) {
        noVacio = false;
        document.querySelector("#errorNombreUsuario").innerHTML ="El campo nombre de usuario no puede estar vacío"
    }


    /* Si los datos del usuario cumplen todas las condiciones se creará un nuevo usuario */
    if(!repetido && largoCorrecto && tieneMayuscula && tieneMinuscula && tieneNumero && noVacio) {
        /* Creo un nuevo usuario  */
        idUsu = Number(importadores.length + 1);
        let nuevoUsuario = new Importador(idUsu,elNombre, nombreImportador, laPassword);
        /* Agrego al usuario al array de usuarios */
        usuarioConectado=nuevoUsuario
        importadores.push(nuevoUsuario);
        /* Aviso del usuario creado */
        alert("usuario registrado");
        registrarNombreUsuarioConectado(nombreImportador);
        for (importador of importadores){
            if(importador.nombre == usuarioConectado){
                registrarIdUsuarioConectado(importador.idImportador);
            }
        }
        esImportadorf();
        /* Oculto todas las secciones y voy a la de crear una nueva solicitud */
        ocultarTodo();
        document.querySelector("#seccionCrearNuevaSolicitud").style.display="block";
    }
}

function inicioSesion() {
    /* Limpio los mensajes de error si los hay */
    document.querySelector("#mensajeErrorInicioSesionContrasena").innerHTML = "";

    /* Tomo los datos de la pagina */
    let elNombre = String(document.querySelector("#txtUsuarioImportador").value);
    let laPassword = String(document.querySelector("#txtContraseñaImportador").value);

    /* Verifico que el usuario y contraseña sean correctas */
    let usuarioEncontrado = false;
    let contrasenaEncontrada= false;

    /* Verifico los importadores */
    let i = 0;
    while(i < importadores.length && !usuarioEncontrado) {
        /* Busco si el nombre de usuario existe */
        let nombre = importadores[i].getNombreImportador();
        if(nombre.toLowerCase() === elNombre.toLocaleLowerCase()) {
            /* Busco si la contraseña es correcta para el usuario encontrado */
            let laContrasena = importadores[i].getContrasenaImportador();
            if(laContrasena === laPassword) {
                usuarioEncontrado = true;
                contrasenaEncontrada = true;
                esImportadorf();
                alert("Bienvenido " + elNombre);

            } else {
                usuarioEncontrado = true;
                document.querySelector("#mensajeErrorInicioSesionContrasena").innerHTML = "La contraseña es incorrecta";
            }
        }
        i++;
    }
    /* Verifico las empresas */
    i = 0;
    while(i < empresas.length && !usuarioEncontrado) {
        /* Busco si el nombre de usuario existe */
        let nombre = empresas[i].getNombreEmpresa();
        if(nombre.toLowerCase() === elNombre.toLowerCase()) {
            /* Busco si la contraseña es correcta para el local encontrado */
            let laContrasena = empresas[i].getContrasenaEmpresa();
            if(laContrasena === laPassword) {
                usuarioEncontrado = true;
                contrasenaEncontrada = true;
                esEmpresaf();
                alert("Bienvenido " + elNombre);
            } else {
                usuarioEncontrado = true;
                document.querySelector("#mensajeErrorInicioSesionContrasena").innerHTML = "La contraseña es incorrecta";
            }
        }
        i++;
    }
    /* Verifico que los campos no esten vacíos */
    /* Asumo que los compos del formulario no están vacíos */
    let noVacio = true;
    /* Verifico que el nombre no este vacio */
    if(elNombre.length == 0) {
        noVacio = false;
        document.querySelector("#mensajeErrorInicioSesionContrasena").innerHTML = "El campo nombre no puede estar vacío"
    }
    /* Verifico que el nombre de usuario no este vacío */
    if(laPassword.length == 0) {
        noVacio = false;
        document.querySelector("#mensajeErrorInicioSesionContrasena").innerHTML ="El campo de la clave no puede estar vacío"
    }

    if (usuarioEncontrado && contrasenaEncontrada) {
        registrarNombreUsuarioConectado(elNombre);    
        /* Oculto todas las secciones y voy a la de crear una nueva solicitud */
        if(esImportador) {
            for (importador of importadores){
                if(importador.nombre == usuarioConectado){
                    registrarIdUsuarioConectado(importador.idImportador);
                }
            }
            ocultarTodo();
            document.querySelector("#seccionCrearNuevaSolicitud").style.display="block"; 
        } else {
            for (empresa of empresas){
                if(empresa.nombre == usuarioConectado){
                    registrarIdUsuarioConectado(empresa.idEmpresa);
                }
            }
            ocultarTodo()
            document.querySelector("#seccionInicioEmpresa").style.display="block"; 
        }
    } else {
        alert("Usuario No Encontrado")
    }  
}

/* ------------------------------- Funciones Importador ---------------------------------------------------------- */
function crearNuevaSolicitud() {
    /* Tomo los datos de la pagina */
    let tipoMercaderia = String(document.querySelector("#tipoMercaderia").value);
    let descripcion = String(document.querySelector("#descripcionMercaderia").value);
    let puertoOrigen = String(document.querySelector("#ingresoPuertoDeOrigen").value);
    let numeroContenedores = String(document.querySelector("#cantidadContenedores").value);

    let idEmpresa = 0; //Id temporal hasta que una empresa acepte la solicitud.
    let numeroDeViaje = 0;  //Cuando alguien acepta el viaje se le asigna un numero autogenerado

    // Verifico no hayan campos vacios al crear solicitud
    let datosEnCampos = false;
    if(descripcion == "" || puertoOrigen == ""){
        document.querySelector("#mensajeErrorCrearSolicitud").innerHTML = "Los campos Descripcion y Puerto de Origen son obligatorios";
    } else {
        datosEnCampos = true;
    }

    // Verifico el importador no tenga 3 cancelaciones o mas
    let menosTresCancelaciones = false;
    let numCancelaciones = 0;
    for (sol of solicitudes) {
        if(sol.nombreImportador == usuarioConectado && sol.estado == "cancelada"){
            numCancelaciones++;
        }
    }
    if(numCancelaciones < 3) {
        menosTresCancelaciones = true;
    } else {
        document.querySelector("#mensajeErrorCrearSolicitud").innerHTML = "No puede crear nuevas solicitudes tiene 3 o mas Canceladas";
        for (importador of importadores) {
            if(importador.nombre == usuarioConectado){
                importador.setEstado("deshabilitado");
            }
        }
    }
    
    if(menosTresCancelaciones && datosEnCampos){
        let nuevaSolicitud = new Solicitud(tipoMercaderia, descripcion, puertoOrigen, numeroContenedores, idEmpresa, numeroDeViaje);
        solicitudes.push(nuevaSolicitud);
        alert("Solicitud creada con exito")
    }
    
    //Esto limpia los inputs una vez creada una solicitud
    document.querySelector("#descripcionMercaderia").value ="";
    document.querySelector("#ingresoPuertoDeOrigen").value ="";
}

function mostrarSolicitudesPendientes() {
    
    let tablaHTML = "<table border=1 >"

    tablaHTML += `<tr>
                    <td>Id Solicitud<td>
                    <td>Tipo Mercaderia<td>
                    <td>Descripción<td>
                    <td>Origen<td>
                    <td>Cantidad de Contenedores<td>
                </tr>`

    //Esto es otra forma de recorrer un array(For del array)            
    for (let sol of solicitudes) {
        if(sol.nombreImportador == usuarioConectado && String(sol.estado) == "pendiente") { // muestro solo solicitudes importador conectado
            tablaHTML+= `<tr>
                            <td>${sol.idSolicitud}<td>
                            <td>${sol.tipoMercaderia}<td>
                            <td>${sol.descripcion}<td>
                            <td>${sol.origen}<td>
                            <td>${sol.cantidadContenedores}<td>
                        </tr>`
        }
    }
    tablaHTML += "</table>"
    document.querySelector("#mostrarTablaSolicitudesPendientes").innerHTML = tablaHTML;
}

function mostrarSolicitudesPendientesFiltroDescripcion() {
    
    let busqueda = String(document.querySelector("#buscadorSolicitudes").value);

    let tablaHTML = "<table border=1>"

    tablaHTML += `<tr>
                    <td>Id Solicitud<td>
                    <td>Tipo Mercaderia<td>
                    <td>Descripción<td>
                    <td>Origen<td>
                    <td>Cantidad de Contenedores<td>
                </tr>`

    //Esto es otra forma de recorrer un array(For del array). Estamos filtrando la busqueda por descripcion.           
    for (let sol of solicitudes) {
        if(sol.nombreImportador == usuarioConectado && String(sol.estado) == "pendiente" && sol.descripcion.indexOf(busqueda) !== -1) { 
            // muestro solo solicitudes importador conectado pendientes y que coincida la busqueda
            tablaHTML+= `<tr>
                            <td>${sol.idSolicitud}<td>
                            <td>${sol.tipoMercaderia}<td>
                            <td>${sol.descripcion}<td>
                            <td>${sol.origen}<td>
                            <td>${sol.cantidadContenedores}<td>
                        </tr>`
        }
    }
    tablaHTML += "</table>"
    document.querySelector("#mostrarTablaSolicitudesPendientes").innerHTML = tablaHTML;
}

function cargarSelectSolicitudes() {
    let combo = document.querySelector("#cancelacionSolicitudes");
    for (sol of solicitudes) {
        if(sol.nombreImportador == usuarioConectado && String(sol.estado) == "pendiente") {
            combo.innerHTML += `<option value =${sol.idSolicitud}>${sol.idSolicitud} - ${sol.descripcion} </option>`
        }
    }
}

function cancelarSolicitud() {
    let idSol = Number(document.querySelector("#cancelacionSolicitudes").value);
    for(sol of solicitudes) {
        if(sol.idSolicitud == idSol) {
            sol.setEstadoSolicitud("cancelada");
            alert(`Solicitud ${sol.idSolicitud} - ${sol.descripcion} cancelada`);
            // refresco el select de solicitudes a cancelar
            document.querySelector("#cancelacionSolicitudes").innerHTML="";
            cargarSelectSolicitudes();
        }
    }
}

function calcularCancelacionesContraTotalSolicitudes() {
    let totalSolicitudes = 0;
    let solicitudesCanceladas = 0;

    for (sol of solicitudes) {
        if(sol.nombreImportador == usuarioConectado){
            totalSolicitudes++;
            if(sol.estado == "cancelada"){
                solicitudesCanceladas++;
            }
        }
    }
    let resultado = Number(solicitudesCanceladas / totalSolicitudes * 100);
    document.querySelector("#pPorcentajeCancelacionesTotalCargas").innerHTML =  String(resultado.toFixed(2)) + "%";
}

// Para Calendario

function calendarioProximasLlegadas() {
    document.querySelector("#mostrarCalendario").innerHTML="";

    let tablaHTML = "<table border=1 >"
    tablaHTML += `<tr>
                    <td>Numero Viaje<td>
                    <td>Numero Empresa<td>
                    <td>Capacidad Maxima<td>
                    <td>Capacidad Disponible<td>
                    <td>Fecha Llegada a Montevideo<td>
                </tr>`
    // ordeno array de viajes por la fecha
    arrayViajes.sort(function(a,b){
        return Number(a.fechaLlegada) - Number(b.fechaLlegada);
    });
    
    for(viaje of arrayViajes){
        if(viaje.fechaLlegada > hoy)
            tablaHTML+= `<tr>
                            <td>${viaje.idViajeBuque}<td>
                            <td>${viaje.lineaCarga}<td>
                            <td>${viaje.maximoContenedores}<td>
                            <td>${viaje.espacioDisponible}<td>
                            <td>${viaje.fechaLlegada}<td>
                        </tr>`
    }
    tablaHTML += "</table>"            
    document.querySelector("#mostrarCalendario").innerHTML = tablaHTML;
}

// Para ver participacion diferentes lineas de carga en mis solicitudes.
function mostrarParticipacionLineasCarga() {
    // Hay Solicitudes sin Asginar, entonces no suma 100%
    // borro lo que haya
    document.querySelector("#pTablaParticipacion").innerHTML="";

    // calculo el total de solicitudes del usuario conectado
    let totalSolicitudesUsuario = 0;
    for(sol of solicitudes){
        if(sol.nombreImportador == usuarioConectado){
            totalSolicitudesUsuario++;
        }
    }

    let tablaHTML = "<table border=1>"
    tablaHTML += `<tr>
                    <td>Numero LineaCarga<td>
                    <td>Nombre LineaCarga<td>
                    <td>Porcentaje Participacion Solicitudes<td>
                </tr>`

    for(empresa of empresas){
        let cantidadSolicitudesConLaEmpresa = 0;
        let idEmpresa = empresa.idEmpresa;
        let nombreEmpresa = empresa.nombre;
        for(viaje of arrayViajes){
            if(idEmpresa == viaje.lineaCarga){
                for(sol of viaje.solicitudesAsignadas){
                    let numSolicitud =  sol;
                    for(solicitud of solicitudes){
                        if(numSolicitud == solicitud.idSolicitud && solicitud.nombreImportador == usuarioConectado){
                            cantidadSolicitudesConLaEmpresa++;
                        }
                    }
                }
            }
        }
        let porcentajeConEmpresa = (cantidadSolicitudesConLaEmpresa / totalSolicitudesUsuario) * 100;
        if(porcentajeConEmpresa > 0){
            tablaHTML+= `<tr>
                            <td>${idEmpresa}<td>
                            <td>${nombreEmpresa}<td>
                            <td>${porcentajeConEmpresa} %<td>
                        </tr>` 
        }
    }
    
    tablaHTML += "</table>"            
    document.querySelector("#pTablaParticipacion").innerHTML = tablaHTML; 
}


/* ------------------------------- Funciones Empresa ---------------------------------------------------------- */

function crearViajeBuque() {
    document.querySelector("#msgErrorBuque").innerHTML="";
    let nombreBuque = document.querySelector("#nombreDeBuque").value;
    let contenedores = document.querySelector("#selectMaxContenedores").value;
    let fecha = document.querySelector("#txtFechaBuque").value
    fecha=fecha.replace("-","");
    fecha=fecha.replace("-","");

    let camposCompletos = false;
    if(nombreBuque == "" || fecha == ""){
        document.querySelector("#msgErrorBuque").innerHTML="Es obligatorio completar todos los campos";
    } else {
        camposCompletos = true;
    }

    if(camposCompletos){
        let nuevoViajeBuque = new ViajeBuque(nombreBuque, contenedores, fecha);
        arrayViajes.push(nuevoViajeBuque);
        alert("Viaje en Buque creado");
    }
    
    document.querySelector("#nombreDeBuque").value="";
}

// Para Asignar Solicitud

function cargarSolicitudesParaAsignar() {
    // Borro contenido del select
    document.querySelector("#AsignacionSolicitudes").innerHTML="";
    let combo = document.querySelector("#AsignacionSolicitudes");
    for (sol of solicitudes) {
        if(String(sol.estado) == "pendiente") {
            combo.innerHTML += `<option value =${sol.idSolicitud}>${sol.idSolicitud} - ${sol.descripcion} </option>`
        }
    }
}

function cargarViajesParaAsignar() {
    // Borro contenido del select
    document.querySelector("#AsignacionViajes").innerHTML="";
    let combo = document.querySelector("#AsignacionViajes");
    for (viaje of arrayViajes) {
        if(viaje.lineaCarga == idUsuarioConectado && Number(viaje.fechaLlegada) > hoy) {
            // me fijo si el viaje tiene espacio disponible
            if(viaje.espacioDisponible > 0) {
                combo.innerHTML += `<option value =${viaje.idViajeBuque}>${viaje.idViajeBuque} - ${viaje.nombreBuque} - contenedores: ${viaje.maximoContenedores} - llegada: ${viaje.fechaLlegada} </option>`
            }
            
        }
    }
}

function asignarSolicitudeAViaje(){
    // limpio mensaje de error
    document.querySelector("#msgErrorAsignacionSolicitudViaje").innerHTML="";

    // tomo los datos de la pantalla
    let laSolicitud = document.querySelector("#AsignacionSolicitudes").value;
    let elViajeEnBuque = document.querySelector("#AsignacionViajes").value;

    // Verifico cuanto espacio hay en el buque
    let espacioMaximo = 0;
    let espacioOcupado = 0;

    for(viaje of arrayViajes){
        if(viaje.idViajeBuque == elViajeEnBuque){
            espacioMaximo = Number(viaje.maximoContenedores);
            for(sol of viaje.solicitudesAsignadas){
                // reviso la cantidad de contenedores de las solicitudes ya asignadas al buque
                let numeroSol = sol;
                for(solicitud of solicitudes){
                    if(solicitud.idSolicitud == numeroSol){
                        // veo en la solicitud la cantidad de contenedores que tiene y la sumo al total de espacio ocupado
                        espacioOcupado = solicitud.cantidadContenedores + espacioOcupado;
                    }
                }
            }
        }
    }
    // calculo el espacio disponible
    let espacioDisponibleEnContedores = espacioMaximo - espacioOcupado;
    
    // Verifico el espacio que ocuparia
    let espacioAOcupar = 0;
    for(solicitud of solicitudes){
        if(solicitud.idSolicitud == laSolicitud){
            espacioAOcupar = solicitud.cantidadContenedores 
        }
    }

    // Si hay lugar, asigno el viaje
    if ((espacioDisponibleEnContedores - espacioAOcupar) >= 0) {
        for(viaje of arrayViajes){
            if(viaje.idViajeBuque == elViajeEnBuque){
                // aca asigno la solicitud al viaje en buque 
                viaje.asginarSolicitudAlBuque(Number(laSolicitud));
                viaje.espacioDisponible = Number(viaje.espacioDisponible) - Number(espacioAOcupar);
                // tengo que ponerle a la solicitud el id de la empresa que lo lleva
                // y tengo que ponerle a la solicitud el id del viaje en el que va.
                for (sol of solicitudes) {
                    if(sol.idSolicitud == laSolicitud){
                        sol.idEmpresa = Number(idUsuarioConectado);
                        sol.numeroDeViaje = Number(elViajeEnBuque);
                        // cambio el estado de la solicitud de pendiente a aceptada
                        sol.estado = "confirmada";
                        alert("la solicitud de viaje a sido asignada al buque");
                    }
                }
            }
        }
    } else {
        // Si no hay lugar aviso por pantalla
        document.querySelector("#msgErrorAsignacionSolicitudViaje").innerHTML="No hay lugar para la solicitud en este Buque";
    }
    
    // Recargo el select de solicitudes para asignar
    cargarSolicitudesParaAsignar();
    cargarViajesParaAsignar();
    cargarSolicitudesAsignadas();
    cargarViajesParaRollear();
}

// Para el rollover de Carga

function cargarSolicitudesAsignadas() {
    // Borro contenido del select
    document.querySelector("#solicitudesYaAsignadas").innerHTML="";
    let combo = document.querySelector("#solicitudesYaAsignadas");
    for (sol of solicitudes) {
        if(String(sol.estado) == "confirmada" && sol.idEmpresa == idUsuarioConectado) {
            combo.innerHTML += `<option value =${sol.idSolicitud}>${sol.idSolicitud} - ${sol.descripcion} </option>`
        }
    }
}

function cargarViajesParaRollear() {
    // Borro contenido del select
    document.querySelector("#ViajesBuque").innerHTML="";
    let combo = document.querySelector("#ViajesBuque");
    for (viaje of arrayViajes) {
        if(viaje.lineaCarga == idUsuarioConectado && Number(viaje.fechaLlegada) > hoy) {
            // me fijo si el viaje tiene espacio disponible
            if(viaje.espacioDisponible > 0) {
                combo.innerHTML += `<option value =${viaje.idViajeBuque}>${viaje.idViajeBuque} - ${viaje.nombreBuque} - contenedores: ${viaje.maximoContenedores} - llegada: ${viaje.fechaLlegada} </option>`
            }
            
        }
    }
}

function rolloverSolicitudeViaje(){
    // limpio mensaje de error
    document.querySelector("#msgErrorRolloverSolicitudViaje").innerHTML="";

    // tomo los datos de la pantalla
    let laSolicitud = document.querySelector("#solicitudesYaAsignadas").value;
    let elViajeEnBuque = document.querySelector("#ViajesBuque").value;

    // Verifico cuanto espacio hay en el buque
    let espacioMaximo = 0;
    let espacioOcupado = 0;

    // me fijo si el rollover es a un buque nuevo
    let buqueAnterior = null;
    let esOtroBuque = false;
    for (viaje of arrayViajes){
        for(sol of viaje.solicitudesAsignadas){
            if (sol == laSolicitud){
                if(viaje.idViajeBuque != elViajeEnBuque){
                    esOtroBuque = true;
                    buqueAnterior = viaje.idViajeBuque;
                }
            }
        }

    }

    for(viaje of arrayViajes){
        if(viaje.idViajeBuque == elViajeEnBuque){
            espacioMaximo = Number(viaje.maximoContenedores);
            for(sol of viaje.solicitudesAsignadas){
                // reviso la cantidad de contenedores de las solicitudes ya asignadas al buque
                let numeroSol = sol;
                for(solicitud of solicitudes){
                    if(solicitud.idSolicitud == numeroSol){
                        // veo en la solicitud la cantidad de contenedores que tiene y la sumo al total de espacio ocupado
                        espacioOcupado = solicitud.cantidadContenedores + espacioOcupado;
                    }
                }
            }
        }
    }
    // calculo el espacio disponible
    let espacioDisponibleEnContedores = espacioMaximo - espacioOcupado;
    
    // Verifico el espacio que ocuparia
    let espacioAOcupar = 0;
    for(solicitud of solicitudes){
        if(solicitud.idSolicitud == laSolicitud){
            espacioAOcupar = solicitud.cantidadContenedores 
        }
    }

    // Si hay lugar y es otro buque, Hago rollover del viaje
    if ((espacioDisponibleEnContedores - espacioAOcupar) >= 0 && esOtroBuque) {
        for(viaje of arrayViajes){
            if(viaje.idViajeBuque == elViajeEnBuque){
                // aca asigno la solicitud al viaje en buque 
                viaje.asginarSolicitudAlBuque(Number(laSolicitud));
                viaje.espacioDisponible = Number(viaje.espacioDisponible) - Number(espacioAOcupar);
                // tengo que ponerle a la solicitud el id de la empresa que lo lleva
                // y tengo que ponerle a la solicitud el id del viaje en el que va.
                for (sol of solicitudes) {
                    if(sol.idSolicitud == laSolicitud){
                        sol.idEmpresa = Number(idUsuarioConectado);
                        sol.numeroDeViaje = Number(elViajeEnBuque);
                        // cambio el estado de la solicitud de pendiente a aceptada
                        sol.estado = "confirmada";
                        alert("la solicitud de viaje a sido asignada al buque");
                    }
                }
            }
            if(viaje.idViajeBuque == buqueAnterior){
                // busco en las solicitudes asignadas al viaje anterior para borrar
                let indice = viaje.solicitudesAsignadas.indexOf(laSolicitud);
                if (indice > -1){
                    // remuevo la solicitud del buque anterior
                    viaje.solicitudesAsignadas.splice(indice, 1);
                }
                // devuelvo el espacio disponible
                viaje.espacioDisponible = Number(viaje.espacioDisponible) + Number(espacioAOcupar);
            }
        }
    } else {
        // Si no hay lugar aviso por pantalla
        document.querySelector("#msgErrorRolloverSolicitudViaje").innerHTML="No hay lugar para hacer rollover en este Buque";
    }
    
    // Recargo el select de solicitudes para asignar
    cargarSolicitudesParaAsignar();
    cargarViajesParaAsignar();
    cargarSolicitudesAsignadas();
    cargarViajesParaRollear();
}

// Para Manifesto de carga

function cargarViajesManifesto() {
    // Borro contenido del select
    document.querySelector("#viajesManifesto").innerHTML="";
    let combo = document.querySelector("#viajesManifesto");
    for (viaje of arrayViajes) {
        if(viaje.lineaCarga == idUsuarioConectado) {
            combo.innerHTML += `<option value =${viaje.idViajeBuque}>${viaje.idViajeBuque} - ${viaje.nombreBuque} - contenedores: ${viaje.maximoContenedores} - llegada: ${viaje.fechaLlegada} </option>`  
        }
    }
}

function cargarManifesto(){
    let lineaCarga = document.querySelector("#viajesManifesto").value;
    let tablaHTML = "<table border=1 >"
    tablaHTML += `<tr>
                    <td>Origen<td>
                    <td>Contenedor<td>
                    <td>Importador<td>
                    <td>Descripción<td>
                    <td>Tipo de Mercadería<td>
                </tr>`

    for(viaje of arrayViajes){
        if(viaje.idViajeBuque == lineaCarga){
            for(sol of viaje.solicitudesAsignadas){
                let numSolicitud = sol;
                for(solicitud of solicitudes){
                    if(numSolicitud == solicitud.idSolicitud){
                        tablaHTML+= `<tr>
                                        <td>${solicitud.origen}<td>
                                        <td>${solicitud.cantidadContenedores}<td>
                                        <td>${solicitud.nombreImportador}<td>
                                        <td>${solicitud.descripcion}<td>
                                        <td>${solicitud.tipoMercaderia}<td>
                                    </tr>`
                    }
                }
            }
        }
    }
    tablaHTML += "</table>"            
    document.querySelector("#mostrarManifestoCarga").innerHTML = tablaHTML;
}

// Para Listado Cargas Peligrosas

function cargarCargasPeligrosas() {
    // Borro contenido del select
    document.querySelector("#cargasPeligrosas").innerHTML="";
    let combo = document.querySelector("#cargasPeligrosas");
    for (viaje of arrayViajes) {
        if(viaje.lineaCarga == idUsuarioConectado) {
            combo.innerHTML += `<option value =${viaje.idViajeBuque}>${viaje.idViajeBuque} - ${viaje.nombreBuque} - contenedores: ${viaje.maximoContenedores} - llegada: ${viaje.fechaLlegada} </option>`  
        }
    }
}

function mostrarCargasPeligrosas() {
    let lineaCarga = document.querySelector("#cargasPeligrosas").value;
    let tablaHTML = "<table border=1 >"
    tablaHTML += `<tr>
                    <td>Origen<td>
                    <td>Contenedor<td>
                    <td>Importador<td>
                    <td>Descripción<td>
                    <td>Tipo de Mercadería<td>
                </tr>`

    for(viaje of arrayViajes){
        if(viaje.idViajeBuque == lineaCarga){
            for(sol of viaje.solicitudesAsignadas){
                let numSolicitud = sol;
                for(solicitud of solicitudes){
                    if(numSolicitud == solicitud.idSolicitud && solicitud.tipoMercaderia == "CARGA_PELIGROSA"){
                        tablaHTML+= `<tr>
                                        <td>${solicitud.origen}<td>
                                        <td>${solicitud.cantidadContenedores}<td>
                                        <td>${solicitud.nombreImportador}<td>
                                        <td>${solicitud.descripcion}<td>
                                        <td>${solicitud.tipoMercaderia}<td>
                                    </tr>`
                    }
                }
            }
        }
    }
    tablaHTML += "</table>"            
    document.querySelector("#mostrarCargasPeligrosas").innerHTML = tablaHTML;
}

// Para Habilitar Importadores Cancelados
function cargarSolicitudesCanceladas() {
    // Borro contenido del select
    document.querySelector("#solicitudesCanceladas").innerHTML="";
    let combo = document.querySelector("#solicitudesCanceladas");
    for (sol of solicitudes) {
        if(String(sol.estado) == "cancelada") { 
            combo.innerHTML += `<option value =${sol.idSolicitud}>${sol.idSolicitud} - ${sol.descripcion} </option>`
        }
    }
}

function ignorarSolicitud(){
    let solicitudAIgnorar = document.querySelector("#solicitudesCanceladas").value;
    for(sol of solicitudes){
        if(solicitudAIgnorar == sol.idSolicitud){
            sol.estado = "ignorada"
        }
    }
    cargarSolicitudesCanceladas()
}
