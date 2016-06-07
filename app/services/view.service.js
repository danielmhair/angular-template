angular.module("llnl.service.ViewService", [])
.service('ViewService', function($http, $q) {
    var viewsAPI = "http://localhost:3000/api/..."; //TODO Change url to real location that returns data
    var self = {};

    //TODO Remove this "when" call when you have real data
    self.viewsPromise = $q.when([
        { name: "View 1", id: 1 },
        { name: "View 2", id: 2 },
        { name: "View 3", id: 3 }
    ]);

    self.getViews = function() {
        //TODO Remove this line below when you have real data
        return self.viewsPromise;
        //TODO Uncomment this code you have real data and edit the API url above
        //var deferred = $q.defer();
        // $http.get(viewsAPI)
        // .then(function(response) {
        //     deferred.resolve(response.data);
        // }).catch(function(err) {
        //     deferred.reject(err);
        // });
        //return deferred.promise;
    };

    self.getView = function(id) {
        return getViews().then(function(views) {
            for(var i=0; i < viewsPromise.length; i++) {
                if ( viewsPromise[i].id == id) return viewsPromise[i];
            }
        });
    };

    return self;
});