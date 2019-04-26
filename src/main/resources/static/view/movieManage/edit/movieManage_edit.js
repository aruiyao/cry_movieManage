var app = angular.module("movieManageEditApp", []);
app.controller("movieManageEditCtrl", function ($scope, $rootScope, $location) {
  $scope.mainPicture = "";
  $scope.init = function () {
    $scope.movieID = $location.search().movieID;
    $scope.downUrl = "/movieManage/uploadDownload/downloadImage";
    $scope.typeList = [{
        id: 1,
        name: "喜剧"
      },
      {
        id: 2,
        name: "爱情"
      },
      {
        id: 3,
        name: "动作"
      }
    ]
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
          $scope.movie = data.movieList[0];
          if($scope.movie.type===1){
            $scope.choosedType="喜剧"
          }
          if($scope.movie.type===2){
            $scope.choosedType="爱情"
          }
          if($scope.movie.type===3){
            $scope.choosedType="动作"
          }
        })
      },
      error: function (data) {

      }
    })
  }
  $scope.uploadImage = function () {
    var uploadUrl = "/movieManage/uploadDownload/uploadImage";
    var pic = $('#upload_file')[0].files[0];
    var fd = new FormData();
    //fd.append('uploadFile', pic); 
    fd.append('file', pic);
    $.ajax({
      url: uploadUrl,
      type: "post",
      // Form数据 
      data: fd,
      cache: false,
      contentType: false,
      processData: false,
      success: function (data) {
        $rootScope.$apply(function () {
          console.log("the data is : {}", data);
          if (data !== "") {
            $scope.movie.picture = data;
          }
        })
      }
    });
  }

  $scope.updateMovie = function () {
    var req = {
      id: $scope.movie.id,
      name: $scope.movie.name,
      picture: $scope.movie.picture,
      releaseTime: $scope.movie.releaseTime,
      director: $scope.movie.director,
      createTime: $scope.movie.createTime,
      leadRole: $scope.movie.leadRole,
      type: $scope.movie.type,
      screenwriter: $scope.movie.screenwriter,
      filmLength: $scope.movie.filmLength,
      alias: $scope.movie.alias,
      synopsis: $scope.movie.synopsis,
    }
    $.ajax({
      url: "/movieManage/updateMovie",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(req),
      // dataType: "json",
      success: function (data) {
        $rootScope.$apply(function () {
          $("#myModal").modal();
        })
      },
      error: function (data) {

      }
    })
  }
  $scope.sure = function () {
    $scope.queryMovieDetail();
  }
  $scope.cancle = function () {
    window.location.href = "../list/movieManage_list.html"
  }
})

app.config(['$locationProvider', function ($locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}]);