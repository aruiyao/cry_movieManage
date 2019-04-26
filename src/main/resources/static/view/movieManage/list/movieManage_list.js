var app = angular.module("movieManageListApp", []);
app.controller("movieManageListCtrl", function ($scope, $rootScope) {
  $scope.imgName = "";
  $scope.init = function () {
    $scope.getMovieList()
  }

  $scope.getMovieList = function () {
    var req = {
      id: $scope.id,
      name: $scope.name,
      type: $scope.type
    }
    var reg = new RegExp("^[0-9]*$");
    if ($scope.id != null && $scope.id != '' && !reg.test($scope.id)) {
      req.id = -1;
    }
    $.ajax({
      url: "/movieManage/queryMovieByCond",
      type: "GET",
      contentType: "application/json",
      data: req,
      // dataType: "json",
      success: function (data) {
        $rootScope.$apply(function () {
          $scope.movieList = data.movieList;
        })
      },
      error: function (data) {

      }
    })
  }

  $scope.detail = function (id) {
    window.location.href = "../detail/movieManage_detail.html?movieID=" + id;
  }
  $scope.edit = function (id) {
    window.location.href = "../edit/movieManage_edit.html?movieID=" + id;
  }
  $scope.create = function () {
    window.location.href = "../create/movieManage_create.html"
  }

  $scope.delete = function (id) {
    $.ajax({
      url: "/movieManage/deleteMovie",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(id),
      // dataType: "json",
      success: function (data) {
        $rootScope.$apply(function () {
          $scope.modalTitle = "删除影片"
          $scope.modalContent = "删除成功"
          $("#myModal").modal();
        })
      },
      error: function (data) {

      }
    })
  }

})
app.filter("newdate", function () {
  return function (date) {
    return date.substring(0, 4) + "-" + date.substring(4, 6) + "-" + date.substring(6, 8) + " " + date.substring(8, 10) + ":" + date.substring(10, 12) + ":" + date.substring(12)
  }
})
app.directive('repeatFinish', function () {
  return {
    link: function (scope, element, attr) {
      if (scope.$last == true) {
        scope.$emit('renderFinish');
      }
    }
  }
})