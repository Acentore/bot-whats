const banco = require('../banco')

function formatNum(num) {
  return num.toFixed(2).toString().replace('.', ',')
}

function execute(user, msg) {
  if (msg === "*") {
    banco.db[user].stage = 0
    return ["Pedido cancelado com sucesso!"]
  } else if (msg === "#") {
    banco.db[user].stage = 3
    return ["Agora eu preciso que você me informe seu endereço."]
  }

  let resumo = "RESUMO\n"
  let total = 0

  banco.db[user].items.forEach(item => {
    resumo += `${item.descricao} --------------- R$ ${formatNum(item.preco)}\n`
    total += item.preco
  });

  resumo += `Seu total é R$ ${formatNum(total)}`

  return [resumo, "Está tudo correto com seu pedido? Digite # para confirmar ou * para cancelar"]
}

exports.execute = execute