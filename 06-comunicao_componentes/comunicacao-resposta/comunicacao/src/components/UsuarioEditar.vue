<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Nome do usuário: <strong>{{nome}}</strong></p>
        <button @click="reiniciarNome" >Reinicia Nome</button>
        <p>idade do usuário: {{idade}}</p>
        <button @click="alterarIdade">Alterar idade</button>
    </div>
</template>

<script>
export default {
    props: ['nome', 'idade'],
    methods: {
        reiniciarNome(){
            this.nome= "lailson"
            this.$emit('nomeMudou', this.nome)
        },
        alterarIdade() {
            // this.idade = 30
            this.$emit('idadeMudou', 33)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
