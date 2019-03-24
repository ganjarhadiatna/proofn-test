<template>
	<div>
		<!-- {{ message[0] }} -->
		<div class="app-background-chat">

			<div 
				v-for="(item, index) in message[$route.params.id].content" 
				:key="index">

				<div v-if="$route.params.idsubject == item.idsubject">

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
			<form action="#" method="post">
				<div class="a-c-form">
					<input 
						type="text" 
						class="txt txt-main-color" 
						placeholder="Write message..."
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
			message: [
				{},

				// 1
				{
					'content': [
						{
							'idmessage': '2',
							'idsubject': '1',
							'name': 'Stella Wilson',
							'foto': 'https://i.kinja-img.com/gawker-media/image/upload/s--Tg_qqR3r--/c_scale,f_auto,fl_progressive,q_80,w_800/dnmtn4ksijwyep0xmljk.jpg',
							'date': '00:39 AM',
							'type': 'other',
							'body': 'If you had thought \
									about the possibility of carrying around a virtually \
									unlimited supply of music ten years ago, it would \
									have seemed a bit futuristic, but it has all happened, \
									and now all we have to do when we get tired of our \
									present music collection is download free song for Ipod.'
						},
						{
							'idmessage': '3',
							'idsubject': '1',
							'name': 'You (Bondan)',
							'date': '00:39 AM',
							'type': 'me',
							'body': 'Do you want to download free song for ipod? If so, \
									reading this article could save you from getting \
									in to a lot of trouble! Downloading music to your \
									Ipod has more than one pitfall associated with it, \
									and this article will tell you the best way to \
									download free song for Ipod. An Ipod can easily \
									become a vital part of your life.'
						},
						{
							'idmessage': '2',
							'idsubject': '2',
							'name': 'Stella Wilson',
							'foto': 'https://i.kinja-img.com/gawker-media/image/upload/s--Tg_qqR3r--/c_scale,f_auto,fl_progressive,q_80,w_800/dnmtn4ksijwyep0xmljk.jpg',
							'date': '00:39 AM',
							'type': 'other',
							'body': 'If you had thought \
									about the possibility of carrying around a virtually \
									unlimited supply of music ten years ago.'
						},
						{
							'idmessage': '3',
							'idsubject': '2',
							'name': 'You (Bondan)',
							'date': '00:39 AM',
							'type': 'me',
							'body': 'Do you want to download free song for ipod? If so, \
									reading this article could save you from getting \
									in to a lot of trouble! Downloading music to your \
									Ipod has more than one pitfall associated with it'
						},
						{
							'idmessage': '3',
							'idsubject': '2',
							'name': 'You (Bondan)',
							'date': '00:39 AM',
							'type': 'me',
							'body': 'and this article will tell you the best way to \
									download free song for Ipod. An Ipod can easily \
									become a vital part of your life.'
						},
						{
							'idmessage': '1',
							'idsubject': '3',
							'name': 'Stella Wilson',
							'foto': 'https://i.kinja-img.com/gawker-media/image/upload/s--Tg_qqR3r--/c_scale,f_auto,fl_progressive,q_80,w_800/dnmtn4ksijwyep0xmljk.jpg',
							'date': '00:39 AM',
							'type': 'other',
							'body': 'Do you want to download free song for ipod? If so, \
									reading this article could save you from getting \
									in to a lot of trouble! Downloading music to your \
									Ipod has more than one pitfall associated with it, \
									and this article will tell you the best way to \
									download free song for Ipod. An Ipod can easily \
									become a vital part of your life.'
						},
					]
				},

				// 2
				{
					'content': [
						{
							'idmessage': '1',
							'idsubject': '1',
							'name': 'Cameron Webster',
							'foto': 'https://data.whicdn.com/images/202324958/large.jpg',
							'date': '00:39 AM',
							'type': 'other',
							'body': 'Do you want to download free song for ipod? If so, \
									reading this article could save you from getting \
									in to a lot of trouble! Downloading music to your \
									Ipod has more than one pitfall associated with it, \
									and this article will tell you the best way to \
									download free song for Ipod. An Ipod can easily \
									become a vital part of your life.'
						},
						{
							'idmessage': '2',
							'idsubject': '1',
							'name': 'Cameron Webster',
							'foto': 'https://data.whicdn.com/images/202324958/large.jpg',
							'date': '00:39 AM',
							'type': 'other',
							'body': 'If you had thought \
									about the possibility of carrying around a virtually \
									unlimited supply of music ten years ago, it would \
									have seemed a bit futuristic, but it has all happened, \
									and now all we have to do when we get tired of our \
									present music collection is download free song for Ipod.'
						},
						{
							'idmessage': '3',
							'idsubject': '1',
							'name': 'You (Bondan)',
							'date': '00:39 AM',
							'type': 'me',
							'body': 'Do you want to download free song for ipod? If so, \
									reading this article could save you from getting \
									in to a lot of trouble! Downloading music to your \
									Ipod has more than one pitfall associated with it'
						},
						{
							'idmessage': '4',
							'idsubject': '2',
							'name': 'Cameron Webster',
							'foto': 'https://data.whicdn.com/images/202324958/large.jpg',
							'date': '00:39 AM',
							'type': 'other',
							'body': 'If you had thought \
									about the possibility of carrying around a virtually \
									unlimited supply of music ten years ago, it would \
									have seemed a bit futuristic, but it has all happened, \
									and now all we have to do when we get tired of our \
									present music collection is download free song for Ipod.'
						}
					]
				},

				// 3
				{
					'content': [
						{
							'idmessage': '1',
							'idsubject': '1',
							'name': 'Liyod Horton',
							'foto': 'https://www.hengeler.com/fileadmin/_processed_/4/5/csm_WirbelBernd_Port-013_a514a51d9f.jpg',
							'date': '00:39 AM',
							'type': 'other',
							'body': 'Do you want to download free song for ipod? If so, \
									reading this article could save you from getting \
									in to a lot of trouble! Downloading music to your \
									Ipod has more than one pitfall associated with it, \
									and this article will tell you the best way to \
									download free song for Ipod. An Ipod can easily \
									become a vital part of your life.'
						},
						{
							'idmessage': '2',
							'idsubject': '1',
							'name': 'Liyod Horton',
							'foto': 'https://www.hengeler.com/fileadmin/_processed_/4/5/csm_WirbelBernd_Port-013_a514a51d9f.jpg',
							'date': '00:39 AM',
							'type': 'other',
							'body': 'If you had thought \
									about the possibility of carrying around a virtually \
									unlimited supply of music ten years ago, it would \
									have seemed a bit futuristic, but it has all happened, \
									and now all we have to do when we get tired of our \
									present music collection is download free song for Ipod.'
						},
						{
							'idmessage': '3',
							'idsubject': '1',
							'name': 'You (Bondan)',
							'date': '00:39 AM',
							'type': 'me',
							'body': 'Do you want to download free song for ipod? If so, \
									reading this article could save you from getting \
									in to a lot of trouble! Downloading music to your \
									Ipod has more than one pitfall associated with it'
						},
						{
							'idmessage': '4',
							'idsubject': '1',
							'name': 'Liyod Horton',
							'foto': 'https://www.hengeler.com/fileadmin/_processed_/4/5/csm_WirbelBernd_Port-013_a514a51d9f.jpg',
							'date': '00:39 AM',
							'type': 'other',
							'body': 'An Ipod can easily \
									become a vital part of your life.'
						},
						{
							'idmessage': '5',
							'idsubject': '1',
							'name': 'You (Bondan)',
							'date': '00:39 AM',
							'type': 'me',
							'body': 'Ofcourse.'
						}
					]
				},

				// 4
				{
					'content': [
						{
							'idmessage': '1',
							'idsubject': '1',
							'name': 'Lois Webster',
							'foto': 'https://www.hengeler.com/fileadmin/_processed_/f/c/csm_GardemannStella-2795_b489585686.jpg',
							'date': '00:39 AM',
							'type': 'other',
							'body': 'Do you want to download free song for ipod? If so, \
									reading this article could save you from getting \
									in to a lot of trouble! Downloading music to your \
									Ipod has more than one pitfall associated with it, \
									and this article will tell you the best way to \
									download free song for Ipod. An Ipod can easily \
									become a vital part of your life.'
						},
						{
							'idmessage': '2',
							'idsubject': '1',
							'name': 'Lois Webster',
							'foto': 'https://www.hengeler.com/fileadmin/_processed_/f/c/csm_GardemannStella-2795_b489585686.jpg',
							'date': '00:39 AM',
							'type': 'other',
							'body': 'If you had thought \
									about the possibility of carrying around a virtually \
									unlimited supply of music ten years ago, it would \
									have seemed a bit futuristic, but it has all happened, \
									and now all we have to do when we get tired of our \
									present music collection is download free song for Ipod.'
						},
						{
							'idmessage': '3',
							'idsubject': '1',
							'name': 'You (Bondan)',
							'date': '00:39 AM',
							'type': 'me',
							'body': 'Do you want to download free song for ipod? If so, \
									reading this article could save you from getting \
									in to a lot of trouble! Downloading music to your \
									Ipod has more than one pitfall associated with it, \
									and this article will tell you the best way to \
									download free song for Ipod. An Ipod can easily \
									become a vital part of your life.'
						},
						{
							'idmessage': '4',
							'idsubject': '1',
							'name': 'Lois Webster',
							'foto': 'https://www.hengeler.com/fileadmin/_processed_/f/c/csm_GardemannStella-2795_b489585686.jpg',
							'date': '00:39 AM',
							'type': 'other',
							'body': 'An Ipod can easily \
									become a vital part of your life.'
						},
						{
							'idmessage': '5',
							'idsubject': '1',
							'name': 'You (Bondan)',
							'date': '00:39 AM',
							'type': 'me',
							'body': 'Ofcourse.'
						},
						{
							'idmessage': '6',
							'idsubject': '1',
							'name': 'You (Bondan)',
							'date': '00:39 AM',
							'type': 'me',
							'body': 'Do you want to download free song for ipod? If so, \
									reading this article could save you from getting \
									in to a lot of trouble! Downloading music to your \
									Ipod has more than one pitfall associated with it, \
									and this article will tell you the best way to \
									download free song for Ipod. An Ipod can easily \
									become a vital part of your life.'
						},
					]
				},

			],
		}
	}
}
</script>
