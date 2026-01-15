import { NegociacaoController } from "./controllers/negociacao-controller.js"

const negociacao_controller = new NegociacaoController()
const form = document.querySelector(".form")
form.addEventListener("submit", (event) => {
	event.preventDefault()
	negociacao_controller.adiciona()
})
