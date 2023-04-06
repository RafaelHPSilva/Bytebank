//O package.json é um arquivo muito utilizado em aplicações JS modernas que guarda vários dados de nossa aplicação. O arquivo gerado para este curso tem apenas algumas informações.
//Algumas delas são simples de entender, como nome, versão, descrição e autor. Outras, como o campo script, já são mais difíceis de entender sem uma explicação mais detalhada.

//Como desenvolvedores é normal queremos reaproveitar código de outras pessoas e bibliotecas que estão disponíveis para nosso time. Dessa forma, agilizamos o desenvolvimento de nossas aplicações. Mas onde podemos encontrar essas bibliotecas e código feitos pela comunidade?

//Achamos essas bibliotecas dentro de gerenciadores de pacote – pense neles como um lugar centralizado onde toda a comunidade pode subir e compartilhar códigos para que outros desenvolvedores usem. E é justamente para organizar essa série de pacotes e bibliotecas que o package.json foi criado. Com ele é fácil de saber qual a versão do pacote, o nome dele, quem fez aquele código etc.

//No caso do Javascript o gerenciador de pacotes mais utilizado é o NPM – Node package manager.

//"Ok, mas e essa tag de script?"

//Até este momento no curso não fizemos muitas operações complicadas, pois só estamos usando o terminal para chamar o interpretador do NodeJS e pedindo para ele executar o arquivo que queremos. Mas conforme nosso projeto cresce ou usamos outras bibliotecas para desenvolver a aplicação, é comum que o comando que precisamos rodar no terminal fique longo ou que ele precise de alguns parâmetros especiais. Como normalmente estamos trabalhando em equipe, não queremos que alguém na nossa equipe precise ficar perguntando o tempo todo qual o comando precisa escrever para o programa rodar. É nesse momento que usamos os scripts do package.json.

//=========CLASSES========
//Classes: Servem como moldes, compostos por um conjunto de atributos coesos entre si p/ uma variavel. Para que nosso JS não fique repetindo os mesmo códigos.

import { cliente } from './Clientes.js'
const cliente1 = new cliente('Rafael', 122212343405)
const cliente2 = new cliente('Rebeca', 23456789000)

//console.log(cliente1, '\n', cliente2)

//=========FUNÇAO + ATRIBUIÇAO PRIVADA + Retorno ========//
import { contaCorrente } from './ContaCorrente.js'

const contaCorrenteRafael = new contaCorrente(cliente1, 1001) //const contaCorrenteRafael pegará os atributos definidos da class que se refere as contasCorrentes dos clientes e atribuirá para a contaCorrenteRafael.
//Atributo da classe contaCorrente variavel..
//contaCorrenteRafael.saldo = 0 //AOs atributos privados, sao informacoes privadas dos clientes, NINGUEM DEVE TER ACESSO
//contaCorrenteRafael.agencia = 1001
//contaCorrenteRafael.cliente = cliente1 // Vinculando contaCorrente. (Podemos utilizar uma class como atributo de outra classe)

//===OPERAÇAO COM FUNÇAO==
//console.log(contaCorrenteRafael) //Imprimirá os dados da conta saldo e agência

contaCorrenteRafael.depositar(500)
contaCorrenteRafael.depositar(500)

contaCorrenteRafael.sacar(250)

console.log(contaCorrenteRafael) //Imprimirá os dados da conta saldo e agência.

const conta2 = new contaCorrente(cliente2, 1002)
//conta2.cliente = cliente2
//conta2.agencia = 1002

//OPERAÇÕES
conta2.depositar(100)
contaCorrenteRafael.transferir(250, conta2) // O Rafael depositou o valor de 250 reais  para a conta2 / traduzindo: conta2 deposite 200 reais para conta3) / transferir = conta(origem).depositar
//opcao, porém a boa pratica é melhor deixar como uma variavel nosso cliente
//const conta3 = new contaCorrente()
//conta3.cliente = new Cliente()
//conta3.cliente.nomeCompleto = 'Robson'
//conta3.cliente.cpf = 12345678900
//conta3.agencia = 1003

//conta3.depositar(3000)

//conta2.transferir(200, conta3)

//===Vincular clientes e depositar==

//====OBSERVAÇOES====
//console.log(cliente1.nomeCompleto, '\n', contaCorrenteRafael.saldo) // Imprimirá o nome do correntista e o valor da conta.
//console.log(contaCorrenteRafael.saldo) // Imprimirá o valor da conta.

// //====OPERAÇAO SEM FUNÇAO====
// contaCorrenteRafael.saldo = 100 //deposito
// console.log(contaCorrenteRafael.saldo)
// let saque = 200 //saque
// console.log(contaCorrenteRafael.saldo)
// if (contaCorrenteRafael.saldo >= saque) {
//   contaCorrenteRafael.saldo -= saque
// }
