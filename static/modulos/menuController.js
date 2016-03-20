angular.module('blogjs').controller('MenuController', function($scope, $location, usuarios){

  var carregarUsuario = function(){
    return usuarios.getUsuarioLogado();
  }

  $scope.usuarioLogado = carregarUsuario();

  $scope.sair = function(){
    sair($scope.usuarioLogado);
  }

  var sair = function(usuario){
    $scope.usuarioLogado = null;
    $location.path('/');
  }

  $scope.$on('usuario.entrou', function(evento, usuario){
    console.log('Recebendo evento: usuario entrou, ');
    console.log(usuario);
    $scope.usuarioLogado = usuario;
    $location.path('usuarios/'+usuario.id+'/posts');
  });

  $scope.$on('usuario.saiu', function(evento, usuario){
    console.log('Recebendo evento: usuario saiu, '+usuario);
    sair(usuario);
  });

});
