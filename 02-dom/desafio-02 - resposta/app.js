new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        alertaBotao(){
            console.log('Oi')
            alert('Clickei no botão')
        },
        salvar(event){
            this.valor = event.target.value
        }
    }
})