// var $firstFloor=$('.first-floor');
// var $secondFloor=$('.second-floor');
// var $thirdFloor=$('.third-floor');
// var $fourFloor=$('.four-floor');
// var $fiveFloor=$('.five-floor');



// floorAnimate($firstFloor);
// floorAnimate($secondFloor);
// floorAnimate($thirdFloor);
// floorAnimate($fourFloor);
// floorAnimate($fiveFloor);
$('.floor').each(function(index,elem){
   function floorAnimate(ele){
		//按需加载
		//判断是否出现在科室区域

		var $rightHead=ele.find('.right-class span');
		var $clothFloor=ele.find('.clothes-list');
		// $('.right-class span').on('mouseenter',function(){
		// });
		$rightHead.on('mouseenter',function(){
			if($(this).find('img').attr('id')){
				return;
			}else{
	            // ele.find('.right-class span').css('color','white');
				$clothFloor.removeAttr('id');
				$clothFloor[$(this).attr('value')-1].id='clothes-list-active';
				$('.right-class span').removeAttr('id');
				$(this).attr('id','right-class-active')
			}
		});

		ele.find('.clothes-list span').on('mouseenter',function(){
			var html='<span class="addCart">\
	                	<i class="iconfont icon-gouwuche"></i>\
	                </span>';
			if($(this).attr('class')){
			    $(this).append(html);
				return;
			}else{
		        $('.clothes-list span').removeAttr('class');
		        $(this).attr('class','clothes-list-item-choiced');

		        //滑动至商品上时显示加入购物车
			    $(this).append(html);
			}

            //移动至购物车图标时，显示文字
		    $(this).find('.addCart').on('click',function(){
		    	//往购物车添加商品
		    	addCartGoods($(this));
		    })

		}).on('mouseleave',function(){
			$(this).find('span').remove();
		});
    }
    floorAnimate($(elem))
});

//添加至购物车
function addCartGoods(elem){
	var $parentEle=elem.parent();
	var src=$parentEle.find('img').attr('src');
	var name=$parentEle.find('.name').text();
	var price=$parentEle.find('.price').text().replace('￥','');
	var shopCartBox=$('.section-shopcar-dropdown .goods');
	var html='<li>\
				<span class="goods-img fl"><img src="'+src+'"></span>\
				<p class="fl">'+name+'</p>\
				<p class="fl"><b>￥<span class="unit-price">'+price+'</span>x<span class="unit-price-num">1</span></b></p>\
				<button class="delgoods fr">X</button>\
			</li>';
    shopCartBox.append(html);
    shopCartChanged();
    $('.delgoods').on('click',function(){
		$(this).parent().remove();
		//购物车内容改变
		shopCartChanged();
	});
	alert('添加至购物车成功');
}
var $win=$(window);
function isVisible($ele){
    return $win.height()+$win.scrollTop()>$ele.offset().top&&$ele.offset().top+$ele.height()>$win.scrollTop();
};



//滑动鼠标来加载
$win.scroll(function(){

    //如果鼠标没有滚动，就隐藏返回顶部
    if ($(window).scrollTop()==0) {
        $('#to-top').hide();
    }else{
        $('#to-top').show();
    }
    //按需加载楼层
    loadFloor();
    loadHelp();
    loadFooter();
    showElevator();
    changeElevatorFloor();
});


function loadFloor(){
    $('.floor').each(function(index,elem){
        var b=isVisible($(elem));
        if (b) {
            setTimeout(function(){
               $(elem).find('.load-img').hide(); 
               $(elem).find('.floor-contanier').show();
            },2000);
        }
    });
}



