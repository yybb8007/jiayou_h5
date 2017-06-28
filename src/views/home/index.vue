	
<template>
	<div>
		<section id="wrapper"   @scroll="onScroll">
			<div class="swiper_bg"></div>
			<div id="home_ban">
				<div class="nav_show swiper-container2">
					<ul class="ban_show swiper-wrapper">
						<li class="swiper-slide">
							<router-link to="/home">
								<p class="show_first">首页</p>
							</router-link>
						</li>
						<li class="swiper-slide">
							<router-link to="/yinpin">
								<p>饮品</p>
							</router-link>
						</li>
						<li class="swiper-slide">
							<router-link to="/shengxian">
								<p>生鲜</p>
							</router-link>
						</li>
						<li class="swiper-slide">
							<router-link to="/meizhuang">
								<p>美妆</p>
							</router-link>
						</li>
						<li class="swiper-slide">
							<router-link to="/jiafang">
								<p id="">家纺</p>
							</router-link>
						</li>
						<li class="swiper-slide">
							<router-link to="/gongyi">
								<p id="gongyi">工艺</p>
							</router-link>
						</li>
						<li class="swiper-slide">
							<router-link to="/muying">
								<p id="muying">母婴</p>
							</router-link>
						</li>
						<li class="swiper-slide">
							<router-link to="/yiliao">
								<p id="yiliao">医疗</p>
							</router-link>
						</li>
						<li class="swiper-slide">
							<router-link to="/meishi">
								<p id="meishi">美食</p>
							</router-link>
						</li>
					</ul>
				</div>
				<div class="maodian" @click = "returnTop"><i class="jy_iconfon icon_maodian icon_upload"></i></div>
	
			</div>
			<router-view class="index_main" id='index-main'></router-view>

		</section>
		<nv-footer></nv-footer>
	</div>
</template>
<script>
	export default {
		data() {
				return {
					headTit: {
						title: '家有在线',
						//back: 'ok',
					},
					data:[]
				}
			},
			computed: {},

			methods: {
//				导航条的下拉与隐藏
				nav_down: () => {
					$('.ban_hide').show()
				},
				nav_up: (e) => {
					$('.ban_hide').hide()
					var html = e.target.innerHTML;
					$('#home_ban .ban_show p').each(function(m, n) {
						if(n.innerHTML == html) {

						}
					})
				},
//				搜索的点击
				sousuo(e){
					var id = ($(e.target).attr("ID")),
						target = ($(e.target).attr("target")),
						value = ('cmd:{"data":"' + id + '","target":"' + target + '"}');
						window.location.href = value;
					console.log(value)
				},
//				消息的点击
				xiaoxi(e){
					var id = ($(e.target).attr("ID")),
						target = ($(e.target).attr("target")),
						value = ('cmd:{"data":"' + id + '","target":"' + target + '"}');
						window.location.href = value;
					console.log(value)
				},
				weidu(num){
					setTimeout(function(){
							if(num == 0){
								$(".redDian").hide()
							}else{
								$(".redDian").show()
							}
							return(num)
					},0)

				},
				returnTop(){
					$(".index_main").addClass("index_main1").removeClass('index_main')
					setTimeout(function(){
						$("#index-main").addClass("index_main").removeClass("index_main1")
					},50)
//					$("#wrapper").scrollTop('-100px')
//					动态滑动效果
//					var  bodyTop=Number($('#wrapper').scrollTop())
//					var speed=bodyTop/15;
//					var timeScorll=setInterval(function(){
//						bodyTop-=speed;
//						console.log(bodyTop)
//						$("#wrapper").scrollTop(bodyTop)
//						if(bodyTop <= 200){
//							clearInterval(timeScorll)
//							
//						}
//					},30)
				},
				onScroll(){
					$("#wrapper").scroll(function(event){
						var top = $(this).scrollTop();
						console.log(top)
//						if(top >=700){
//							$(".maodian").show()
//						}else if(top <= 500){
//							$(".maodian").hide()
//						}
//						if(top <= 10){
//						console.log(top)
//							$(".index_main").addClass("index_main").removeClass('index_main1')
//							
//						}
					})
				},
			},
			mounted: function() {
				this.$http.jsonp(this.baseUrl + '.t.jiayou9.com/page/index?debug=1&format=jsonp').then(function(res) {
					this.data = res.body.data;
//					console.log(JSON.parse(JSON.stringify(this.data)));
				})
			},
			components: {
				"nvFooter": require('../../components/footer.vue')
			},
	}

	// 导航
	window.onload = function (){
		var mySwiper2 = new Swiper('.swiper-container2', {
			pagination: 'null',
	        slidesPerView: 'auto',
	        spaceBetween: 0,
	        freeMode: true,
	        freeModeMomentum: false
		});
	}
