import App from './components/app'
// 页脚的五个页面路由
const index = r => require.ensure([], () => r(require('./views/home/index')), 'index') //首页
const grouping = r => require.ensure([], () => r(require('./views/group/grouping')), 'grouping') //分类
const teaming = r => require.ensure([], () => r(require('./views/team/teaming')), 'teaming') //拼拼
const shopping = r => require.ensure([], () => r(require('./views/shopping/shopping')), 'shopping') //购物车
const myhome = r => require.ensure([], () => r(require('./views/myhome/myhome')), 'myhome') //我的家

//首页的路由
const home = r => require.ensure([], () => r(require('./views/home/children/home')), 'home') //首页--首页
const yinpin = r => require.ensure([], () => r(require('./views/home/children/yinpin')), 'yinpin') //首页--饮品
const shengxian = r => require.ensure([], () => r(require('./views/home/children/shengxian')), 'shengxian') //首页--生鲜
const meizhuang = r => require.ensure([], () => r(require('./views/home/children/meizhuang')), 'meizhuang') //首页--美妆
const jiafang = r => require.ensure([], () => r(require('./views/home/children/jiafang')), 'jiafang') //首页--家纺
const gongyi = r => require.ensure([], () => r(require('./views/home/children/gongyi')), 'gongyi') //首页--工艺
const muying = r => require.ensure([], () => r(require('./views/home/children/muying')), 'muying') //首页--母婴
const yiliao = r => require.ensure([], () => r(require('./views/home/children/yiliao')), 'yiliao') //首页--医疗
const meishi = r => require.ensure([], () => r(require('./views/home/children/meishi')), 'meishi') //首页--美食

const yinpin1 = r => require.ensure([], () => r(require('./views/home/children/yinpin')), 'yinpin') //首页--饮品
const shengxian1 = r => require.ensure([], () => r(require('./views/home/children/shengxian')), 'shengxian') //首页--生鲜
const meizhuang1 = r => require.ensure([], () => r(require('./views/home/children/meizhuang')), 'meizhuang') //首页--美妆
const jiafang1 = r => require.ensure([], () => r(require('./views/home/children/jiafang')), 'jiafang') //首页--家纺
const gongyi1 = r => require.ensure([], () => r(require('./views/home/children/gongyi')), 'gongyi') //首页--工艺
const muying1 = r => require.ensure([], () => r(require('./views/home/children/muying')), 'muying') //首页--母婴
const yiliao1 = r => require.ensure([], () => r(require('./views/home/children/yiliao')), 'yiliao') //首页--医疗
const meishi1 = r => require.ensure([], () => r(require('./views/home/children/meishi')), 'meishi') //首页--美食

//首页的轮播下面的8个频道页
const banshouli = r => require.ensure([], () => r(require('./views/home/children2/banshouli')), 'banshouli') //首页--伴手礼
const quanqiu = r => require.ensure([], () => r(require('./views/home/children2/quanqiu')), 'quanqiu') //首页--全球
//const lingjuan = r => require.ensure([], () => r(require('./views/home/children2/lingjuan')), 'lingjuan') //首页--领券
//const miaosha = r => require.ensure([], () => r(require('./views/home/children2/miaosha')), 'miaosha') //首页--秒杀
const shengtaiguan = r => require.ensure([], () => r(require('./views/home/children2/shengtaiguan')), 'shengtaiguan') //首页--生态馆
const techanqu = r => require.ensure([], () => r(require('./views/home/children2/techanqu')), 'techanqu') //首页--特产区/地区馆
const xinpinqu = r => require.ensure([], () => r(require('./views/home/children2/xinpinqu')), 'xinpinqu') //首页--新品区
const gongyiguan = r => require.ensure([], () => r(require('./views/home/children2/gongyiguan')), 'gongyiguan') //首页--工艺馆
const xiangqing = r => require.ensure([], () => r(require('./views/home/children2/xiangqing')), 'xiangqing') //图文详情
const download = r => require.ensure([], () => r(require('./views/home/children2/download')), 'download') //下载页
const download1 = r => require.ensure([], () => r(require('./views/home/children2/download1')), 'download1') //下载页
const teaProject = r => require.ensure([], () => r(require('./views/home/children2/teaProject')), 'teaProject') //茶专题 
const Agreement = r => require.ensure([], () => r(require('./views/home/children2/Agreement')), 'Agreement') //用户协议 
const yaoqingli_guize = r => require.ensure([], () => r(require('./views/home/children2/yaoqingli_guize')), 'yaoqingli_guize') // 邀请有礼--奖励规则

