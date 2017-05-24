<template>
	<div >
		<section id="wrapper" class="sy_main" @click = "callback">
			<div id="div_img">
				<img src="../../../assets/images/components/xiaoman (1).jpg" alt=""  @click = "returnTop"/>
				<img src="../../../assets/images/components/xiaoman (2).jpg" alt="" />
				<img src="../../../assets/images/components/xiaoman (3).jpg" alt="" />
				<img src="../../../assets/images/components/xiaoman (4).jpg" alt="" id = "555" target = "3"  />
				<img src="../../../assets/images/components/xiaoman (5).jpg" alt="" id = "555" target = "3" />
				<img src="../../../assets/images/components/xiaoman (6).jpg" alt="" id = "361" target = "3"  />
				<img src="../../../assets/images/components/xiaoman (7).jpg" alt=""  id = "361" target = "3"/>
				<img src="../../../assets/images/components/xiaoman (8).jpg" alt="" />
				<img src="../../../assets/images/components/xiaoman (9).jpg" alt=""  id = "843" target = "3"/>
				<img src="../../../assets/images/components/xiaoman (10).jpg" alt="" id = "843" target = "3" />
				<img src="../../../assets/images/components/xiaoman (11).jpg" alt="" id = "743" target = "3"/>
				<img src="../../../assets/images/components/xiaoman (12).jpg" alt="" id = "743" target = "3"/>
				<img src="../../../assets/images/components/xiaoman (13).jpg" alt="" id = "410" target = "3"/>
				<img src="../../../assets/images/components/xiaoman (14).jpg" alt=""  id = "410" target = "3" />
				<img src="../../../assets/images/components/xiaoman (15).jpg" alt=""  id = "835" target = "3"/>
				<img src="../../../assets/images/components/xiaoman (16).jpg" alt=""  id = "835" target = "3"/>
				<img src="../../../assets/images/components/xiaoman (17).jpg" alt=""/>
				<img src="../../../assets/images/components/xiaoman (18).jpg" alt="" />
				<img src="../../../assets/images/components/xiaoman (19).jpg" alt="" />
				<img src="../../../assets/images/components/xiaoman (20).jpg" alt=""  @click = "returnTop"/>
				
			</div>

		</section>
	</div>
</template>
<script>
	export default {
		data() {
				return {
					headTit: {
						title: '茶专题',
						back: 'ok',
					},
					
				}
			},
			computed: {},
			
			methods: {
//				全局点击
				callback: function(e) {
					var key = ($(e.target).attr("ID")) + "+" + ($(e.target).attr("target")),
						id = $(e.target).attr("id"),
						target = $(e.target).attr("target"),
						num = Number(id) + Number(target),
						value = ('cmd:{"data":"' + id + '","target":"' + target + '"}'),
						oid = $(e.target).attr("id");
					if( key.length < 9 && num!==NaN) {
						localStorage.setItem('key', oid);
						window.location.href = value;
						console.log(value)
					}
				},
				returnTop: function(e){
					var  bodyTop=Number($('#wrapper').scrollTop())
					var speed=bodyTop/10;
					var timeScorll=setInterval(function(){
						bodyTop-=speed;
						$("#wrapper").scrollTop(bodyTop)
						if(bodyTop<=0){
							clearInterval(timeScorll)
						}
					},30)	
				}
			},
			components: {
//				"nvHead": require('../../../components/header.vue'),
			},
			mounted: function() {
				this.$http.jsonp('https://a1.t.jiayou9.com/page/index?debug=1&format=jsonp').then(function(res) {
					this.data = res.body.data;
//					console.log(JSON.parse(JSON.stringify(this.data)));


				})
			}
	}
</script>
<style lang="sass" scoped>
	section {
		/*background: rgb(255,255,255);*/
		font-size: 0;
		ul{
			li{
				.bigImg{
					width: 750px;
					overflow: hidden;
					img{
						width: 100%;
						float: left;
					}
				}
				.main{
					width: 750px;
					height: 400px;
					background: url(http://m.t.jiayou9.com/dist/assets/tea_04.jpg) no-repeat;
					background-size: cover;
					.content{
						.goods_img{
							margin-top: 14px;
							margin-left: 13px;
							width: 490px;
							height: 340px;
							float: left;
							text-align: center;
							img{
								/*width: 80%;
								margin-top: 13%;*/
								width: 330px;
								margin-top: 15%;
							}
							.tea_img2{
								margin-top: 20%;
							}
						}
						.main_message{
							float: right;
							color: #fff;
							width: 200px;
							height: 100%;
							margin-top: 54px;
							margin-right: 20px;
							position: relative;
							h3{
								font-size: 26px;
								width: 26px;
								float: right;
								margin-right: 40px;
							}
							.message{
								font-size: 18px;
								width: 18px;
								float: right;
								margin-right: 24px;
							}
							.buy{
								position: absolute;
								top: 160px;
								left: 0px;
								font-size: 16px;
								span{
									display: inline-block;
									width: 60px;
									line-height: 30px;
									letter-spacing:6px;
								}
							}
						}
					}
				}
			}
		}
		.bottom{
			width: 750px;
			img{
				width: 100%;
			}
		}

	}
</style>