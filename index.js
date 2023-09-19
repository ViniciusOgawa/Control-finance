const ul = document.querySelector("#ul");
const btnEntradas = document.querySelector("[data-entradas]");
const btnSaidas = document.querySelector("[data-saidas]");
const btnTodos = document.querySelector("[data-todos]");
const div = document.querySelector(".default");

function inserirLi() {

    const buttonsTipo = document.querySelectorAll("[data-btn-valor]");
    const buttonInserir = document.querySelector("[data-submit]");
    buttonInserir.classList.add("closeModal");

    const array = [];

    buttonsTipo.forEach((element) => {

        element.addEventListener("click", function() {

            const valueButton = element.getAttribute("data-btn-valor");

            element.classList.add("clickModal");

            array.push(valueButton);

    });

    })

    buttonInserir.addEventListener("click", function() {

        const valor = document.querySelector("[data-valor]");

        let aux = array.length-1;

        inserirDadosDb(valor.value,array[aux]);
        listarLi(insertedValues);
        somar();

    });

}

function somar() {

    const total = document.querySelector("[data-soma-total]")

    const soma = insertedValues.reduce((acc,element) => {

        return acc + element.value;

    }, 0)

    total.innerText = `R$ ${soma}`;

    if(insertedValues.length == 0){

        div.style.display = "flex"

    }else {

        div.style.display = "none"

    }

}

function inserirDadosDb(valor,tipo) {

    if(tipo == 1) {

        const novoDado = {
            id: insertedValues.length + 1,
            value: parseInt(valor),
            categoryID: 1,
        }

        insertedValues.push(novoDado);

    }else if(tipo == 2){

        parseInt(valor);

        const negativo = valor - (valor * 2);

        const novoDado = {
            id: insertedValues.length + 1,
            value: parseInt(negativo),
            categoryID: 2,
        }

        insertedValues.push(novoDado);

    }

} 

function listarLi(database){

    ul.innerHTML = "";

    database.forEach((element) => {

        let li = criarLi(element);

        ul.appendChild(li);

    })

    if(database.length == 0){

        div.style.display = "flex"

    }else {

        div.style.display = "none"

    } 

}

function criarLi(valoresdb) {

    const valor = valoresdb.value;
    const categoria = valoresdb.categoryID;

    const li = document.createElement("li");
    const pValor = document.createElement("p");
    const div = document.createElement("div");
    const buttonExcluir = document.createElement("button");
    const pDescri = document.createElement("p");
    const img = document.createElement("img");

    pValor.classList.add("liValor");
    pDescri.classList.add("descri");
    buttonExcluir.classList.add("excluir");
    img.dataset.btnExcluir = valoresdb.id

    pValor.innerText = `R$ ${valor}`;
    
    if(categoria == 1) {

        pDescri.innerText = "Entrada";

    }else if(categoria == 2) {

        pDescri.innerText = "Saída";

    }

    img.src = "./assets/trash.svg"

    buttonExcluir.appendChild(img);
    div.appendChild(pDescri);
    div.appendChild(buttonExcluir);
    li.appendChild(pValor);
    li.appendChild(div);

    return li;

}

function removerLi() {

    ul.addEventListener("click",function(event){

        const aux = event.target;


        if(aux.tagName === "IMG"){

            const id = parseInt(aux.getAttribute("data-btn-excluir"));

            insertedValues.forEach((element) => {

                if(element.id === id){

                    const index = insertedValues.indexOf(element);
                    insertedValues.splice(index,1)

                }

            })

        }

        listarLi(insertedValues);
        somar();

    })

}

function listarEntradas(database) {

    const atributo = btnEntradas.getAttribute("data-entradas");

    ul.innerHTML = "";

    const arrayFiltro = database.filter((element) => atributo == element.categoryID)

    arrayFiltro.forEach((element) => {

        let li = criarLi(element);

        ul.appendChild(li);

    })

    if(arrayFiltro.length == 0){

        div.style.display = "flex"

    }else {

        div.style.display = "none"

    }

}

function listarSaidas(database) {

    const atributo = btnSaidas.getAttribute("data-saidas");

    ul.innerHTML = "";

    const arrayFiltro = database.filter((element) => atributo == element.categoryID)

    if(arrayFiltro.length == 0){

        div.style.display = "flex"

    }else {

        div.style.display = "none"

    }

    arrayFiltro.forEach((element) => {

        let li = criarLi(element);

        ul.appendChild(li);

    })

}

btnEntradas.addEventListener("click", function() {

    listarEntradas(insertedValues);

    btnEntradas.classList.add("click");
    btnSaidas.classList.remove("click");
    btnTodos.classList.remove("click");

})

btnSaidas.addEventListener("click", function() {

    listarSaidas(insertedValues);

    btnEntradas.classList.remove("click");
    btnSaidas.classList.add("click");
    btnTodos.classList.remove("click");

})

btnTodos.addEventListener("click", function() {

    listarLi(insertedValues);

    btnEntradas.classList.remove("click");
    btnSaidas.classList.remove("click");
    btnTodos.classList.add("click");

})

removerLi();
AbrirModal();






/*

<li> 

    <p class="liValor">R$ 40,00</p> 

    <div>

        <p class="descri">Entrada</p>
        <button class="excluir"><img src="../../assets/trash.svg" alt="Deletar"></button>

    </div>

</li>

<div class="modal-wrapper">

    <div class="modal">

        <div class="modal-header">

            <p>Registro de valor</p>
            <button>X</button>

        </div>

        <div class="modal-body">

            <p>Digite o valor e em seguida aperte no botão referente ao tipo do valor</p>
            
            <div class="container-input">

                <label for="valor">Valor</label>
                <input type="text" name="valor" id="inputValor">

            </div>

            <div class="container-buttons">

                <p>Tipo de valor</p>

                <div>

                    <button value="entrada" id="btnEntrada" class="butonTipoValor">Entrada</button>
                    <button value="saida" id="btnSaida" class="butonTipoValor">Saída</button>

                </div>

            </div>

            <div class="box-buttons">

                <button id="cancelar">Cancelar</button>
                <button id="inserir">Inserir valor</button>

            </div>

        </div>

    </div>

</div>
*/