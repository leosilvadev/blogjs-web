
angular.module('blogjs.post').factory('posts', function($http){

  var registrar = function(post, usuarioId){
    return $http.post('http://localhost:9000/v1/usuarios/'+usuarioId+'/posts/', post);
  };

  var atualizar = function(post, postId, usuarioId){
    return $http.put('http://localhost:9000/v1/usuarios/'+usuarioId+'/posts/'+postId, post);
  };

  var buscarPorUsuario = function(usuarioId, postId){
    return $http.get('http://localhost:9000/v1/usuarios/'+usuarioId+'/posts/'+postId);
  };

  var buscarPorId = function(postId){
    return $http.get('http://localhost:9000/v1/posts/'+postId);
  }

  var listarPorUsuario = function(usuarioId){
    return $http.get('http://localhost:9000/v1/usuarios/'+usuarioId+'/posts');
  };

  var comentar = function(postId, comentario){
      return $http.post('http://localhost:9000/v1/posts/'+postId+'/comentarios', comentario);
  }

  var listarTodos = function(titulo, pagina){
    var pagina = pagina || 1;
    var url

    if(titulo){
        url = 'http://localhost:9000/v1/posts?pagina='+pagina+'&titulo='+titulo
    } else {
        url = 'http://localhost:9000/v1/posts?pagina='+pagina
    }
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
    atualizar:atualizar,
    comentar:comentar,
    listarTodos:listarTodos,
    listarPorUsuario:listarPorUsuario,
    buscarPorUsuario:buscarPorUsuario,
    buscarPorId:buscarPorId
  }

});
