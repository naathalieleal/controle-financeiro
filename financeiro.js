let salario1 = 9250.00;
let salario2 = 4900.00;
let salario = salario1 + salario2;

let gastosFixos = [];
let gastoDebito = [];
let gastoCredito = [];

let porcentagemPoupança = 0; //10%
let poupanca = porcentagemPoupança * salario;

//adicionando valores manualmente
gastosFixos.push(2000); //aluguel
gastosFixos.push(400); //água+luz
gastosFixos.push(400); //diarista
gastosFixos.push(280); //banho cachorros
gastosFixos.push(119); //internet
gastosFixos.push(30); //vigia
gastosFixos.push(935); //faculdade

gastoDebito.push(80); //barbeiro
gastoDebito.push(250); //manicure
gastoDebito.push(50); //doação

gastoCredito.push(1420); //cartão Lucas
gastoCredito.push(5010); //cartão Nath
gastoCredito.push(255); //natação
gastoCredito.push(61); //plano celular

//somar os arrays
function somarArray(lista) {
    let total = 0;

    for (let i = 0; i < lista.length; i++) {
        total += lista[i];
    }

    return total;
}

//somando cada tipo
let totalFixos = somarArray(gastosFixos);
let totalDebito = somarArray(gastoDebito);
let totalCredito = somarArray(gastoCredito);

let gastosTotais = totalFixos + totalDebito + totalCredito;

let saldo = salario - gastosTotais - poupanca;

console.log("Salário:", salario);
console.log("Poupança:", poupanca);
console.log("Gastos totais:", gastosTotais);
console.log("Saldo final:", saldo);