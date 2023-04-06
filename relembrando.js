class cliente {
  nomeCompleto
  cpf
}

const cliente1 = new cliente()
cliente1.nomeCompleto = 'Rafael Silva'
cliente1.cpf = 0987654321
console.log(cliente1)

class contaCorrente {
  agencia
  _saldo = 0

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor
    }
    return valor
  }
  depositar(valor) {
    if (valor < 0) {
      return
    }
    this._saldo += valor
  }
}

const contaCorrenteRafael = new contaCorrente()
contaCorrenteRafael.agencia = 1001
contaCorrenteRafael.depositar(200)
contaCorrenteRafael.sacar(100)
const valorSacado = contaCorrenteRafael.sacar(100)
console.log(contaCorrenteRafael)
console.log(valorSacado)
