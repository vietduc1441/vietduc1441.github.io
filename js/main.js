var pofoApp = angular.module('portfolio', ['ui.bootstrap','extension']);
pofoApp.controller("pofoCtrl",
	function ($scope,$modal) {
	$scope.nav = {
		home : "Home",
		portfolio : "Portfolio",
		resume: "Resume",
		linkedin : "LinkedIn"
	};
	$scope.template = {
		home : './pages/home.html',
		resume: './pages/resume.html',
		portfolio : './pages/portfolio.html',
		linkedin : './pages/linkedin.html'
	};
    $scope.currentPage='portfolio';
	$scope.selectTemplate= function(template){
        $scope.currentPage=template;
		$scope.selectedTemplate= $scope.template[template];
	};
	$scope.selectedTemplate = $scope.template.portfolio;
    $scope.about=function(){
        alert("This website is based on Bootraps and Angular");
    };
    $scope.openFeedback=function(){
         var modalInstance = $modal.open({
                        template: '<feedback cancel="cancel()"></feedback>',
                        controller: function ($scope, $modalInstance) {
                            $scope.cancel = function () {
                                $modalInstance.dismiss('cancel');
                            };
                        },
                        resolve: {
                            items: function () {
                                return $scope.items;
                            }
                        }
                    });
    };
});
pofoApp.controller("portfolioCtrl",
    function($scope){
        $scope.title='Portfolio';
        $scope.projs=[];
        $scope.projs.push({
            caption: 'Html5 game',
            description:'An Html5 game, wanna play?.',
            lib: 'None',
            projUrl: 'https://dl.dropboxusercontent.com/u/2062352/BattleOfArtillery/dist/index.html',
            youtubeUrl: null,
            githubUrl: 'https://github.com/vietduc1441/html5game',
            imgUrl: './images/html5game.png',
            testTool: "karma & jasmine"
            
        })
        $scope.projs.push({
            caption:'Flow designer of Emagiz ',
            description: 'Domain-specific graphical editor allows business-engineer create message flows.',
            lib: 'MxGraph, Dojo',
            projUrl: null,
            youtubeUrl: 'https://www.youtube.com/embed/ZIeW5birgWs?rel=0',            
            imgUrl: './images/flowdesginer.png'
        })
         $scope.projs.push({
            caption:'Microflow time measurer',
            description: 'Small widget for measure the duration of an actions run on Mendix server',
            lib: 'D3',
            projUrl: 'https://demomftracker.mendixcloud.com/',
            youtubeUrl: 'https://www.youtube.com/embed/58TtrdmryC4?rel=0',
            githubUrl:'https://github.com/vietduc1441/mftracking',
            imgUrl: './images/mftracking.png'
        })
        $scope.projs.push({
            caption: 'Interactive CV',
            description:'Interactive CV,  you click play and see the animation.',
            lib: 'D3',
            projUrl: 'https://dl.dropboxusercontent.com/u/2062352/InteractiveCV/public_html/index.html',
            youtubeUrl: null,
			githubUrl:"https://github.com/vietduc1441/InteractiveCV/tree/master/public_html",
            imgUrl: './images/interactiveCv.png'
        })        
        $scope.projs.push({
            caption:'Visualization Tool',
            description: 'A prototype of BI tool to create infographs by just drag/drop an component and config them to visualize data.',
            lib: 'D3, Angular, Underscore',
            projUrl: 'https://dl.dropboxusercontent.com/u/2062352/VizEditor/VizEditor/public_html/index.html',
            youtubeUrl: null,
            imgUrl:'./images/BI2.png',
            githubUrl:"https://github.com/vietduc1441/VizEditor",
            testTool: "karma & jasmine"
        })
        $scope.projs.push({
            caption:'Network connections',
            description: 'Network map shows the network of airlines, branch of company in the world map.',
            lib: 'D3',
            projUrl: 'https://dl.dropboxusercontent.com/u/2062352/NetworkMapDemo/index.html',
            youtubeUrl: null,
            imgUrl: './images/worldmap.png'
        })
        
        $scope.projs.push({
            caption:'Vietnam\'s map',
            description: '64 cities in Vietnam',
            lib: 'D3 to show the map, PostGIS + ogr2ogr (to export to svg)',
            projUrl: 'https://dl.dropboxusercontent.com/u/2062352/VietnamMapDemo/index.html',
            youtubeUrl: null,
            imgUrl:'./images/vietnam.png'
        })
        $scope.projs.push({
            caption:'Vietnam\'s investment',
            description: 'This Chord Diagram shows the investment into Vietnam and from Vietnam to other countries.',
            lib: 'D3, Underscore, Excel (to filter and group data)',
            projUrl: 'https://dl.dropboxusercontent.com/u/2062352/VnInvestment/public_html/index.html',
            youtubeUrl: null,
            imgUrl:'./images/vninvestment.png'
        })
        var projs=$scope.projs;
        var rows=[];
        for (var i=0;i<Math.ceil(projs.length/3); i++){
            var j=i*3;
            rows[i]=[];
            if (j<projs.length) rows[i].push(projs[j]);
            if (j+1<projs.length) rows[i].push(projs[j+1]);
            if (j+2<projs.length) rows[i].push(projs[j+2]);
        }
        $scope.rows=rows;
    }
);
pofoApp.controller("homeCtrl",//this inherits from pofoCtrl
    function($scope){
        $scope.title="Home";
        $scope.slideInterval=5000;
        var slides=$scope.slides=[];
        slides.push({
            image: './images/resume.jpg',
            text: "Resume",
            urlId: 'resume'
        });
        slides.push({
            image: './images/porfolio.jpg',
            text: "Portfolio",
            urlId: 'portfolio'
        });
        $scope.redirect=function(urlId){
            $scope.selectTemplate(urlId);
        }
    }
);
pofoApp.config(function($sceDelegateProvider){
    $sceDelegateProvider.resourceUrlWhitelist([
                        'self',
                        "//www.youtube.com/embed/**",
                        "https://www.youtube.com/embed/*",
                        "https://www.youtube.com/embed/**",
                        "http://www.youtube.com/embed/*",
                        'https://*.mendixcloud.com/'
                    ]);
})
pofoApp.directive("thumbnail",function(){
    return {
        restrict:"EA",
        replace: true,
        scope: {
          proj: "="
        },
        controller: function($scope,$modal){                    
                    $scope.openProj=function(){
                    var thumbScope=$scope;
                    var modalInstance = $modal.open({
                        templateUrl: './pages/modal.html',
                        controller: function ($scope, $modalInstance) {
                            $scope.proj=thumbScope.proj;
                            $scope.cancel = function () {
                                $modalInstance.dismiss('cancel');
                            };
                        },
                        resolve: {
                            items: function () {
                                return $scope.items;
                            }
                        }
                    });
            };
        },
        templateUrl: "./directives/thumbnail.html"
    }
})
pofoApp.config(function(herokuProvider){
    herokuProvider.setServerAddress("http://portfolio-vdbui.herokuapp.com:5000/");
})
//http://www.html5rocks.com/en/tutorials/cors/#toc-adding-cors-support-to-the-server
pofoApp.config(function($httpProvider)
{
  // Use x-www-form-urlencoded Content-Type
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

  // Override $http service's default transformRequest
  $httpProvider.defaults.transformRequest = [function(data)
  {
    /**
     * The workhorse; converts an object to x-www-form-urlencoded serialization.
     * @param {Object} obj
     * @return {String}
     */ 
    var param = function(obj)
    {
      var query = '';
      var name, value, fullSubName, subName, subValue, innerObj, i;
      
      for(name in obj)
      {
        value = obj[name];
        
        if(value instanceof Array)
        {
          for(i=0; i<value.length; ++i)
          {
            subValue = value[i];
            fullSubName = name + '[' + i + ']';
            innerObj = {};
            innerObj[fullSubName] = subValue;
            query += param(innerObj) + '&';
          }
        }
        else if(value instanceof Object)
        {
          for(subName in value)
          {
            subValue = value[subName];
            fullSubName = name + '[' + subName + ']';
            innerObj = {};
            innerObj[fullSubName] = subValue;
            query += param(innerObj) + '&';
          }
        }
        else if(value !== undefined && value !== null)
        {
          query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
        }
      }
      
      return query.length ? query.substr(0, query.length - 1) : query;
    };
    
    return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
  }];
})