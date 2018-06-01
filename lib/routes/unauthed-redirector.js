'use strict';

const Joi = require('joi');

module.exports = {
    method: 'get',
    path: '/unauthed-redirector/',
    options: {
        validate: {
            query: {
                redirect_to_path: Joi.any().required().empty('')
            }
        }
    },
    handler: (request, h) => {

        return `
<script>
    const params = new URLSearchParams(window.location.search);
    const hash  = window.location.hash;
    if (hash) {
      const relPath = params.get('redirect_to_path');
      params.set('redirect_to_path', relPath + hash);
    }
    window.location.replace("/login/?" + params.toString());
</script>`;
    }
};
