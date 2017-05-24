<template>
	<div >
		<!-- 全局header -->
		<section id="wrapper" class="gp_main">
			<article class="gp_region">
				<ul>
					<li>
						<img src="../../../assets/images/components/region.png" alt="" />
						<div>
							<p class="reg_name">安顺</p>
							<p class="reg_explain">贵州西部旅游中心</p>
						</div>
					</li>
					<li>
						<img src="../../../assets/images/components/region.png" alt="" />
						<div>
							<p class="reg_name">安顺</p>
							<p class="reg_explain">贵州西部旅游中心</p>
						</div>
					</li>
					<li>
						<img src="../../../assets/images/components/region.png" alt="" />
						<div>
							<p class="reg_name">安顺</p>
							<p class="reg_explain">贵州西部旅游中心</p>
						</div>
					</li>
					<li>
						<img src="../../../assets/images/components/region.png" alt="" />
						<div>
							<p class="reg_name">安顺</p>
							<p class="reg_explain">贵州西部旅游中心</p>
						</div>
					</li>
					<li>
						<img src="../../../assets/images/components/region.png" alt="" />
						<div>
							<p class="reg_name">安顺</p>
							<p class="reg_explain">贵州西部旅游中心</p>
						</div>
					</li>
					<li>
						<img src="../../../assets/images/components/region.png" alt="" />
						<div>
							<p class="reg_name">安顺</p>
							<p class="reg_explain">贵州西部旅游中心</p>
						</div>
					</li>
					<li>
						<img src="../../../assets/images/components/region.png" alt="" />
						<div>
							<p class="reg_name">安顺</p>
							<p class="reg_explain">贵州西部旅游中心</p>
						</div>
					</li>
					<li>
						<img src="../../../assets/images/components/region.png" alt="" />
						<div>
							<p class="reg_name">安顺</p>
							<p class="reg_explain">贵州西部旅游中心</p>
						</div>
					</li>
					<li>
						<img src="../../../assets/images/components/region.png" alt="" />
						<div>
							<p class="reg_name">安顺</p>
							<p class="reg_explain">贵州西部旅游中心</p>
						</div>
					</li>
				</ul>
			</article>
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
		background: rgb(255,255,255);
		margin-top: 180px;
		margin-bottom: 100px;
		.gp_region{
			ul{
				/*display: flex;*/
				/*flex-wrap:wrap ;*/
				padding-left: 24px;
				li{
					margin: 30px 22px 0 0;
					position: relative;
					float: left;
					img{
						width: 340px;
					}
					div{
						position: absolute;
						width: 100%;
						top: 75px;
						font-size: 28px;
						color: #fff;
						text-align: center;
						.reg_name{
							font-size: 36px;
							margin-bottom: 12px;
						}
					}
				}
			}
		}
	}


</style>
