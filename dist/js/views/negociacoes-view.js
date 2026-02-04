import { View } from "./view.js";
export class NegociacoesView extends View {
    template(model) {
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
                                <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                                <td>${negociacao._quantidade}</td>
                                <td>${negociacao._valor}</td>
                            </tr>
                        `;
        })
            .join(" ")}
                </tbody>
            </thead>
        </table>
        `;
    }
}
