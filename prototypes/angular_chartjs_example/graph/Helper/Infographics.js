var app = angular.module('Infographics', ["chart.js"]);

var controllers = {};

controllers.LineChart = function ($scope) {
    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];

    $scope.tableDataA = [
        { series: 'Series A', january: '65', febreuary: '59', march: '80', april: '81', may: '56', june: '55', july: '40' },
        { series: 'Series B', january: '48', febreuary: '40', march: '19', april: '19', may: '86', june: '27', july: '90' }
    ];

    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };
};

controllers.BarChart = function ($scope) {
    $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    $scope.series = ['Series A', 'Series B'];

    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
};

controllers.DoughnutChart = function ($scope) {
    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    $scope.data = [300, 500, 100];
};

controllers.PieChart = function ($scope) {
    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    $scope.data = [300, 500, 100];
};

controllers.RadarChart = function ($scope) {
    $scope.labels = ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];

    $scope.data = [
      [65, 59, 90, 81, 56, 55, 40],
      [28, 48, 40, 19, 96, 27, 100]
    ];
};

controllers.PolarAreaChart = function ($scope) {
    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];
    $scope.data = [300, 500, 100, 40, 120];
};

controllers.DynamicChart = function ($scope) {
    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];
    $scope.data = [300, 500, 100, 40, 120];
    $scope.type = 'PolarArea';

    $scope.toggle = function () {
        $scope.type = $scope.type === 'PolarArea' ?
          'Pie' : 'PolarArea';
    };
};

app.controller(controllers);