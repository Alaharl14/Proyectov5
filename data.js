module.exports = function () {
    var data = {
        cuenta: [
        {
            id:1,
            nombreCuenta: "James",
            contrasena: "12345",
            correo: "James@gmail.com",
            numero: 997456767,
            direccion: "Prol. Ayacucho 1030, San Miguel 15087",
            distrito: {
                id:2,
                nombreDistrito: "San miguel",
            },
        },
        {
          id:2,
          nombreCuenta: "Alyssa",
          contrasena: "54321",
          correo: "Alyssa@gmail.com",
          numero: 997752978,
          direccion: "C. Los Nogales 489, San Isidro 15073",
          distrito: {
            id:1,
            nombreDistrito: "San Isidro",
           },
        },
        ],
        distrito: [
        {
            id:1,
            nombreDistrito:"San Isidro",
            ciudad:{
                id:1,
                nombreCiudad:"Lima",
            },       
        },
        {
            id:2,
            nombreDistrito:"San Miguel",
            ciudad:{
                id:1,
                nombreCiudad:"Lima",
            },    
        },
        ],
        ciudad: [
        {
            id:1,
            nombreCiudad:"Lima",       
        },
        {
            id:2,
            nombreCiudad:"Arequipa",  
                 
        },
        ],
        objeto: [
        {
            id:1,
            nombreObjeto: "Llave", 
            distancia: 5,
            distanciaLimite: 8,   
            ubicacion: "Prol. Ayacucho 1030, San Miguel 15087",
            fechaVinculo: "12/09/2022",
            cuenta: {
                id:1,
                nombreCuenta: "James",
            },
            recordatorio: {
                id:1,
                estadoAlarma: false,
            },
            categoriaObjeto:{
                id:1,
                nombreCategoria:"Personal",
            },
            estadoObjeto:{
                id:1,
                nombreEstado:"Vinculado",
            },
            reporte:{
                id:null,
            },
        },
        {
            id:2,
            nombreObjeto: "Bolso", 
            distancia: 4,
            distanciaLimite: 0,   
            ubicacion: "C. Los Nogales 489, San Isidro 15073",
            fechaVinculo: "14-09-2022",
            cuenta: {
                id:1,
                nombreCuenta: "Alyssa",
            },
            recordatorio: {
                id:1,
                estadoAlarma: false,
            },
            categoriaObjeto:{
                id:3,
                nombreCategoria:"Contenedor",
            },
            estadoObjeto:{
                id:1,
                nombreEstado:"Vinculado",
            },
            reporte:{
                id:1,
                nombreReporte: "Perdida_Del_Bolso",
            },
        },
        ],
        estadoObjeto: [
        {
            id:1,
            nombreEstado:"Vinculado",       
        },
        {
            id:2,
            nombreEstado:"Desvinculado",       
        },
        {
            id:3,
            nombreEstado:"Robado", 
        },
        ],
        categoria: [
        {
            id:1,
            nombreCategoria:"Hogar",       
        },
        {
            id:2,
            nombreCategoria:"Personal",  
        },
        {
            id:3,
            nombreCategoria:"Contenedor",  
        },
        ],
        recordatorio: [
        {
            id:1,
            estadoAlarma: false,
        },
        {
            id:2,
            estadoAlarma: true,    
        },
        ],
        reporte: [
        {
            id:1,
            nombreReporte: "Perdida_Del_Bolso",
            descripcionReporte: "Es de color beige con una flor decorativo frontal",
            fechaReporte: "16/09/2022",          
        },
        ],
    }
        return data;
    }