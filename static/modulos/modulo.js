var dependencias = ['ngRoute', 'ui.bootstrap', 'blogjs.usuario', 'blogjs.post'];

angular
    .module('blogjs', dependencias)
    .constant('urlApi', 'http://localhost:9000');
