const cardapio = require('../cardapio')
const banco = require('../banco')

const formatNum = (num) => num.toFixed(2).toString().replace('.', ',')

function execute(user, msg) {
  let menu = "CARDAPIO \n"

  cardapio.menu.forEach(el => {
    menu += `${el.id} - ${el.descricao}   R$ ${formatNum(el.preco)} \n`
  })

  banco.db[user].stage = 1

  return [menu, "Olá, sou uma assistente virtual! Para fazer seu pedido basta digitar o código do produto"]
}

exports.execute = execute