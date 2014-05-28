angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Ajustes', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var opciones = [
    { id: 0, name: 'Puerto predeterminado', href: '#/tab/ajustes/puerto-predeterminado'},
    { id: 1, name: 'Alertas de meteorología', href: '#/tab/ajustes/alertas-meteo' },
    { id: 2, name: 'Alertas de noticias', href: '#/tab/ajustes/alertas-noticias' }
  ];

  return {
    all: function() {
      return opciones;
    },
    get: function(opId) {
      // Simple index lookup
      return opciones[opId];
    }
  }
})
.factory('Actividades', function($http,$rootScope) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var actividades = [
    { id: 0, name: 'Lista de espera', href: '#/tab/act/lista-espera'},
    { id: 1, name: 'Tasas', href: '' },
    { id: 2, name: 'Noticias de actualidad', href: '#/tab/act/noticias' },
    { id: 3, name: 'Foro', href: '' },
    { id: 4, name: 'Galeria', href: '' }      
  ];
/*    
var noticias = [
    { id: 0, titulo: 'Titulo', cuerpo: 'dfsdfddsfdsfdsfdsfdsf dsf dsf  dsfdsfdsfdsf dsf', imagen: 'http://img1.etsystatic.com/000/0/5202682/il_570xN.249414791.jpg', href: '#/tab/sdfsdf'},
    { id: 1, titulo: 'Titulo', cuerpo: 'dfsdfddsfdsfdsfdsfdsf dsf dsf  dsfdsfdsfdsf dsf', imagen: 'http://img1.etsystatic.com/000/0/5202682/il_570xN.249414791.jpg', href: '#/tab/sdfsdf'},
    { id: 0, titulo: 'Titulo', cuerpo: 'dfsdfddsfdsfdsfdsfdsf dsf dsf  dsfdsfdsfdsf dsf', imagen: 'http://img1.etsystatic.com/000/0/5202682/il_570xN.249414791.jpg', href: '#/tab/sdfsdf'}      
  ];
*/
    var noticias = [];
  return {
    all: function() {
      return actividades;
    },
    get: function(actId) {
      // Simple index lookup
      return actividades[actId];
    },
      allNoticias: function() {
          
      $http.get("http://www.puertosdeandalucia.es/aplicacion-movil/webservices/CONTROLLER/C_noticia.php?opc=1&catid=15").then(function (response) {
            var total=response.data.length;
              for(var i=0;i<total;i++){
      		     var row ={ id: response.data[i].id, titulo: response.data[i].titulo, cuerpo: response.data[i].cuerpo, imagen: response.data[i].imagen, href: response.data[i].href};
      		     noticias.push(row);
      	      }
          });
    	  return noticias;
    },
    getNoticia: function(notiId) {
      var url="http://www.puertosdeandalucia.es/aplicacion-movil/webservices/CONTROLLER/C_noticia.php?opc=2&id_noti="+notiId;
    	 return $http.get(url).then(function(result) {
             return result.data;
         });
    }
  }
})

.factory('Historial', function() {
  var pila = [];
    
  return {
    push: function(index) {
      	return pila.push(index);
    },
    pop: function() {
        return pila.pop();
    },
    top: function() {
      return pila[pila.length-1];
    },
    state: function(){
      return pila;    
    },
      size: function(){
          return pila.length;
      }  
  }
})

.factory('Avisos', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var avisos = [
    { id: 1, name: 'Puerto Tenerife ocupado', tipo: 'button-energized' },
    { id: 2, name: 'Disponible Puerto Madrid', tipo: 'button-balanced' },
    { id: 3, name: 'Caleta de Vélez', tipo: 'button-stable' }      
  ];

  return {
    all: function() {
      return avisos;
    },
    get: function(ciudadId) {
      // Simple index lookup
      return avisos[avisoId];
    }
  }
})

