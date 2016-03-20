angular.module('blogjs.usuario').controller('LoginController', function($rootScope, $scope, $location, usuarios){

  $scope.usuario = {};

  $scope.entrar = function(usuario){
    var usuarioAutenticado = usuarios.autenticar(usuario);
    if (usuarioAutenticado) {
      console.log('Enviando evento: usuario entrou');
      $rootScope.$broadcast('usuario.entrou', usuarioAutenticado);

    } else {
      $scope.usuario = {};
      alert('Dados incorretos!');
    }
  }

});
