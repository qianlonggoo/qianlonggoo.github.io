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
			if(aDiv[i].dataset.hash=='index')
			{
		       startMove(aDiv[i],{opacity:100});
			}
		}
		require.async('index.js',function(ex){
		ex.init()})
	}
	exports.init=init;
})