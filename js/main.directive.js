app.directive('itemsRepeat', function () {
    return {
        restrict: 'E',
        templateUrl: 'item.html',
        scope: {
            info: '='
        },
        link: function ($scope) {
            $scope.plus = function () {
                this.info.like += 1;
            };
            $scope.minez = function () {
                this.info.like -= 1;
            }
        }
    };
});