<template>
	<div >
		<!-- 全局header -->
		<!--<nv-head :page-name="headTit.title" :back-type="headTit.back" ></nv-head>-->
		<section id="wrapper" class="sy_main">
			<header id="all_header">
        		<router-link to="/myhome"><i class="iconfont icon_header"></i></router-link>
        		<p class="all_title">我的团</p>
        		<i> </i>
        	</header>
			 <div class="mo_nav">
            	<ul @click = "callback">
            		<li id="allGroup" class="order_li">
            			<router-link to="/myGroup/allGroup">
	            			<p>全部团</p>
            			</router-link>
            		</li>
        			<li id="weatGroup" class="order_li">
            			<router-link to="/myGroup/weatGroup">
	            			<p>待成团</p>
            			</router-link>
            		</li>
        			<li id="endGroup" class="order_li">
            			<router-link to="/myGroup/endGroup">
	            			<p>已成团</p>
            			</router-link>
            		</li>
        			<li id="failGroup" class="order_li">
            			<router-link to="/myGroup/failGroup">
            				<p>失败团</p>
            			</router-link>
            		</li>
            	</ul>
            </div>
            <router-view></router-view>
		</section>
	</div>
</template>
<script>
	export default {
		data() {
				return {
					headTit: {
//						title: '我的团',
//						back: 'ok',
					},
				}
			},
			computed: {},
			methods: {
				callback:function(e){
					$(".order_li").css("border-bottom","2px solid transparent")
					$(".order_li p").css("color","#333")
					$(e.target).css("color","#d1311b")
					$(e.target).parents("li").css('border-bottom',"2px solid #d1311b")
				}
			},
			components: {
//				"nvHead": require('../../../components/header.vue'),
			},
	}
</script>
<style lang="sass" scoped>
	@font-face {
	  font-family: 'jyzx-iconfont';  /* project id 210635 */
	  src: url('https://at.alicdn.com/t/font_ujjhzhscz8e61or.eot');
	  src: url('https://at.alicdn.com/t/font_ujjhzhscz8e61or.eot?#iefix') format('embedded-opentype'),
	  url('https://at.alicdn.com/t/font_ujjhzhscz8e61or.woff') format('woff'),
	  url('https://at.alicdn.com/t/font_ujjhzhscz8e61or.ttf') format('truetype'),
	  url('https://at.alicdn.com/t/font_ujjhzhscz8e61or.svg#jyzx-iconfont') format('svg');
	}
	section {
		background: rgb(255,255,255);
		#all_header{
	    	width: 100%;
	    	height: 88px;
	    	display: flex;
	    	justify-content: space-between;
	    	padding: 0 24px;
	    	align-items: center;
	    	font-size: 36px;
	    	p{
		    	color:"#333";
	    		width: 160px;
	    	}
	    	.icon_header::before{
				font-family: 'jyzx-iconfont';
	    		content: "\e604";
	    		font-size: 36px;
	    	}
	    }
		.mo_nav{
	    	background: #fff;
	    	height: 86px;
	    	border-top: 1px solid #dcdcdc;
	    	padding: 0 24px;
	    	ul{
	    		display: flex;
	    		justify-content: space-between;
	    		align-content: center;
				height: 100%;
				border-bottom: 1px solid #ccc;

	    		li{
	    			display: flex;
	    			align-items: center;
	    			font-size: 28px;
	    			color: #333;
	    			border-bottom: 2px solid transparent;
	    		}
				#allGroup{
					border-bottom: 2px solid #ff4b3a;
					p{
						color: #ff4b3a;
					}
				}
	    	}
	    }
	}
</style>