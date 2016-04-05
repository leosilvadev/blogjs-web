angular.module('blogjs.post').controller('RegistroPostController', function($scope, $location, $routeParams, posts){

  $scope.post = {};

  $scope.registrar = function(post){
      var usuarioId = $routeParams.id;
      var promise = posts.registrar(post, usuarioId);
      promise.then(function(resultado){
          $location.path('usuarios/'+usuarioId+'/posts');
      });
      promise.catch(function(erro){
         alert(erro);
      });
  };

});
