var app = angular.module("movieManageCreateApp", []);
app.controller("movieManageCreateCtrl", function ($scope, $rootScope) {
  $scope.picture = "";
  $scope.init = function () {
    $scope.downUrl = "/movieManage/uploadDownload/downloadImage";
    $scope.detailPicture = "";
    $scope.detailPicList = [];

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

    $scope.type = 1;

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
            $scope.picture = data;
            console.log("上传成功后的文件路径为：" + data);
            $scope.imgUrl = $scope.downUrl + "?imageName=" + data;
          }
        })
      }
    });
  }

  $scope.dateTimeFormate = function () {
    var obj = {};
    var d = new Date();
    obj.year = d.getFullYear();
    obj.month = ('0' + (d.getMonth() + 1)).slice(-2);
    obj.day = ('0' + (d.getDate())).slice(-2);
    obj.hour = ('0' + (d.getHours())).slice(-2);
    obj.minutes = ('0' + (d.getMinutes())).slice(-2);
    obj.seconds = ('0' + (d.getSeconds())).slice(-2);
    return obj
  }
  $scope.create = function () {

    var date = $scope.dateTimeFormate();
    var req = {
      name: $scope.name,
      picture: $scope.picture,
      releaseTime: $scope.releaseTime,
      director: $scope.director,
      createTime: date.year + date.month + date.day + date.hour + date.minutes + date.seconds,
      leadRole: $scope.leadRole,
      type: $scope.type,
      screenwriter: $scope.screenwriter,
      filmLength: $scope.filmLength,
      alias: $scope.alias,
      synopsis: $scope.synopsis,
    }
    $.ajax({
      url: "/movieManage/addMovie",
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
  $scope.detail = function (id) {
    window.location.href = "/view/goods/detail/goodsDetail.html?goodsID=" + id;
  }
  $scope.sure = function () {
    window.location.href = "../list/movieManage_list.html"
  }
  $scope.cancle = function () {
    window.location.href = "../list/movieManage_list.html"
  }
})