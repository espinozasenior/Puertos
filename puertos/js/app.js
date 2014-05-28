// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'google-maps'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
     
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/side-menu-der.html",
      controller: 'MainCtrl'
    })

    .state('tab.tabs', {
      url: "/tabs",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
  
    // Each tab has its own nav history stack:

    .state('tab.tempyhum', {
      url: '/temperatura-humedad',
      views: {
        'mainContent': {
          templateUrl: 'templates/meteo/tempyhum.html',
            controller: 'MeteoCtrl'
        }
      }
    })
  .state('tab.precipitacion', {
      url: '/precipitacion',
      views: {
        'mainContent': {
          templateUrl: 'templates/meteo/precipitacion.html',
            controller: 'PrecipitacionCtrl'
        }
      }
    })
  .state('tab.vientosyoleajes', {
      url: '/vientosyoleajes',
      views: {
        'mainContent': {
          templateUrl: 'templates/meteo/vientosyoleajes.html'
        }
      }
    })
  .state('tab.pitur', {
      url: '/vientosyoleajes/pitur',
      views: {
        'mainContent': {
          templateUrl: 'templates/meteo/pitur.html'
        }
      }
    })
  .state('tab.oleaje', {
      url: '/vientosyoleajes/oleaje',
      views: {
        'mainContent': {
          templateUrl: 'templates/meteo/oleaje.html',
            controller: 'MeteoOleajeCtrl'
        }
      }
    })
  .state('tab.presionyviento', {
      url: '/presionyviento',
      views: {
        'mainContent': {
          templateUrl: 'templates/meteo/presionyviento.html',
            controller: 'PresionyvientoCtrl'
        }
      }
    })
  .state('tab.aemet', {
      url: '/aemet',
      views: {
        'mainContent': {
          templateUrl: 'templates/meteo/aemet.html',
            controller: 'MeteoMenuCtrl'
        }
      }
    })
    .state('tab.meteo', {
      url: '/meteo',
      views: {
        'mainContent': {
          templateUrl: 'templates/tab-meteo.html',
            controller: 'MiPuertoCtrl'
        }
      }
    })
	.state('tab.menumeteo', {
      url: '/menumeteo',
      views: {
        'mainContent': {
          templateUrl: 'templates/meteo/main.html',
            controller: 'MeteoMenuCtrl'
        }
      }
    })
    .state('tab.act', {
      url: '/actividades',
      views: {
        'mainContent': {
          templateUrl: 'templates/tab-actividades.html',
          controller: 'ActsCtrl'
        }
      }
    })
  .state('tab.listaespera', {
      url: '/act/lista-espera',
      views: {
        'mainContent': {
          templateUrl: 'templates/actividades/lista-espera.html',
          controller: 'ActsCtrl'
        }
      }
    })
  	.state('tab.galeria', {
      url: '/act/galeria',
      views: {
        'mainContent': {
          templateUrl: 'templates/actividades/galeria.html',
          controller: 'ActsCtrl'
        }
      }
    })	
   .state('tab.noticias', {
      url: '/act/noticias',
      views: {
        'mainContent': {
          templateUrl: 'templates/actividades/noticias.html',
          controller: 'NoticiasCtrl'
        }
      }
    })
  .state('tab.noticia', {
      url: '/act/noticia',
      views: {
        'mainContent': {
          templateUrl: 'templates/actividades/noticia-detalle.html',
          controller: 'NoticiasCtrl'
        }
      }
    })
    .state('tab.avisos', {
      url: '/avisos',
      views: {
        'mainContent': {
          templateUrl: 'templates/tab-avisos.html',
          controller: 'AvisosCtrl'
        }
      }
    })
  .state('tab.mipuertoserv', {
      url: '/mipuerto/servicios',
      views: {
        'mainContent': {
          templateUrl: 'templates/mipuerto/servicios-puerto.html',
          controller: 'MiPuertoCtrl'
        }
      }
    })
  .state('tab.mipuertodiremp', {
      url: '/mipuerto/servicios/directorio-emp',
      views: {
        'mainContent': {
          templateUrl: 'templates/mipuerto/directorio-empresas.html',
          controller: 'MiPuertoCtrl'
        }
      }
    })
  .state('tab.mipuertodirempdetail', {
      url: '/mipuerto/servicios/directorio-emp/:empresaId',
      views: {
        'mainContent': {
          templateUrl: 'templates/mipuerto/diremp-detalle.html',
          controller: 'EmpresaDetailCtrl'
        }
      }
    })
  .state('tab.mipuertoaviso', {
      url: '/mipuerto/avisos',
      views: {
        'mainContent': {
          templateUrl: 'templates/mipuerto/avisos-puerto.html',
          controller: 'MiPuertoCtrl'
        }
      }
    })
   .state('tab.mipuertoinfo', {
      url: '/mipuerto/info',
      views: {
        'mainContent': {
          templateUrl: 'templates/mipuerto/info-puerto.html',
          controller: 'MiPuertoDetailCtrl'
        }
      }
    })
  .state('tab.fichapuerto', {
      url: '/mipuerto/ficha-puerto',
      views: {
        'mainContent': {
          templateUrl: 'templates/mipuerto/ficha-puerto.html',
          controller: 'MiPuertoDetailCtrl'
        }
      }
    })
  .state('tab.puertovideofoto', {
      url: '/mipuerto/puerto-videos-foto',
      views: {
        'mainContent': {
          templateUrl: 'templates/mipuerto/puerto-videos-foto.html',
          controller: 'MiPuertoDetailCtrl'
        }
      }
    })
  .state('tab.showpicture', {
      url: '/mipuerto/puerto-videos-foto/{image}',
      views: {
        'mainContent': {
          templateUrl: 'templates/show-picture.html',
          controller: 'ShowPictureCtrl'
        }
      }
    })
  .state('tab.infotecnica', {
      url: '/mipuerto/info-tecnica/{ciudadId}',
      views: {
        'mainContent': {
          templateUrl: 'templates/mipuerto/informacion-tecnica.html',
          controller: 'InfoTecCtrl'
        }
      }
    })
  .state('tab.ajustes', {
      url: '/ajustes',
      views: {
        'mainContent': {
          templateUrl: 'templates/tab-ajustes.html',
          controller: 'AjustesCtrl'
        }
      }
    })  
  .state('tab.puertopre', {
      url: '/ajustes/puerto-predeterminado',
      views: {
        'mainContent': {
          templateUrl: 'templates/ajustes/puerto-predeterminado.html',
          controller: 'PuertoPreCtrl'
        }
      }
    })
  .state('tab.alertasmeteo', {
      url: '/ajustes/alertas-meteo',
      views: {
        'mainContent': {
          templateUrl: 'templates/ajustes/alertas-meteo.html',
          controller: 'AjustesCtrl'
        }
      }
    })
  .state('tab.alertasnoticia', {
      url: '/ajustes/alertas-noticias',
      views: {
        'mainContent': {
          templateUrl: 'templates/ajustes/alertas-noticias.html',
          controller: 'AjustesCtrl'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/mipuerto/info');

});

