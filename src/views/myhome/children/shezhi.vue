<template>
    <div >
        <!-- 全局header -->
        <nv-head :page-name="headTit.title" :back-type="headTit.back" ></nv-head>
        <section id="wrapper" class="sz_main">
            <div class="my_sz">
            	<ul>
            		<li>
            			<p>消息推送设置</p>
            			<i class="iconfont icon-xiangyou"></i>
            		</li>
            		<li>
            			<p>非wifi环境下手动下载图片</p>
            			<!--<span class="sz_open" v-bind:class = {"sz_open":active,"sz_close":!active}></span>-->
            			<i class="iconfont icon-switch"></i>
            			<span class="sz_open"></span>
            		</li>
            		<li>
            			<p>清除本地缓存</p>
            			<span class="sz_cache">99.99M</span>
            		</li>
            	</ul>
	            <div class="sz_out">
	            	<button class="sz_btn">退出登录</button>
	            </div>
            </div>
        </section>
    </div>
</template>
<script>
    export default {
        data() {
                return {
                    headTit: {
                        title: '设置',
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
    .sz_main {
        background: #f1f1f1;
    }
    .my_sz{
    	color: #333333;
    	font-size: 27px;
    	ul{
    		width: 100%;
    		background: #e6e6e6;
    		li{
    			width: 100%;
    			padding: 0 24px;
    			height: 88px;
    			margin-bottom: 1px;
    			background: #fff;
    			display: flex;
    			justify-content: space-between;
    			align-items: center;
    			.icon-xiangyou,.sz_cache{
    				font-size: 27px;
    				color: #999999;
    			}
    			.sz_open{
    				width: 72px;
    				height: 42px;
    				border-radius: 21px;
    				background: url(../../../assets/images/components/open.png);
    				background-size: 72px;
    			}
    			.sz_close{
    				width: 72px;
    				height: 42px;
    				border-radius: 21px;
    				background: url(../../../assets/images/components/close.png);
    				background-size: 72px;
    			}
    		}
    	}
    	.sz_out{
    		width: 100%;
    		text-align: center;
    		margin-top: 66px;
    		.sz_btn{
    			width: 85%;
    			height: 76px;
    			background: #d1311b;
    			border-radius: 3px;
    			color: #fff;
    			letter-spacing: 8px;
    		}
    	}
    }
</style>