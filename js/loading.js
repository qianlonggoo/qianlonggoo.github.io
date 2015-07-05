// JavaScript Document
define(function(require,exports,module){
		
	function loading()
	{
		var oBody=document.getElementsByTagName('body')[0];
        var aDiv=oBody.children;
		for(var i=1;i<aDiv.length;i++)
		{
			aDiv[i].style.display='none';
		}
		
        var oloadtext=document.getElementById("loadtext");
		var oload=document.getElementById("load");
		var oloadIco1=document.getElementById("loadIco1");
		var oloadIco2=document.getElementById("loadIco2");
		var iLength=0;
		var time=0;
        var aUrl=["style/index.css","style/main.css","style/aboutUs.css","style/message.css","style/study.css","style/words.css","style/years.css"];

	
	function toLOading(time){
		
		setTimeout(function(){
		var oLink = document .createElement( 'link' );
		oLink.type = "text/css" ;
		oLink.rel = "stylesheet"
		oLink.href = aUrl[num];
		num++;
		oLink.onload=function()
	{
		
			iLength++;
		  oloadtext.innerHTML=parseInt(iLength/aUrl.length*100)+"%";
		if(iLength==aUrl.length)
		{
			for(var i=0;i<aDiv.length;i++)
			{
				if(i==0)
				{
					aDiv[0].style.display='none';
				}else
				{
					aDiv[i].style.display='block';
					startMove(aDiv[i],{opacity:100})
				}
			}
			require('show.js').show();	
		}}
		
		oLink.onerror=function()
	{
		iLength++;
		oloadtext.innerHTML=parseInt(iLength/aUrl.length*100)+"%";
		if(iLength==aUrl.length)
		{
			oload.style.WebkitAnimationPlayState="paused";	
			oloadIco1.style.WebkitAnimationPlayState="paused";	
			oloadIco2.style.WebkitAnimationPlayState="paused";
		}
	};
	oHead.appendChild(oLink);
	
	},time);
		};


var oHead=document.getElementsByTagName('head')[0];
var num=0;

for(var i=0;i<aUrl.length;i++)
{	
	toLOading(time);
	time+=100;	
}
	}
	exports.loading=loading;
})