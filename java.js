let Saldo1= parseInt(prompt("Digite o valor do saldo atual da sua conta: "))
let Valor= parseInt(prompt("Digite o valor total da sua compra: "))
let x= Saldo1-Valor


if(Valor <= Saldo1){
    alert(`Compra bem sucedida, seu saldo restante é de R$ ${x}`);
}else if(Valor > Saldo1 ){
    alert("SALDO INSUFICIENTE!");
}