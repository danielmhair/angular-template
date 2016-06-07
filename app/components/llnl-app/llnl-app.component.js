angular.module('llnl.component.app', [])
.component('llnlApp', {
    templateUrl: 'components/llnl-app/llnl-app.html',
    controller: AppController,
    $routeConfig: [
        {path: '/person/...', name: 'PersonDetail', component: 'personDetail', useAsDefault: true}
    ]
});

function AppController(PersonService) {
    var $scope = this;
    $scope.leftLinks = [
        {
            name: 'Home',
            link: '#home'
        }
    ];

    $scope.rightLinks = [
        {
            name: 'Sign In',
            link: '#signin'
        }
    ];

    $scope.brand = {
        name: 'Angular Template',
        link: '/'
    };

    $scope.toThumbnail = function(person) {
        return {
            image: 'LLNL.jpg',
            label: person.name,
            content: "Joined on " + person.created,
            firstButtonText: 'Details',
            alt: 'LLNL Image'
        }
    };

    $scope.thumbnails = [];

    PersonService.getPersons()
        .then(function(persons) {
            console.log(persons);
            persons.forEach(function(person) {
                $scope.thumbnails.push($scope.toThumbnail(person));
            });

            console.log($scope.thumbnails);
        })
        .catch(function(err) {
            console.error(err);
        });
}