export class View {
    constructor(seletor) {
        this.element = document.querySelector(seletor);
    }
    update(model) {
        const template = this.template(model);
        this.element.innerHTML = this.template(model);
    }
    template(model) {
        throw new Error("Classe filha precisa implementar o método template");
    }
}
