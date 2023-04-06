/* Ser autenticavel é ter um método autenticar.*/

export class SistemaAutenticacao {
  static login(autenticavel, senha) {
    if (SistemaAutenticacao.ehautenticavel(autenticavel)) {
      return autenticavel.autenticar(senha) //Todas as classes que tiverem o objeto autenticavel tenha em sua chave o metodo autenticar
    }
    return false
    /*TRADUCAO Metodo Login: 
     - Terá dois objetos de parametros.
     - Todas as classes que tiverem o objeto autenticavel tenha em sua chave o metodo autenticar.
     -  Condicional: Se na classe SistemaAutenticaçao tiver o método ehautenticavel que tenha como parametro um objeto autenticavel, retornar autenticavel.autenticar , se nao, retornar falso   
     */
  }
  static ehautenticavel(autenticavel) {
    return (
      'autenticar' in autenticavel &&
      autenticavel.autenticar instanceof Function
    )

    /*TRADUCAO Metodo ehautenticavel: 
     - Téra como parametro o objeto autenticavel
     - Porcurar dentro da chave de um objeto autenticavel  o metodo autenticar instanciavel e retornar.
 */
  }
}
