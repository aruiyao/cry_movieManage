var app = angular.module("movieManageDetailApp", []);
app.controller("movieManageDetailCtrl", function ($scope, $rootScope, $location) {
  $scope.mainPicture = "";
  $scope.init = function () {
    $scope.movieID = $location.search().movieID;
    $scope.downUrl = "/movieManage/uploadDownload/downloadImage";
    $scope.queryMovieDetail();
  }

  $scope.queryMovieDetail = function () {
    $.ajax({
      url: "/movieManage/queryMovieByCond",
      type: "GET",
      contentType: "application/json",
      data: {
        id: $scope.movieID,
      },
      // dataType: "json",
      success: function (data) {
        $rootScope.$apply(function () {
          if (data.detailPicture) {
            $scope.detailPic = data.detailPicture.split("|");
          } else {
            $scope.detailPic = [];
          }

          $scope.movie = data.movieList[0];
        })
      },
      error: function (data) {

      }
    })
  }

  $scope.goBack = function () {
    window.location.href = "../list/movieManage_list.html"
  }
})

app.config(['$locationProvider', function ($locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}]);