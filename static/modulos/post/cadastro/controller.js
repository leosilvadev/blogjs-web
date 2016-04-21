angular.module('blogjs.post').controller('RegistroPostController', function($scope, $location, $routeParams, posts){

  $scope.post = {};

  $scope.registrar = function(post){
      var usuarioId = $routeParams.id;
      posts.registrar(post, usuarioId)
        .then(function(resultado){
            $location.path('usuarios/'+usuarioId+'/posts');
        })
        .catch(function(erro){
            alert(erro);
        });
  };

});
