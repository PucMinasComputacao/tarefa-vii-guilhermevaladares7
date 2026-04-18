let nome = prompt("Digite seu nome:");
let renda = Number(prompt("Digite sua renda:"));
while (isNaN(renda)) {
  renda = Number(prompt("Digite um número válido para a renda:"));
}
let qtd = Number(prompt("Quantas despesas?"));
while (isNaN(qtd)) {
  qtd = Number(prompt("Digite um número válido:"));
}
if (qtd < 1) qtd = 1;
if (qtd > 5) qtd = 5;
let total = 0;
for (let i = 1; i <= qtd; i++) {
  let despesa = Number(prompt("Despesa " + i + ":"));
  while (isNaN(despesa)) {
    despesa = Number(prompt("Digite um número válido:"));
  }
  total += despesa;
}
let sobra = renda - total;
let msg;

if (total > renda) {
  msg = "Gastou mais do que ganhou";
} else if (sobra >= renda * 0.3) {
  msg = "Boa sobra";
} else {
  msg = " Pode melhorar";
}

alert(
  "Nome: " + nome +
  "\nRenda: " + renda.toFixed(2) +
  "\nDespesas: " + total.toFixed(2) +
  "\nSobra: " + sobra.toFixed(2) +
  "\n" + msg
);
console.log("Nome:", nome);
console.log("Renda:", renda.toFixed(2));
console.log("Despesas:", total.toFixed(2));
console.log("Sobra:", sobra.toFixed(2));
console.log("Mensagem:", msg);