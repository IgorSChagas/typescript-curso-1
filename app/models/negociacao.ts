export class Negociacao {
	constructor(
		private readonly _data: Date,
		public readonly _quantidade: number,
		public readonly _valor: number,
	) {}

	get volume(): number {
		return this._quantidade * this._valor
	}

	get data(): Date {
		const data = new Date(this._data.getTime())
		return data
	}
}

// Se eu adiciono public com readonly, todo mundo tem acesso as props
// mas ninguem pode alterar elas

// Maneira mais verbosa
// export class Negociacao {
// 	constructor(
// 		private readonly _data: Date,
// 		private readonly _quantidade: number,
// 		private readonly _valor: number,
// 	) {}

// 	get data(): Date {
// 		return this._data
// 	}

// 	get quantidade(): number {
// 		return this._quantidade
// 	}

// 	get valor(): number {
// 		return this._valor
// 	}

// 	get volume(): number {
// 		return this._quantidade * this._valor
// 	}
// }
