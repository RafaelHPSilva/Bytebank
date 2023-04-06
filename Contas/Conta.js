//Classe abstrata: trata-se de uma classe que n pode ser instanciada diretamente, usar apenas para herdar informaçao
export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    this._saldo = saldoInicial
    this._cliente = cliente
    this._agencia = agencia
    if (this.constructor == Conta) {
      throw new Error("Você não deve instanciar um objeto como Conta Diretamente, pois trata-se de uma classe abstrata.")
    }
  }
  sacar(valor) {
      throw new Error("Método abstrado, não instanciar Diretamente.");
    }
 

  _sacar(valor, taxa) {
     //Atribuirá aos sacar dos demais arquivos. 
    const valorSacado = taxa * valor
    if (this._saldo >= valorSacado) {
      //cochetes nao sao obrigatórios em ifs
      this._saldo -= valorSacado
      return valorSacado //return têm duas funcionalidade de: criar uma early termination e pode funcionar como retronar
    }
    return 0
  }

  depositar(valor) {
    if (valor <= 100) {
      //cochetes nao obrigatorios em ifs. Servem mais pra envolver as açoes que deevem ser tomadas se as condiçoes forem atendidas, eles servem mais para dar um efeito de container  quando tiver mais de uma funçao dentro das condicionais.
      return
    }
    this._saldo += valor 
  }


  transferir(valor, conta) {
    // conta destino
    const valorSacado = this.sacar(valor) //criamos uma const denominada valoSacado e atribuímos uma funçao
    conta.depositar(valorSacado) //Aqui, a conta determinarmos irar depositar o valor sacado na conta destino.
  }
}
