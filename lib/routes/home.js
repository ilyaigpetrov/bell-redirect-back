'use strict';

module.exports = {
    method: 'get',
    path: '/',
    options: {
        auth: {
            strategy: 'session',
            mode: 'optional'
        },
        handler: {
            view: {
                template: 'home'
            }
        }
    }
};
