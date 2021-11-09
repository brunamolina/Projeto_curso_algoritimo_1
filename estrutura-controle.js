/*escreval ("Digite o nome do aluno:")
Leia (Nome)
escreval ("Digite a nota 01 do aluno")
leia (nota01)
escreval ("digite  nota 02 do aluno")
leia (nota02)
meida:- (nota01 + nota02)/ 2

Se meda >= 5 Entao 
escreval ("aprovado", nome)
senao 
escreval ( "reprovado", nome)
fimse */

var nome, nota01, nota02;
nome = prompt("Digite o nome do aluno:")
nota01 = prompt("Digite a nota 01 do aluno:")
nota02 = prompt("Digite a nota 02 do aluno:")

media = (parseInt(nota01) + parseInt(nota02)) / 2;

if(media >= 50){
alert("aprovado!" + nome)
}
else
alert("reprovado!" + nome)