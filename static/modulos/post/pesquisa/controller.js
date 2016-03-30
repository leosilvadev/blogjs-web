angular.module('blogjs.post').controller('PesquisaPostController', function($scope, posts, $routeParams, $location, usuarios){

  var carregarPosts = function(){
    $scope.posts = posts.listar();
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
