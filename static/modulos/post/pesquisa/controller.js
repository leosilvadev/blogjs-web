angular.module('blogjs.post').controller('PesquisaPostController', function($scope, posts, $routeParams, usuarios){

  var carregarPosts = function(){
    $scope.posts = posts.listar();
  }

  var carregarUsuario = function(){
    $scope.usuario = usuarios.buscar(parseInt($routeParams.id));
  }

  carregarPosts();
  carregarUsuario();

});
