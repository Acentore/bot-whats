// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');
const banco = require('./banco')
const stages = require('./stages')

venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    let resp = stages.step[getStage(message.from)].obj.execute(message.from, message.body)
    resp.map(resp => client.sendText(message.from, resp))
  });
}

function getStage(user) {
  if (banco.db[user]) {
    return banco.db[user].stage;
  } else {
    banco.db[user] = {
      stage: 0,
      items: [],
    }
    return banco.db[user].stage;
  }
}