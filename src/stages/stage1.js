const cardapio = require('../cardapio')
const banco = require('../banco')

function execute(user, msg) {
  if (msg === '*') {
    banco.db[user].stage = 0
    return ["Pedido cancelado com sucesso!"]
  }

  if (msg === '#') {
    banco.db[user].stage = 2
    return ["Podemos continuar?"]
  }

  if (!cardapio.menu[msg - 1]) {
    return [
      `Código inválido! Por favor digite novamente`,
      "```Digite # para finalizar pedido ou * para cancelar```"
    ]
  }

  banco.db[user].items.push(cardapio.menu[msg - 1])

  return [
    `Item " *${cardapio.menu[msg - 1].descricao}* " adicionado com sucesso!`,
    "```Digite # para finalizar pedido ou * para cancelar```"
  ]
}

exports.execute = execute