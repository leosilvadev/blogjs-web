
angular.module('blogjs.usuario').factory('usuarios', function(){

  var usuarios = [];
  var id = 0;

  var cadastrar = function(usuario){
    id++;
    usuario.id = id;
    usuarios.push(usuario);
  };

  var autenticar = function(usuario){
    var encontrado = usuarios.find(function(obj){
      return obj.login === usuario.login && obj.senha === usuario.senha;
    });
    return encontrado;
  };

  var buscar = function(id){
    var encontrado = usuarios.find(function(obj){
      return obj.id === id;
    });
    return encontrado;
  };

  return {
    cadastrar:cadastrar,
    autenticar:autenticar,
    buscar:buscar
  }

});
