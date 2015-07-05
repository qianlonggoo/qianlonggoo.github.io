// JavaScript Document
define(function(require,exports,module){
	
	function init(nextHash)
	{
		var oNav=document.getElementById('nav');
		var aA=oNav.getElementsByTagName('a');
		var aLi=oNav.getElementsByTagName('li');
		var oBodyer=document.getElementById('bodyer');
		var aDiv=oBodyer.children;
		for(var i=0;i<aDiv.length;i++)
		{
			if(aDiv[i].dataset.hash=='aboutUs')
			{
		       startMove(aDiv[i],{opacity:0},function(){
				   window.location.hash=nextHash;
				   require('show.js').show();   
				});
			}
		}
	}
	exports.init=init;
	
})