var dependencias = [];
angular
    .module('blogjs.usuario', dependencias)
    .config(function($routeProvider){

  $routeProvider
    .when('/usuario/cadastro', {
      controller: 'CadastroUsuarioController',
      templateUrl: 'modulos/usuario/cadastro/view.html'
    })

    .when('/login', {
      controller: 'LoginController',
      templateUrl: 'modulos/usuario/login/view.html'
    });

});
