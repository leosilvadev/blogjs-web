angular.module('blogjs.post')
  .controller('VisualizacaoPostController', function($scope, $routeParams, posts, usuarios){

  var carregarPost = function(){
      var postId = $routeParams.postId;
      var promise = posts.buscarPorId(postId);
      promise.then(function(resultado){
          $scope.post = resultado.data;
      });
      promise.catch(function(erro){
         alert(erro);
      });
  }

  var comentar = function(comentario){
      var postId = $routeParams.postId;
      var promise = posts.comentar(postId, comentario);
      promise.then(function(resultado){
          $scope.post = resultado.data;
      });
      promise.catch(function(erro){
         alert(erro);
      });
  }

  $scope.comentar = comentar;

  carregarPost();

});
