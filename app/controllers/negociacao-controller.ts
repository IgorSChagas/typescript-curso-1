import { DiasDaSemana } from "../enums/EDiaDaSemana.js"
import { Negociacao } from "../models/negociacao.js"
import { Negociacoes } from "../models/negociacoes.js"
import { MensagemView } from "../views/mensagem-view.js"
import { NegociacoesView } from "../views/negociacoes-view.js"

export class NegociacaoController {
	private readonly inputData: HTMLInputElement
	private readonly inputQuantidate: HTMLInputElement
	private readonly inputValor: HTMLInputElement
	private readonly negociacoes = new Negociacoes()
	private readonly negociacoesView = new NegociacoesView("#negociacoesView")
	private readonly mensagemView = new MensagemView("#mensagemView")

	constructor() {
		this.inputData = document.querySelector("#data")
		this.inputQuantidate = document.querySelector("#quantidade")
		this.inputValor = document.querySelector("#valor")
		this.negociacoesView.update(this.negociacoes)
	}

	public adiciona(): void {
		const negociacao = this.criaNegociacao()
		if (!this.ehDiaUtil(negociacao.data)) {
			this.mensagemView.update("Apenas negociações em dias úteis são aceitasd")
			return
		}

		this.negociacoes.adiciona(negociacao)
		this.limparFormulario()
		this.atualizaView()
	}

	private ehDiaUtil(date: Date) {
		return (
			date.getDay() > DiasDaSemana.DOMING && date.getDay() < DiasDaSemana.SABADO
		)
	}

	private criaNegociacao(): Negociacao {
		const exp: RegExp = /-/g
		const date: Date = new Date(this.inputData.value.replace(exp, ","))
		const quantidade: number = Number.parseInt(this.inputQuantidate.value)
		const valor: number = Number.parseFloat(this.inputValor.value)
		return new Negociacao(date, quantidade, valor)
	}

	private limparFormulario(): void {
		this.inputData.value = ""
		this.inputQuantidate.value = ""
		this.inputValor.value = ""
		this.inputData.focus()
	}

	private atualizaView(): void {
		this.negociacoesView.update(this.negociacoes)
		this.mensagemView.update("Negociacao adicionada com sucesso")
	}
}
