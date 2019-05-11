require('dotenv').config();
const Pusher = require('pusher');
const { PUSHER_APP_ID, PUSHER_KEY, PUSHER_SECRET, TIME } = process.env;

const pusher = new Pusher({
  appId: PUSHER_APP_ID,
  key: PUSHER_KEY,
  secret: PUSHER_SECRET,
  cluster: 'ap2',
  encrypted: true
});