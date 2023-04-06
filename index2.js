import { cliente } from './Clientes.js'
import { contaCorrente } from './Contas/ContaCorrente.js'
import { ContaCofre } from './Contas/ContaPoupança.js'
import { ContaSalario } from './Contas/ContaSalario.js'

//const cliente1 = new cliente('Rafael', 122212343405)
//const contaCorrenteRafael = new contaCorrente(0, cliente1, 1001)
//contaCorrenteRafael.depositar(500)
//contaCorrenteRafael.sacar(250)
//const contaSalario = new ContaSalario(cliente1)
//contaSalario.depositar(5000)
//contaSalario.sacar(2500)
//const contaCofre = new ContaCofre(50, cliente1, 1001)

//Sistema Interno//
import { Diretor } from './Funcionario/Diretor.js'
import { Gerente } from './Funcionario/Gerente.js'
import { SistemaAutenticacao } from './SistemaAutenticacao/SistemaAutenticado.js'

const diretor = new Diretor('Roberto Alves', 987654321, 10000)
diretor.cadastrarSenha('123')
const diretorEstaLogado = SistemaAutenticacao.login(diretor, '123')

const gerente = new Gerente('Roberto Tavares', 1234567890, 5000)
gerente.cadastrarSenha('321')
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, '321')

const novoCliente = new cliente('Carlos', 22222222200, '789')
const novoClienteEstaLogado = SistemaAutenticacao.login(novoCliente,) //

console.log(novoClienteEstaLogado, gerenteEstaLogado, diretorEstaLogado)
