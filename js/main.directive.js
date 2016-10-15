app.directive('itemsRepeat', function () {
    return {
        templateUrl: 'item.html',
        scope: {
            items: '='
        },
        link: function ($scope) {
            $scope.plus = function(item) {

                item.like ++;console.log(item)

            }
            $scope.mines = function(item) {
                item.like --;
                console.log(item)
            }
        }
    };
});