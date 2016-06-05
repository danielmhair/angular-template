angular.module('bs.component.navbar', [])
.component('bsNavbar', {
    templateUrl: 'components/bs-navbar/bs-navbar.html',
    bindings: {
        leftLinks: '<',
        rightLinks: '<',
        brand: '<'
    }
});