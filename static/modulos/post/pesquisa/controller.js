angular.module('blogjs.post').controller('PesquisaPostController', function($scope, posts, $routeParams, $location, usuarios){

  var carregarPosts = function(pagina){
    posts.listarTodos($scope.filtro, pagina)
        .then(function(resultado){
            var data = resultado.data;
            $scope.totalPosts = parseInt(data.total);
            $scope.paginaAtual = parseInt(data.page);
            $scope.totalPaginas = parseInt(data.pages);
            $scope.posts = data.docs;
        })
        .catch(function(err){
            alert(err);
        });
  }

  $scope.montarPaginas = function(paginas){
      return new Array(paginas);
  }

  $scope.atualizarPosts = function(){
      carregarPosts();
  }

  $scope.carregaPagina = function(pagina){
      if(pagina>=1 && pagina<=$scope.totalPaginas){
          carregarPosts(pagina);
      }
  }

  $scope.init = function(){
      carregarPosts();
  }

});
