angular.module('blogjs.post').controller('PesquisaUsuarioPostController', function($scope, posts, $routeParams, $location, usuarios){

  var carregarPosts = function(){
    var promise = posts.listarPorUsuario($routeParams.id);
    promise.then(function(resultado){
        $scope.posts = resultado.data;
    });
    promise.catch(function(err){
        alert(err);
    });
  }

  var carregarUsuario = function(){
    var promise = usuarios.buscar($routeParams.id);
    promise.then(function(resultado){
      $scope.usuario = resultado.data;
    });
    promise.catch(function(err){
        $location.path('/login');
    });
  }

  carregarPosts();
  carregarUsuario();

});
