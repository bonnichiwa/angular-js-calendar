angular.module('calendarDemoApp', [])

.controller('displayToday', function($scope) {
  var today = new Date();
  var year = today.getFullYear();

  var yearsThirty = [];
  var yearsBefore = year - 20;
  var yearsAfter = year + 20;

  for(var i = yearsBefore; i <= yearsAfter; i++) {
    yearsThirty.push(i);
  }

  $scope.yearsThirty = yearsThirty;
  $scope.selectYear = year;

  $scope.monthsTwelve = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  $scope.selectMonth = $scope.monthsTwelve[today.getMonth()];

  $scope.selectedDate = {
    month: $scope.selectMonth,
    year: $scope.selectYear 
  };

  $scope.isCurrentMonth = function(currentMonth){
    return (currentMonth == $scope.monthsTwelve.indexOf($scope.selectedDate.month));
  };

  $scope.$watchCollection('selectedDate', function(selectedDate){
    $scope.newDate = selectedDate.month + ', ' + selectedDate.year;
    $scope.range = CalendarRange.getMonthlyRange(new Date($scope.newDate));
    $scope.days = $scope.range.days;
  });
})

.directive('calendarDisplay', function() {
  return {
    restrict: 'E',
    templateUrl: 'monthly-template.html',
    scope: true,
    transclude: true
  }
})
