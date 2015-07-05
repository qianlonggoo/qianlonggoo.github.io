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
			if(aDiv[i].dataset.hash=='study')
			{
		       startMove(aDiv[i],{opacity:100});
			}
		}
		
		var oArticleBox=document.getElementById('ArticleBox');
		var aoArticleBoxLi=oArticleBox.getElementsByTagName('li');
		var oArticleList=document.getElementById('articleList');
		var aArticleListLi=oArticleList.getElementsByTagName('li');
		for(var i=0;i<aArticleListLi.length;i++)
		{
			aArticleListLi[i].index=i;
			aArticleListLi[i].onclick=function()
			{
				for(var i=0;i<aoArticleBoxLi.length;i++)
				{
					aoArticleBoxLi[i].style.opacity=0;
				}
				aoArticleBoxLi[this.index].style.opacity=1;
			}
		}
		
			}
			exports.init=init;
})