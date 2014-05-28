angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope, $window, $location, $rootScope, $state, Historial, $ionicPlatform, $ionicSideMenuDelegate, $ionicNavBarDelegate, Ciudades) {
    $scope.cityCurrent = '';
    $scope.idCityCurrent = '';
    $scope.toggleRight = function() {
        $ionicSideMenuDelegate.toggleRight();
    };
    $scope.goBack = function() {
        if(Historial.size() > 1){
          Historial.pop();  
        }else{
          navigator.app.exitApp();  
        }
        $state.go(Historial.top());
    };
    $scope.$on("UPDATE_CITY", function(event){
        $scope.cityCurrent = $window.localStorage.getItem('namepuerto');
        $scope.idCityCurrent = $window.localStorage.getItem('idpuerto');
    });
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
        if(Historial.top() != $state.$current.self.name){
            Historial.push($state.$current.self.name);
        }	 
        console.log("Top: "+Historial.top());
        console.log("Content: "+Historial.state());
	});
    $ionicPlatform.ready(function() {        
        if($window.localStorage && $window.localStorage.getItem('instalado') == null){
            $state.go("tab.puertopre");
        }else if($window.localStorage && $window.localStorage.getItem('puerto') != null){
            $scope.cityCurrent = $window.localStorage.getItem('namepuerto');
        	$scope.idCityCurrent = $window.localStorage.getItem('idpuerto'); 
            $state.go("tab.mipuertoinfo");
        }
	});
    $ionicPlatform.onHardwareBackButton(function() {
     	/*event.preventDefault();
     	event.stopPropagation(); 
     	alert('going back now all'); */
        $scope.goBack();
  	});
     
})

.controller('MeteoCtrl', function($scope, $sce, $http,  $window,  $ionicNavBarDelegate, $ionicSideMenuDelegate) {
    var meteo = $window.localStorage.getItem('meteo');
    $http.get('http://meteo2.puertosdeandalucia.es/'+meteo+'/temperatura&humedad_movil.htm')
   .success(function (data) {
		var array_matches = data.split(/(<body[^>]*>|<\/body>)/ig)[2];
        $scope.externalHTML = $sce.trustAsHtml(array_matches);
   }
);
})
.controller('MeteoMenuCtrl', function($scope, $sce, $http, $window) {
    $scope.goaemet = function() {
         var ref = window.open('http://www.aemet.es/es/eltiempo/prediccion/maritima?opc1=0&opc2=martot&opc3=1&area=and1', '_self', 'location=yes');
         ref.addEventListener('loadstart', function() { alert('start: ' + event.url); });
         ref.addEventListener('loadstop', function() { alert('stop: ' + event.url); });
         ref.addEventListener('exit', function() { alert(event.type); });
    };
    $scope.goguru = function() {
         var ref = window.open('http://www.windguru.cz/es/index.php?sc=165672&sty=m_spot');
         ref.addEventListener('loadstart', function() { alert('start: ' + event.url); });
         ref.addEventListener('loadstop', function() { alert('stop: ' + event.url); });
         ref.addEventListener('exit', function() { alert(event.type); });
    }
})
.controller('PrecipitacionCtrl', function($scope, $sce, $http, $window) {
    var meteo = $window.localStorage.getItem('meteo');
    $http.get('http://meteo2.puertosdeandalucia.es/'+meteo+'/precipitaciones_movil.htm')
   .success(function (data) {
		var array_matches = data.split(/(<body[^>]*>|<\/body>)/ig)[2];
        $scope.externalHTML = $sce.trustAsHtml(array_matches);
   }
);
})
.controller('PresionyvientoCtrl', function($scope, $sce, $http, $window) {
    var meteo = $window.localStorage.getItem('meteo');
    $http.get('http://meteo2.puertosdeandalucia.es/'+meteo+'/presion&viento_movil.htm')
   .success(function (data) {
		var array_matches = data.split(/(<body[^>]*>|<\/body>)/ig)[2];
        $scope.externalHTML = $sce.trustAsHtml(array_matches);
   }
);
})

.controller('MeteoOleajeCtrl', function($scope, $state, $sce, $http, $window) {
   $http.get('http://portus.puertos.es/Portus_RT/LoadWidget.html?locale=es&location=beach&code=33100')
   .success(function (data) {
		var array_matches = data;
        $scope.externalHTML = $sce.trustAsHtml(array_matches);
   });
})
.controller('FriendDetailCtrl', function($scope, $stateParams, $ionicNavBarDelegate, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AjustesCtrl', function($scope, Ajustes, Ciudades) {
    $scope.opciones = Ajustes.all();
    $scope.items = Ciudades.all();
    $scope.cityCurrent = Ciudades.getNombreCurrent();
})

