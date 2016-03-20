
angular.module('blogjs.post').factory('posts', function(){

  var registrar = function(post){
    var novoId = getId() + 1;
    post.id = novoId;
    setId(novoId);

    var posts = getPosts();
    post.dataRegistro = new Date();
    posts.push(post);
    setPosts(posts);
  };

  var buscar = function(id){
    var postEncontrado = getPosts().find(function(post){
      return post.id === id;
    });
    return postEncontrado;
  }

  var listar = function(){
    return getPosts();
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
    listar:listar,
    buscar:buscar
  }

});
