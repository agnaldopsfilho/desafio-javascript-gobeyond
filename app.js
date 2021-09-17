const readline = require('readline-sync');
let vendedores = [];
adicionarVendedor();
function adicionarVendedor() {
    const comissao = 0.15;
    const nome = readline.question('Qual o seu nome?\n')
    const salarioFixo = parseInt(readline.question('Qual o seu salario fixo?\n'));
    const totalVendas = parseInt(readline.question('Qual o valor total das suas vendas?\n'));
    const salarioFinal = totalVendas * comissao + salarioFixo;
    vendedores.push({
        nome: nome,
        salarioFixo: salarioFixo,
        totalVendas: totalVendas,
        salarioFinal: salarioFinal.toFixed(2),
    })
    console.table(vendedores)
    console.log('Registrar outro vendedor\n')
    adicionarVendedor();
}