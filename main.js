const form = document.querySelector('#form-wrapper')

form.addEventListener("change", save)

function adicionarFilme() {
    const imagem = document.querySelector("#filme").value;
    const trailer = document.querySelector("#trailer").value;
    const titulo = document.querySelector("#titulo").value;
    const listaFilmes = document.querySelector("#listaFilmes");
    

    const novoFilme = document.createElement("a");
    novoFilme.href = trailer;
    novoFilme.target = "_blank";
    
    const novaImagem = document.createElement("img");
    novaImagem.src = imagem;

    const novoTitulo = document.createElement("p");
    novoTitulo.innerHTML = titulo;
    novoFilme.appendChild(novaImagem);
    novoFilme.appendChild(novoTitulo);
    listaFilmes.appendChild(novoFilme);
    
    document.querySelector("#titulo").value = "";
    document.querySelector("#filme").value = "";
    document.querySelector("#trailer").value = "";

  }
  function removerFilmes() {
    var elementoListaFilmes = document.getElementById('listaFilmes')
    elementoListaFilmes.innerHTML = ''
    
  }
  
  function save() {
    localStorage.setItem('JPFlix@alura', JSON.stringify(adicionarFilme))
}

const data = JSON.parse(localStorage.getItem("JPFlix@alura")) || {}

form.setData(data)
form.load()