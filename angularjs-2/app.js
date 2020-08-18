(function() {
  "use strict";

  angular.module("ShoppingListCheckOff", [])
    .controller("ToBuyShoppingController", ToBuyShoppingController)
    .controller("AlreadyBoughtShoppingController", AlreadyBoughtShoppingController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);


  ToBuyShoppingController.$inject = ["ShoppingListCheckOffService"];
  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var list = this;

    list.items = ShoppingListCheckOffService.getItemsToBuy();

    list.checkOff = function(itemIndex) {
      console.log("Checking off item ", itemIndex);
      ShoppingListCheckOffService.checkOff(itemIndex);
    };
  }


  AlreadyBoughtShoppingController.$inject = ["ShoppingListCheckOffService"];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var list = this;

    list.items = ShoppingListCheckOffService.getItemsBought();
  }


  // ShoppingListCheckOffService.$inject = [];
  function ShoppingListCheckOffService() {
    var service = this;

    var itemsToBuy = [ 
      { name: "Idli", quantity: 1 }, 
      { name: "Wada", quantity: 2 }, 
      { name: "Puri", quantity: 3 }, 
      { name: "Utappam", quantity: 4 }, 
      { name: "Bonda", quantity: 5 }, 
      { name: "Dosa", quantity: 6 }, 
      { name: "Ponganalu", quantity: 7 }, 
      { name: "Chips", quantity: 8 }, 
      { name: "Buiscits", quantity: 9 }, 
      { name: "Chocolates", quantity: 10 } 
    ];

    var itemsBought = [];

    service.getItemsToBuy = function () {
      return itemsToBuy;
    };

    service.getItemsBought = function () {
      return itemsBought;
    };

    service.checkOff = function (itemIndex) {
      itemsBought.push(itemsToBuy[itemIndex]);
      itemsToBuy.splice(itemIndex, 1);
    };
  }
})();