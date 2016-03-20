angular.module('blogjs').controller('MenuController', function($scope, $location, usuarios){

  var carregarUsuario = function(){
    return usuarios.getUsuarioLogado();
  }

  $scope.usuarioLogado = carregarUsuario();

  $scope.sair = function(){
    usuarios.sair();
    $location.path('/');
  }

});
