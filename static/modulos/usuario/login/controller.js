angular.module('blogjs.usuario').controller('LoginController', function($rootScope, $scope, $location, usuarios){

  $scope.usuario = {};

  $scope.entrar = function(usuario){
    usuarios.autenticar(usuario.login, usuario.senha)
        .then(function(response){
          var usuarioAutenticado = response.data;
          localStorage.setItem('usuarioLogado', JSON.stringify(usuarioAutenticado));
          $rootScope.$broadcast('usuario.entrou', usuarioAutenticado);
        })
        .catch(function(err){
          $scope.usuario = {};
          alert('Dados incorretos!');
        });
  }

});
