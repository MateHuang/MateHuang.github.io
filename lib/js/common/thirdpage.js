$(function () {
    $.ajax({
        url: "https://ftw.la/api/get_recent_posts/?callback=CALLBACK&read_more=More&count=3",
        type: "POST",   //post请求方式
        dataType: "jsonp",
        jsonp: "callback",
        success: function (data) {
            var result = JSON.stringify(data);
            // $("#text").val(result);

            var ohtml="";
            var fObj=(data.posts);

            // alert(fObj[0].content);
            $("#article").prepend(fObj[0].content);

        }
    });
});

var app = angular.module('myApp',['ngRoute']);

// angular.module('routingDemoApp',['ngRoute'])
app.config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/intro_1',{templateUrl:'./lib/html/second_1.htm'})
            .when('/intro_2',{templateUrl:'./lib/html/second_2.htm'})
            .when('/intro_3',{templateUrl:'./lib/html/second_3.htm'})
            .otherwise({templateUrl:'./lib/html/second_1.htm'});
    }]);


app.controller('ctl1', function($scope,$http) {
    $scope.selectednav="nav1";






    //ajax 获取到图片视频信息
    $scope.left_nav =[{
        "id":"nav1",
        "selected":true,
        "href":"intro_1",
        "title":"/ 短视频",
        "items":["产品主图","视频宣传片","微电影"]
        },
        {
            "id":"nav2",
            "selected":false,
            "href":"intro_2",
            "title":"/ 电商摄影",
            "items":["产品静物拍摄","产品模特拍摄","画册拍摄"]
        },
        {
            "id":"nav3",
            "selected":false,
            "href":"intro_3",
            "title":"/ 视觉设计",
            "items":["vi体系设计","电商视觉设计","ui设计","H5页面设计"]
        }];

    $scope.hoverevent=function (id) {
        // 改变样式
        angular.forEach($scope.left_nav,function (value,key) {
            if(value.id==id){
                value.selected=true;
            }
            else {
                value.selected=false;
            }
        });
    }

    $scope.leaveevent=function () {
        // 改变样式
        angular.forEach($scope.left_nav,function (value,key) {
            if(value.id==$scope.selectednav){
                value.selected=true;
            }
            else {
                value.selected=false;
            }
        });
    }


    $scope.jumpto=function (url,id) {
        // 改变样式
        angular.forEach($scope.left_nav,function (value,key) {
            if(value.id==id){
                value.selected=true;
                $scope.selectednav=id;
            }
            else {
                value.selected=false;
            }
        });

        //缓慢返回顶部
        $('html,body').stop().animate({scrollTop: '0px'}, 1000);

    }

    //提交信息


});