</script>
<style lang="sass" scoped>
	* {
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	input {
		-webkit-user-select: auto;
	}

	section {
		background: rgb(255,255,255);
		
		.swiper_bg{
			width: 100%;
			height: 101px;
			position: fixed;
			top: 0;
			background: #fff;
			z-index: 1;
			border-bottom: 3px solid #eee;
		}
		/*导航样式*/
		#home_ban {
			position: fixed;
			width: 100%;
			top: 0;
			height: 98px;
			border-bottom: 1px solid #eee;
			background: #fff;
			z-index: 10;
			.swiper-container2{
				color: #333;
				ul{
					font-size: 32px;
					width: 150px;
				    line-height: 98px;
				    text-align: center;
				    margin: 0;
					.swiper-slide{
						background: #fff;
						height: 98px;
						float: left;
						a{
							font-size: 32px;
							color: #333;
							display: inline-block;
							width: 100%;
						}
						p{
							width: 80px;
							height: 98px;
							margin: 0;
							padding: 0;
							margin-left: 35px;
							text-align: center;
						}
						a.router-link-active{
							color:#FF4B3A;
							p{
								border-bottom: 4px solid #FF4B3A;
							}
						}
					}
				}
			}
			/*锚点链接回归顶部*/
			.maodian{
				width: 80px;
				height: 80px;
				line-height: 70px;
				text-align: center;
				border: 2.5px solid #84b83a;
				border-radius: 50%;
				position: absolute;
				top: 90vh;
				right: 24px;
				color: #84B83A;
				font-size: 50px;
				background: #fff;
				/*display: none;*/
				opacity: .7;
				z-index: 10;
			}

		}
		.index_main {
			position: fixed;
			top: 0px;
			bottom: 0px;
			width: 100%;
			/*overflow: scroll;*/
			background-color: #BABABA;
			z-index: 0;
			margin-top: 98px;
			/*padding-bottom: 10px;*/
			background: #F1F1F1;
		}
		
		.index_main1 {
			top: 100px;
			bottom: 0px;
			width: 100%;
			overflow: scroll;
			background-color: #BABABA;
			z-index: 0;
			margin-top: 98px;
			/*padding-bottom: 10px;*/
			background: #F1F1F1;
		}
	}
</style>

<!--	
	
<template>
	<div>
		<section id="wrapper"   @scroll="onScroll">
			<header id="home_header">
				<h1><img src="../../assets/images/components/logo@2x.png" alt="" /></h1>
				<p>
					<i class="jy_iconfont icon_sousuo" @click = "sousuo" ID = "66" target = "66"></i>
					<span class="xiaoxi"><i class="jy_iconfont icon_xinxi" @click = "xiaoxi" ID = "77" target = "77"></i><span class="redDian" :bind = "weidu(0)"></span></span>
				</p>
			</header>
			<div class="swiper_bg"></div>
			<div id="home_ban">
				<div class="nav_show swiper-container2">
					<ul class="ban_show swiper-wrapper">
						<li class="swiper-slide">
							<router-link to="/home">
								<p class="show_first">首页</p>
							</router-link>
						</li>
						<li class="swiper-slide">
							<router-link to="/yinpin">
								<p>饮品</p>
							</router-link>
						</li>
						<li class="swiper-slide">
							<router-link to="/shengxian">
								<p>生鲜</p>
							</router-link>
						</li>
						<li class="swiper-slide">
							<router-link to="/meizhuang">
								<p>美妆</p>
							</router-link>
						</li>
						<li class="swiper-slide">
							<router-link to="/jiafang">
								<p id="">家纺</p>
							</router-link>
						</li>
						<li class="swiper-slide">
							<router-link to="/gongyi">
								<p id="gongyi">工艺</p>
							</router-link>
						</li>
						<li class="swiper-slide">
							<router-link to="/muying">
								<p id="muying">母婴</p>
							</router-link>
						</li>
						<li class="swiper-slide">
							<router-link to="/yiliao">
								<p id="yiliao">医疗</p>
							</router-link>
						</li>
						<li class="swiper-slide">
							<router-link to="/meishi">
								<p id="meishi">美食</p>
							</router-link>
						</li>
					</ul>
				</div>
				<div class="maodian" @click = "returnTop"><i class="jy_iconfon icon_maodian icon_upload"></i></div>
	
			</div>
			<router-view class="index_main" id='index-main'></router-view>

		</section>
		<nv-footer></nv-footer>
	</div>
