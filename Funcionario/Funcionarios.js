export class Funcionarios {
  constructor(nomeCompleto, cpf, salario) {
    this._nomeCompleto = nomeCompleto
    this._cpf = cpf
    this._salario = salario

    this._bonificação = 1
    this._senha
  }
 // get senha() {
    //Relembrando: Um propriedade é um "valor" que pode ser atribuido em um método.
   // return this._senha
    //traduzindo: a propriedade "senha" do assessor get irá retornar como  "_senha".
    // OBS: Essa propriedade só pode ser atribuida pelo método cadastrarSenha..


  autenticar(senha){
    return senha == this._senha // traduzindo: metodo autenticar tera um parametro senha, esse parametro senha vai ser igual a propriedade _senha. (de todas classes)
  }

  cadastrarSenha(senha) {
    this._senha = senha
    //traduzindo:A propriedade "_senha" vai ser igual a parametro 'senha' que atribui a propriedade "senha" 
}
}
