// JavaScript Document


/*function move(obj, iTarget)
{
	var iSpeed=0;
    var left=0;
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		iSpeed+=(iTarget-obj.offsetLeft)/5;
		iSpeed*=0.7;
		
		left+=iSpeed;
		
		if(Math.abs(iSpeed)<1 && Math.abs(left-iTarget)<1)
		{
			clearInterval(obj.timer);
			obj.style.left=iTarget+'px';
		}
		else
		{
			obj.style.left=left+'px';
		}
	}, 30);
}*/  //注释  不用该运动 太过花哨

window.onload=function()
{
  var oNav=document.getElementById('nav');
   var aA=oNav.getElementsByTagName('a');
   var aLi=oNav.getElementsByTagName('li');
   var oBodyer=document.getElementById('bodyer');
   var aDiv=oBodyer.children;
   var oBgLeft={
	     "index":"26",
		 "aboutUs":"141",
		 "study":"256",
		 "words":"371",
		 "years":"486",
		 "message":"601"
		 }
   for(var i=0;i<aA.length;i++)
   {
	   aA[i].onclick=function()
	   {
		   var hash=this.dataset.hash;
		       window.location.hash=hash;
			   oBg.style.left=this.offsetLeft+'px';
		       for(var i=0;i<aDiv.length;i++)
			   {
				   aDiv[i].style.display='none';
				   if( aDiv[i].dataset.hash==hash)
				   {
					   aDiv[i].style.display='block';
				   }
			   }
	   }   
   }
   
   var firstHash=window.location.hash.substring(1)||'index';
   window.onhashchange = function(){
		window.location.reload();
		//move(oBg,oBgLeft);
	};
	
	/*oBg.style.left=oBgLeft[firstHash]+'px';*/
	
	for(var i=0;i<aDiv.length;i++)
	 {
		aDiv[i].style.display='none';
			if( aDiv[i].dataset.hash==firstHash)
		{
				aDiv[i].style.display='block';
		}
	}
   
  for(var i=0;i<aLi.length;i++)
   {
	   aLi[i].onmouseover=function()
	   {
		     move(oBg,this.offsetLeft);
	   }
   }
   
   for(var i=0;i<aLi.length;i++)
   {
	   aLi[i].onmouseout=function()
	   {
		     move(oBg,oBgLeft[firstHash]);
	   }
   }

var oRotateList=document.getElementById("rotateList");
var innerHTML='';
for(var i=0;i<11;i++)
{
	innerHTML+='<li><div><span></span><span></span><span></span><span></span><em></em><em></em></div></li>'
}
oRotateList.innerHTML=innerHTML;

var oBtns=document.getElementById("btns");
var oRotate=document.getElementById("rotate");

tabPic(oRotateList,oBtns);
function tabPic(obj,btns)
{
	var aLi=obj.getElementsByTagName("li");
	var aBtn=btns.getElementsByTagName("li");
	var oUl=document.getElementsByTagName('ul')[0];
	var iDis=aLi[0].offsetWidth;
	var iDeg=90;
	aBtn.iNow=0;
	
	var num=0;
	var timer=null;
	oRotate.onmouseover=function()
	{
	  clearInterval(timer);	
	}
	
	oRotate.onmouseout=function()
	{
	  timer=setInterval(function(){
		num++;
		if(num>4)
		{
			num=0;
		}
		autoMove()
		},5000);
	}
	
	function autoMove()
	{
	for(var i=0;i<aLi.length;i++)
			{
				starMove(aLi[i],-num*iDeg,aBtn);
			}
	}
	
	timer=setInterval(function(){
		num++;
		if(num>4)
		{
			num=0;
		}
		autoMove()
		},5000);
		autoMove()
	for(var i=0;i<aBtn.length;i++)
	{
		oUl.title=aBtn[i].title='妙味课堂-www.miaov.com';
		aBtn[i].index=i;
		aBtn[i].onclick=function()
		{
			num=this.index;
			for(var i=0;i<aLi.length;i++)
			{
				starMove(aLi[i],-this.index*iDeg,aBtn);
			}
		};
	}
	for(var i=0;i<aLi.length;i++)
	{	
		aLi[i].index=i;
		aLi[i].iDeg=0;
		aLi[i].off=false;
		aLi[i].onmousedown=function(ev)
		{
			if(this.off)
			{
				return;
			}
			var ev=event||ev;
			var iNowX=ev.clientX;
			var iNowDeg=0;
			var oThis=this;
			var iLength=0;
			var iMin=0;
			var iMax=0;
			document.onmousemove=function(ev)
			{
				if(Math.abs(iNowDeg)>=80)
				{
					return;
				}
				var ev=event||ev;
				iNowDeg+=(ev.clientX-iNowX)/iDis*(iDeg-30);
				iLength=Math.abs(parseInt(iNowDeg/9));
				iMin=oThis.index-iLength>0?oThis.index-iLength:0;
				iMax=oThis.index+iLength<aLi.length?oThis.index+iLength:aLi.length-1; 
				for(var i=iMin;i<=iMax;i++)
				{
					aLi[i].iDeg+=(ev.clientX-iNowX)/iDis*(iDeg-30);
					setDeg(aLi[i]);
				}
				iNowX=ev.clientX;			
			}
			document.onmouseup=function()
			{
				var iEnd=0;
				document.onmouseup=document.onmousemove=null;
				if( Math.abs(iNowDeg)>iDeg/4)
				{
					iEnd=iNowDeg>0?90-iNowDeg:-(90-Math.abs(iNowDeg));
				}
				else
				{
					iEnd=-iNowDeg;
				}				
				iEnd=Math.round(iEnd+oThis.iDeg);
				for(var i=0;i<aLi.length;i++)
				{
					starMove(aLi[i],iEnd,aBtn);
				}
			}
			return false;
		};
	}
}
function starMove(obj,iTarget,aBtn)
{
	if(obj.timer)
	{
		clearInterval(obj.timer);
	}
	obj.off=true;
	var iSpeed=0;
	var iNow= iTarget>=0? Math.abs((aBtn.length-iTarget/90)%aBtn.length): Math.abs((iTarget/90) % aBtn.length);
	if(iNow!=aBtn.iNow)
	{
		aBtn[aBtn.iNow].className="";
		aBtn.iNow=iNow;
		aBtn[aBtn.iNow].className="active";
	}
	obj.timer=setInterval(
		function()
		{
			iSpeed+=(iTarget-obj.iDeg)/12;
			iSpeed*=0.86;
			if(Math.abs(obj.iDeg-iTarget)<0.5 && Math.abs(iSpeed)<0.5)
			{
				clearInterval(obj.timer);
				obj.iDeg=iTarget;
				obj.off=false;
			}
			else
			{	
				obj.iDeg+=iSpeed;
			}
			setDeg(obj);
		},24
	);
}
function setDeg(obj)
{
	var oDiv=obj.children[0];
	with(oDiv.style)
	{
		WebkitTransform="translateZ(-100px) rotateY("+obj.iDeg+"deg)";
	}
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
		arr[i]={left:getStyle(aLi[i],"left"),opacity:getStyle(aLi[i],"opacity"),scale:getStyle(aLi[i],"-webkit-transform"),zIndex:getStyle(aLi[i],"z-index"),alpha:getStyle(oSpan,"opacity")};
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
			aLi[i].style.zIndex=arr[i].zIndex;	
			oSpan.style.opacity=arr[i].alpha;			//arr[i]={left:getStyle(aLi[i],"left"),opacity:getStyle(aLi[i],"opacity"),scale:getStyle(aLi[i],"-webkit-transform")};
		}	
	}
};
function getStyle(obj,attr)
{
        if( obj.currentStyle){
                return obj.currentStyle[attr];        
        }
        return getComputedStyle(obj)[attr];        
}


