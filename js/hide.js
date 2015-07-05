// JavaScript Document
define(function(require,exports){
	
	function hide()
	{
		var oNav=document.getElementById('nav');
		var aA=oNav.getElementsByTagName('a');
		var aLi=oNav.getElementsByTagName('li');
		var oBodyer=document.getElementById('bodyer');
		var aDiv=oBodyer.children;
		
		for(var i=0;i<aA.length;i++)
		{
			aA[i].onclick=function()
			{
				
			     window.onOff=false;
				 var nextHash=this.dataset.hash;
				 var firstHash=window.location.hash.substring(1)||'index';
				 /*window.location.hash=hash;*/
				 if(nextHash!=firstHash)
				 {
				  switch(firstHash)
				  {
					 	case 'index':
							require.async('indexOut.js', function (ex){
							ex.init(nextHash);});
						break; 
					    case 'aboutUs':
							require.async('aboutUsOut.js', function (ex){
							ex.init(nextHash);});
						break;
						  case 'study':
							require.async('studyOut.js', function (ex){
							ex.init(nextHash);});
						break; 
						  case 'words':
							require.async('wordsOut.js', function (ex){
							ex.init(nextHash);});
						break;   
					    case 'years':
							require.async('yearsOut.js', function (ex){
							ex.init(nextHash);});
						break;
						case 'message':
							require.async('messageOut.js', function (ex){
							ex.init(nextHash);});
						break;     
					    
					  
					     
					  
				  } 
				   
				 }
			}
		}
	}
	exports.hide=hide;
	
})