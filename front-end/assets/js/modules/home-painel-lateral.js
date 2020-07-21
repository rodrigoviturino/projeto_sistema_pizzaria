export default function initPainelPedido() {}

const panelLateral = document.querySelector(".panel-pedido");
const modalPizza = document.querySelector("#modalPizza");
// panelLateral.classList.add("hidden");

const btnFinalizarPedido = document.querySelector("[data-pedido='finalizar']");
btnFinalizarPedido.addEventListener("click", (event) => {
  $("#modalPizza").modal("hide");

  panelLateral.classList.add("active");
});
