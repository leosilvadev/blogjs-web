
angular.module('blogjs.post').factory('posts', function(){

  var posts = [];
  var id = 0;

  var registrar = function(post){
    id++;
    post.id = id;
    post.dataRegistro = new Date();
    posts.push(post);
  };

  var listar = function(){
    return posts;
  };

  return {
    registrar:registrar,
    listar:listar
  }

});
