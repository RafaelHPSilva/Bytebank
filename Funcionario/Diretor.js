import { Funcionarios } from "./Funcionarios.js";

export class Diretor extends Funcionarios {
  constructor(nomeCompleto, cpf, salario){
    super(nomeCompleto, cpf, salario)

    this.bonificação = 2
  }
  
}