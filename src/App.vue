<template>
  <div id="app">
	<div class="app a-col">


		<div class="a-col-1">
			<div class="app-top no-border">
				<div class="a-t-btn">
					<center>
						<router-link :to="{name: 'main'}">
							<div 
								class="image image-35px image-circle"
								style="background-image: url('https://ssl.c.photoshelter.com/img-get2/I000093_G3GNFTlg/fit=1000x750/Noel-Gallagher-Warner-Thetaer-15.jpg')"></div>
						</router-link>
					</center>
				</div>
			</div>
			<div class="app-content">
				<center>
					<button class="btn btn-main-color btn-circle-small">
					<i class="fa fa-lg fa-envelope"></i>
				</button>
				<span class="txt-site txt-white txt-8 txt-center">
					Message
				</span>
				</center>
			</div>
		</div>

		<div class="a-col-2">
			<div class="app-top">
				<p class="a-t-title">
					Inbox
				</p>
			</div>
			
			<div class="app-list-chat">

				<router-view name="person" :key="$route.fullPath" />

			</div>

		</div>

		<div class="a-col-3">
			<div class="app-top">
				<!-- I think it must be changed -->
				<p class="a-t-title">
					{{ $titleMessage }}
				</p>
			</div>

			<router-view name="message" :key="$route.fullPath" />

		</div>


		<div class="a-col-4">
			<div class="app-top a-g-2x">
				
				<div>
					<p class="a-t-title">
						Subject List
					</p>
				</div>

				<div>
					<button class="a-t-btn btn btn-main2-color btn-circle">
						<i class="fa fa-lg fa-comment-dots"></i>
					</button>
				</div>
				
			</div>

			<div class="app-list-object">

				<router-view name="subject" />

			</div>
		</div>


	</div>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  /* @import url('./assets/icons/fontawesome/css/all.min.css'); */
  @import url('https://use.fontawesome.com/releases/v5.7.2/css/all.css');
  @import url('./assets/scss/main.css');
</style>
