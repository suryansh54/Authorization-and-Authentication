const expect  = require('chai').expect;
const request = require('request');
const port = process.env.PORT || 3000;
const apiUrl = `http://localhost:${port}`;

it('Token route check', function(done) {
    request(`${apiUrl}/api/auth/token` , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('Refresh token route check', function(done) {
    request(`${apiUrl}/api/auth/refresh-token` , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('Login route check', function(done) {
    request(`${apiUrl}/api/auth/login` , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('Sign up route check', function(done) {
    request(`${apiUrl}/api/auth/sign-up` , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('Forget password route check', function(done) {
    request(`${apiUrl}/api/auth/forgot-password` , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('User logout route check', function(done) {
    request(`${apiUrl}/api/auth/logout` , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('User self route check', function(done) {
    request(`${apiUrl}/api/auth/self` , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('Upload route check', function(done) {
    request(`${apiUrl}/api/upload` , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('User image route check', function(done) {
    request(`${apiUrl}/api/upload/user-image` , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});