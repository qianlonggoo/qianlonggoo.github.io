// JavaScript Document
var iPage=8;
var iNow=0;
createFoot();
function createFoot()
{
	var oFooter=document.getElementById("footer");
	var iLenght=Math.ceil(date.length/iPage);
	var sHtml='<a href="javascript:;">首页</a><a href="javascript:;" >上一页</a><p>';
	for(var i=0;i<iLenght;i++)
	{
		sHtml+='<a href="javascript:;">'+(i+1)+'</a>';
	}
	sHtml+='</p><a href="javascript:;">下一页</a><a href="javascript:;">末页</a>';
	oFooter.innerHTML=sHtml;
	var aA=oFooter.getElementsByTagName("a");
	var oP=oFooter.getElementsByTagName("p")[0];
	var aBtns=oP.getElementsByTagName("a");
	
	
	for(var i=0;i<aBtns.length;i++)
	{
		aBtns[i].onOff=true;
		aBtns[i].index=i;
	}
	aBtns[0].onOff=false;
	
	oP.onclick=function(ev)
	{
		var ev=ev||event;
		var target=ev.target||ev.srcElement;
		toTab(target,target.index)
	}
	for(var i=0;i<aBtns.length;i++)
	{
		(function(a){
			aBtns[a].onclick=function()
			{
				toTab(this,a)
				
			};
		})(i);//闭包的形式  可以做成是事件冒泡的方法
	}
	
	function toTab(obj,n)
	{
		
		if(obj.onOff)
		{
			footerHide(n);
		}
		for(var i=0;i<aA.length;i++)
		{
			aA[i].onOff=true;
		}
		obj.onOff=false;
	}
	
	
	
	aA[0].onclick=function()
	{
		footerHide(0);
	};
	aA[1].onclick=function()
	{
		footerHide(iNow-1);
	};
	aA[aA.length-2].onclick=function()
	{
		footerHide(iNow+1);
	};
	aA[aA.length-1].onclick=function()
	{
		footerHide(aBtns.length-1);
	};
	create(0);
}
function create(iNub)
{
	var oList=document.getElementById("messageList");
	var sHtml="";
	var iStart=iNub*iPage;
	var iEnd=iStart+iPage;
	iEnd=iEnd>date.length?date.length:iEnd;
	for(var i=iStart;i<iEnd;i++)
	{
		sHtml+='<li><div class="message-box"><div class="pic"></div><div class="ico"></div><div class="content text"><div class="content-heade"><h3 class="Wname">'+date[i].Wname+'</h3><span class="Wtime">'+date[i].Wtime+'</span></div><p class="content">'+date[i].Wmessage+'</p></div><div class="reply text"><div class="content-heade"><h3>'+date[i].Rname+'</h3><span class="Rtime">'+date[i].Rtime+'</span></div><p class="content">'+date[i].Rmessage+'</p></div></div></li>';
	}
	oList.innerHTML=sHtml;
	footerShow(iNub);
}
function footerHide(iNub)
{
	var oFooter=document.getElementById("footer");
	var aA=oFooter.getElementsByTagName("a");
	for(var i=0;i<aA.length;i++)
	{
		aA[i].style.opacity=0;
		aA[i].addEventListener("webkitTransitionEnd",function(ev){
			 ev.cancelBubble=true;
		},false);	
	}
	oFooter.style.transition=".5s .5s";
	oFooter.addEventListener("webkitTransitionEnd",end,false);
	oFooter.style.marginTop="50px";
	oFooter.style.opacity=0;
	function end(e)
	{
		this.removeEventListener("webkitTransitionEnd",end,false);
		//console.log(e,e.type,e.propertyName);
		listHide(iNub);
	}
}
function listHide(iNub)
{
	var oList=document.getElementById("messageList");
	var oFooter=document.getElementById("footer");
	var aLi=oList.children;
	for(var i=0;i<aLi.length;i++)//设置向下消失
	{
		aLi[i].style.transition=".5s "+(aLi.length-1)*100+"ms";
		aLi[i].style.opacity=0;
		aLi[i].style.marginTop="50px";
		aLi[i].addEventListener("webkitTransitionEnd",function(ev){
			 ev.cancelBubble=true;
		},false);
	}
	oList.style.transition="1s .5s";
	oList.style.height="0px";
	oFooter.style.transition=".5s 1.5s";
	oFooter.style.opacity=1;
	oFooter.style.marginTop="0";
	oList.addEventListener("webkitTransitionEnd",end,false);
	function end()
	{
		this.removeEventListener("webkitTransitionEnd",end,false);
		create(iNub);
	};
}
function footerShow(iNub)
{
	var oFooter=document.getElementById("footer");
	var aA=oFooter.getElementsByTagName("a");
	var oP=oFooter.getElementsByTagName("p")[0];
	var aBtns=oP.getElementsByTagName("a");
	aBtns[iNow].className="";
	iNow=iNub;
	aBtns[iNow].className="active";
	if(iNow==0)//如果数据处在第零页和第一页  则首页和上一页 都不显示
	{
		aA[0].style.display="none";
		aA[1].style.display="none";
	}
	else
	{
		aA[0].style.display="inline-block";
		aA[1].style.display="inline-block";
	}
	if(iNow==aBtns.length-1)//如果处于最后一页则最后一个a和倒数第二个不显示
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
	 showList();
}
function showList()//让整个列表展开  但是li  还没有做特效
{
	var oList=document.getElementById("messageList");
	var iHeight=0;
	var aLi=oList.children;
	for(var i=0;i<aLi.length;i++)
	{
		iHeight+=aLi[i].offsetHeight;
		aLi[i].off=true;
	}
	oList.style.height=iHeight+"px";
	oList.addEventListener("webkitTransitionEnd",end,false);//准备让li展开的事件
	function end()
	{
		oList.removeEventListener("webkitTransitionEnd",end,false);
		showLi();
		window.onresize=window.onscroll=function()
		{
			showLi();
		};
	}
}
function showLi()//只是让可视区里面的li  show出来
{
	var oList=document.getElementById("messageList");
	var aLi=oList.children;
	var iTop=document.body.scrollTop+document.documentElement.clientHeight;
	var iTime=0;
	for(var i=0;i<aLi.length;i++)
	{
		if(getTop(aLi[i])<iTop && aLi[i].off)
		{
			aLi[i].off=false;//控制li不重复
			openLi(aLi[i],iTime);
			iTime+=100;	
		}
	}
}
function openLi(obj,iTime)
{
	var oBox=obj.children[0];
	var oReply=oBox.children[oBox.children.length-1];
	oBox.addEventListener("webkitTransitionEnd",end,false);
	setTimeout(function(){
		oBox.style.WebkitTransform="rotateY(0deg)";	
	},iTime);
	function end()
	{
		this.removeEventListener("webkitTransitionEnd",end,false);
		oReply.style.opacity=1;
		oReply.style.WebkitTransform="rotateX(0deg)";
	};
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



