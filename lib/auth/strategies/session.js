'use strict';

module.exports = (server, options) => ({
    scheme: 'cookie',
    options: {
        password: options.auth.sessionCookie.password,
        isSecure: process.env.NODE_ENV === 'production',
        redirectTo: '/unauthed-redirector/',
        appendNext: 'redirect_to_path'
    }
});
