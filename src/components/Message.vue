<template>
	<div>
		<!-- {{ message[0] }} -->
		<div class="app-background-chat">

			<div 
				v-for="(item, index) in $dataBase[$route.params.id].subject[$route.params.idsubject].message" 
				:key="index">

				<div>

					<!-- left -->
					<div v-if="item.type == 'other'">
						<div class="card-message c-m-left">
							<div class="c-m-col-1">
								<div 
									class="image image-45px image-circle"
									:style="{
										'background-image': 'url('+item.foto+')'
									}"></div>
							</div>
							<div class="c-m-col-2">
								
								<div class="c-m-content">
									<div class="c-m-top">
										<div class="c-m-name">
											{{ item.name }}
										</div>
										<div class="c-m-date">
											{{ item.date }}
										</div>
									</div>
									<div class="c-m-mid">
										{{ item.body }}
									</div>
								</div>

							</div>
						</div>
					</div>

					<!-- right -->
					<div v-else>
						<div class="card-message c-m-right">
								
							<div class="c-m-content">
								<div class="c-m-top">
									<div class="c-m-name">
										{{ item.name }}
									</div>
									<div class="c-m-date">
										{{ item.date }}
									</div>
								</div>
								<div class="c-m-mid">
									{{ item.body }}
								</div>
							</div>

						</div>
					</div>
				
				</div>

			</div>

		</div>

		<div class="app-chat">
			<form v-on:submit.prevent="doChat($route.params.id, $route.params.idsubject)">
				<div class="a-c-form">
					<input 
						type="text" 
						class="txt txt-main-color" 
						placeholder="Write message..."
						v-model="txtChat"
						required>
					<button 
						type="submit"
						class="btn btn-post-color btn-circle">
						<i class="fa fa-lg fa-paper-plane"></i>
					</button>
				</div>
			</form>
		</div>

	</div>
</template>
<script>
export default {
	data () {
		return {
			txtChat: '',
		}
	},
	methods: {
		doChat (id, idsubject) {
			var temp = {
				'idmessage': '4',
				'idsubject': idsubject,
				'name': 'You (Bondan)',
				'date': '00:39 AM',
				'type': 'me',
				'body': this.txtChat
			};

			this.$dataBase[this.$route.params.id].subject[this.$route.params.idsubject].message.push(temp);
			this.txtChat = '';
			// console.log(temp);
			
		}
	},
}
</script>
