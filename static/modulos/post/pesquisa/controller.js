angular.module('blogjs.post').controller('PesquisaPostController', function($scope, posts, $routeParams, $location, usuarios){

  var carregarPosts = function(){
    var promise = posts.listarTodos();
    promise.then(function(resultado){
        $scope.posts = resultado.data;
    });
    promise.catch(function(err){
        alert(err);
    });
  }

  carregarPosts();
  
});
