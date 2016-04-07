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

  var salvarEdicao = function(post){
      var usuarioId = $routeParams.id;
      var postId = $routeParams.postId;
      var promise = posts.atualizar(post, postId, usuarioId);
      promise.then(function(resultado){
          $scope.post = resultado.data;
          cancelarEdicao();
      });
      promise.catch(function(erro){
         alert(erro);
      });
  }

  var habilitarEdicao = function(){
      $scope.estaSendoEditado = true;
      $scope.postEditado = angular.copy($scope.post);
  }

  var cancelarEdicao = function(){
      $scope.estaSendoEditado = false;
  }

  var carregarUsuario = function(){
    return usuarios.buscar($routeParams.id);
  }

  $scope.cancelarEdicao = cancelarEdicao;
  $scope.habilitarEdicao = habilitarEdicao;
  $scope.salvarEdicao = salvarEdicao;
  $scope.postEditado = {};

  carregarPost();

});
