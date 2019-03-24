<template>
	<div>
		<div v-for="(item, index) in persons" :key="index">
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
export default {
	data () {
		return {
			persons: [
				{
					'id': '1',
					'name': 'Stella Wilson',
					'status': 'unread',
					'ttl': '3',
					'idmessage': '1',
					'foto': 'https://i.kinja-img.com/gawker-media/image/upload/s--Tg_qqR3r--/c_scale,f_auto,fl_progressive,q_80,w_800/dnmtn4ksijwyep0xmljk.jpg',
				},
				{
					'id': '2',
					'name': 'Cameron Webster',
					'status': 'unread',
					'ttl': '1',
					'idmessage': '2',
					'foto': 'https://data.whicdn.com/images/202324958/large.jpg',
				},
				{
					'id': '3',
					'name': 'Liyod Horton',
					'status': 'unread',
					'ttl': '2',
					'idmessage': '3',
					'foto': 'https://www.hengeler.com/fileadmin/_processed_/4/5/csm_WirbelBernd_Port-013_a514a51d9f.jpg',
				},
				{
					'id': '4',
					'name': 'Lois Webster',
					'status': 'unread',
					'ttl': '2',
					'idmessage': '4',
					'foto': 'https://www.hengeler.com/fileadmin/_processed_/f/c/csm_GardemannStella-2795_b489585686.jpg',
				}
			],
		}
	}
}
</script>
