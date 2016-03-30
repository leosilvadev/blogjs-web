angular.module('blogjs.usuario').controller('LoginController', function($rootScope, $scope, $location, usuarios){

  $scope.usuario = {};

  $scope.entrar = function(usuario){
    var promise = usuarios.autenticar(usuario.login, usuario.senha);
    promise.then(function(response){
      var usuarioAutenticado = response.data;
      localStorage.setItem('usuarioLogado', JSON.stringify(usuarioAutenticado));
      $rootScope.$broadcast('usuario.entrou', usuarioAutenticado);
    });
    promise.catch(function(err){
      $scope.usuario = {};
      alert('Dados incorretos!');
    });
  }

});
