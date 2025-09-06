// Junta todas as frases dos 3 arquivos
let todasFrases = [];

// Verifica se cada array existe e adiciona
if (typeof frases1 !== "undefined") todasFrases = todasFrases.concat(frases1);
if (typeof frases2 !== "undefined") todasFrases = todasFrases.concat(frases2);
if (typeof frases3 !== "undefined") todasFrases = todasFrases.concat(frases3);

function gerarFrase() {
  if (todasFrases.length === 0) {
    document.getElementById("frase").innerText = "Nenhuma frase disponível!";
    return;
  }

  const nome = document.getElementById("nome").value || "Amigo";

  // Pega uma frase aleatória
  const frase = todasFrases[Math.floor(Math.random() * todasFrases.length)];

  // Dia da semana
  const hoje = new Date();
  const diasSemana = ["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"];
  const diaSemana = diasSemana[hoje.getDay()];

  // Substitui {{nome}} caso exista
  let fraseFinal = frase.includes("{{nome}}") ? frase.replace("{{nome}}", nome) : frase;

  // Adiciona bom dia e dia da semana
  fraseFinal += " Bom dia e feliz " + diaSemana + " 🌞";

  // Mostra no site
  document.getElementById("frase").innerText = fraseFinal;
}

function copiarFrase() {
  const frase = document.getElementById("frase").innerText;
  navigator.clipboard.writeText(frase);
  alert("Frase copiada!");
}

function compartilharWhatsApp() {
  const frase = document.getElementById("frase").innerText;
  const url = "https://wa.me/?text=" + encodeURIComponent(frase);
  window.open(url, "_blank");
}
