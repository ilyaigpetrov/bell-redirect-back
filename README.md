# Not Done

- [ ] Nested redirects, e.g. `/unauthed-redirector/?redirect_to_path=/unauthed-redirector?redirect_to_path=/unauthed-redirector` (must be percent encoded to work I guess).

# Install

In google consle use this redirect url (trailing slash is important):
http://localhost:3000/login/
```sh-session
cp ./server/.env-keep ./server/.env
vim .env
npm install
npm start
```

# Manual Testing

http://localhost:3000/unauthed-redirector/?redirect_to_path=/foo#bar
