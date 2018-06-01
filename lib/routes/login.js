'use strict';

const Boom = require('boom');
const Joi = require('joi');
const Url = require('url');

module.exports = {
    method: 'get',
    path: '/login/',
    options: {
        ext: {
            onPreAuth: {

                method: (request, h) => {

                    const schema = Joi.object({
                        redirect_to_path: Joi.string().uri({
                            relativeOnly: true
                        }).regex(/^\/\//, { invert: true })
                    }).options({
                        allowUnknown : true
                    });
                    const source = 'query';
                    const validationError = Joi.validate(request[source], schema).error;
                    if (!validationError) {
                        return h.continue;
                    }
                    throw Boom.badRequest(`Invalid request ${source} input`);
                }
            }
        },
        auth: {
            strategy: 'google',
            mode: 'required'
        },
        handler: (request, h) => {

            const query = request.auth.credentials.query;
            const rawPath = query.redirect_to_path || '/';
            const parsedRaw = Url.parse(rawPath);
            if (
                parsedRaw.host
                || parsedRaw.protocol
            ) {
                throw Boom.badRequest('Open redirect attack was stopped.');
            }
            const redirectToPath = parsedRaw.path + (parsedRaw.hash || '');

            const profile = request.auth.credentials.profile;
            const userData = {
                email: profile.email,
                avatarUrl: profile.picture,
                name: `${profile.name.given_name} ${profile.name.family_name}`
            };
            request.cookieAuth.set(userData);

            // Already escaped, but just to be sure.
            const escaped = redirectToPath.replace(/"/g, '%22');
            return `
<script>
    window.location.replace("${escaped}");
</script>`;
        }
    }
};
