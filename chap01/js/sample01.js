(function () {

    var app = angular.module('store', []);

    var gem = [
        {
            name: "DodeChahedron",
            price: 2.95,
            description: "A DodeChahedron gem",
            canPurchase: true,
            soldOut: false
        },
        {
            name: "Pentogonal Gem",
            price: 5.95,
            description: "A Pentogonal gem",
            canPurchase: true,
            soldOut: false
        }
    ]


    app.controller('StoreController', function () {
        this.products = gem;
    });

})();