
angular.module('blogjs.usuario').factory('usuarios', function($http){

  var cadastrar = function(usuario){
    return $http.post('http://localhost:9000/v1/usuarios', usuario);
  };

  var autenticar = function(login, senha){
    var auth = {login:login, senha:senha};
    return $http.post('http://localhost:9000/v1/usuarios/auth', auth);
  };

  var getUsuarioLogado = function(){
    return JSON.parse(localStorage.getItem('usuarioLogado'));
  };

  var buscar = function(id){
    var encontrado = getUsuarios().find(function(obj){
      return obj.id === id;
    });
    return encontrado;
  };

  var sair = function(){
    localStorage.removeItem('usuarioLogado');
  };



  var setId = function(id){
    localStorage.setItem('currentId', id);
  }

  var getId = function(){
    var dados = localStorage.getItem('currentId');
    if(dados){
      return parseInt(dados);
    } else {
      return 0;
    }
  }

  var getUsuarios = function(){
    var dados = localStorage.getItem('usuarios');
    if(dados){
      return JSON.parse(dados);
    } else {
      return [];
    }
  }

  var setUsuarios = function(usuarios){
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }

  return {
    cadastrar:cadastrar,
    autenticar:autenticar,
    buscar:buscar,
    getUsuarioLogado:getUsuarioLogado,
    sair:sair
  }

});
