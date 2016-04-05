
angular.module('blogjs.post').factory('posts', function($http){

  var registrar = function(post, usuarioId){
    return $http.post('http://localhost:9000/v1/usuarios/'+usuarioId+'/posts/', post);
  };

  var buscarPorUsuario = function(usuarioId, postId){
    return $http.get('http://localhost:9000/v1/usuarios/'+usuarioId+'/posts/'+postId);
  }

  var listarPorUsuario = function(usuarioId){
    return $http.get('http://localhost:9000/v1/usuarios/'+usuarioId+'/posts');
  };

  var listarTodos = function(titulo){
    var url = titulo ? 'http://localhost:9000/v1/posts?titulo='+titulo : 'http://localhost:9000/v1/posts'
    return $http.get(url);
  };




  var setId = function(id){
    localStorage.setItem('currentPostId', id);
  }

  var getId = function(){
    var dados = localStorage.getItem('currentPostId');
    if(dados){
      return parseInt(dados);
    } else {
      return 0;
    }
  }

  var getPosts = function(){
    var dados = localStorage.getItem('posts');
    if(dados){
      return JSON.parse(dados);
    } else {
      return [];
    }
  }

  var setPosts = function(usuarios){
    localStorage.setItem('posts', JSON.stringify(usuarios));
  }

  return {
    registrar:registrar,
    listarTodos:listarTodos,
    listarPorUsuario:listarPorUsuario,
    buscarPorUsuario:buscarPorUsuario
  }

});
