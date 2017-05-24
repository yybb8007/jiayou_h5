<template>
    <div >
        <!-- 全局header -->
        <!--<nv-head :page-name="headTit.title" :back-type="headTit.back" ></nv-head>-->
        <section id="wrapper" class="sy_main" @click = "callback">
            <div id="sx_banner" class="swiper-container">
                <div class="swiper-wrapper">
                	<div class="swiper-slide"><img :src="data.cat_logo" alt="" /></div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
            <main id="sx_main">
                <ul>
                    <li v-for="item in data.item">
                        <article class="main_title">
                            <div class="title_message">
                            	<!-- 标题拼接竖杠 -->
                                <p class="title_name">{{ item.title.split("").join(" | ") }}</p>
                            </div>
                            <div class="title_img title_img1">
                                <div class="sales salesTop">
                                    <img v-lazy="item.title_logo" />
                                </div>
                            </div>
                        </article>
                        <article class="main_data">
                            <ul>
                                 <li v-for="i in item.goods" :ID="i.goods_id" :target="i.target">
                                     <img v-lazy="i.images" alt="" :ID="i.goods_id" :target="i.target" />
                                     <div class="data_message" :ID="i.goods_id" :target="i.target">
                                         <p class="name" :ID="i.goods_id" :target="i.target">{{ i.goods_name }}</p>
                                         <p class="message" :ID="i.goods_id" :target="i.target">{{ i.goods_brief }}</p>
                                         <!--<span class="flash">限时抢购</span>-->
                                         <p class="price">￥<span class="newPrice" :ID="i.goods_id" :target="i.target">{{ i.shop_price }}</span><span class="oldPrice">￥{{ i.market_price }}</span></p>
                                         <span class="shopping" @click = "addShop" :ID="i.goods_id" target = "222"><i class="jy_iconfont icon_shopping" :ID="i.goods_id" target = "222"></i></span>
                                     </div>
                                 </li>
                             </ul>
                        </article>
                    </li>

                </ul>
            </main>
        </section>
    </div>
</template>
<script>
    export default {
        data() {
                return {
                    headTit: {
						title: '地区馆',
						back: 'ok',
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
						value = ('cmd:{"data":"' + id + '","target":"' + target + '"}');
					if(nan !== 'NaN' || target !== 'null') {
						localStorage.setItem('key', value)
						window.location.href = value;
						console.log(value)
					}
				},
	//			所有购物车图标
				addShop: (e)=>{
					var id = ($(e.target).parent().attr("ID")),
						target = ($(e.target).parent().attr("target")),
						value = ('cmd:{"data":"' + id + '","target":"' + target + '"}');
							console.log(value)
						window.location.href = value;
				}
            },
            components: {
            	"nvHead": require('../../../components/header.vue'),
            },
            mounted: function(){
	            this.$http.jsonp('https://a1.t.jiayou9.com/region/pavilionList?debug=1&regionId=1&format=jsonp').then(function(res){
	                this.data=res.body.data;
	                console.log(JSON.parse(JSON.stringify(this.data)));


	            })
            }
    }
</script>
<style lang="sass" scoped>
	* {
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	input {
		-webkit-user-select: auto;
	}
    section {
        background: #F1F1F1;
        /*margin-top: 88px;*/
        #sx_banner{
            width: 100%;
            img{
                width: 100%;
            }

        }
        #sx_main{
            ul{

                li{
                    .main_title{
                    	margin-top: 14px;
                        .title_message{
                            height: 98px;
                            line-height: 98px;
                            text-align: center;
                            color: #333;
                            font-size: 32px;
                            background: #fff;
                        }
                        .title_img{
                            height: 180px;
                            .sales{
                                text-align: center;
                                height: 100%;
                                color: #84b83a;
                                font-size: 24px;
                                background: #FFF;
                                img{
                                	width: 100%;
                                	height: 100%;
                                }
                            }
                            .salesBtm{
                                color: #40c0c9;
                                #salesColor{
                                    min-width: 20%;
                                    height: 0;
                                    border: 0.013rem solid #40c0c9;
                                }
                            }
                        }
                    }
                    .main_data{
                        ul{
	                        li{
	                            padding: 24px;
	                            border-bottom: 0.013rem solid #eee;
	                            position: relative;
	                            background: #fff;
	                            height: 228px;
	                            img{
	                                width: 180px;
	                                height: 180px;
	                                margin-right: 60px ;
	                                float: left;
	                            }
	                            .data_message {
									padding-top: 10px ;
									width: 462px;
									float: left;
									line-height: 30px;
									.name {
										font-size: 30px;
										color: #333;
										width: 80%;
										height: 40px;
										line-height: 40px;
										overflow: hidden;
										white-space: pre;
										text-overflow: ellipsis;
									}
									.message {
										font-size: 26px;
										width: 80%;
										color: #999;
										margin: 20px 0 25px 0;
										overflow: hidden;
										white-space: pre;
										text-overflow: ellipsis;
									}
									.flash {
										color: #ff4b3a;
										border: 0.013rem solid #ff4b3a;
										border-radius: 4px;
										font-size: 14px;
									}
									.price {
										color: #ff4b3a;
										font-size: 24px;
										.newPrice {
											font-size: 34px;
										}
										.oldPrice {
											color: #999;
											text-decoration: line-through;
											margin-left: 12px;
										}
									}
									.shopping {
										position: absolute;
										right: 24px;
										bottom: 24px;
										display: inline-block;
										width: 100px;
										height: 100px;
										border-radius: 50%;
										text-align: center;
										line-height: 100px;
										color: #84b83a;
									}
								}
	                        }
	                        li:last-of-type{
	                            border-bottom: none;
	                        }
	                    }
                    }
                }
                li:first-of-type .main_title{
                	margin-top: 0;
                }
            }
        }
    }
</style>
