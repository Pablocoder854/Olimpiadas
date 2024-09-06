function pesquisar() {
    // Obtém o elemento HTML com o ID "resultados-pesquisa" e armazena em uma variável
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado. Você nao buscou por um atleta</p>"
        return
    }

  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        tags = dado.tags.toLowerCase()

      // se titulo includes campoPesquisa
        if (dado.titulo.includes(campoPesquisa) || dado.Descricao.includes(campoPesquisa) || dado.tags.includes(campoPesquisa)) {
            //Cria um novo elemento
            resultados += `
            <div class="item-resultado">
              <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
              </h2>
              <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais Informações</a>
              </div>
            `;
        }
     
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"

    }
  
    // Atribui o HTML completo da pesquisa ao elemento section
    section.innerHTML = resultados;
  }











