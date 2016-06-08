angular.module("myApp.service.ViewService", [])
.service('ViewService', function($http, $q) {
    var viewsAPI = "http://localhost:3000/api/..."; //TODO Change url to real location that returns data
    var self = {};

    //TODO Remove this "when" call when you have real data

    self.getViews = function() {
        var deferred = $q.defer();

        //TODO Remove this line below when you have real data
        deferred.resolve([
            { name: "View 1", id: 1 },
            { name: "View 2", id: 2 },
            { name: "View 3", id: 3 }
        ]);
        //TODO Uncomment this code you have real data and edit the API url above
        // $http.get(viewsAPI)
        // .then(function(response) {
        //     deferred.resolve(response.data);
        // }).catch(function(err) {
        //     deferred.reject(err);
        // });
        return deferred.promise;
    };

    self.getView = function(id) {
        return self.getViews().then(function(views) {
            for(var i=0; i < views.length; i++) {
                if ( views[i].id == id) return views[i];
            }
        });
    };

    return self;
});