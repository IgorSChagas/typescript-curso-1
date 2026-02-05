import { Negociacoes } from "../models/negociacoes.js"
import { View } from "./view.js"

export class NegociacoesView extends View<Negociacoes> {
	protected template(model: Negociacoes): string {
		return `
        <table class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
                <tbody>
                    ${model
											.lista()
											.map((negociacao) => {
												return `
                            <tr>
                                <td>${this.formatar(negociacao.data)}</td>
                                <td>${negociacao._quantidade}</td>
                                <td>${negociacao._valor}</td>
                            </tr>
                        `
											})
											.join(" ")}
                </tbody>
            </thead>
        </table>
        `
	}

	private formatar(data: Date): string {
		return new Intl.DateTimeFormat().format(data)
	}
}