//首页伴手礼中的价格分类路由
const banshouli_one = r => require.ensure([], () => r(require('./views/home/children2/banshouli_children/banshouli_one')),'banshouli_one')//伴手礼--100以内
const banshouli_two = r => require.ensure([], () => r(require('./views/home/children2/banshouli_children/banshouli_two')),'banshouli_two')//伴手礼--100~200元
const banshouli_three = r => require.ensure([], () => r(require('./views/home/children2/banshouli_children/banshouli_three')),'banshouli_three')//伴手礼--200以上


// 首页地区馆里九个路由
const guiyangguan = r => require.ensure([], () => r(require('./views/home/children3/guiyangguan')), 'guiyangguan') //首页--地区馆--贵阳馆
// 地区馆---推荐景区
const qingyan = r => require.ensure([], () => r(require('./views/home/children3/children4/qingyan')), 'qingyan') //地区馆--推荐景区--青岩古镇

//分类页面的路由
const classify = r => require.ensure([], () => r(require('./views/group/children/classify')), 'classify') //分类--分类
const group_meishi = r => require.ensure([], () => r(require('./views/group/children/children/group_meishi')), 'group_meishi') //分类--分类--美食
const group_yinpin = r => require.ensure([], () => r(require('./views/group/children/children/group_yinpin')), 'group_yinpin') //分类--分类--饮品
const group_shengxian = r => require.ensure([], () => r(require('./views/group/children/children/group_shengxian')), 'group_shengxian') //分类--分类--生鲜
const group_gongyi = r => require.ensure([], () => r(require('./views/group/children/children/group_gongyi')), 'group_gongyi') //分类--分类--工艺
const group_meizhuang = r => require.ensure([], () => r(require('./views/group/children/children/group_meizhuang')), 'group_meizhuang') //分类--分类--美妆
const group_muying = r => require.ensure([], () => r(require('./views/group/children/children/group_muying')), 'group_muying') //分类--分类--母婴
const group_yiliao = r => require.ensure([], () => r(require('./views/group/children/children/group_yiliao')), 'group_yiliao') //分类--分类--医疗
const region = r => require.ensure([], () => r(require('./views/group/children/region')), 'region') //分类--地区

// 拼拼页面---九个路由
const pinpin = r => require.ensure([], () => r(require('./views/team/children/pinpin')), 'pinpin') //拼拼导航条路由
const orderGoods = r => require.ensure([], () => r(require('./views/team/children/orderGoods')), 'orderGoods') //拼拼商详页面
const orderGoods1 = r => require.ensure([], () => r(require('./views/team/children/orderGoods1')), 'orderGoods1') //拼拼商详页面
const pintuan = r => require.ensure([], () => r(require('./views/team/children/pintuan')), 'pintuan') //拼拼2人团页面
const pintuanwanfa = r => require.ensure([], () => r(require('./views/team/children/pintuanwanfa')), 'pintuanwanfa') //拼拼参团页面
const pintuan2 = r => require.ensure([], () => r(require('./views/team/children/pintuan2')), 'pintuan2') //拼拼开团页面
const pintuan3 = r => require.ensure([], () => r(require('./views/team/children/pintuan3')), 'pintuan3') //拼拼抢光页面
const dingdan = r => require.ensure([], () => r(require('./views/team/children/dingdan')), 'dingdan') //拼拼填写订单页面

const share = r => require.ensure([], () => r(require('./views/team/children/share')), 'share') //拼拼分享

// 拼团
const qbpinglun = r => require.ensure([], () => r(require('./views/team/children/children2/qbpinglun')), 'qbpinglun') //拼团详情--全部评论

// 我的家里面的路由
const shezhi = r => require.ensure([], () => r(require('./views/myhome/children/shezhi')), 'shezhi') //我的家--设置
const xiaoxi = r => require.ensure([], () => r(require('./views/myhome/children/xiaoxi')), 'xiaoxi') //我的家--消息
const zhuce = r => require.ensure([], () => r(require('./views/myhome/children/zhuce')), 'zhuce') //我的家--登录注册
const myOrder = r => require.ensure([], () => r(require('./views/myhome/children/myOrder')), 'myOrder') //我的家--全部订单
const myYouhui = r => require.ensure([], () => r(require('./views/myhome/children/myYouhui')), 'myYouhui') //我的家--优惠券
const myGroup = r => require.ensure([], () => r(require('./views/myhome/children/myGroup')), 'myGroup') //我的家--我的团
const myGuanzhu = r => require.ensure([], () => r(require('./views/myhome/children/myGuanzhu')), 'myGuanzhu') //我的家--我的关注
const myKefu = r => require.ensure([], () => r(require('./views/myhome/children/myKefu')), 'myKefu') //我的家--家的客服
const myYijian = r => require.ensure([], () => r(require('./views/myhome/children/myYijian')), 'myYijian') //我的家--意见反馈
const myJiayou = r => require.ensure([], () => r(require('./views/myhome/children/myJiayou')), 'myJiayou') //我的家--关于家有
	// 我的家的全部订单里面的路由
