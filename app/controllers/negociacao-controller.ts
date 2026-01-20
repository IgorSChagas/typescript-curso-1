import { Negociacao } from "../models/negociacao.js"

export class NegociacaoController {
	private readonly inputData: HTMLInputElement
	private readonly inputQuantidate: HTMLInputElement
	private readonly inputValor: HTMLInputElement

	constructor() {
		this.inputData = document.querySelector("#data")
		this.inputQuantidate = document.querySelector("#quantidade")
		this.inputValor = document.querySelector("#valor")
	}

	adiciona(): void {
		const negociacao = this.criaNegociacao()
		console.log(negociacao)
		this.limparFormulario()
	}

	criaNegociacao(): Negociacao {
		const exp: RegExp = /-/g
		const date: Date = new Date(this.inputData.value.replace(exp, ","))
		const quantidade: number = Number.parseInt(this.inputQuantidate.value)
		const valor: number = Number.parseFloat(this.inputValor.value)
		return new Negociacao(date, quantidade, valor)
	}

	limparFormulario(): void {
		this.inputData.value = ""
		this.inputQuantidate.value = ""
		this.inputValor.value = ""
		this.inputData.focus()
	}
}
