export abstract class View<T> {
	protected readonly element: HTMLElement

	constructor(seletor: string) {
		this.element = document.querySelector(seletor)
	}

	update(model: T): void {
		const template = this.template(model)
		this.element.innerHTML = this.template(model)
	}

	abstract template(model: T): string
}
