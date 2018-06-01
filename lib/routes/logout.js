'use strict';

module.exports = {
    method: 'get',
    path: '/logout/',
    options: {
        auth: 'session',
        handler: (request, h) => {

            request.cookieAuth.clear();
            return h.redirect('/');
        }
    }
};
