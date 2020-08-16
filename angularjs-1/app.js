(function(){
    'use strict';

    angular.module('LunchCheck',[])
    .controller('LunchCheckController', LunchCheckController)
    LunchCheckController.$inject=['$scope'];
    function LunchCheckController($scope){
        $scope.lunchmenu="";
        $scope.check = function(){
            var menu= $scope.lunchmenu;
            if(menu.length<1)
            return $scope.lunchmenu = "Please enter data first";
            else {
                var m =menu.split(',');
                console.log(menu);
                
            if(m.length<4)
            return $scope.lunchmenu="Enjoy!";
            else
            return $scope.lunchmenu="Too much!";
        }
        };

    };
    

})();