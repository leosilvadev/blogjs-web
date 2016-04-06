angular.module('blogjs.post')
  .controller('VisualizacaoUsuarioPostController', function($scope, $routeParams, posts, usuarios){

  var carregarPost = function(){
      var usuarioId = $routeParams.id;
      var postId = $routeParams.postId;
      var promise = posts.buscarPorUsuario(usuarioId, postId);
      promise.then(function(resultado){
          $scope.post = resultado.data;
      });
      promise.catch(function(erro){
         alert(erro);
      });
  }

  var carregarUsuario = function(){
    return usuarios.buscar($routeParams.id);
  }

  carregarPost();

});
