angular.module("llnl.service.PersonService", [])
.service('PersonService', function($http, $q) {
    var personsAPI = "http://localhost:3000/api/persons";
    var self = {
        getPersons: function() {
            var deferred = $q.defer();

            $http.get(personsAPI, {

            }).then(function(response) {
                deferred.resolve(response.data);
            }).catch(function(err) {
                deferred.reject(err);
            });

            return deferred.promise;
        }
    };

    return self;
});