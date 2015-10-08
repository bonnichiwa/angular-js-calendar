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
  $scope.initialDay = range.first;
  $scope.firstDay = range.start;
  $scope.lastDay = range.end;
  $scope.days = range.days;

  var years = [];
  var yearsBefore = year - 20
  var yearsAfter = year + 20

  console.log(yearsBefore);
  console.log(yearsAfter);

  for(var i = yearsBefore; i <= year; i++) {
    years.push(i);
  }

  $scope.years = years;

  console.log(years);

  $scope.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


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