angular.module('blogjs.post')
  .controller('VisualizacaoPostController', function($scope, $routeParams, posts, usuarios){

  var carregarPost = function(){
    var postId = parseInt($routeParams.postId);
    return posts.buscar(postId);
  }

  var carregarUsuario = function(){
    return usuarios.buscar(parseInt($routeParams.id));
  }

  $scope.usuario = carregarUsuario();
  $scope.post = carregarPost();

});
