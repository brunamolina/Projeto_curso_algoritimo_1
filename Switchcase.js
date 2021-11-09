function acaoBotao() {
    var valor01, valor02, total, operacao;
    valor01 = prompt("Digite o primeiro valor:")
    operacao = prompt ("Digite a operação: Ex: +,-,*,/.")
    valor02 = prompt("Digite o segundo valor:")
  switch (operacao) {
    case "+":
        total = parseInt(valor01) + parseInt(valor02) 
        break; 
    case "-":
        total = parseInt(valor01) - parseInt(valor02) 
        break; 
    case "*":
        total = parseInt(valor01) * parseInt(valor02) 
        break; 
    case "/":
            total = parseInt(valor01) / parseInt(valor02) 
        break; 
  }

  document.getElementById("paragrafo").innerText = total
  }