// //加载楼层
// var floorData = [{
//     num: '1',
//     text: '服装鞋包',
//     tabs: ['大牌', '男装', '女装'],
//     items: [
//         [{
//             name: '匡威男棒球开衫外套2015',
//             price: 479
//         }, {
//             name: 'adidas 阿迪达斯 训练 男子',
//             price: 335
//         }, {
//             name: '必迈BMAI一体织跑步短袖T恤',
//             price: 159
//         }, {
//             name: 'NBA袜子半毛圈运动高邦棉袜',
//             price: 65
//         }, {
//             name: '特步官方运动帽男女帽子2016',
//             price: 69
//         }, {
//             name: 'KELME足球训练防寒防风手套',
//             price: 4999
//         }, {
//             name: '战地吉普三合一冲锋衣',
//             price: 289
//         }, {
//             name: '探路者户外男士徒步鞋',
//             price: 369
//         }, {
//             name: '羽绒服2015秋冬新款轻薄男士',
//             price: 399
//         }, {
//             name: '溯溪鞋涉水鞋户外鞋',
//             price: 689
//         }, {
//             name: '旅行背包多功能双肩背包',
//             price: 269
//         }, {
//             name: '户外旅行双肩背包OS0099',
//             price: 99
//         }],
//         [{
//             name: '匡威男棒球开衫外套2015',
//             price: 479
//         }, {
//             name: 'adidas 阿迪达斯 训练 男子',
//             price: 335
//         }, {
//             name: '必迈BMAI一体织跑步短袖T恤',
//             price: 159
//         }, {
//             name: 'NBA袜子半毛圈运动高邦棉袜',
//             price: 65
//         }, {
//             name: '特步官方运动帽男女帽子2016',
//             price: 69
//         }, {
//             name: 'KELME足球训练防寒防风手套',
//             price: 4999
//         }, {
//             name: '战地吉普三合一冲锋衣',
//             price: 289
//         }, {
//             name: '探路者户外男士徒步鞋',
//             price: 369
//         }, {
//             name: '羽绒服2015秋冬新款轻薄男士',
//             price: 399
//         }, {
//             name: '溯溪鞋涉水鞋户外鞋',
//             price: 689
//         }, {
//             name: '旅行背包多功能双肩背包',
//             price: 269
//         }, {
//             name: '户外旅行双肩背包OS0099',
//             price: 99
//         }],
//         [{
//             name: '匡威男棒球开衫外套2015',
//             price: 479
//         }, {
//             name: 'adidas 阿迪达斯 训练 男子',
//             price: 335
//         }, {
//             name: '必迈BMAI一体织跑步短袖T恤',
//             price: 159
//         }, {
//             name: 'NBA袜子半毛圈运动高邦棉袜',
//             price: 65
//         }, {
//             name: '特步官方运动帽男女帽子2016',
//             price: 69
//         }, {
//             name: 'KELME足球训练防寒防风手套',
//             price: 4999
//         }, {
//             name: '战地吉普三合一冲锋衣',
//             price: 289
//         }, {
//             name: '探路者户外男士徒步鞋',
//             price: 369
//         }, {
//             name: '羽绒服2015秋冬新款轻薄男士',
//             price: 399
//         }, {
//             name: '溯溪鞋涉水鞋户外鞋',
//             price: 689
//         }, {
//             name: '旅行背包多功能双肩背包',
//             price: 269
//         }, {
//             name: '户外旅行双肩背包OS0099',
//             price: 99
//         }]
//     ]
// }, {
//     num: '2',
//     text: '个护美妆',
//     tabs: ['热门', '国际大牌', '国际名品'],
//     items: [
//         [{
//             name: '韩束红石榴鲜活水盈七件套装',
//             price: 169
//         }, {
//             name: '温碧泉八杯水亲亲水润五件套装',
//             price: 198
//         }, {
//             name: '御泥坊红酒透亮矿物蚕丝面膜贴',
//             price: 79.9
//         }, {
//             name: '吉列手动剃须刀锋隐致护',
//             price: 228
//         }, {
//             name: 'Mediheal水润保湿面膜',
//             price: 119
//         }, {
//             name: '纳益其尔芦荟舒缓保湿凝胶',
//             price: 39
//         }, {
//             name: '宝拉珍选基础护肤旅行四件套',
//             price: 299
//         }, {
//             name: '温碧泉透芯润五件套装',
//             price: 257
//         }, {
//             name: '玉兰油多效修护三部曲套装',
//             price: 199
//         }, {
//             name: 'LOREAL火山岩控油清痘洁面膏',
//             price: 36
//         }, {
//             name: '百雀羚水嫩倍现盈透精华水',
//             price: 139
//         }, {
//             name: '珀莱雅新柔皙莹润三件套',
//             price: 99
//         }],
//         [{
//             name: '韩束红石榴鲜活水盈七件套装',
//             price: 169
//         }, {
//             name: '温碧泉八杯水亲亲水润五件套装',
//             price: 198
//         }, {
//             name: '御泥坊红酒透亮矿物蚕丝面膜贴',
//             price: 79.9
//         }, {
//             name: '吉列手动剃须刀锋隐致护',
//             price: 228
//         }, {
//             name: 'Mediheal水润保湿面膜',
//             price: 119
//         }, {
//             name: '纳益其尔芦荟舒缓保湿凝胶',
//             price: 39
//         }, {
//             name: '宝拉珍选基础护肤旅行四件套',
//             price: 299
//         }, {
//             name: '温碧泉透芯润五件套装',
//             price: 257
//         }, {
//             name: '玉兰油多效修护三部曲套装',
//             price: 199
//         }, {
//             name: 'LOREAL火山岩控油清痘洁面膏',
//             price: 36
//         }, {
//             name: '百雀羚水嫩倍现盈透精华水',
//             price: 139
//         }, {
//             name: '珀莱雅新柔皙莹润三件套',
//             price: 99
//         }],
//         [{
//             name: '韩束红石榴鲜活水盈七件套装',
//             price: 169
//         }, {
//             name: '温碧泉八杯水亲亲水润五件套装',
//             price: 198
//         }, {
//             name: '御泥坊红酒透亮矿物蚕丝面膜贴',
//             price: 79.9
//         }, {
//             name: '吉列手动剃须刀锋隐致护',
//             price: 228
//         }, {
//             name: 'Mediheal水润保湿面膜',
//             price: 119
//         }, {
//             name: '纳益其尔芦荟舒缓保湿凝胶',
//             price: 39
//         }, {
//             name: '宝拉珍选基础护肤旅行四件套',
//             price: 299
//         }, {
//             name: '温碧泉透芯润五件套装',
//             price: 257
//         }, {
//             name: '玉兰油多效修护三部曲套装',
//             price: 199
//         }, {
//             name: 'LOREAL火山岩控油清痘洁面膏',
//             price: 36
//         }, {
//             name: '百雀羚水嫩倍现盈透精华水',
//             price: 139
//         }, {
//             name: '珀莱雅新柔皙莹润三件套',
//             price: 99
//         }]
//     ]
// }, {
//     num: '3',
//     text: '手机通讯',
//     tabs: ['热门', '品质优选', '新机尝鲜'],
//     items: [
//         [{
//             name: '摩托罗拉 Moto Z Play',
//             price: 3999
//         }, {
//             name: 'Apple iPhone 7 (A1660)',
//             price: 6188
//         }, {
//             name: '小米 Note 全网通 白色',
//             price: 999
//         }, {
//             name: '小米5 全网通 标准版 3GB内存',
//             price: 1999
//         }, {
//             name: '荣耀7i 海岛蓝 移动联通4G手机',
//             price: 1099
//         }, {
//             name: '乐视（Le）乐2（X620）32GB',
//             price: 1099
//         }, {
//             name: 'OPPO R9 4GB+64GB内存版',
//             price: 2499
//         }, {
//             name: '魅蓝note3 全网通公开版',
//             price: 899
//         }, {
//             name: '飞利浦 X818 香槟金 全网通4G',
//             price: 1998
//         }, {
//             name: '三星 Galaxy S7（G9300）',
//             price: 4088
//         }, {
//             name: '华为 荣耀7 双卡双待双通',
//             price: 1128
//         }, {
//             name: '努比亚(nubia)Z7Max(NX505J)',
//             price: 728
//         }],
//         [{
//             name: '摩托罗拉 Moto Z Play',
//             price: 3999
//         }, {
//             name: 'Apple iPhone 7 (A1660)',
//             price: 6188
//         }, {
//             name: '小米 Note 全网通 白色',
//             price: 999
//         }, {
//             name: '小米5 全网通 标准版 3GB内存',
//             price: 1999
//         }, {
//             name: '荣耀7i 海岛蓝 移动联通4G手机',
//             price: 1099
//         }, {
//             name: '乐视（Le）乐2（X620）32GB',
//             price: 1099
//         }, {
//             name: 'OPPO R9 4GB+64GB内存版',
//             price: 2499
//         }, {
//             name: '魅蓝note3 全网通公开版',
//             price: 899
//         }, {
//             name: '飞利浦 X818 香槟金 全网通4G',
//             price: 1998
//         }, {
//             name: '三星 Galaxy S7（G9300）',
//             price: 4088
//         }, {
//             name: '华为 荣耀7 双卡双待双通',
//             price: 1128
//         }, {
//             name: '努比亚(nubia)Z7Max(NX505J)',
//             price: 728
//         }],
//         [{
//             name: '摩托罗拉 Moto Z Play',
//             price: 3999
//         }, {
//             name: 'Apple iPhone 7 (A1660)',
//             price: 6188
//         }, {
//             name: '小米 Note 全网通 白色',
//             price: 999
//         }, {
//             name: '小米5 全网通 标准版 3GB内存',
//             price: 1999
//         }, {
//             name: '荣耀7i 海岛蓝 移动联通4G手机',
//             price: 1099
//         }, {
//             name: '乐视（Le）乐2（X620）32GB',
//             price: 1099
//         }, {
//             name: 'OPPO R9 4GB+64GB内存版',
//             price: 2499
//         }, {
//             name: '魅蓝note3 全网通公开版',
//             price: 899
//         }, {
//             name: '飞利浦 X818 香槟金 全网通4G',
//             price: 1998
//         }, {
//             name: '三星 Galaxy S7（G9300）',
//             price: 4088
//         }, {
//             name: '华为 荣耀7 双卡双待双通',
//             price: 1128
//         }, {
//             name: '努比亚(nubia)Z7Max(NX505J)',
//             price: 728
//         }]
//     ]
// }, {
//     num: '4',
//     text: '家用电器',
//     tabs: ['热门', '大家电', '生活电器'],
//     items: [
//         [{
//             name: '暴风TV 超体电视 40X 40英寸',
//             price: 1299
//         }, {
//             name: '小米（MI）L55M5-AA 55英寸',
//             price: 3699
//         }, {
//             name: '飞利浦HTD5580/93 音响',
//             price: 2999
//         }, {
//             name: '金门子H108 5.1套装音响组合',
//             price: 1198
//         }, {
//             name: '方太ENJOY云魔方抽油烟机',
//             price: 4390
//         }, {
//             name: '美的60升预约洗浴电热水器',
//             price: 1099
//         }, {
//             name: '九阳电饭煲多功能智能电饭锅',
//             price: 159
//         }, {
//             name: '美的电烤箱家用大容量',
//             price: 329
//         }, {
//             name: '奥克斯(AUX)936破壁料理机',
//             price: 1599
//         }, {
//             name: '飞利浦面条机 HR2356/31',
//             price: 665
//         }, {
//             name: '松下NU-JA100W 家用蒸烤箱',
//             price: 1799
//         }, {
//             name: '飞利浦咖啡机 HD7751/00',
//             price: 1299
//         }],
//         [{
//             name: '暴风TV 超体电视 40X 40英寸',
//             price: 1299
//         }, {
//             name: '小米（MI）L55M5-AA 55英寸',
//             price: 3699
//         }, {
//             name: '飞利浦HTD5580/93 音响',
//             price: 2999
//         }, {
//             name: '金门子H108 5.1套装音响组合',
//             price: 1198
//         }, {
//             name: '方太ENJOY云魔方抽油烟机',
//             price: 4390
//         }, {
//             name: '美的60升预约洗浴电热水器',
//             price: 1099
//         }, {
//             name: '九阳电饭煲多功能智能电饭锅',
//             price: 159
//         }, {
//             name: '美的电烤箱家用大容量',
//             price: 329
//         }, {
//             name: '奥克斯(AUX)936破壁料理机',
//             price: 1599
//         }, {
//             name: '飞利浦面条机 HR2356/31',
//             price: 665
//         }, {
//             name: '松下NU-JA100W 家用蒸烤箱',
//             price: 1799
//         }, {
//             name: '飞利浦咖啡机 HD7751/00',
//             price: 1299
//         }],
//         [{
//             name: '暴风TV 超体电视 40X 40英寸',
//             price: 1299
//         }, {
//             name: '小米（MI）L55M5-AA 55英寸',
//             price: 3699
//         }, {
//             name: '飞利浦HTD5580/93 音响',
//             price: 2999
//         }, {
//             name: '金门子H108 5.1套装音响组合',
//             price: 1198
//         }, {
//             name: '方太ENJOY云魔方抽油烟机',
//             price: 4390
//         }, {
//             name: '美的60升预约洗浴电热水器',
//             price: 1099
//         }, {
//             name: '九阳电饭煲多功能智能电饭锅',
//             price: 159
//         }, {
//             name: '美的电烤箱家用大容量',
//             price: 329
//         }, {
//             name: '奥克斯(AUX)936破壁料理机',
//             price: 1599
//         }, {
//             name: '飞利浦面条机 HR2356/31',
//             price: 665
//         }, {
//             name: '松下NU-JA100W 家用蒸烤箱',
//             price: 1799
//         }, {
//             name: '飞利浦咖啡机 HD7751/00',
//             price: 1299
//         }]
//     ]
// }, {
//     num: '5',
//     text: '电脑数码',
//     tabs: ['热门', '电脑/平板', '潮流影音'],
//     items: [
//         [{
//             name: '戴尔成就Vostro 3800-R6308',
//             price: 2999
//         }, {
//             name: '联想IdeaCentre C560',
//             price: 5399
//         }, {
//             name: '惠普260-p039cn台式电脑',
//             price: 3099
//         }, {
//             name: '华硕飞行堡垒旗舰版FX-PRO',
//             price: 6599
//         }, {
//             name: '惠普(HP)暗影精灵II代PLUS',
//             price: 12999
//         }, {
//             name: '联想(Lenovo)小新700电竞版',
//             price: 5999
//         }, {
//             name: '游戏背光牧马人机械手感键盘',
//             price: 499
//         }, {
//             name: '罗技iK1200背光键盘保护套',
//             price: 799
//         }, {
//             name: '西部数据2.5英寸移动硬盘1TB',
//             price: 419
//         }, {
//             name: '新睿翼3TB 2.5英寸 移动硬盘',
//             price: 849
//         }, {
//             name: 'Rii mini i28无线迷你键盘鼠标',
//             price: 349
//         }, {
//             name: '罗技G29 力反馈游戏方向盘',
//             price: 2999
//         }],
//         [{
//             name: '戴尔成就Vostro 3800-R6308',
//             price: 2999
//         }, {
//             name: '联想IdeaCentre C560',
//             price: 5399
//         }, {
//             name: '惠普260-p039cn台式电脑',
//             price: 3099
//         }, {
//             name: '华硕飞行堡垒旗舰版FX-PRO',
//             price: 6599
//         }, {
//             name: '惠普(HP)暗影精灵II代PLUS',
//             price: 12999
//         }, {
//             name: '联想(Lenovo)小新700电竞版',
//             price: 5999
//         }, {
//             name: '游戏背光牧马人机械手感键盘',
//             price: 499
//         }, {
//             name: '罗技iK1200背光键盘保护套',
//             price: 799
//         }, {
//             name: '西部数据2.5英寸移动硬盘1TB',
//             price: 419
//         }, {
//             name: '新睿翼3TB 2.5英寸 移动硬盘',
//             price: 849
//         }, {
//             name: 'Rii mini i28无线迷你键盘鼠标',
//             price: 349
//         }, {
//             name: '罗技G29 力反馈游戏方向盘',
//             price: 2999
//         }],
//         [{
//             name: '戴尔成就Vostro 3800-R6308',
//             price: 2999
//         }, {
//             name: '联想IdeaCentre C560',
//             price: 5399
//         }, {
//             name: '惠普260-p039cn台式电脑',
//             price: 3099
//         }, {
//             name: '华硕飞行堡垒旗舰版FX-PRO',
//             price: 6599
//         }, {
//             name: '惠普(HP)暗影精灵II代PLUS',
//             price: 12999
//         }, {
//             name: '联想(Lenovo)小新700电竞版',
//             price: 5999
//         }, {
//             name: '游戏背光牧马人机械手感键盘',
//             price: 499
//         }, {
//             name: '罗技iK1200背光键盘保护套',
//             price: 799
//         }, {
//             name: '西部数据2.5英寸移动硬盘1TB',
//             price: 419
//         }, {
//             name: '新睿翼3TB 2.5英寸 移动硬盘',
//             price: 849
//         }, {
//             name: 'Rii mini i28无线迷你键盘鼠标',
//             price: 349
//         }, {
//             name: '罗技G29 力反馈游戏方向盘',
//             price: 2999
//         }]
//     ]
// }];

// function buildFloor(num){
// 	var html='';
//     html+='';
// }

// function buildFloorHead(num){
// 	var html='';
// 	html+='<h2 class="clothes">\
//                     <a name="first-floor"></a>\
//                     <div class="left-floor">\
//                         <span>'+(num+1)+'F</span>\
//                         <span>'+floorFDate[0].text+'</span>\
//                     </div>\
//                     <div class="right-class">\
//                         <span value="1">大牌<img id="right-class-active" src="./img/上标.png"></span>\
//                         <span value="2">男装<img src="./img/上标.png"></span>\
//                         <span value="3">女装<img src="./img/上标.png"></span>\
//                     </div>\
//                 </h2>';
// }

// function buildFloorBody(num){
// 	var html='';
// 	html+='';
// }