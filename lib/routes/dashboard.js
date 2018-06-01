'use strict';

module.exports = {
    method: 'get',
    path: '/dashboard/',
    options: {
        auth: {
            strategy: 'session',
            mode: 'required'
        },
        handler: {
            view: {
                template: 'dashboard'
            }
        }
    }
};
