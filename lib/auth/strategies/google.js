'use strict';

module.exports = (server, options) => ({
    scheme: 'bell',
    options: {
        provider: 'google',
        password: options.auth.providers.google.password,
        isSecure: process.env.NODE_ENV === 'production',
        clientId: options.auth.providers.google.clientId,
        clientSecret: options.auth.providers.google.clientSecret,
        location: server.info.uri,
    }
});