</template>
<script>
	export default {
		data() {
				return {
					headTit: {
						title: '家有在线',
						//back: 'ok',
					},
					data:[]
				}
			},
			computed: {},

			methods: {
//				导航条的下拉与隐藏
				nav_down: () => {
					$('.ban_hide').show()
				},
				nav_up: (e) => {
					$('.ban_hide').hide()
					var html = e.target.innerHTML;
					$('#home_ban .ban_show p').each(function(m, n) {
						if(n.innerHTML == html) {

						}
					})
				},
//				搜索的点击
				sousuo(e){
					var id = ($(e.target).attr("ID")),
						target = ($(e.target).attr("target")),
						value = ('cmd:{"data":"' + id + '","target":"' + target + '"}');
						window.location.href = value;
					console.log(value)
				},
//				消息的点击
				xiaoxi(e){
					var id = ($(e.target).attr("ID")),
						target = ($(e.target).attr("target")),
						value = ('cmd:{"data":"' + id + '","target":"' + target + '"}');
						window.location.href = value;
					console.log(value)
				},
				weidu(num){
					setTimeout(function(){
							if(num == 0){
								$(".redDian").hide()
							}else{
								$(".redDian").show()
							}
							return(num)
					},0)

				},
				returnTop(){
					$(".index_main").addClass("index_main1").removeClass('index_main')
					setTimeout(function(){
						$("#index-main").addClass("index_main").removeClass("index_main1")
					},50)
//					$("#wrapper").scrollTop('-100px')
//					动态滑动效果
//					var  bodyTop=Number($('#wrapper').scrollTop())
//					var speed=bodyTop/15;
//					var timeScorll=setInterval(function(){
//						bodyTop-=speed;
//						console.log(bodyTop)
//						$("#wrapper").scrollTop(bodyTop)
//						if(bodyTop <= 200){
//							clearInterval(timeScorll)
//							
//						}
//					},30)
				},
				onScroll(){
					$("#wrapper").scroll(function(event){
						var top = $(this).scrollTop();
						console.log(top)
//						if(top >=700){
//							$(".maodian").show()
//						}else if(top <= 500){
//							$(".maodian").hide()
//						}
//						if(top <= 10){
//						console.log(top)
//							$(".index_main").addClass("index_main").removeClass('index_main1')
//							
//						}
					})
				},
			},
			mounted: function() {
				this.$http.jsonp('https://a1.t.jiayou9.com/page/index?debug=1&format=jsonp').then(function(res) {
					this.data = res.body.data;
//					console.log(JSON.parse(JSON.stringify(this.data)));


				})
			},
			components: {
				"nvFooter": require('../../components/footer.vue')
			},
	}

	// 导航
	window.onload = function (){
		var mySwiper2 = new Swiper('.swiper-container2', {
			pagination: 'null',
	        slidesPerView: 'auto',
	        spaceBetween: 0,
	        freeMode: true,
	        freeModeMomentum: false
		});
	}
</script>
<style lang="sass" scoped>
	* {
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	input {
		-webkit-user-select: auto;
	}

	section {
		background: rgb(255,255,255);
		
		/*头部样式*/
		#home_header {
			float: left;
			height: 88px;
			padding: 0 24px;
			justify-content: space-between;
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			z-index: 10;
			background: #fff;
			line-height: 88px;
			h1 {
				float: left;
				margin-top: 20px;
				img {
					width: 180px;
				}
			}
			p {
				float: right;
				i {
					margin-left: 30px;
				}
				.xiaoxi{
					position: relative;
					.redDian{
						display: block;
						width: 10px;
						height: 10px;
						border-radius: 50%;
						background: red;
						position: absolute;
						right: 0;
						top: 0;
					}
				}
			}
		}
		.swiper_bg{
			width: 100%;
			height: 101px;
			position: fixed;
			top: 87px;
			background: #fff;
			z-index: 1;
			border-bottom: 3px solid #eee;
		}
		/*导航样式*/
		#home_ban {
			position: fixed;
			width: 100%;
			top: 86px;
			height: 98px;
			border-bottom: 1px solid #eee;
			background: #fff;
			z-index: 10;
			.swiper-container2{
				color: #333;
				ul{
					font-size: 32px;
					width: 150px;
				    line-height: 98px;
				    text-align: center;
				    margin: 0;
					.swiper-slide{
						background: #fff;
						height: 98px;
						float: left;
						a{
							font-size: 32px;
							color: #333;
							display: inline-block;
							width: 100%;
						}
						p{
							width: 80px;
							height: 98px;
							margin: 0;
							padding: 0;
							margin-left: 35px;
							text-align: center;
						}
						a.router-link-active{
							color:#FF4B3A;
							p{
								border-bottom: 4px solid #FF4B3A;
							}
						}
					}
				}
			}
			/*锚点链接回归顶部*/
			.maodian{
				width: 80px;
				height: 80px;
				line-height: 70px;
				text-align: center;
				border: 2.5px solid #84b83a;
				border-radius: 50%;
				position: absolute;
				top: 83vh;
				right: 24px;
				color: #84B83A;
				font-size: 50px;
				background: #fff;
				/*display: none;*/
				opacity: .7;
				z-index: 10;
			}

		}
		.index_main {
			position: fixed;
			top: 0px;
			bottom: 0px;
			width: 100%;
			/*overflow: scroll;*/
			background-color: #BABABA;
			z-index: 0;
			margin-top: 176px;
			padding-bottom: 10px;
			background: #F1F1F1;
		}
		
		.index_main1 {

			top: 100px;
			bottom: 0px;
			width: 100%;
			overflow: scroll;
			background-color: #BABABA;
			z-index: 0;
			margin-top: 176px;
			padding-bottom: 10px;
			background: #F1F1F1;
		}
	}
</style>-->
