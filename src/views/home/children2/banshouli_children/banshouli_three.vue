<template>
	<div>
		<article class="main_message">
			<ul>
				<li v-for="item in data" :ID="item.goods_id" :target="item.target">
					<div class="message_img">
						<img v-lazy="item.goods_thumb" alt="" :ID="item.goods_id" :target="item.target" />
					</div>
					<p class="name" :ID="item.goods_id" :target="item.target">{{ item.goods_name }}</p>
					<p class="price">
						<span class="shop_price">￥{{ item.shop_price }}</span>
						<span class="market_price">￥{{ item.market_price }}</span>
					</p>
				</li>

			</ul>

		</article>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				headTit: {

				},
				data: []
			}
		},
		computed: {},
		methods: {
			/*全局点击*/
			callback: function(e) {
				var key = ($(e.target).attr("ID")) + "+" + ($(e.target).attr("target")),
					id = $(e.target).attr("ID"),
					target = $(e.target).attr("target"),
					nan = Number(id + target),
					value = ('cmd:{"id":"' + id + '","target":"' + target + '"}');
				if(nan !== 'NaN') {
					localStorage.setItem('key', value)
					window.location.href = value;
				}
			},
		},
		components: {},
		mounted: function() {
			this.$http.jsonp('https://a1.t.jiayou9.com/channel/banshouli_goods?debug=1&format=jsonp&tag=3').then(function(res) {
				this.data = res.body;
				console.log(JSON.parse(JSON.stringify(this.data)));

			})
		}
	}
</script>
<style lang="sass" scoped>
		section {
		/*background: rgb(255,255,255);*/
		.main_message {
			ul {
				/* 清浮动 */
				overflow: hidden;
				li {
					height: 460px;
					width: 340px;
					background: #fff;
					float: left;
					margin-left: 24px;
					margin-top: 24px;
					
					.message_img {
						width: 292px;
						height: 300px;
						margin: 24px;
						img {
							width: 100%;
						}
					}
					.name {
						height: 40px;
						line-height: 40px;
						font-size: 30px;
						color: #333;
						text-align: center;
						width: 80%;
						margin-left: 10%;
						overflow: hidden;
						white-space: pre;
						text-overflow: ellipsis;
					}
					.price {
						margin-top: 10px;
						margin-bottom: 24px;
						text-align: center;
						height: 40px;
						line-height: 40px;
						.shop_price {
							color: #ff4b3a;
							font-size: 30px;
							display: inline-block;
							margin-right: 14px;
						}
						.market_price {
							color: #999;
							font-size: 18px;
							text-decoration: line-through;
						}
					}
				}
			}
		}
	}
</style>