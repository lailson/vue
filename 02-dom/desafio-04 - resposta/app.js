new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque'
	},
	methods: {
		iniciarEfeito() {
			return this.classe1 = this.classe1 == 'destaque'?
			'encolher' : 'destaque'
		},
		iniciarProgresso() {

		}
	}
})