const allOrder = r => require.ensure([], () => r(require('./views/myhome/children/myOrder/allOrder')), 'allOrder') //我的家--全部订单--全部订单
const obligation = r => require.ensure([], () => r(require('./views/myhome/children/myOrder/obligation')), 'obligation') //我的家--全部订单--待付款
const goods = r => require.ensure([], () => r(require('./views/myhome/children/myOrder/goods')), 'goods') //我的家--全部订单--待收货
const complete = r => require.ensure([], () => r(require('./views/myhome/children/myOrder/complete')), 'complete') //我的家--全部订单--已完成
	// 我的团里面的路由
const allGroup = r => require.ensure([], () => r(require('./views/myhome/children/myGroup/allGroup')), 'allGroup') //我的家--我的团--全部团
const weatGroup = r => require.ensure([], () => r(require('./views/myhome/children/myGroup/weatGroup')), 'weatGroup') //我的家--我的团--待成团
const endGroup = r => require.ensure([], () => r(require('./views/myhome/children/myGroup/endGroup')), 'endGroup') //我的家--我的团--已成 团
const failGroup = r => require.ensure([], () => r(require('./views/myhome/children/myGroup/failGroup')), 'failGroup') //我的家--我的团--失败团

// 我的家/优惠券中的路由
const unused = r => require.ensure([], () => r(require('./views/myhome/children/myYouhui/unused')), 'unused') //我的家--优惠券--未使用
const used = r => require.ensure([], () => r(require('./views/myhome/children/myYouhui/used')), 'used') //我的家--优惠券--已使用
const guoqi = r => require.ensure([], () => r(require('./views/myhome/children/myYouhui/guoqi')), 'guoqi') //我的家--优惠券--已过期


