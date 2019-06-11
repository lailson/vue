<template>
	<v-app>
		<v-navigation-drawer app>
			<v-toolbar flat>
				<v-list>
					<v-list-tile>
						<v-list-tile-title class="title">
							Menu
						</v-list-tile-title>
					</v-list-tile>
				</v-list>
			</v-toolbar>

			<v-divider></v-divider>

			<v-list dense class="pt-0">
				<v-list-tile v-for="item in itensMenu" :key="item.titulo">
					<v-list-tile-action>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>{{ item.titulo }}</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
			</v-list>
		</v-navigation-drawer>
		<app-Toolbar/>
		<v-content>
			<app-Carousel/>
		</v-content>
		
		<app-Footer/>
	</v-app>
</template>

<script>
import Footer from './Footer.vue'
import Carousel from './Carousel.vue'
import Toolbar from './Toobar.vue'
export default {
	components: {'app-Footer': Footer, 
	'app-Carousel': Carousel, 
	'app-Toolbar':Toolbar},
	data() {
		return {
			itensMenu: [
				{titulo: 'Início', icon: 'dashboard'},
				{titulo: 'Sobre', icon: 'question_answer'}
			],
			fotos: [
				{src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'},
				{src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'},
				{src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'},
				{src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'}
			]
		}
	}
}
</script>
