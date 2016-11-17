describe('Test cases for users components', function() {
    var controller;

    beforeEach(function() {
        module('users');
        specHelper.injector(function($controller, $rootScope) {});
        controller = $controller('UserController');
        $rootScope.$apply();
    });

    it('should be created successfully', function() {
        expect(controller).toBeDefined();
    });
});
