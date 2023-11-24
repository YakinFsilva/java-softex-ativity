// Definindo o objeto Banco
const Banco = {
    conta: "123456'",
    saldo: 1000,
    tipoConta: "corrente",
    agencia: "7890",

    buscarSaldo: function () {
      return this.saldo;
    },
     deposito: function (valor) {
      this.saldo += valor;
      return `Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`;
      },


       saque: function (valor) {
             if (valor > this.saldo) {
        return "Saldo insuficiente para realizar o saque.";
      } else {
          this.saldo -= valor;
        return `Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`;
      }
    },
        
    numeroDaConta: function () {
      return this.conta;
    }
  };

  
  console.log(Banco.buscarSaldo()); 
  console.log(Banco.deposito(500));  
  console.log(Banco.saque(200)); 
  console.log(Banco.numeroDaConta()); 
  