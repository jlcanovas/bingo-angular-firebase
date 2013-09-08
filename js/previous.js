angular.module("bingo.service", []);

angular.module("bingo.directive", []);

angular.module("bingo.filter", []);

angular.module("bingo", ["bingo.service", "bingo.directive", "bingo.filter"]);

function bingoTable($scope) {
    $scope.test = "test";
    $scope.row0 = {
        cell00 : {
            filename : "cell00.png",
            description : "Text-heavy slides",
            onClick : function() {
                $scope.test = "cell00"
            }
        },
        cell01 : {
            filename : "cell01.png",
            description : "Confusing graphics, charts",
            onClick : function() {
                $scope.test = "cell01"
            }
        },
        cell02 : {
            filename : "cell02.png",
            description : "Zips thru too many slides",
            onClick : function() {
                $scope.test = "cell02"
            }
        },
        cell03 : {
            filename : "cell03.png",
            description : "Reads slides too loud",
            onClick : function() {
                $scope.test = "cell03"
            }
        },
        cell04 : {
            filename : "cell04.png",
            description : "Introduction of introducers",
            onClick : function() {
                $scope.test = "cell04"
            }
        },
        cell05 : {
            filename : "cell05.png",
            description : "Excessive laser pointing",
            onClick : function() {
                $scope.test = "cell05"
            }
        }
    }
    $scope.row1 = {
        cell10 : {
            filename : "cell10.png",
            description : "Glued to podium, stiff as a corpse",
            onClick : function() {
                $scope.test = "cell00"
            }
        },
        cell11 : {
            filename : "cell11.png",
            description : "Runs long, no time for Q&A",
            onClick : function() {
                $scope.test = "cell01"
            }
        },
        cell12 : {
            filename : "cell12.png",
            description : "Long tangents",
            onClick : function() {
                $scope.test = "cell02"
            }
        },
        cell13 : {
            filename : "cell13.png",
            description : "Disorganized rambling",
            onClick : function() {
                $scope.test = "cell03"
            }
        },
        cell14 : {
            filename : "cell14.png",
            description : "No eye contact with audience",
            onClick : function() {
                $scope.test = "cell04"
            }
        },
        cell15 : {
            filename : "cell15.png",
            description : "Cheesy PowerPoint graphics/template",
            onClick : function() {
                $scope.test = "cell05"
            }
        }
    };
    $scope.row2 = {
        cell20 : {
            filename : "cell20.png",
            description : "Talking at slide with the pointer",
            onClick : function() {
                $scope.test = "cell00"
            }
        },
        cell21 : {
            filename : "cell21.png",
            description : "No plot, characters or storyline ",
            onClick : function() {
                $scope.test = "cell01"
            }
        },
        cell22 : {
            filename : "cell22.png",
            description : "Lacks enthusiasm",
            onClick : function() {
                $scope.test = "cell02"
            }
        },
        cell23 : {
            filename : "cell23.png",
            description : "Speaks too softly, no mic",
            onClick : function() {
                $scope.test = "cell03"
            }
        },
        cell24 : {
            filename : "cell24.png",
            description : "Monotone voice",
            onClick : function() {
                $scope.test = "cell04"
            }
        },
        cell25 : {
            filename : "cell25.png",
            description : "Cheesy PowerPoint graphics/template",
            onClick : function() {
                $scope.test = "Small fonts (<20pt)"
            }
        }
    };
    
    
};