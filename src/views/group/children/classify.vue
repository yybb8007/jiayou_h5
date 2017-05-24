<template>
	<div >
		<!-- 全局header -->
		<section id="wrapper" class="sy_main">
			<div class="cont">
					<aside>
						<ul>
							<router-link to="/grouping/classify/group_meishi">
								<li>
									<i class="iconfont icon-xiaoxi fenleipic"></i>
									<p>精选美食</p>
								</li>
							</router-link>
							<router-link to="/grouping/classify/group_yinpin">
								<li>
									<i class="iconfont icon-xiaoxi fenleipic"></i>
									<p>茶酒饮品</p>
								</li>
							</router-link>
							<router-link to="/grouping/classify/group_shengxian">
								<li>
									<i class="iconfont icon-xiaoxi fenleipic"></i>
									<p>水果生鲜</p>
								</li>
							</router-link>
							<router-link to="/grouping/classify/group_gongyi">
								<li>
									<i class="iconfont icon-xiaoxi fenleipic"></i>
									<p>黔匠工艺</p>
								</li>
							</router-link>
							<router-link to="/grouping/classify/group_meizhuang">
								<li>
									<i class="iconfont icon-xiaoxi fenleipic"></i>
									<p>美妆个护</p>
								</li>
							</router-link>
							<router-link to="/grouping/classify/group_muying">
								<li>
									<i class="iconfont icon-xiaoxi fenleipic"></i>
									<p>母婴用品</p>
								</li>
							</router-link>
							<router-link to="/grouping/classify/group_yiliao">
								<li>
									<i class="iconfont icon-xiaoxi fenleipic"></i>
									<p>医疗保健</p>
								</li>
							</router-link>
							<router-link to="/grouping/classify/group_yiliao">
								<li>
									<i class="iconfont icon-xiaoxi fenleipic"></i>
									<p>家居生活</p>
								</li>
							</router-link>
						</ul>
					</aside>
					<router-view></router-view>
				</div>
		</section>
	</div>
</template>
<script>
	export default {
		data() {
				return {
					headTit: {},
				}
			},
			computed: {},
			methods: {},
			components: {
			},
	}
</script>
<style lang="sass" scoped>
	section {
		/*background: rgb(255,255,255);*/
		margin-top: 180px;
		margin-bottom: 50px;
		.cont {
			/*display: flex;*/
			height: 100%;
			aside {
				float: left;
				width: 200px;
				overflow-y: scroll;
				ul {
					width: 100%;
					height: 1100px;
					a{
						background: #f00;
					}
					a.router-link-active{
						li{
							p,i{
								color: #84b83a;
							}
						}
	        }
					li {
						padding: 30px 0;
						text-align: center;
						border-bottom: solid 1px #e1e1e1;
						/*no*/
						border-right: solid 1px #e1e1e1;
						/*no*/
						.fenleipic {
							width: 40px;
							height: 40px;
							font-size: 30px;
							color: #d2d2d2;
						}
						p {
							font-size: 24px;
							color: #333;
							padding-top: 12px;
						}
						
					}

				}
			}
			ul a:last-of-type li{
				margin-bottom: 50px;
			}
		
		}
		
	}
</style>