export default [{
	path: '/',
	component: App, //顶层路由，对应index.html
	children: [
		//首页列表页
		{
			path: '',
			component: index,
			children: [{
                path: '', //首页---首页二级路由
                component: home,
            },{
				path: 'home', //首页---饮品二级路由
				component: home
			}, {
				path: 'yinpin', //首页---饮品二级路由
				component: yinpin
			}, {
				path: 'shengxian', //首页---生鲜二级路由
				component: shengxian
			}, {
				path: 'meizhuang', //首页---美妆二级路由
				component: meizhuang
			}, {
				path: 'jiafang', //首页---家纺二级路由
				component: jiafang
			}, {
				path: 'gongyi', //首页---工艺二级路由
				component: gongyi
			}, {
				path: 'muying', //首页---母婴二级路由
				component: muying
			}, {
				path: 'yiliao', //首页---医疗二级路由
				component: yiliao
			}, {
				path: 'meishi', //首页---美食 二级路由
				component: meishi
			}]
		},{
            path: '3/11', //首页---伴手礼 二级路由
            component: banshouli,
            children: [{
            	path: '',
            	component: banshouli_one//首页---伴手礼 100以下二级路由
            }, {
            	path: 'banshouli_one',
            	component: banshouli_one
            }, {
            	path: 'banshouli_two',//首页---伴手礼 100--200二级路由
            	component: banshouli_two
            }, {
            	path: 'banshouli_three',//首页---伴手礼 200++二级路由
            	component: banshouli_three
            }]
        }, {
            path: '3/14', //首页---全球优品 二级路由
            component: quanqiu
        },
//      {
//          path: '/领券', //首页---领卷 二级路由
//          component: lingjuan
//      }, {
//          path: '/秒杀', //首页---秒杀 二级路由
//          component: miaosha
//      }, 
		{
            path: '/teaProject', //首页---茶专题页面
            component: teaProject
        }, 
		{
            path: '/Agreement', //首页---用户协议
            component: Agreement
		}, 
        {
            path: '3/12', //首页---生态馆 二级路由
            component: shengtaiguan
        }, {
            path: '3/13', //首页---地区馆 二级路由
            component: techanqu
        }, {
            path: '3/10', //首页---新品专区 二级路由
            component: xinpinqu
        }, {
            path: '3/8', //首页---工艺馆 二级路由
            component: gongyiguan
        }, {
            path: 'xiangqing', //图文详情
            component: xiangqing
        }, {
            path: 'download', //下载页
            component: download
        }, {
            path: 'download1', //下载页
            component: download1
        }, {
            path: '9/regionId=:id', //首页---地区馆———— 二级路由
            component: guiyangguan
        },  {
			path: '9/id=:id', //地区馆---推荐景区  二级路由
			component: qingyan
		},	{
			path: 'yinpin1', //首页---饮品二级路由
			component: yinpin
		}, {
			path: 'shengxian1', //首页---生鲜二级路由
			component: shengxian
		}, {
			path: 'meizhuang1', //首页---美妆二级路由
			component: meizhuang
		}, {
			path: 'jiafang1', //首页---家纺二级路由
			component: jiafang
		}, {
			path: 'gongyi1', //首页---工艺二级路由
			component: gongyi
		}, {
			path: 'muying1', //首页---母婴二级路由
			component: muying
		}, {
			path: 'yiliao1', //首页---医疗二级路由
			component: yiliao
		}, {
			path: 'meishi1', //首页---美食 二级路由
			component: meishi
		}, {
			path: 'yaoqingli_guize', //首页---邀请有礼--奖励规则
			component: yaoqingli_guize
		},
		//分类页
		{
			path: '/grouping',
			component: grouping,
			children: [{
				path: 'classify', //分类---分类二级路由
				component: classify,
				children: [{
					path: '', //分类---分类---美食三级路由
					component: group_meishi,
				}, {
					path: 'group_meishi', //分类---分类---美食三级路由
					component: group_meishi,
				}, {
					path: 'group_yinpin', //分类---分类---饮品三级路由
					component: group_yinpin,
				}, {
					path: 'group_shengxian', //分类---分类---生鲜三级路由
					component: group_shengxian,
				}, {
					path: 'group_gongyi', //分类---分类---工艺三级路由
					component: group_gongyi,
				}, {
					path: 'group_meizhuang', //分类---分类---美妆三级路由
					component: group_meizhuang, 
				}, {
					path: 'group_muying', //分类---分类---美妆三级路由
					component: group_muying,
				}, {
					path: 'group_yiliao', //分类---分类---美妆三级路由
					component: group_yiliao,
				}]
			}, {
				path: 'region', //分类---地区二级路由
				component: region
			}]
		},
		//拼拼页
		{
			path: '/teaming',
			component: teaming,
			children:[{
				path: '', //分类---分类二级路由
				component: pinpin,   
			},{
				path: 'pinpin', //分类---分类二级路由
				component: pinpin,   
			}]
		},
		{
			path: "/orderGoods",
			component: orderGoods
		},
		{
			path: "/orderGoods1",
			component: orderGoods1
		},
		{
			path: '/qbpinglun', //全部评论
			component: qbpinglun 
		},
		{
			path: "/share",
			component: share
		},
		{
			path: "/pintuan",
			component: pintuan
		},
		{
			path: "/pintuanwanfa",
			component: pintuanwanfa
		},
		{
			path: "/pintuan2",
			component: pintuan2
		},
		{
			path: "/pintuan3",
			component: pintuan3
		},
		{
			path: "/dingdan",
			component: dingdan
		},
		//购物车页
		{
			path: '/shopping',
			component: shopping
		},
		//我的家页
		{
			path: '/myhome',
			component: myhome
		},
		// 前往我的家里面的设置页
		{
			path: '/shezhi',
			component: shezhi
		},
		// 前往我的家里面的消息页
		{
			path: '/xiaoxi',
			component: xiaoxi
		},
		// 前往我的家里面的登录页面
		{
			path: '/zhuce',
			component: zhuce
		},
		// 前往我的家里面的全部订单页
		{
			path: '/myOrder',
			component: myOrder,
			children: [{
				path: 'allOrder', //全部订单二级路由
				component: allOrder,
			}, {
				path: 'obligation', //待付款二级路由
				component: obligation
			}, {
				path: 'goods', //待收货二级路由
				component: goods
			}, {
				path: 'complete', //已完成订单二级路由
				component: complete
			}]
		},
		// 前往我的家---->我的优惠券
		{
			path: '/myYouhui',
			component: myYouhui
		},
		// 前往我的家---->我的团
		{
			path: '/myGroup',
			component: myGroup,
			children: [{
				path: 'allGroup', //全部团二级路由
				component: allGroup,
			}, {
				path: 'weatGroup', //待成团二级路由
				component: weatGroup
			}, {
				path: 'endGroup', //已成团二级路由
				component: endGroup
			}, {
				path: 'failGroup', //失败团二级路由
				component: failGroup
			}]
		},
		// 前往我的家---->我的关注
		{
			path: '/myGuanzhu',
			component: myGuanzhu,
			children: [{
				path: 'unused', //优惠券--未使用
				component: unused,
			}, {
				path: 'used', //优惠券--已使用
				component: used,
			}, {
				path: 'guoqi', //优惠券--已过期
				component: guoqi,
			}]
		},
		// 前往我的家---->家的客服
		{
			path: '/myKefu',
			component: myKefu
		},
		// 前往我的家---->意见反馈
		{
			path: '/myYijian',
			component: myYijian
		},
		// 前往我的家---->关于家有
		{
			path: '/myJiayou',
			component: myJiayou
		}
	]
}]