(function () {
app.controller('myController',['$scope','myServices',function($scope,myServices){
    $scope.submit = function(){
        var item = {};
        item.name = $scope.name;
        myServices.postRequest(item , 'http://localhost:3000/');
    }
    // myServices.postRequest();
}]);
})()