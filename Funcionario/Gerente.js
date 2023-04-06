import { Funcionarios } from './Funcionarios.js'

export class Gerente extends Funcionarios {
  constructor(nomecompleto, cpf, salario) {
    super(nomecompleto, cpf, salario)
    this.bonificação = 1.1
  }
}
