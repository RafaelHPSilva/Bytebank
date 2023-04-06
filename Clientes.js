// Refere a uma classe.
//Classes: Servem como moldes, compostos por um conjunto de atributos coesos entre si p/ uma variavel. Para que nosso JS não fique repetindo os mesmo códigos.
export class cliente {
  constructor(nomeCompleto, cpf, senha) {
    //Assim, o atributo cpf ficara privado apenas na hora de criar um novo cliente.
    this.nomeCompleto = nomeCompleto
    this._cpf = cpf
    this._senha = senha //Aqui a propriedade é igual um parâmetro denominado senha da clss cliente
  }
  get cpf() {
    this._cpf
  }
  autenticar() {
    return true
  }
}
