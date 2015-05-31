(function(){
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.00,
      description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems.',
      canPurchase: true,
      soldOut: false,
      images: [
      {
        full: 'gem-01.gif',
        thumb: 'gem-01.gif'
      }
      ]
    },
    {
      name: "Pentagonal Gem",
      price: 5.95,
      description: "Description for Pentagonal Gem ...",
      canPurchase: true,
      soldOut: false,
      images: [
      {
        full: 'gem-02.gif',
        thumb: 'gem-02.gif'
      }
      ]
    }
  ];
})();
