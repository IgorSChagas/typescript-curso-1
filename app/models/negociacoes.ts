import { Negociacao } from "./negociacao.js"

export class Negociacoes {
	private readonly negociacoes: Negociacao[] = []

	adiciona(negociacao: Negociacao) {
		this.negociacoes.push(negociacao)
	}

	lista(): readonly Negociacao[] {
		return this.negociacoes
	}
}
