new Vue({
  el: '#desafio',
  data: {
      nome: 'Lailson Henrique',
      idade: 28,
      imagem: 'https://www.torcedores.com/content/uploads/2018/07/Not%C3%ADcias-do-Flamengo4.jpg'
  },
  methods: {
      idadex3(){
          return this.idade * 3
      },
      aleatorio(){
          return Math.random()
      }
  }
})