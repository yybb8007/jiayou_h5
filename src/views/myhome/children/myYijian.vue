<template>
	<div>
		<!-- 全局header -->
		<nv-head :page-name="headTit.title" :back-type="headTit.back"></nv-head>
		<section id="wrapper" class="as_main">
			<form>
				<div class="yj_message">
					<textarea rows="5" cols="55" maxlength="330" wrap="wrap" placeholder="请简单描述您的问题和意见，上传截图更快解决哦" value=""></textarea>
				</div>
				<div class="yj_img">
					<h1 class="title">添加照片：<span>（选填，提供问题截图，最多三张）</span></h1>
					<p class="upload"><i class="jy_iconfont icon_shopping"></i></p>
					<div class="uploadImg">
						<div class="img">
							<img src="../../../../dist/assets/pintuan.jpg"/>
							<span>-</span>
						</div>
						<div class="img">
							<img src="../../../../dist/assets/pintuan.jpg"/>
							<span>-</span>
						</div>
						<div class="img">
							<img src="../../../../dist/assets/pintuan.jpg"/>
							<span>-</span>
						</div>
					</div>
				</div>
				<div class="submit">
					<input type="submit" value="提交" />
				</div>
			</form>

		</section>
	</div>
</template>
<script>
	export default {
		data() {
				return {
					headTit: {
						title: '我的意见',
						back: 'ok',
					},
					data: []
				}
			},
			computed: {},
			methods: {},
			components: {
				"nvHead": require('../../../components/header.vue'),
			},
			mounted: function() {
				this.$http.jsonp('https://a1.t.jiayou9.com/region/pavilionDetail?debug=1&regionId=3&format=jsonp').then(function(res) {
					this.data = res.body.data;
					console.log(res.body.data);


				})
			}
	}
</script>
<style lang="sass" scoped>
	section {
		/*background: rgb(255, 255, 255);*/
		background: #f1f1f1;;
		.yj_message{
			width: 100%;
			height: 302px;
			background: #fff;
			textarea{
				padding: 24px;
				font-size: 22px;
				color: #999;
				resize: none;
				border: none;
			}
		}
		
		.yj_img{
			width: 100%;
			background: #fff;
			height: 330px;
			h1{
				font-size: 24px;
				color: #333;
				margin-top: 16px;
				padding-left: 24px;
				padding-top: 24px;
				padding-bottom: 20px;
				span{
					font-size: 22px;
					color: #999;
				}
			}
			.upload{
				height: 60px;
				width: 60px;
				margin-top: 20px;
				margin-left: 24px;
			}
			.uploadImg{
				margin-left: 76px;
				margin-right: 90px;
				.img{
					width: 160px;
					height: 160px;
					float: left;
					position: relative;
					img{
						width: 100%;
						height: 100%;
					}
					span{
						color: #fff;
						display: inline-block;
						width: 26px;
						height: 26px;
						line-height: 26px;
						text-align: center;
						border-radius: 50%;
						background: #ff493c;
						position: absolute;
						top: -13px;
						right: -11px;
					}
				}
				.img:nth-of-type(3n+2){
					margin: 0 52px;
				}
				
			}
		
		}
		.submit{
			width: 100%;
			height: 560px;
			padding-top: 64px;
			background: #fff;
			input {
				width: 640px;
				height: 80px;
				margin: 0 55px;
				font-size: 30px;
				color: #fff;
				background: #84b83a;
				border-radius: 5px;
			}
		}
		
		
	}
</style>