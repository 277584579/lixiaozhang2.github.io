
var v = 0,
	p = 0,
	start = false,
	dis = true;
$('*').css({
	'box-sizing': 'border-box',
})
$('html').css({
	'height': '100%',
	'width': '100%',
})
$('body').css({
	'height': '100%',
	'width': '100%',
	'overflow': 'hidden',
	'background-image': 'url(image/bj.jpg)',
	'background-position': 'center',
	'background-size': 'cover',
})

$('<section id="main">').appendTo($('body')); // 构建主体并设置样式

$('#main').css({ // 设置section样式
	'width': 1400 + 'px',
	'height': 700 + 'px',
	'position': 'absolute',
	'left': 'calc(50% - ' + 700 + 'px)',
	'top': 'calc(50% - ' + 350 + 'px)',
//	'border': '1px solid red'
})

var k = 0;

for(var i = 0; i < 25; i++) { // 创建基层的25个div
	var div = $('<div class="div-k">');
	var role = Math.random() * 20 - 10;
	div.appendTo($('#main'));
	div.css({
		'position': 'absolute',
		'width': 160 + 'px',
		'height': 100 + 'px',
		'top': 'calc(50vh + 400px)',
		'left': 'calc(50% - 80px)',
		'border': '2px solid lightgray',
		'overflow': 'hidden',
		'transform': 'rotate(' + role + 'deg)',
		'transition': 'transform 1s,top 1s,left 1s',
		'backgroundSize': 'cover',
		'cursor': 'pointer',
		'box-shadow': '0px 0px 10px black',
		'backgroundSize': 'cover',
		'backgroundImage': 'url(image/' + i + '.jpg)',
	})
	div.attr('id', i)
}

//给所有的.div-k定位


	var t = setInterval(function() {
		var d = parseInt($('.div-k:eq(' + p + ')').attr('id'))
		$('.div-k:eq(' + p + ')').css({
			top: Math.floor(d / 5) * 150 + 'px',
			left: d % 5 * 310 + 'px',
		})
		p = p + 1;
		if(p > 24) {
			clearInterval(t);
			start = true;
		}
	}, 100);




var eId;

$('.div-k').click(function(e) {
	eId = e.target.id;
	if(start == true) {
		if(dis == true) {
			$('#main').css({
				"width": "800px",
				"height": "500px",
				"left": "calc(50% - 400px)",
				"transition": 'transform 1s,top 1s,left 1s',
				"top": "calc(50% - 250px)",
			});
			$('.div-k').each(function(i, v) {
				$(v).css({
					"left": i % 5 * 160 + "px",
					"top": Math.floor(i / 5) * 100 + "px",
					"transform": "rotate(0)",
					"background-image": "url(image/" + eId + ".jpg)",
					'box-shadow':'none',				
					'border':'1px solid black',
					"background-size": "800px 500px",
					"background-position": i % 5 * -160 + "px " + Math.floor(i / 5) * -100 + "px",
					"opacity":"0.5"
				}).fadeTo("slow",1)
			})
			$('#leftBtn').css('left', '0px').css('display', 'block');
			$('#rightBtn').css('right', '0px').css('display', 'block');
			dis = false;
		} else {
			$('#main').css({ // 设置section样式
				'width': 1400 + 'px',
				'height': 700 + 'px',
				position: 'absolute',
				'left': 'calc(50% - ' + 700 + 'px)',
				'top': 'calc(50% - ' + 350 + 'px)',
			})

			var role = Math.random() * 20 - 10;

			$('.div-k').each(function(i, v) {
				var d = parseInt($(v).attr('id'))
				$(v).css({
					position: 'absolute',
					'width': 160 + 'px',
					'height': 100 + 'px',
					'top': Math.floor(d / 5) * 150 + 'px',
					'left': d % 5 * 310 + 'px',
					'border': '2px solid lightgray',
					'overflow': 'hidden',
					'transform': 'rotate(' + role + 'deg)',
					'transition': 'transform 1s,top 1s,left 1s',
					'cursor': 'pointer',
					'box-shadow': '0px 0px 10px black',
					'backgroundSize': 'cover',
					'backgroundPosition': 'center',
					"opacity":"0.3",
					'backgroundImage':'url(image/' + i + '.jpg)'
				}).fadeTo(250,0.6,function(){
					$(v).fadeTo(500,1)
				})
			})
			$('#leftBtn').css('left', '0px').css('display', 'none');
			$('#rightBtn').css('right', '0px').css('display', 'none');
			dis = true;
		}

	}

});

//-------------------------------------------------------------------------------------------------

for(var i = 0; i < 2; i++) { // 创建两边的点击按钮
	var divBtn = $('<div class="div-Btn">');
	divBtn.appendTo($('body'));

	divBtn.css({
		'width': 100 + 'px',
		'height': 80 + 'px',
		'position': 'absolute',
		'top': 'calc(50% - ' + 40 + 'px)',
		'line-height': 65 + 'px',
		'text-align': 'center',
		'color': 'wheat',
		'font-size': 100 + 'px',
		'background-color': 'dimgray',
		'transition': 'transform 1s left 1s,right 1s',
		'cursor': 'pointer',
		'box-shadow': '0px 0px 10px black',
		'display': 'none'
	})
	if(i == 0) { // 其实就是第一个，就是左边的按钮
		divBtn.css({
				'left': 0,
				'border-top-right-radius': '10px',
				'border-bottom-right-radius': '10px',
			})
			.attr('id', 'leftBtn');
		divBtn.html('&lt');
	} else { // 这是右边的
		divBtn.css({
				'right': 0,
				'border-top-left-radius': 10 + 'px',
				'border-bottom-left-radius': 10 + 'px',
			})
			.attr('id', 'rightBtn');
		divBtn.html('&gt')
	}
}

$('#leftBtn').click(function() {
	if(eId <= 0) {
		eId = 24;
	} else {
		eId = eId - 1;
	}

	$('.div-k').each(function(i, v) {

		$(v).css({
			"left": i % 5 * 160 + "px",
			"top": Math.floor(i / 5) * 100 + "px",
			"transform": "rotate(0)",
			"background-image": "url(image/" + eId + ".jpg)",
			"background-size": "800px 500px",
			"background-position": i % 5 * -160 + "px " + Math.floor(i / 5) * -100 + "px"
		})
	})

});

$('#rightBtn').click(function() {
	if(eId >= 24) {
		eId = 0;
	} else {
		eId = 1 * eId + 1;
	}

	$('.div-k').each(function(i, v) {

		$(v).css({
			"left": i % 5 * 160 + "px",
			"top": Math.floor(i / 5) * 100 + "px",
			"transform": "rotate(0)",
			"background-image": "url(image/" + eId + ".jpg)",
			"background-size": "800px 500px",
			"background-position": i % 5 * -160 + "px " + Math.floor(i / 5) * -100 + "px"
		})
	})

});