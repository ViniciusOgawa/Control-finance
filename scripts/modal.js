const criarModal = () => {

    const modalWrapper = document.createElement("div");
    const modal = document.createElement("div");
    const modalHeader = document.createElement("div");
    const modalBody = document.createElement("div");
    const containerInput = document.createElement("div");
    const containerButtons = document.createElement("div");
    const divContainerButtons = document.createElement("div");
    const boxButtons = document.createElement("div");
    const pModalHeader = document.createElement("p");
    const buttonModalHeader = document.createElement("button");
    const pModalBody = document.createElement("p");
    const labelValor = document.createElement("label");
    const inputValor = document.createElement("input");
    const pContainerButtons = document.createElement("p");
    const buttonSaida = document.createElement("button");
    const buttonEntrada = document.createElement("button");
    const buttonCancelar = document.createElement("button");
    const buttonInserir = document.createElement("button");

    modalWrapper.classList.add("modal-wrapper");
    modal.classList.add("modal");
    modalHeader.classList.add("modal-header");
    modalBody.classList.add("modal-body");
    containerInput.classList.add("container-input");
    containerButtons.classList.add("container-buttons");
    boxButtons.classList.add("box-buttons");
    buttonCancelar.id = "cancelar";
    buttonInserir.id = "inserir";
    buttonModalHeader.classList.add("closeModal");
    buttonCancelar.classList.add("closeModal");
    buttonInserir.dataset.submit = "submit"
    buttonEntrada.dataset.btnValor = 1
    buttonSaida.dataset.btnValor = 2
    buttonInserir.type = "submit"
    inputValor.dataset.valor = inputValor.value;
    inputValor.type = "number"

    pModalHeader.innerText = "Registro de valor";
    buttonModalHeader.innerText = "X";
    pModalBody.innerText = "Digite o valor e em seguida aperte no botão referente ao tipo do valor";
    labelValor.innerText = "Valor";
    pContainerButtons.innerText = "Tipo de valor";
    buttonEntrada.innerText = "Entrada";
    buttonSaida.innerText = "Saida";
    buttonCancelar.innerText = "Cancelar";
    buttonInserir.innerText = "Inserir Valor";
    inputValor.placeholder = "R$ 00,00"

    divContainerButtons.appendChild(buttonEntrada);
    divContainerButtons.appendChild(buttonSaida);
    containerButtons.appendChild(pContainerButtons);
    containerButtons.appendChild(divContainerButtons);
    boxButtons.appendChild(buttonCancelar);
    boxButtons.appendChild(buttonInserir);
    containerInput.appendChild(labelValor);
    containerInput.appendChild(inputValor);
    modalBody.appendChild(pModalBody);
    modalBody.appendChild(containerInput);
    modalBody.appendChild(containerButtons);
    modalBody.appendChild(boxButtons);
    modalHeader.appendChild(pModalHeader);
    modalHeader.appendChild(buttonModalHeader);
    modal.appendChild(modalHeader);
    modal.appendChild(modalBody);
    modalWrapper.appendChild(modal);

    return modalWrapper;

}

function AbrirModal() {

    const buttonToggleModal = document.querySelectorAll("[data-registrar]");

    buttonToggleModal.forEach((element) => {

        element.addEventListener("click", function() {

            let valueDataModalControl = element.getAttribute("data-registrar");

            document.querySelector("body").appendChild(criarModal(valueDataModalControl));

            inserirLi();
            FecharModal();

        })

    });

}

function FecharModal() {

    const closeModal = document.querySelectorAll(".closeModal");
    const modalWrapper = document.querySelector(".modal-wrapper");
    const modal = document.querySelector(".modal");

    closeModal.forEach((element) => {

        element.addEventListener("click", function() {

            modal.classList.add("modalClose");
            setTimeout(() => {
    
                modalWrapper.remove();
    
            },900);
    
        });

    })

}