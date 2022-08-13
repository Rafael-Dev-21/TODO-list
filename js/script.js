const input = document.querySelector("#TODO-text");
const adicionar = document.querySelector("#TODO-add");
const lista = document.querySelector("#TODO-list");

adicionar.addEventListener("click", () => {
  if(input.value) {
    let item = document.createElement("li");
    let texto = document.createElement("p");
    let btnEditar = document.createElement("span");
    let btnDeletar = document.createElement("span");
    let inputEditar = document.createElement("input");
    
    let editar = true;
    
    texto.textContent = input.value;
    texto.addEventListener("click", () => {
      texto.classList.toggle("checked");
    });
    item.appendChild(texto);
    
    btnEditar.textContent = "Editar";
    btnEditar.addEventListener("click", () => {
      if(editar) {
        inputEditar.value = texto.textContent;
        item.replaceChild(inputEditar, texto);
        editar = false;
      } else {
        texto.textContent = inputEditar.value;
        item.replaceChild(texto, inputEditar);
        editar = true;
      }
    });
    item.appendChild(btnEditar);
    
    btnDeletar.textContent = "Deletar";
    btnDeletar.addEventListener("click", () => {
      lista.removeChild(item);
    });
    item.appendChild(btnDeletar);
    
    lista.appendChild(item);
    
    input.value = "";
  }
});
