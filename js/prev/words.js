// JavaScript Document// JavaScript Document
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
		sHtml+='<ul class="wordsList" id="wordsList"><p class="WordText" id="WordText">'+date2[i].text+'</p><span class="dateView" id="dateView">'+date2[i].time+'</span></ul>';
	}
	oWordBox.innerHTML=sHtml;
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



