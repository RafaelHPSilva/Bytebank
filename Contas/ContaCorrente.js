import { Conta } from './Conta.js'

export class contaCorrente extends Conta {
  static numeroDeContas = 0
  constructor(agencia, cliente) {
    super(0, cliente, agencia) // faz referencia o construtro do arquivo extends, para que possa herdar.
    contaCorrente.numeroDeContas += 1
  }
  /*subreescrevendo o método(funcao) sacar */
  sacar(valor) {
    //funcao declarada: sacar - parametro para a função - {condicionais/açao}
    let taxa = 1.1
    return this._sacar(valor, taxa) //retornando o valor de _sacar com taxa 1.1
  }
}
