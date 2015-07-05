// JavaScript Document
define(function(require,exports,module){
	
	function init()
	{
			var oNav=document.getElementById('nav');
		var aA=oNav.getElementsByTagName('a');
		var aLi=oNav.getElementsByTagName('li');
		var oBodyer=document.getElementById('bodyer');
		var aDiv=oBodyer.children;
		for(var i=0;i<aDiv.length;i++)
		{
			if(aDiv[i].dataset.hash=='years')
			{
		       startMove(aDiv[i],{opacity:100});
			}
		}
		
		$('.yearWrap').css({height:360});
		var oYearList=document.getElementById('yearList');
        var oPicsList = document.getElementById('picsList');
		var aPicsListLi = oPicsList.getElementsByTagName('li');
		var iLen = aPicsListLi.length;
		var iPage = 1;
		var b = true;
	
	//初始化数据处理
	getList();
	
	function getList() {
		ajax('get','getPics.php','cpage=' + iPage,function(data) {
		//alert(data)
			var data = JSON.parse(data);
			
			
			if ( !data.length ) {
				//后续没有数据了
				return ;
			}
			
			for ( var i=0; i<data.length; i++ ) {
				
				//获取高度最短的li
				var _index = getShort();
				
				var oDiv = document.createElement('div');
				var oImg = document.createElement('img');
				oImg.src = data[i].preview;
				oImg.style.width = '175px';
				oImg.style.height =  data[i].height * ( 175 / data[i].width ) + 'px';
				//解决图片还没有加载进来 但是下一张加载进来了 错误的插到该li下面
				oDiv.appendChild( oImg );
				var oP = document.createElement('p');
				oP.innerHTML = data[i].title;
				oDiv.appendChild( oP );
				
				aPicsListLi[_index].appendChild( oDiv );
				
			}
			
			b = true;
			
		});
	}
	
	window.onscroll = function() {
		
		var _index = getShort();
		var oLi = aPicsListLi[_index];
		
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		
		if ( getTop( oLi ) + oLi.offsetHeight < document.documentElement.clientHeight + scrollTop ) {
			
			if ( b ) {
				b = false;
				iPage++;
				getList();
			}
			
		}
		
	}
	
	function getShort() {
		var index = 0;//思路二 利用Math.min.apply(null,[]);先获取各个li的offsetHeight
		var ih = aPicsListLi[index].offsetHeight;
		for (var i=1; i<iLen; i++) {
			if ( aPicsListLi[i].offsetHeight < ih ) {
				index = i;
				ih = aPicsListLi[i].offsetHeight;
			}
		}
		return index;
	}
	
	function getTop(obj) {
		var iTop = 0;
		while(obj) {
			iTop += obj.offsetTop;
			obj = obj.offsetParent;
		}
		return iTop;
	}
	
		
	}
	exports.init=init;
})