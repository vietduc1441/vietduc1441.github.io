angular.module('extension',["extension.feedback"]);
angular.module('extension.feedback',[])
.provider("dropbox",
    function(){
        this.appKey='axqvh0ojio8ewkr';    
        this.$get=function(){
            var appKey=this.appKey;
            var client;
            var datastoreManager;
            return{
                createClient: function(){
                    client = new Dropbox.Client({key: appKey});
                },
                connect: function(){
                    client.authenticate({interactive: false}, function (error) {
                        if (error) {
                            alert('Authentication error: ' + error);
                        }
                    });
                },
                authenticate: function(){
                    client.authenticate();
                },
                isAuthenticated: function(){
                    client.isAuthenticated();
                },
                addFeedback: function(table,feedbackObj){
                    datastoreManager.getTable(table).insert(feedbackObj);
                },
                createDataStore: function(datastore){
                    datastoreManager = client.getDatastoreManager();
                    datastoreManager.openDefaultDatastore(function (error, datastore) {
                        if (error) {
                            alert('Error opening default datastore: ' + error);
                        }
                    });
                },
                createTable: function(table){
                    return datastoreManager.getTable(table);
                }
            };
        };
        this.setKey=function(key){
            this.appKey=key;
        };
    }
)
.provider("heroku",function(){
    this.serverAddress="http://portfolio-vdbui.herokuapp.com:5000/";
    var address=this.serverAddress;
    this.$get=function($http){
        return{
            sendFeedback: function(feedback){
                $http.post(address, feedback)
                    .success(function(response){console.log("successful")})
                    .error(function(response){console.log("error"+response);});
            }
        };
    };
    this.setServerAddress=function(add){
        this.serverAddress=add;
    };
})
.controller("feedbackCtrl",function($scope,heroku){
    $scope.isLogin=true;//TODO: login in facebook
    var feedback=$scope.feedback={};
    feedback.guestName="";
    feedback.email="";
    feedback.content="";
    $scope.$watch(function(scope){
        return scope.feedback.guestName&&scope.feedback.email&&scope.feedback.content;
    },function(newValue,oldValue, scope){
        if (newValue&&scope.submitBtnClass.length==5) scope.submitBtnClass.pop();
        if (oldValue&&!newValue) scope.submitBtnClass.push("disabled");
    });
    $scope.submitBtnClass=["btn", "btn-primary", "btn-lg", "btn-block","disabled"];

    $scope.submit=function(){
      heroku.sendFeedback($scope.feedback);
      $scope.cancel();
    };
})
.directive("feedback",
    function(){
        return{
            restrict: "EA",
            replace: true,
            scope:{
                cancel:"&"//cancel in callback call cancel in model
                
            },
            link: function(scope, element, attrs){                    

            },
            controller: "feedbackCtrl",
            templateUrl:"feedback.html"
        };
    }
)
.run(function($templateCache) {
  $templateCache.put("feedback.html",
    '<div class="modal-dialog" style="width: 1000px;height: 800px">\n\
        <div class="modal-content">\n\
            <div ng-show="!isLogin">\n\
              <button class= "btn btn-default glyphicon glyphicon-link" ng-click="login()">Login</button>\n\
            </div>\n\
            <div ng-show="isLogin"> \n\
                <div class="modal-header">\n\
                    <h3>Give me some feedback!</h3>\n\
                </div>\n\
                <div class="modal-body">\n\
                   <form class="form-horizontal" role="form">\n\
                        <div class="form-group">\n\
                         <label for="guestName" class="col-sm-2 control-label">Name</label>\n\
                         <div class="col-sm-10">\n\
                           <input class="form-control" id="guestName" placeholder="Guest Name" ng-model="feedback.guestName">\n\
                         </div>\n\
                       </div>\n\
                       <div class="form-group">\n\
                        <label for="inputEmail3" class="col-sm-2 control-label">Email</label>\n\
                        <div class="col-sm-10">\n\
                          <input type="email" class="form-control" id="inputEmail3" placeholder="Email" ng-model="feedback.email">\n\
                        </div>\n\
                      </div>\n\
                      <div class="form-group">\n\
                         <label for="feedback" class="col-sm-2 control-label">Feedback</label>\n\
                         <div class="col-sm-10">\n\
                            <textarea class="form-control" rows="3" ng-model="feedback.content"></textarea>\n\
                         </div>\n\
                       </div>\n\
                       <div class="form-group">\n\
                         <div class="col-sm-12 text-center">\n\
                            <a ng-class="submitBtnClass" ng-click="submit()" role="button">Submit</a>\n\
                         </div>\n\
                       </div>\n\
                   </form>\n\
                </div>\n\
            </div>\n\
            <div class="modal-footer">\n\
                <button class="btn close" aria-hidden="true" ng-click="cancel()">Close</button>\n\
            </div>\n\
        </div>\n\
    </div>');
});