.factory('Ciudades', function($q) {
  // Might use a resource here that returns a JSON array
  var cityCurrent = 'Ciudad';
  var idCurrent = '';
  // Some fake testing data
  var ciudades = [
    { id: 0, name: 'Puerto de Ayamonte', meteo: 'meteo17'},
    { id: 1, name: 'Puerto de Barbate', meteo: 'meteo14'},
    { id: 2, name: 'Puerto de Caleta de Vélez', meteo: 'meteo19'},
    { id: 3, name: 'Puerto de Chipiona' , meteo: 'meteo10'},
    { id: 4, name: 'Puerto de El Terrón' , meteo: 'meteo21'},
    { id: 5, name: 'Puerto de Garrucha' , meteo: 'meteo20'},
    { id: 6, name: 'Puerto de Isla Cristina' , meteo: 'meteo16'},
    { id: 7, name: 'Puerto de Mazagón', meteo: 'meteo12'},
    { id: 8, name: 'Puerto de Puerto América', meteo: 'meteo22'},
    { id: 9, name: 'Puerto de Punta Umbría' , meteo: 'meteo13'},
    { id: 10, name: 'Puerto de Roquetas del Mar', meteo: 'meteo18'},
    { id: 11, name: 'Puerto de Rota', meteo: 'meteo09'},
    { id: 12, name: 'Puerto de Sancti Preti', meteo: 'meteo11'}      
  ];
    
 var servicios_empre = [
      { id: 0, id_puerto: 7, name: 'AYTO. PALOS DE LA FRONTERA', actividad: 'Escuela de Vela', direccion: 'C/ Rabida, 5 21810 - Palos de la Frontera (Huelva)', tlf: '959350100', fax: '', email:'', web:'www.palosfrontera.com'}, 
      { id: 1, id_puerto: 7, name: 'BROKER DE SERV.NÁUTICOS, S.L.', actividad: 'Tienda Náutica', direccion: 'Polig.Ind.Los Pinos, Naves 90-91 / 21,130 - Mazagón', tlf: '959376221 / 959377021', fax: '959376725', email:'comercial@brokerservice.es', web:''},
      { id: 2, id_puerto: 7, name: 'BRUNO THELMO LUCENA', actividad: 'Bar-Cafetería', direccion: 'Pto.Dptvo.Mazagón, Loc.C06 21130 - Mazagón', tlf: '695102367 / 655752141', fax: '959376725', email:'victorialf72@hotmail.com', web:''},
      { id: 3, id_puerto: 12, name: 'RESTAURANTE EL TIMON', actividad: 'RESTAURANTE', direccion: 'LOCAL COM. PUERTO DEPORTIVO DE ROTA', tlf: '956840710', fax: '', email:'', web:''},
      { id: 4, id_puerto: 12, name: 'BAR-CAFETERÍA AGORA', actividad: 'BAR-CAFETERÍA', direccion: 'LOCAL COM. PUERTO DEPORTIVO DE ROTA', tlf: '', fax: '', email:'', web:''},
      { id: 5, id_puerto: 12, name: 'CLUB NÁUTICO DE ROTA', actividad: 'CLUB NÁUTICO DE PATRONES DEPORTIVOS', direccion: 'LOCAL COM. PUERTO DEPORTIVO DE ROTA', tlf: '', fax: '', email:'', web:''},
      { id: 6, id_puerto: 12, name: 'DALAI', actividad: 'PUB-CAFETERÍA', direccion: 'LOCAL COM. PUERTO DEPORTIVO DE ROTA', tlf: '', fax: '', email:'', web:''},
      { id: 7, id_puerto: 12, name: 'NAÚTICA BENITEZ, S.L.', actividad: 'REPARACIONES DE EMBARCACIONES Y VENTA DE ACCESORIOS. TALLER REPARACIÓN Y VENTA.', direccion: 'PERY JUNQUERA, S/N- PUERTO AMÉRICA- 11004 CÁDIZ (CÁDIZ)', tlf: '956220244', fax: '956220244', email:'nautica@nauticabenitez.es', web:''}
  ];

 var media = [
     { id: 0, name: 'Gasd', src: '//www.youtube.com/embed/QsNwjOEkqaQ', tipo: 'video' },
    { id: 1, name: 'Chipiona', src:'http://www.eppa.es/images/fotos_puertos/chipiona/PANORAMA_CHIPIONA_2.jpg', tipo: 'foto' },
    { id: 2, name: 'Alpedi', src:'http://www.eppa.es/images/fotos_puertos/mazagon/maz_alpedi.jpg', tipo: 'foto'  },
    { id: 3, name: 'Ayamonte', src: 'http://www.eppa.es/images/fotos_puertos/ayamonte/PANORAMA_AYAMONTE_6.jpg', tipo: 'foto'  },
     { id: 4, name: 'Mazagón', src:'http://www.youtube.com/embed/QsNwjOEkqaQ', tipo: 'video' }
  ];
    
  return {
    all: function() {
      return ciudades;
    },
    allMedia: function() {
      return media;
    },
    get: function(ciudadId) {
      // Simple index lookup
      return ciudades[ciudadId];
    },
    getMedia: function(mediaId) {
      // Simple index lookup
      return media[mediaId];
    },
    setCurrent: function (Id){
      cityCurrent = ciudades[Id].name;
      idCurrent =  ciudades[Id].id;   
    },
    getCurrent: function(){
        return idCurrent;
    },
    getNombreCurrent: function(){
        return cityCurrent;
    },
    findAll: function() {
        var deferred = $q.defer();
    	deferred.resolve(servicios_empre);
        return deferred.promise;
     },
     findAllByPuertoPre: function(puertoPreID) {
        var result= [];
              for(var i=0;i<servicios_empre.length;i++){
                  if(servicios_empre[i].id_puerto == puertoPreID){
                      result.push(servicios_empre[i]);
                  }
      	      }
         return result;
     },
	findById: function(empId) {
                var deferred = $q.defer();
                var empresa = servicios_empre[empId - 1];
                deferred.resolve(empresa);
                return deferred.promise;
    },
    findEmpresaById: function(empId) {
                return servicios_empre[empId];
    },

   	findByName: function(searchKey) {
                var deferred = $q.defer();
                var results = servicios_empre.filter(function(element) {
                    var fullName = element.name;
                    return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
                });
                deferred.resolve(results);
                return deferred.promise;
            }
  }
});
