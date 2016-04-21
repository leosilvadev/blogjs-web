angular.module('blogjs.post')
  .controller('VisualizacaoPostController', function($scope, $routeParams, posts, usuarios){

  var carregarPost = function(){
      var postId = $routeParams.postId;
      posts.buscarPorId(postId)
        .then(function(resultado){
            $scope.post = resultado.data;
        })
        .catch(function(erro){
            alert(erro);
        });
  }

  var comentar = function(comentario){
      var postId = $routeParams.postId;
      posts.comentar(postId, comentario)
        .then(function(resultado){
            $scope.post = resultado.data;
        })
        .catch(function(erro){
             alert(erro);
        });
  }

  $scope.comentar = comentar;

  $scope.init = function(){
      carregarPost();
  }

});
