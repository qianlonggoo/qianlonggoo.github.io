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
			if(aDiv[i].dataset.hash=='words')
			{
		       startMove(aDiv[i],{opacity:100});
			}
		}
		
		
		var iPage=8;
		var iNow=0;
		createFoot();
		function createFoot()
		{
			var oWordFooter=document.getElementById("WordFooter");
			var iLenght=Math.ceil(date2.length/iPage);
			var sHtml='<a href="javascript:;">首页</a><a href="javascript:;" >上一页</a><p>';
			for(var i=0;i<iLenght;i++)
			{
				sHtml+='<a href="javascript:;">'+(i+1)+'</a>';
			}
			sHtml+='</p><a href="javascript:;">下一页</a><a href="javascript:;">末页</a>';
			oWordFooter.innerHTML=sHtml;
			var aA=oWordFooter.getElementsByTagName("a");
	        var oP=oWordFooter.getElementsByTagName("p")[0];
	        var aBtns=oP.getElementsByTagName("a");
			    for(var i=0;i<aBtns.length;i++)
				{
				   	aBtns[i].index=i;
					aBtns[i].onclick=function()
					{
						  iNow=this.index;
						  hideWordsList(iNow);
					}
				}
				
				aA[0].onclick=function()
				{
					 hideWordsList(0);
				};
				aA[1].onclick=function()
				{
					 hideWordsList(iNow-1);
				};
				aA[aA.length-2].onclick=function()
				{
					hideWordsList(iNow+1);
				};
				aA[aA.length-1].onclick=function()
				{
					hideWordsList(aBtns.length-1);
				};
			
			create(0);
		}
		
		
		
		function create(iNub)
		{
			var oWordBox=document.getElementById("WordBox");
			var sHtml="";
			var iStart=iNub*iPage;
			var iEnd=iStart+iPage;
			iEnd=iEnd>date2.length?date2.length:iEnd;
			for(var i=iStart;i<iEnd;i++)
			{
				sHtml+='<ul class="wordsList"><p class="WordText" id="WordText">'+date2[i].text+'</p><span class="dateView" id="dateView">'+date2[i].time+'</span></ul>';
			}
			oWordBox.innerHTML=sHtml;
		}
		
		var iTime=10;
		
		
		function toDown(){
		var aWordsList=document.getElementsByClassName('wordsList')
		for(var i=0;i<aWordsList.length;i++)
		{
		   	openWordsList(aWordsList[i],iTime);
			iTime+=10;
		}
		}
		
		toDown()
		
		function hideWordsList(num)
		{
			var oWordFooter=document.getElementById("WordFooter");
			var oWordBox=document.getElementById("WordBox").innerHTML='';
			create(num)
			var aA=oWordFooter.getElementsByTagName("a");
	        var oP=oWordFooter.getElementsByTagName("p")[0];
	        var aBtns=oP.getElementsByTagName("a");
			aBtns[num].className="";
			aBtns[num].className="active";
			if(num==0)//如果数据处在第零页和第一页  则首页和上一页 都不显示
			{
				aA[0].style.display="none";
				aA[1].style.display="none";
			}
			else
			{
				aA[0].style.display="inline-block";
				aA[1].style.display="inline-block";
			}
			if(num==aBtns.length-1)//如果处于最后一页则最后一个a和倒数第二个不显示
			{
				aA[aA.length-1].style.display="none";
				aA[aA.length-2].style.display="none";
			}
			else
			{
				aA[aA.length-1].style.display="inline-block";
				aA[aA.length-2].style.display="inline-block";
			}
			for(var i=0;i<aA.length;i++)
			{
				aA[i].style.opacity=1;
			}
			
			toDown()
		}
		
		
		
		 function openWordsList(obj,iTime)
		{
			setTimeout(function(){
				obj.style.WebkitTransform="rotateX(0deg)";	
				obj.style.MozTransform="rotateX(0deg)";	
				obj.style.MsTransform="rotateX(0deg)";	
				obj.style.OTransform="rotateX(0deg)";	
				obj.style.opacity=1;
			},iTime);
			/*function end()
			{
				this.removeEventListener("webkitTransitionEnd",end,false);
				this.removeEventListener("transitionend",end,false);
				obj.style.opacity=1;
			};*/
		}
		
		function getTop(obj)
		{
			var iTop=0;
			while(obj)
			{
				iTop+=obj.offsetTop;
				obj=obj.offsetParent;
			}
			return iTop;
		}
	
	}
	exports.init=init;
})