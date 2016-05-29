(function(){
  var app = angular.module('store', [ ]);
  app.controller('StoreController', function(){
    this.products = gems;
  });
  var gems = [
    {
      name: 'Dodecahedron',
      price: 70,
      description: 'Some gems have hidden qualities beyond their luster, beyond their shine...Dodeca is one of those gems.',
      canPurchase: false
    },
    {
      name: 'Pentagonal Gem',
      price: 50.50,
      description: 'Some gems have hidden qualities beyond their luster, beyond their shine...Dodeca is one of those gems.',
      canPurchase: false
    },
    {
      name: 'Azurite',
      price: 110.50,
      canPurchase: false,
      soldOut: true
    }
  ];

})();
