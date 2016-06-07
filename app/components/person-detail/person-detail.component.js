angular.module('llnl.component.personDetail', [])
    .component('personDetail', {
        templateUrl: 'components/person-detail/person-detail.html',
        bindings: {
            person: '='
        }
    });