const banco = require('../banco')

function execute(user, msg) {
  banco.db[user].stage = 0
  return ["Obrigado pela preferência!\nSeu pedido chegará em breve"]
}

exports.execute = execute