<template>
	<footer>
			<!--<router-link  :to="{ path: item.link}"  v-for="item in items">
				<i  id="footer_icon"  :class="item.iconclass" class="jy_iconfont"></i>
				<p>{{item.name}}</p>
			</router-link>-->
	</footer>
</template>

<script>
	import utils from '../libs/utils' //加载公用函数
	export default {
	//	props: ['footerType'],
		data() {
			return {
				items: [{
					name: '首页',
					link: '/home',
					iconclass:' icon-liwu1',
					show: ''
				}, {
					name: '分类',
					link: '/grouping/classify',
					iconclass:' icon-fenlei1',
					show: ''
				}, {
					name: '拼拼',
					link: '/teaming',
					iconclass:' icon-fenzu',
					show: ''
				}, {
					name: '购物车',
					link: '/shopping',
					iconclass:' icon-tubiao4',
					show: ''
				}, {
					name: '我的家',
					link: '/myhome',
					iconclass:' icon-gerenzhongxin',
					show: ''
				}]
			}
		}
	}
</script>
<style lang="sass" scoped>
	@import url("../assets/iconfont/iconfont.css");
	/*@import url("../../dist/jyzx_icon.css");*/
	/*footer {
		display: flex;
		height: 100px;
		width: 100%;
		background: #fff;
		border-top: solid #999 1px;
		 max-width: 1024px;
    	margin:0 auto;
    	position: fixed;
    	z-index: 1000;
    	bottom: 0;
		a {
			flex: 1;
			text-align: center;
			padding-top: 10px;
			height: 100px;
			i {
				font-size: 40px;
				height: 44px;
				color: #999;
			}
			p {
				height: 24px;
				font-size: 22px;
				color: #333;
			}
		}
		a.router-link-active{
			i{
				color:#84b83a;
			}
		}
		
		a.router-link-active{
			p{
				color:#84b83a;
			}
		}
	}*/
	/*footer*/
</style>
                         