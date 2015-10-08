angular.module('calendarDemoApp', [])

.controller('displayToday', function($scope) {
  var today = new Date();
  var month = today.getMonth()+1;
  var day = today.getDate();
  var year = today.getFullYear();
  console.log(today);
  console.log(month);
  console.log(day);
  console.log(year);

  var range = CalendarRange.getMonthlyRange(new Date(today));
  console.log(range);

  $scope.today = today;
  $scope.firstDay = range.start;
  $scope.lastDay = range.end;
  $scope.days = range.days;

})

.directive('calendarDisplay', function() {
  return {
    restrict: 'E',
    templateUrl: 'monthly-template.html',
    scope: true,
    transclude: true
  }
})

// your controller and directive code go here