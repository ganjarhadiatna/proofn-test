<template>
	<div>
		
		<div class="app-search">
			<form v-on:submit.prevent="doSearch">
				<div class="a-s-form">
					<button 
						type="submit"
						class="btn btn-sekunder-color btn-no-border">
						<i class="fa fa-lg fa-search"></i>
					</button>
					<input 
						type="search" 
						class="txt txt-main-color" 
						placeholder="Search Proofn"
						v-model="txtSearch"
						required>
				</div>
			</form>
		</div>

		<div v-for="(item, index) in object" :key="index">

			<router-link :to="{name: 'message', params: {'id': item.id}}">
				
				<div v-if="item.id == $route.params.id" :class="'card-chat active'">
					<div class="c-c-col-1">
						<div 
							class="image image-50px image-circle" 
							:style="{
								'background-image': 'url('+item.foto+')'
							}"></div>
					</div>
					<div class="c-c-col-2">
						<div class="c-c-top">
							<div class="c-c-name">
								<div class="txt-site txt-11 txt-bold txt-main margin-bottom-5px">
									{{ item.name }}
								</div>
							</div>
							<div class="c-c-date">
								12:08 PM
							</div>
						</div>
						<div class="c-c-mid">
							<div class="c-c-info">
								<div class="txt-site txt-10 txt-main">
									Life Advice Looking Through...
								</div>
								<div class="txt-site txt-9 txt-sekunder">
									Sony laptops are among the
								</div>
							</div>
							<div class="c-c-status">
								<div class="ttl">{{ item.ttl }}</div>
							</div>
						</div>
					</div>
				</div>

				<div v-else :class="'card-chat ' + item.status">
					<div class="c-c-col-1">
						<div 
							class="image image-50px image-circle" 
							:style="{
								'background-image': 'url('+item.foto+')'
							}"></div>
					</div>
					<div class="c-c-col-2">
						<div class="c-c-top">
							<div class="c-c-name">
								<div class="txt-site txt-11 txt-bold txt-main margin-bottom-5px">
									{{ item.name }}
								</div>
							</div>
							<div class="c-c-date">
								12:08 PM
							</div>
						</div>
						<div class="c-c-mid">
							<div class="c-c-info">
								<div class="txt-site txt-10 txt-main">
									Life Advice Looking Through...
								</div>
								<div class="txt-site txt-9 txt-sekunder">
									Sony laptops are among the
								</div>
							</div>
							<div class="c-c-status">
								<div class="ttl">{{ item.ttl }}</div>
							</div>
						</div>
					</div>
				</div>

			</router-link>
		</div>
	</div>
</template>
<script>
import underscore from 'vue-underscore';

export default {
	data () {
		return {
			txtSearch: '',
			object: [],
		}
	},
	created: function () {
		this.doResult(this.$route.params.ctr.replace('+', ' '));
	},
	methods: {
		doResult (txt) {
			var cek = false;
			var idx = 0;

			for (let index = 0; index < this.$dataBase.length; index++) {
				const element = this.$dataBase[index];

				if (element.name.toLowerCase() === txt.toLowerCase()) {
					cek = true;
					idx = element.id;
				}
			}

			console.log(txt);
			

			if (cek) {
				this.object.push(this.$dataBase[idx]);
				console.log('ditemukan');
			} else {
				console.log('tidak ditemukan');
			}
		},
		doSearch () {
			this.$router.push({
                name: 'search',
                params: {
                    ctr: this.txtSearch.toLowerCase().replace(/ /g, '+'),
                }
			});
			
		}
	},
}
</script>
