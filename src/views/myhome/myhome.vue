<template>
	<div >
		<!-- 全局header -->
		<section id="wrapper" class="sy_main">
			<div class="myhomeTop">
				<div class="setting">
					<router-link to="/shezhi"><i class="iconfont icon-shezhi"></i></router-link>
					<router-link to="/xiaoxi"><i class="iconfont icon-xiaoxi"></i></router-link>
				</div>
				<div class="info">
					<div class="photoImg">头像</div>
					<p><router-link to="/zhuce">登录/注册</router-link></p>
				</div>
			</div>
			<div class="mylayer">
				<div class="layer1">
					<i class="iconfont icon-dingdan dingdan"></i>
					<h2>我的订单</h2>
					<p class="allorder">
						<router-link to="/myOrder/allOrder">查看全部订单</router-link>
					</p>
					<i class="iconfont icon-xiangyou"></i>
				</div>
				<ul class="layer2">
					<router-link to="/myOrder/obligation"><li>
						<i class="iconfont icon-icon1460188752552"></i>
						<p>待付款</p>
					</li></router-link>
					<router-link to="/myOrder/goods"><li>
						<i class="iconfont icon-yanshichuli"></i>
						<p>待收货</p>
					</li></router-link>
					<router-link to="/myOrder"><li>
						<i class="iconfont icon-daipingjia"></i>
						<p>待评价</p>
					</li></router-link>
					<router-link to="/myOrder"><li>
						<i class="iconfont icon-shouhou"></i>
						<p>售后/客服</p>
					</li></router-link>
				</ul>
			</div>
			<div class="mylayer mt16">
				<router-link to="/myYouhui">
					<div class="layer1">
						<i class="iconfont icon-youhuiquan1 listIcon lightred"></i>
						<h2>我的优惠劵</h2>
						<p class="numb">0</p>
						<i class="iconfont icon-xiangyou"></i>
					</div>
				</router-link>
				<router-link to="/myGroup/allGroup">
					<div class="layer1">
						<i class="iconfont icon-fenzu listIcon lightblue"></i>
						<h2>我的团</h2>
						<p class="numb">0</p>
						<i class="iconfont icon-xiangyou"></i>
					</div>
				</router-link>
				<router-link to="/myGuanzhu">
					<div class="layer1">
						<i class="iconfont icon-daipingjia1 listIcon lightpurple"></i>
						<h2>我的关注</h2>
						<p class="numb">0</p>
						<i class="iconfont icon-xiangyou"></i>
					</div>
				</router-link>
			</div>
			<div class="mylayer mt16">
				<router-link to="/myKefu">
					<div class="layer1">
						<i class="iconfont icon-icon052 listIcon lightgren"></i>
						<h2>家的客服</h2>
						<i class="iconfont icon-xiangyou"></i>
					</div>
				</router-link>
				<router-link to="/myYijian">
					<div class="layer1">
						<i class="iconfont icon-yijianfankui listIcon lightpurple2"></i>
						<h2>意见反馈</h2>
						<i class="iconfont icon-xiangyou"></i>
					</div>
				</router-link>
				<router-link to="/myJiayou">
					<div class="layer1">
						<i class="iconfont icon-jia listIcon lightred"></i>
						<h2>关于家有</h2>
						<i class="iconfont icon-xiangyou"></i>
					</div>
				</router-link>
			</div>
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
				}
			},
			computed: {},
			methods: {
				
			},
			components: {
				"nvHead": require('../../components/header.vue'),
				"nvFooter": require('../../components/footer.vue')
			},
	}
</script>
<style lang="sass" scoped>
	@mixin mycolor{
		color:#999;
	}
	section {
		/*background: rgb(255,255,255);*/
	}
	.myhomeTop{
		position:relative;
		height:330px;
		background:url(../../assets/images/components/bg@2x.png) no-repeat top;
		background-size: 100%;
		.setting{
			position:absolute;
			top:40px;
			right:0;
			i{
				font-size:36px;
				padding-right:20px;
				color:#6a6965;
			}
		}
		.info{
			width:100%;
			text-align:center;
			padding-top:80px;
			.photoImg{
				width:120px;
				height:120px;
				margin:0 auto;
				border-radius: 50%;
				background:#ccc;
			}
			p{
				font-size:30px;
				color:#333;
			}
		}
	}
	.mylayer{
		padding:0 24px;
		background:#fff;
		.layer1{
			height:88px;
			padding:28px 0;
			display:flex;
			border-bottom:solid 1px #d1d1d1;/*no*/
			h2{
				flex:1;
				font-size:30px;/*px*/
				padding-left:24px;
			}
			.allorder{
				font-size:18px;/*px*/
				padding-right:24px;
				padding-top:8px;
				@include mycolor;
			}
			.dingdan{
				font-size:34px;/*px*/
			}
			.numb{
				font-size:30px;/*px*/
				padding-right:24px;
				@include mycolor;
			}
		}
		.layer2{
			display:flex;
			padding:30px 20px;
			justify-content: space-between;
			li{
				flex:1;
				text-align:center;
				@include mycolor;
				i{
					font-size:40px;/*px*/
				}
				p{
					color: #000;
					font-size: 26px;
					font-weight: 500;
				}
			}
		}
		.icon-xiangyou{
			font-size:28px;
			@include mycolor;
		}
		.listIcon{
			font-size:40px;/*px*/
		}
		.lightred{color:#ff7786;}
		.lightblue{color:#64a7eb;}
		.lightpurple{color:#f1729f;}
		.lightgren{color:#67b4ac;}
		.lightpurple2{color:#928aef;}
	}
	.mt16{
		margin-top:16px;
	}
</style>