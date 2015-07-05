// JavaScript Document

define(function(require,exports,module){
function init()
{
	var oRotate=document.getElementById('rotate');
    var oRotateList=document.getElementById("rotateList");
	var aLiUl = oRotateList.getElementsByTagName('li');
	
	var oOl = document.getElementById('btns');
	var aLiOl = oOl.getElementsByTagName('li');
	
	var oneHeight = aLiUl[0].offsetHeight;
	var iNow = 0;
	var timer = null;
	for(var i=0;i<aLiOl.length;i++){
		aLiOl[i].index = i;
		aLiOl[i].onmouseover = function(){
			for(var i=0;i<aLiOl.length;i++){
				aLiOl[i].className = '';
			}
			this.className = 'active';
			
			iNow = this.index;
			
			startMove( oRotateList , { top : - this.index*oneHeight } );
			
		};
	}
	
	timer = setInterval(toRun,4000);
	
	oRotate.onmouseover = function(){
		clearInterval(timer);
	};
	oRotate.onmouseout = function(){
		timer = setInterval(toRun,4000);
	};
	
	function toRun(){
		if(iNow == aLiOl.length-1){
			iNow = 0;
		}
		else{
			iNow++;
		}
		for(var i=0;i<aLiOl.length;i++){
			aLiOl[i].className = '';
		}
		aLiOl[iNow].className = 'active';
		startMove( oRotateList , { top : - iNow*oneHeight } );
		
	}
 


var oBlurList=document.getElementById("blurList");
	var aLi=oBlurList.children;
	var oPrev=document.getElementById("prev");
	var oNext=document.getElementById("next");
	var arr=[];
	//arr.unshift(arr.pop());
	//arr.push(arr.shift());
	for(var i=0;i<aLi.length;i++)
	{
		var oSpan=aLi[i].children[0];
		arr[i]={left:getStyle(aLi[i],"left"),opacity:getStyle(aLi[i],"opacity"),scale:getStyle(aLi[i],"-webkit-transform")||getStyle(aLi[i],"-moz-transform")||getStyle(aLi[i],"-ms-transform")||getStyle(aLi[i],"-o-transform"),zIndex:getStyle(aLi[i],"z-index"),alpha:getStyle(oSpan,"opacity")};
	}
	oPrev.onclick=function()
	{
		arr.unshift(arr.pop());
		toStyle();
	};
	oNext.onclick=function()
	{
		arr.push(arr.shift());
		toStyle();
	};
	function toStyle()
	{
		for(var i=0;i<aLi.length;i++)
		{
			var oSpan=aLi[i].children[0];
			aLi[i].style.left=arr[i].left;
			aLi[i].style.opacity=arr[i].opacity;
			aLi[i].style.WebkitTransform=arr[i].scale;
			aLi[i].style.MozTransform=arr[i].scale;
			aLi[i].style.OTransform=arr[i].scale;
			aLi[i].style.MsTransform=arr[i].scale;		
			aLi[i].style.zIndex=arr[i].zIndex;	
			oSpan.style.opacity=arr[i].alpha;		
		}	
	}


function getStyle(obj,attr)
{
        if( obj.currentStyle){
                return obj.currentStyle[attr];        
        }
        return getComputedStyle(obj)[attr];        
}
}

exports.init=init;
});

