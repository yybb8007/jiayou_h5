<template>
    <div >
        <!-- 全局header -->
        <section id="wrapper" class="gp_main">
            <ul>
            	<li>
            		<article class="gp_top">
            			<div class="gp_img"><img src="../../../../assets/images/components/juzi.jpg" alt="" /></div>
            			<div class="gp_massage">
            				<p class="gp_name">老锄头复合红杯羹礼盒精装纯天然保健品补钙补气血滋补养生品</p>
            				<p class="gp_price">￥<span>99.00</span></p>
            				<p class="gp_num"><span>2</span>人团</p>
            				<p class="gp_state">拼团中</p>
            			</div>
            		</article>
            		<article class="gp_btm">
            			<p class="gp_invite">邀请好友拼团</p>
            			<p class="gp_look">查看订单详情</p>
            		</article>
            	</li>
            	<li>
            		<article class="gp_top">
            			<div class="gp_img"><img src="../../../../assets/images/components/juzi.jpg" alt="" /></div>
            			<div class="gp_massage">
            				<p class="gp_name">老锄头复合红杯羹礼盒精装纯天然保健品补钙补气血滋补养生品</p>
            				<p class="gp_price">￥<span>99.00</span></p>
            				<p class="gp_num"><span>2</span>人团</p>
            				<p class="gp_state">拼团成功</p>
            			</div>
            		</article>
            		<article class="gp_btm">
            			<p class="gp_look">查看订单详情</p>
            		</article>
            	</li>
            	<li>
            		<article class="gp_top">
            			<div class="gp_img"><img src="../../../../assets/images/components/juzi.jpg" alt="" /></div>
            			<div class="gp_massage">
            				<p class="gp_name">老锄头复合红杯羹礼盒精装纯天然保健品补钙补气血滋补养生品</p>
            				<p class="gp_price">￥<span>99.00</span></p>
            				<p class="gp_num"><span>2</span>人团</p>
            				<p class="gp_state">拼团失败</p>
            			</div>
            		</article>
            		<article class="gp_btm">
            			<p class="gp_look">查看订单详情</p>
            		</article>
            	</li>
            	<li>
            		<article class="gp_top">
            			<div class="gp_img"><img src="../../../../assets/images/components/juzi.jpg" alt="" /></div>
            			<div class="gp_massage">
            				<p class="gp_name"><span class="gp_type">【<span>抽奖团</span>】</span>老锄头复合红杯羹礼盒精装纯天然保健品补钙补气血滋补养生品</p>
            				<p class="gp_price">￥<span>99.00</span></p>
            				<p class="gp_num"><span>2</span>人团</p>
            				<p class="gp_state">等待抽奖 </p>
            			</div>
            		</article>
            		<article class="gp_btm">
            			<p class="gp_look">查看订单详情</p>
            		</article>
            	</li>
            	<li>
            		<article class="gp_top">
            			<div class="gp_img"><img src="../../../../assets/images/components/juzi.jpg" alt="" /></div>
            			<div class="gp_massage">
            				<p class="gp_name"><span class="gp_type">【<span>分享团</span>】</span>老锄头复合红杯羹礼盒精装纯天然保健品补钙补气血滋补养生品</p>
            				<p class="gp_price">￥<span>99.00</span></p>
            				<p class="gp_num"><span>2</span>人团</p>
            				<p class="gp_state">拼团成功</p>
            			</div>
            		</article>
            		<article class="gp_btm">
            			<p class="gp_look">查看订单详情</p>
            		</article>
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
                    },
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
        background: #f1f1f1;
		ul{ 
			li{
				background: #fff;
				padding: 0px 24px 20px 30px;
				margin-bottom:  18px;
				.gp_top{
					padding:24px 0;
					display:flex;
					align-items: center;
					border-bottom:1px solid #ccc;
					height: 228px;
					.gp_img{
						width: 180px; 
						display:flex;
						align-items: center;
						margin-right: 30px;	
						min-height: 180px;
						min-width: 180px;		
						img{
							width: 100%;
						}  
					}
					.gp_massage{
						position: relative;
						.gp_name{
							font-size: 26px;
							color: #333;
							.gp_type{
								color: #FF4B3A;
							}
						}
						.gp_price{
							margin: 24px 0 8px 0;
							color: #ff4b3a;
							font-size: 24px;
							span{
								font-size: 34px;
							}
						}
						.gp_num{
							display: inline-block;
							border:1px solid #85b839; 
							color:#85B839;
							border-radius: 3px;
							padding: 1px 5px;
						}
						.gp_state{
							position: absolute;
							right: 0;
							bottom:0;
							color: #FF4B3A;
							font-size: 26px;
						}
					}
				}
				.gp_btm{
					padding: 20px 0;
					display: flex;
					justify-content: flex-end;
					p{
						border:1px solid #ccc;
						border-radius: 3px;
						padding: 12px 18px;
						margin-left: 42px;
						color: #333;
						font-size: 24px;
					}
					.gp_invite{
						background: #4fd423;
						color: #fff;
					}
				}
				
			}
		}
    }

</style>