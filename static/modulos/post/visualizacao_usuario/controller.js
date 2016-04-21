angular.module('blogjs.post')
  .controller('VisualizacaoUsuarioPostController', function($scope, $routeParams, posts, usuarios){

  var carregarPost = function(){
      var usuarioId = $routeParams.id;
      var postId = $routeParams.postId;
      posts.buscarPorUsuario(usuarioId, postId)
          .then(function(resultado){
              $scope.post = resultado.data;
          })
          .catch(function(erro){
             alert(erro);
          });
  }

  var salvarEdicao = function(post){
      var usuarioId = $routeParams.id;
      var postId = $routeParams.postId;
      posts.atualizar(post, postId, usuarioId)
          .then(function(resultado){
              $scope.post = resultado.data;
              cancelarEdicao();
          })
          .catch(function(erro){
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

  $scope.init = function(){
      carregarPost();
  }

});
