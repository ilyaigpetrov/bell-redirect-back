'use strict';

const Handlebars = require('handlebars');

module.exports = (server, options) => ({
    path: 'templates',
    partialsPath: 'templates/partials',
    helpersPath: 'templates/helpers',
    isCached: !options.developmentMode,
    defaultExtension: 'hbs',
    engines: {
        hbs: Handlebars
    },
    context: (request) => {

        return ({
            options,
            baseURI: server.realm.modifiers.route.prefix || '',
            credentials: request.auth.credentials,
            currentPathname: request.path
        });
    }
});
