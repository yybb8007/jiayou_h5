 	<template>
	<div>
		<!-- 全局header -->
		<section id="wrapper" class="group_main">
      <header>
        <div class="searchBox">
          <div class="inputbox">
            <input type="text" placeholder="搜索你想要的商品" />
            <i class="iconfont icon-search"></i>
            <img src="../../assets/images/components/yezi@2x.png" alt="" class="yezi" />
          </div>
          <i class="iconfont icon-xiaoxi xiaoxi"></i>
        </div>
        <div class="contentBox">
          <div class="tabs" @click = "callback">
            <p><router-link to = "/grouping/classify" class = "checked classify_name">分类</router-link></p>
            <p><router-link to = "/grouping/region" class = "checked">地区</router-link></p>
          </div>
        </div>
      </header>
      <router-view></router-view>
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
				callback:function(e){
//					$(".checked ").css("border-bottom","2px solid transparent")
//					$(".checked").css("color","#333")
//					$(e.target).css("color","#d1311b")
//					$(e.target).css('border-bottom',"2px solid #d1311b")
				}
			},
			components: {
				//"nvHead": require('../../components/header.vue'),
				"nvFooter": require('../../components/footer.vue')
			},
	}
</script>
<style lang="sass" scoped>
	.group_main {
		background: #fff;
	    z-index: 30px;
	    header{
	      width: 100%;
	      position: fixed;
	      top: 0;
	      left: 0;
	    }
	}

	.searchBox {
		position: relative;
		height: 90px;
		background: #fff;
		border-bottom: solid #e1e1e1 1px;
		/*no*/
		padding: 14px 22px;
		.inputbox {
			position: relative;
			width: 646px;
			float: left;
			input {
				height: 50px;
				border: solid 1px #84b83a;
				/*no*/
				border-radius: 5px;
				width: 100%;
				padding-left: 50px;
			}
			.icon-search {
				position: absolute;
				top: 10px;
				left: 10px;
				font-size: 28px;
				/*px*/
				color: #c0c0c0;
			}
			.yezi{
				position:absolute;
				top:-6px;
				right:-16px;
				width:40px;
			}
		}
		.xiaoxi {
			width: 80px;
			font-size: 34px;
			/*px*/
			text-align: right;
			color: #c0c0c0;
			margin-left: 20px;
		}
	}

	.contentBox {
		background: #fff;
		.tabs {
			height: 90px;
			border-bottom: solid #e1e1e1 1px;
			margin-bottom:2px;
			p{
				float: left;
				text-align: center;
				width: 50%;
				a {
					width: 100px;
					height: 90px;
					text-align: center;
					line-height: 90px;
					display: inline-block;
					border-bottom: 2px solid transparent;
				}
				a.router-link-active{
					color: #d1311b;
					border-bottom:2px solid #d1311b;
				}
			}
			/*no*/

		}

	}
</style>
