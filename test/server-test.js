'use strict';

process.env.NODE_ENV = 'test';
// code to test
var server = require('../lib/server');

// libraries
var request = require('supertest');

describe('server', function() {
    it('should respond with "Hello world!" on /', function() {
        return request(server)
            .get('/')
            .expect(200, /Hello world!/);
    });

    //@TODO: Front end testing.
    // ['David', 'John', 'Lee'].forEach(function(name) {
    //     it('should respond with "Hello, ' + name + '!" on /' + name, function(done) {
    //         request(server)
    //             .get('/' + name)
    //             .expect(200, 'Hello, ' + name + '!', done);
    //     });
    // });
    //
    // it('should respond with "Hello, Ryan Klenk!"', function() {
    //     return request(server)
    //         .get('/Ryan?lastName=Klenk')
    //         .expect(200,'Hello, Ryan Klenk!')
    // });
    // it('should respond with "Hello, Ryan Klenk! And I understand your inseam is 24 inches. How is the weather down there?" on /Ryan?lastName=Klenk&inseam=24', function(){
    //     return request(server)
    //         .get('/Ryan?lastName=Klenk&inseam=24')
    //         .expect(200,'Hello, Ryan Klenk! And I understand your inseam is 24 inches. How is the weather down there?');
    // });
    //
    // it('should respond with "Hello, Ryan Klenk! And I understand your inseam is 38 inches. Wow, you are tall!" on /Ryan?lastName=Klenk&inseam=38', function(){
    //     return request(server)
    //         .get('/Ryan?lastName=Klenk&inseam=38')
    //         .expect(200,'Hello, Ryan Klenk! And I understand your inseam is 38 inches. Wow, you are tall!');
    // });
    //
    // it('should respond with "Hello, Ryan Klenk! And I understand your inseam is 30 inches." on /Ryan?lastName=Klenk&inseam=30', function(){
    //     return request(server)
    //         .get('/Ryan?lastName=Klenk&inseam=30')
    //         .expect(200,'Hello, Ryan Klenk! And I understand your inseam is 30 inches.');
    // });
});
