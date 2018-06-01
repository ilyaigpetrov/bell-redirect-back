'use strict';

const Dotenv = require('dotenv');
const Confidence = require('confidence');

// Pull .env into process.env
Dotenv.config({ path: `${__dirname}/.env` });

// Glue manifest as a confidence store
module.exports = new Confidence.Store({
    server: {
        host: 'localhost',
        port: process.env.PORT || 3000,
        debug: {
            $filter: 'NODE_ENV',
            development: {
                log: ['error', 'implementation', 'internal'],
                request: ['error', 'implementation', 'internal']
            }
        }
    },
    register: {
        plugins: [
            {
                plugin: '../lib', // Main plugin
                options: {
                    developmentMode: (process.env.NODE_ENV !== 'production'),
                    auth: {
                        sessionCookie: {
                            password: process.env.SESSION_COOKIE_PASSWORD
                        },
                        providers: {
                            google: {
                                clientId: process.env.GOOGLE_CLIENT_ID,
                                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                                password: process.env.GOOGLE_COOKIE_PASSWORD
                            }
                        }
                    }
                }
            }
        ]
    }
});
