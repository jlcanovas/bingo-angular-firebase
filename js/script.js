angular.module("bingo.service", []);

angular.module("bingo.directive", []);

angular.module("bingo.filter", []);

var bingo = angular.module("bingo", ["firebase", "bingo.service", "bingo.directive", "bingo.filter", "ngCookies"]);

bingo.config(["$routeProvider", function($routeProvider) {
        $routeProvider.
            when("/games", {
                templateUrl : "partials/list.html",
                controller : "BingoGameListCtrl"
            }).
            when("/games/:gameId", {
                templateUrl : "partials/game.html",
                controller : "BingoGameCtrl"
            }).
            otherwise({redirectTo: "/games"});
    }
]);

bingo.controller("BingoGameListCtrl", ["$scope", "angularFire", "$cookies",
    function($scope, angularFire, $cookies) {
        if(typeof $cookies.bpbId === "undefined" || $cookies.bpbId === '') {
            $scope.userId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
                return v.toString(16);
            });
            $cookies.bpbId = $scope.userId;
        } else {
            $scope.userId = $cookies.bpbId;
        }
        
        var gamesRef = new Firebase("https://bpb.firebaseio.com/games");
        angularFire(gamesRef, $scope, "games");
        
        $scope.newName = "";       
        $scope.newId = "";
        $scope.createBingo = function() {
            var bingoInit = {
                id : $scope.newId,
                name : $scope.newName,
                owner : $scope.userId,
                votes : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            };
            
            if(typeof $scope.games === "undefined" || $scope.games === null) {
                gamesRef.child($scope.newId).set(bingoInit); 
            } else {
                $scope.games[$scope.newId] = bingoInit;
            }
            
            $scope.newName = "";       
            $scope.newId = ""; 
        };
        $scope.delete = function(game) {
            var gameRef = new Firebase("https://bpb.firebaseio.com/games/" + game.id);
            gameRef.remove();
        };
    }
]);

bingo.controller("BingoGameCtrl", ["$scope", "angularFire", "$routeParams", "$http", "$cookies",
    function($scope, angularFire, $routeParams, $http, $cookies) {
        $scope.test = "0";
        $scope.gameId = $routeParams.gameId;
        $scope.userId = $cookies.bpbId;

        $http.get('json/bingo_en.json').success(function(data) {
            $scope.bingoTable = data;
        });

        var gameRef = new Firebase("https://bpb.firebaseio.com/games/" + $scope.gameId);
        angularFire(gameRef, $scope, "game");
        
        var userRef = new Firebase("https://bpb.firebaseio.com/games/" + $scope.gameId + "/users/" + $scope.userId);
        angularFire(userRef, $scope, "userVotes");

        if(typeof $scope.userVotes === "undefined" || $scope.userVotes === null) {
            userRef.set({ id : $scope.userId, votes : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]} ); 
        } 
        
        $scope.vote = function(index) {
            if(!$scope.isOwner()) {
                if($scope.userVotes.votes[index] === 0) {
                    $scope.userVotes.votes[index]++;
                    $scope.game.votes[index]++;
                }
            }
        };
                
        $scope.isOwner = function() {
            return $cookies.bpbId == $scope.game.owner;
        }
    }
]);

