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

//let resp = stages.step[getStage('558899380059@c.us')].obj.execute()
//resp.map(resp => console.log(resp))

function start(client) {
  client.onMessage((message) => {
    let resp = stages.step[getStage(message.from)].obj.execute(message.from, message.body)
    resp.map(resp => client.sendText(message.from, resp))
  });
}

function getStage(user) {
  return banco.db[user].stage
}