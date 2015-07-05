// JavaScript Document


define(function(require,exports){
	
	var oNav=document.getElementById('nav');
    var aA=oNav.getElementsByTagName('a');
	var aLi=oNav.getElementsByTagName('li');
    var oBodyer=document.getElementById('bodyer');
    var aDiv=oBodyer.children;

/*    var oNav=document.getElementById('nav');
	var aNavLi=oNav.getElementsByTagName('li');
	var iTime=0;
	var num=0; 
	 for(var i=0;i<aNavLi.length;i++)
	 {
		 toDown(iTime)
		 iTime+=100;
	 } 
	  
	  function toDown(iTime)
	  {
		  setTimeout(function(){
			  aNavLi[num].style.WebkitTransform="translateY(0px);";
			  num++;
		  },iTime)
	  }
	*/
	window.onOff=false;
	window.onhashchange=function()
	{
	    if(window.onOff){
			window.location.reload();
		}	
	}

    var bBtn=true;
	if(bBtn)
	{
       require('loading.js').loading();
	}

	
	require('hide.js').hide();
	
})

