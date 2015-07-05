

var oShowUsList = document.querySelector('.showUsList');
	var oShowUs=document.getElementById('showUs')
	var aLiUl = oShowUsList.children;
	var oShowUsBtn = document.querySelector('.showUsBtn');
	var aImg=oShowUsBtn.getElementsByTagName('img');
	var oneWidth = aLiUl[0].offsetWidth;
	var iNow = 0;
	var bBtn = true;
	
	for(var i=1;i<aLiUl.length;i++){
		aLiUl[i].style.opacity=0;
		aLiUl[i].style.left = oneWidth + 'px';
	}
	
	
	for(var i=0;i<aImg.length;i++){
		aImg[i].index = i;
		aImg[i].onclick = function(){
			
			if(bBtn){
				bBtn = false;
			for(var i=0;i<aImg.length;i++){
				aImg[i].className = '';
			}
			this.className = 'active';
			
			if(iNow < this.index){
				aLiUl[this.index].style.left = oneWidth + 'px';
				startMove( aLiUl[iNow] , { left : - oneWidth,opacity:0} );
			}
			else if(iNow > this.index){
				aLiUl[this.index].style.left = - oneWidth + 'px';
				startMove( aLiUl[iNow] , { left :  oneWidth ,opacity:0} );
			}
			
			startMove( aLiUl[this.index] ,{ left : 0,opacity:100 },function(){
				bBtn = true;
				
			} );
			iNow = this.index;
			
			}
			
		};
	}

	
	
	var aPaperflip=document.getElementsByClassName('paper-flip')
	 for(var i=0;i<aPaperflip.length;i++)
	 {
	   aPaperflip[i].addEventListener("click",function(e){
		  if(e.target.className=="btn-close"){
		    this.className = "paper-flip";
		  } else {
		    this.className = "paper-flip folded";
		  }
		});	 
	 }
	
	
