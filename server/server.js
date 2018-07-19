const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const session = require('express-session');
const messagesCtrl = require('./messagesCtrl');

const app = express();
app.use(bodyParser.json());
let {SESSION_SECRET} = process.env;

app.use(session({
    secret: SESSION_SECRET,
    resace: false,
    saveUninitialized: false
}))

app.get('/api/messages', messagesCtrl.getAllMessages);
app.post('/api/messages', messagesCtrl.createMessage);

//----History----///
app.get('/api/messages/history', messagesCtrl.history)


port = process.env.SERVER_PORT;
app.listen(port, () => {
    console.log(`Listening on Port: ${port}`)
})