.controller('ActsCtrl', function($scope, $ionicNavBarDelegate, $ionicNavBarDelegate, Actividades) {
    $scope.actividades = Actividades.all();
    
})

.controller('NoticiasCtrl', function($scope,$timeout ,$ionicNavBarDelegate, Actividades, $location, $rootScope) {
    $scope.noticias= Actividades.allNoticias();
    $scope.noticia;
    $scope.noticiaDetalle = function(noticiaID){

        //$scope.noticia = Actividades.getNoticia(noticiaID);
        //$rootScope.noticia=Actividades.getNoticia(noticiaID);
           console.log("0: estoy de vuelta");
 
            //console.log("tres: "+$rootScope.noticia.titulo+" -- "+$rootScope.noticia.cuerpo);
           // $location.path("/tab/act/noticia");
           
           Actividades.getNoticia(noticiaID).then(function(data) {
               //this will execute when the 
               //AJAX call completes.
        	   $rootScope.noticia = data;
               $location.path("/tab/act/noticia");
           });
    	
    };
  
    
})

.controller('PuertoPreCtrl', function($scope, $window, Ciudades) {
    $scope.puertos = Ciudades.all();
    $scope.myModel = {selectedId:null};
    $scope.$watch('myModel.selectedId', function(newVal, oldVal){
    	 
        $window.localStorage && $window.localStorage.setItem('instalado', true);
        Ciudades.setCurrent(newVal);        
        $window.localStorage && $window.localStorage.setItem('puerto', "/tab/mipuerto/info/"+newVal);
        $window.localStorage && $window.localStorage.setItem('idpuerto', newVal);
        $window.localStorage && $window.localStorage.setItem('namepuerto', Ciudades.get(newVal).name);
        $window.localStorage && $window.localStorage.setItem('meteo', Ciudades.get(newVal).meteo);
        $scope.$emit("UPDATE_CITY", Ciudades.get(newVal));
  	},true);
})

.controller('MiPuertoCtrl', function($scope, $window, $stateParams, Ciudades, Avisos, $ionicSideMenuDelegate, $ionicNavBarDelegate) {
    $scope.palabrasBusqueda = "";
    $scope.clearSearch = function () {
            $scope.palabrasBusqueda = "";
            findAllDirectorio();
    }
	$scope.search = function () {
            Ciudades.findByName($scope.palabrasBusqueda).then(function (servicios_empre) {
                $scope.directorio = servicios_empre;
            });
        }
	var findAllDirectorio = function() {
            $scope.directorio = Ciudades.findAllByPuertoPre($window.localStorage && $window.localStorage.getItem('idpuerto'));
     }
    $scope.ciudades = Ciudades.all();
    $scope.puertos = Ciudades.all();
    $scope.avisos = Avisos.all();
    $scope.setCityCurrent = function(Id){  
        Ciudades.setCurrent(Id);        
        $window.localStorage && $window.localStorage.setItem('puerto', "/tab/mipuerto/info/"+Id);
        $window.localStorage && $window.localStorage.setItem('idpuerto', Id);
        $window.localStorage && $window.localStorage.setItem('namepuerto', Ciudades.get(Id).name);
        $window.localStorage && $window.localStorage.setItem('meteo', Ciudades.get(Id).meteo);
        $scope.$emit("UPDATE_CITY", Ciudades.get(Id));
    };  

     findAllDirectorio();
    
})
.controller('EmpresaDetailCtrl', function ($scope, $stateParams, Ciudades) {
    	
        $scope.empresa = Ciudades.findEmpresaById($stateParams.empresaId);
    })
.controller('ShowPictureCtrl', function($scope, $stateParams, $ionicNavBarDelegate, Ciudades) {
    $scope.media = Ciudades.getMedia($stateParams.image);
})
.controller('MiPuertoDetailCtrl', function($scope, $window, $ionicNavBarDelegate, Ciudades) {
    $scope.medias = Ciudades.allMedia();
    $scope.ciudad = {id: $window.localStorage && $window.localStorage.getItem('idpuerto')};
    $scope.map = {
    center: {
        latitude: 45,
        longitude: -73
    },
    zoom: 8
	};
})
.controller('InfoTecCtrl', function($scope, $stateParams, $ionicNavBarDelegate, Ciudades) {
    $scope.ciudad = {name: 'Valencia', infotec: 'dsfdsfsdfdsfdfdfasfdsfasdfsdf'};
})
.controller('AvisosCtrl', function($scope, $ionicNavBarDelegate, Ciudades, Avisos) {
    $scope.ciudades = Ciudades.all();
    $scope.avisos = Avisos.all();
});

