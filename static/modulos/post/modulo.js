angular.module('blogjs.post', []);

angular.module('blogjs.post').config(function($routeProvider){

  $routeProvider
    .when('/posts', {
        controller: 'PesquisaPostController',
        templateUrl: 'modulos/post/pesquisa/view.html'
    })

    .when('/usuarios/:id/posts', {
      controller: 'PesquisaUsuarioPostController',
      templateUrl: 'modulos/post/pesquisa_usuario/view.html'
    })

    .when('/usuarios/:id/posts/novo', {
      controller: 'RegistroPostController',
      templateUrl: 'modulos/post/cadastro/view.html'
    })

    .when('/usuarios/:id/posts/:postId', {
      controller: 'VisualizacaoUsuarioPostController',
      templateUrl: 'modulos/post/visualizacao_usuario/view.html'
    })

    .when('/posts/:postId', {
      controller: 'VisualizacaoPostController',
      templateUrl: 'modulos/post/visualizacao/view.html'
    })

    .otherwise({
        redirectTo: '/posts'
    });

});
