angular
  .module('beerList')
  .component('beerList', {
    templateUrl: 'components/beer-list/beer-list.template.html',
    controller: function($http) {
      let self = this;

      $http.get('/api/beers.json')
        .then(function(response) { self.beers = response.data })
        .catch(function(response) { self.beers = [] })
      },
    });

