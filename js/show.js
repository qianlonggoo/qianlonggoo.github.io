// JavaScript Document
define(function(require,exports,module){
		
	function show()
	{
		var oNav=document.getElementById('nav');
		var aA=oNav.getElementsByTagName('a');
		var aLi=oNav.getElementsByTagName('li');
		var oBodyer=document.getElementById('bodyer');
		var aDiv=oBodyer.children;
		var firstHash=window.location.hash.substring(1)||'index';
		
		for(var i=0;i<aDiv.length;i++)
		{
			aDiv[i].style.display='none';
			if(aDiv[i].dataset.hash==firstHash)
			{
			   aDiv[i].style.display='block';
			   switch(firstHash)
				{
					case 'index':
						require.async('indexIn.js',function(ex){
							ex.init()})
					break;
					case 'aboutUs':
						require.async('aboutUsIn.js',function(ex){
							ex.init()})
					break;
					case 'study':
						require.async('studyIn.js',function(ex){
							ex.init()})
					break;
					case 'words':
						require.async('wordsIn.js',function(ex){
							ex.init()})
					break;
					case 'years':
						require.async('yearsIn.js',function(ex){
							ex.init()})
					break;
						case 'message':
						require.async('messageIn.js',function(ex){
							ex.init()})
					break;
				}	
			}
		}
	}
	exports.show=show;
})