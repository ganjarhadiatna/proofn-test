<template>
	<div class="app a-col">
		<div class="a-col-1">
			<div class="app-top no-border">
				<div class="a-t-btn">
					<center>
						<div class="image image-35px image-circle"></div>
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
				<p class="a-t-title">Inbox</p>
			</div>
			
			<div class="app-list-chat">

				<div class="app-search">
					<form action="#" method="get">
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
								required>
						</div>
					</form>
				</div>

				<div class="card-chat theme-2">
					<div class="c-c-col-1">
						<div class="image image-50px image-circle"></div>
					</div>
					<div class="c-c-col-2">
						<div class="c-c-top">
							<div class="c-c-name">
								<div class="txt-site txt-11 txt-bold txt-main margin-bottom-5px">
									Stella Wilson
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
								<div class="ttl">1</div>
							</div>
						</div>
					</div>
				</div>

				<div v-for="(item, index) in 4" :key="index">
					<div class="card-chat theme-3">
						<div class="c-c-col-1">
							<div class="image image-50px image-circle"></div>
						</div>
						<div class="c-c-col-2">
							<div class="c-c-top">
								<div class="c-c-name">
									<div class="txt-site txt-11 txt-bold txt-main margin-bottom-5px">
										Stella Wilson
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
									<div class="ttl">1</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
		<div class="a-col-3">
			<div class="app-top">
				<!-- I think it must be changed -->
				<p class="a-t-title">
					Life Advice Looking Through A Window
				</p>
			</div>

			<div class="app-background-chat">

				<!-- left -->
				<div class="card-message c-m-left">
					<div class="c-m-col-1">
						<div class="image image-45px image-circle"></div>
					</div>
					<div class="c-m-col-2">
						
						<div class="c-m-content">
							<div class="c-m-top">
								<div class="c-m-name">
									Stella Wilson
								</div>
								<div class="c-m-date">
									00:39 AM
								</div>
							</div>
							<div class="c-m-mid">
								Do you want to download free song for ipod? If so, 
								reading this article could save you from getting 
								in to a lot of trouble! Downloading music to your 
								Ipod has more than one pitfall associated with it, 
								and this article will tell you the best way to 
								download free song for Ipod. An Ipod can easily 
								become a vital part of your life. If you had thought 
								about the possibility of carrying around a virtually 
								unlimited supply of music ten years ago, it would 
								have seemed a bit futuristic, but it has all happened, 
								and now all we have to do when we get tired of our 
								present music collection is download free song for Ipod.
							</div>
						</div>

					</div>
				</div>

				<!-- right -->
				<div class="card-message c-m-right">
						
					<div class="c-m-content">
						<div class="c-m-top">
							<div class="c-m-name">
								You (Bondan)
							</div>
							<div class="c-m-date">
								00:57 AM
							</div>
						</div>
						<div class="c-m-mid">
							Do you want to download free song for ipod? If so, 
							reading this article could save you from getting 
							in to a lot of trouble! Downloading music to your 
							Ipod has more than one pitfall associated with it, 
							and this article will tell you the best way to 
							download free song for Ipod. An Ipod can easily 
							become a vital part of your life. If you had thought 
							about the possibility of carrying around a virtually 
							unlimited supply of music ten years ago, it would 
							have seemed a bit futuristic, but it has all happened, 
							and now all we have to do when we get tired of our 
							present music collection is download free song for Ipod.
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

				<!-- <div class="card-object theme-1">
					<div class="c-o-col-1">
						<div class="txt-site txt-10 txt-bold txt-main margin-bottom-5px">
							Life Advice Looking Through...
						</div>
						<div class="txt-site txt-9 txt-sekunder">
							Sony laptops are among the
						</div>
						<div class="txt-site txt-9 txt-sekunder">
							12:00 AM
						</div>
					</div>
					<div class="c-o-col-2">
						<div class="ttl">
							1
						</div>
					</div>
				</div> -->

				<div v-for="(item, index) in 6" :key="index">
					<div class="card-object">
						<div class="c-o-col-1">
							<div class="txt-site txt-10 txt-bold txt-main margin-bottom-5px">
								Life Advice Looking Through...
							</div>
							<div class="txt-site txt-9 txt-sekunder">
								Sony laptops are among the
							</div>
							<div class="txt-site txt-9 txt-sekunder">
								12:00 AM
							</div>
						</div>
						<div class="c-o-col-2">
							<div class="ttl">
								1
							</div>
						</div>
					</div>
				</div>

			</div>

		</div>
	</div>
</template>

