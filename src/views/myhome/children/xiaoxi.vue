<template>
    <div >
        <!-- 全局header -->
        <nv-head :page-name="headTit.title" :back-type="headTit.back" ></nv-head>
        <section id="wrapper" class="xx_main">
        	<i class="xxiconfont icon-shezhi"></i>
           <ul>
           	<li>
           		<div class="xx_tubiao xx_jiayou">
	           			<i class="xxiconfont icon-xxjiayou"></i>
	           			<span>98+</span>
           		</div>
           		<div class="xx_message">
           			<h3>家有小妹</h3>
           			<p>点击查看您与客服的沟通记录</p>
           		</div>
           		<p class="delete"><button>删除</button></p>
           	</li>
           	<li>
           		<div class="xx_tubiao xx_cuxiao">
	           			<i class="xxiconfont icon-xxcuxiao"></i>
	           			<span>98+</span>
           		</div>
           		<div class="xx_message">
           			<h3>优惠促销</h3>
           			<p>点击查看您与客服的沟通记录</p>
           		</div>
           		<p class="delete"><button>删除</button></p>
           	</li>
           	<li>
           		<div class="xx_tubiao xx_tongzhi">
	           			<i class="xxiconfont icon-xxtongzhi"></i>
	           			<span>98+</span>
           		</div>
           		<div class="xx_message">
           			<h3>系统通知</h3>
           			<p>点击查看您与客服的沟通记录</p>
           		</div>
           		<p class="delete"><button>删除</button></p>
           	</li>
           	<li>
           		<div class="xx_tubiao xx_tixing">
	           			<i class="xxiconfont icon-xxtixing"></i>
	           			<span>98+</span>
           		</div>
           		<div class="xx_message">
           			<h3>商品提醒</h3>
           			<p>点击查看您与客服的沟通记录</p>
           		</div>
           		<p class="delete"><button>删除</button></p>
           	</li>
           	<li>
           		<div class="xx_tubiao xx_zichan">
           				<i class="xxiconfont icon-xxzichan"></i>
           				<span>98+</span>
           		</div>
           		<div class="xx_message">
           			<h3>我的资产</h3>
           			<p>点击查看您与客服的沟通记录</p>
           		</div>
           		<p class="delete"><button>删除</button></p>
           	</li>

           </ul>
        </section>
    </div>
</template>
<script>
    export default {
        data() {
                return {
                    headTit: {
                        title: '消息',
                        back: 'ok',
                    },
                }
            },
            computed: {},
            methods: {},
            components: {
                "nvHead": require('../../../components/header.vue'),
            },
    }
</script>
<style lang="sass" scoped>
	@font-face {
	  font-family: 'jyzx-iconfont';  /* project id 210635 */
	  src: url('https://at.alicdn.com/t/font_uoe8bw217a79o1or.eot');
	  src: url('https://at.alicdn.com/t/font_uoe8bw217a79o1or.eot?#iefix') format('embedded-opentype'),
	  url('https://at.alicdn.com/t/font_uoe8bw217a79o1or.woff') format('woff'),
	  url('https://at.alicdn.com/t/font_uoe8bw217a79o1or.ttf') format('truetype'),
	  url('https://at.alicdn.com/t/font_uoe8bw217a79o1or.svg#jyzx-iconfont') format('svg');
	}
    section {
        /*background: rgb(255,255,255);*/
    }
    .xx_main{
    	.xxiconfont{
    		font-family: 'jyzx-iconfont';
    		font-size: 38px;
    		color: #fff;
    	}
    	.icon-shezhi::before{
    		content: "\e602";
    		color: #000;
    		position: fixed;
    		top:24px;
    		right: 24px;
    	}
    	ul{
    		li{
    			background: #fff;
    			margin-bottom: 2px;
    			display: flex;
    			height: 119px;
    			align-items: center;
    			justify-content: space-between;
    			padding: 0 24px;
    			div{
    				height: 80px;
    			}
    			.xx_jiayou{
    				background: #fb9589;
    			}
                .xx_cuxiao{
                    background: #fa912a;
                }
                .xx_tongzhi{
                    background: #C0C0C0;
                }
                .xx_tixing{
                    background: #2ab5ef;
                }
                .xx_zichan{
                    background: #f86757;
                }
    			.xx_tubiao{
    				width: 80px;
    				margin-right: 26px;
    				position: relative;
    				display: flex;
    				justify-content: center;
    				align-items: center;
    				border-radius: 8px;
					span{
						position: absolute;
						display: inline-block;
						width: 40px;
						height: 40px;
						border-radius: 50%;
						top:-12px;
						right: -12px;
						background: #d22f1c;
						color: #fff;
						z-index: 10;
						text-align: center;
						line-height: 40px;
						font-size: 18px;
					}
    				.icon-xxjiayou::before{
    					content: "\e600";
    				}
    				.icon-xxcuxiao::before{
    					content: "\e630";
    				}
    				.icon-xxtongzhi::before{
    					content: "\e77f";
    				}
    				.icon-xxtixing::before{
    					content: "\e601";
    				}
    				.icon-xxzichan::before{
    					content: "\e613";
    				}
    			}
    			.xx_message{
    				flex:1;
    			}
    		}
    	}
    }
</style>



