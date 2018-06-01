# Install

```sh-session
cp ./server/.env-keep ./server/.env
vim .env
npm install
npm start
```


# Manual Testing

http://localhost:3000/unauthed-redirector/?redirect_to_path=/foo#bar
