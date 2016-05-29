(function(){
  var app = angular.module('store', ['store-products']);
  app.controller('StoreController', function(){
    this.products = iceCreams;
  });
  app.controller("ReviewController", function(){
    this.review = {};
    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };
  });



  var iceCreams = [
    {
      name: 'ICE ICE BABY',
      price: 7,
      description: 'Not just your traditional vanilla, this is triple vanilla. Enjoy a blend of three of the worlds most flavorful vanilla beans in every spoonful.',
      canPurchase: true,
      soldOut: false,
      reviews: [
        {
          stars: 5,
          body: "I love this flavor!",
          author: "joe@gmail.com"
        },
        {
          stars: 3,
          body: "Great on a hot day.",
          author: "sally@gmail.com"
        }
      ]
    },
    {
      name: 'TRUFFLE SHUFFLE',
      price: 10,
      description: 'What happens when you mix milk chocolate ice cream with your favorite mini semi-sweet chocolate chips and mini chocolate covered marshmallows? A chocolate explosion that will have you craving more.',
      canPurchase: true,
      soldOut: false,
      reviews: [
        {
          stars: 4,
          body: "MMmmmmMMM good",
          author: "gary@gmail.com"
        },
        {
          stars: 5,
          body: "This is my fav flav!",
          author: "karen@gmail.com"
        }
      ]
    },
    {
      name: 'PINK FLOYD',
      price: 9,
      description: 'Take a walk on the dark side of the moon with this double strawberry and cheesecake treat.',
      canPurchase: true,
      soldOut: false,
      reviews: [
        {
          stars: 3,
          body: "Very mellow flavor.",
          author: "ken@gmail.com"
        },
        {
          stars: 2,
          body: "Not my favorite",
          author: "kel@gmail.com"
        }
      ]
    },
    {
      name: 'SOUTHERN HOSPITALITY',
      price: 9,
      description: 'If you love butter pecan, this is for you! Enjoy this pecan ice cream with praline pecans and chunks of pecan pie.',
      canPurchase: true,
      soldOut: false,
      reviews: [
        {
          stars: 5,
          body: "Pecans are great!",
          author: "jeff@gmail.com"
        },
        {
          stars: 1,
          body: "I am allergic",
          author: "sarah@gmail.com"
        }
      ]
    },
    {
      name: 'BRADY BUNCH',
      price: 10.50,
      description: 'Banana pudding, Vienna Fingers, and crushed vanilla wafers met ice cream. That\'s the way they all became the Brady Bunch.',
      canPurchase: true,
      soldOut: false,
      reviews: [
        {
          stars: 5,
          body: "Best of the bunch!",
          author: "alice@gmail.com"
        },
        {
          stars: 4,
          body: "Get it every time.",
          author: "fred@gmail.com"
        }
      ]
    },
    {
      name: 'FOXY BROWN',
      price: 9.50,
      description: 'If you love mocha now add crushed chocolate wafer cookies and a sea salt caramel swirl. Don\'t mess around we\'re just talking about Foxy Brown!',
      canPurchase: true,
      soldOut: false,
      reviews: [
        {
          stars: 4,
          body: "Mocha loves watch out.",
          author: "tim@gmail.com"
        },
        {
          stars: 3,
          body: "I prefer others over this one",
          author: "brianne@gmail.com"
        }
      ]
    },
    {
      name: 'MINT CONDITION',
      price: 8,
      description: 'Wouldn\'t you fall in love with the coolness of natural mint and triple fudge chocolate brownie pieces? If not, you\'re breaking my heart.',
      canPurchase: true,
      soldOut: false,
      reviews: [
        {
          stars: 3,
          body: "Mint is okay.",
          author: "matt@gmail.com"
        },
        {
          stars: 5,
          body: "Wowzers!",
          author: "haley@gmail.com"
        }
      ]
    },
    {
      name: 'JACK & JILL',
      price: 8.50,
      description: 'The reason why they went up the hill... In search of a PB&J sandwich instead they found crunchy peanut butter ice cream with strawberry preserve pound cake sandwiches.',
      canPurchase: true,
      soldOut: false,
      reviews: [
        {
          stars: 5,
          body: "This flavor is delish!",
          author: "alex@gmail.com"
        },
        {
          stars: 4,
          body: "MMM mmmm MMMM",
          author: "nicole@gmail.com"
        }
      ]
    },
  ];

})();
