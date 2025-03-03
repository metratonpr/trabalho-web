// Função para carregar a página parcial quando o link é clicado
function carregarPagina(pagina) {
  fetch(pagina) // Faz a requisição do arquivo HTML parcial
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("content").innerHTML = html;
    })
    .catch((error) => console.error("Erro ao carregar a página: ", error));
}
