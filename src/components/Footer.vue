<template>
  <v-footer
    color="primary lighten-1"
    
  >
		<v-container>
	    <v-row
	      class="primary lighten-1 white--text"
	      cols="12"
	    >
				<v-col>
					<v-container 
						class="white--text"
					>
						<v-card-title>
							Меню
						</v-card-title>
					    <v-card-text>
								<ul>
									<li><a>Напитки</a></li>
									<li><a>Блюда</a></li>
									<li><a>Десерты</a></li>
								</ul>
					    </v-card-text>						
					</v-container>
				</v-col>
				<v-spacer></v-spacer>
				<v-col>
					<v-container 
						class="white--text"
					>
						<v-card-title>
							Контакты
						</v-card-title>
					    <v-card-text>
					      <a class="my-4 text-subtitle-1" phone>
					        8(999)999-99-99
					      </a>
					      <div>Адрес: г. Москва, Красная площадь, 1</div>
					    </v-card-text>						
					</v-container>
				</v-col>
				<v-spacer></v-spacer>
				<v-col>
					<Links 
						class="d-flex justify-end"
					/>				
				</v-col>
	    </v-row>
	    <v-row
	      class="primary lighten-1 text-center white--text"
	      cols="12"
	    >
				<v-col>
		      {{ new Date().getFullYear() }} 
		      <v-icon class="mx-5 mb-5 white--text">
		        mdi-copyright
		      </v-icon>
		      "Кофеманы"
				</v-col>
	    </v-row> 			
		</v-container>
  
  </v-footer>
</template>

<script>
import Links from '../views/Links.vue'
export default {
  name: 'footer',
  components: {
    Links,
  },	
};
</script>

<style lang="scss" scoped>
.footer {
  height: 50px;
  background: #000;
}
.v-icon.v-icon {
  display: inline;
}
</style>
