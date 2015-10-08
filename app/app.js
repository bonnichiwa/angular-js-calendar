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
  $scope.month = month;
  $scope.year = year;
  $scope.initialDay = range.first;
  $scope.firstDay = range.start;
  $scope.lastDay = range.end;
  $scope.days = range.days;

  var yearsThirty = [];
  var yearsBefore = year - 20;
  var yearsAfter = year + 20;

  for(var i = yearsBefore; i <= yearsAfter; i++) {
    yearsThirty.push(i);
  }

  console.log(yearsThirty);

  $scope.yearsThirty = yearsThirty;
  $scope.selectYear = $scope.year;


  $scope.monthsTwelve = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  $scope.selectMonth = $scope.monthsTwelve[today.getMonth()];

  // var monthSelected = $scope.selectMonth 
  // var yearSelected = $scope.selectYear


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