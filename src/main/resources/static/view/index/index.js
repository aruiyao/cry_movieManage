var app = angular.module("indexApp", []);
app.controller("indexCtrl", function ($scope, $rootScope) {

  $scope.changeFrameHeight = function () {
    var ifm = document.getElementById("iframepage");
    ifm.height = document.documentElement.clientHeight;
    ifm.width = document.documentElement.clientWidth - 202;
  }

  window.onresize = function () {
    $scope.changeFrameHeight();
  }
  $scope.init = function () {
    $scope.userName = "";
    $scope.menulist = [{
        "name": "影片管理",
        "url": "../movieManage/list/movieManage_list.html"
      },
    
    ]
    $scope.chooseMenu(0);
    $.ajax({
      url: "/movieManage/getUserInfo",
      type: "GET",
      contentType: "application/json",
      // dataType: "json",
      success: function (data) {
        $rootScope.$apply(function () {
          if (data.userName === "" || data.userName === null) {
            top.location.href = "../login/login.html"
          } else {
            $scope.userName = data.userName
          }
        })
      },
      error: function (data) {

      }
    })
  };

  $scope.chooseMenu = function (index) {
    $scope.menuIndex = index;
    $scope.pageUrl = $scope.menulist[index].url
    $("#iframepage").attr("src", $scope.pageUrl);
  }

  $scope.logout = function () {
    $.ajax({
      url: "/movieManage/logout",
      type: "GET",
      contentType: "application/json",
      // dataType: "json",
      success: function (data) {
        $rootScope.$apply(function () {
          top.location.reload()
        })
      },
      error: function (data) {

      }
    })
  }

})