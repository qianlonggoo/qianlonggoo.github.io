// JavaScript Document

var oYearList=document.getElementById('yearList');
	var aDiv=oYearList.getElementsByTagName("div");
	var oTimer=null;
	
	function open()
	{
		var i=0;
		clearInterval(oTimer);
		oTimer=setInterval(function(){
			aDiv[i].className="open";
			i++;
			if(i==aDiv.length)
			{
				clearInterval(oTimer);
			}
		},100);
	}
	open()
	
	function close()
	{
	  var i=aDiv.length-1;
		clearInterval(oTimer);
		oTimer=setInterval(function(){
			aDiv[i].className="";
			i--;
			if(i<0)
			{
				clearInterval(oTimer);
			}
		},50);		
	}
	
	
	// JavaScript Document


   waterfall();	
   var dataInt={'data':[{'src':'1.jpg'},{'src':'2.jpg'},{'src':'3.jpg'},{'src':'4.jpg'},{'src':'5.jpg'},{'src':'6.jpg'},{'src':'7.jpg'},{'src':'8.jpg'},{'src':'9.jpg'},{'src':'10.jpg'},{'src':'11.jpg'},{'src':'12.jpg'},{'src':'13.jpg'},{'src':'14.jpg'}]};
   /* window.onscroll=*/function toCreate(){
         if(checkScrollSide()){
            $.each( dataInt.data, function( index, value ){
                var $box = $('<div>').addClass('box').appendTo( $( "#picsMain" ) );
                var $pic = $('<div>').addClass('pic').appendTo( $box );
                $('<img>').attr('src','./imgs/' + $( value).attr( 'src') ).appendTo($pic);
            });
            waterfall();
			changeHeight();
        };
    }

 function waterfall()//主要函数用来设置位置
 {
	 var $aBox=$('#picsMain .box');//前面加$意思是jquery对象
	 //1  设置picsMain的宽度和总共的列数
	 var iBoxW=$aBox.eq(0).outerWidth();
	 
	 //一行中可以容纳的列数
	 var cols=Math.floor($('#picsMain').width()/iBoxW);
	 //设置picsMain的宽度以及局中显示
	     $('#picsMain').css({
		    'width':iBoxW*cols+'px',
			'margin':'0 auto'	 
		 });
     //2 找出一行中最高度最小的 并把下一个box 插入到其下面
	 var boxHArr=[];//用来放置第一行的各个块的高度
	 
	     $aBox.each(function(index, element) {
            if(index<cols)
			{
				boxHArr[index]=$aBox.eq(index).outerHeight();
			}else
			{
				var minH=Math.min.apply(null,boxHArr);
				var minIndex=$.inArray(minH,boxHArr);
				    $(this).css({
					   'position':'absolute',
					   'top':boxHArr[minIndex]+'px',
					   'left':$aBox.eq(minIndex).position().left	
					});
					boxHArr[minIndex]+=$aBox.eq(index).outerHeight();
			}
        });
 }
 
 function checkScrollSide()
 {
	 var lastBox=$('#picsMain .box').last();
	 var lastBoxH=Math.floor(lastBox.outerHeight()/2)+lastBox.get(0).offsetTop;
	 var scrollTop=$('.scrollInner').offset().top;
	 var clientH=$(window).height();
	return (lastBoxH<(scrollTop+clientH))?true:false; 
 }


    var oScrollWrap =$('.scrollWrap');
	var oScrollInner = $('.scrollInner');
	var oPicsWrap =$('#picsWrap');
	var oPicsMain = $('#picsMain');
	function changeHeight(){
	var lastBox=$('#picsMain .box').last();
	var lastBoxH=Math.floor(lastBox.outerHeight()/2)+lastBox.get(0).offsetTop;
	     oPicsMain.css({"height":lastBoxH})
	var iScale0=oPicsMain.innerHeight()/500;
	     if(iScale0>=1)
		 {
	         oScrollInner.css({'height':oScrollWrap.innerHeight()*1/iScale0});
			 
		 }else
		 {
			 oScrollInner.css({"height":oScrollWrap.innerHeight()});
		 }
	}
		 
	changeHeight()	
	 
	
	document.getElementsByClassName('scrollInner')[0].onmousedown = function(ev) {
		
		var ev = ev || event;
		
		var disY = ev.clientY - this.offsetTop;
		
		document.onmousemove = function(ev) {
			toCreate();
	        var iMaxTop = oScrollWrap.innerHeight() - oScrollInner.innerHeight();
			var ev = ev || event;
			
			var T = ev.clientY - disY;
			
			if ( T < 0 ) {
				T = 0;
			} else if ( T > iMaxTop ) {
				T = iMaxTop;
			}
			oScrollInner.css({"top":T})
			var iScale = T / iMaxTop;
			
			document.title = iScale;
			oPicsMain.css({"top":oPicsWrap.innerHeight()-oPicsMain.innerHeight() * iScale-600})

			
		}
		
		document.onmouseup = function(ev) {
	
			document.onmousemove = document.onmouseup = null;
			
		}
		
		return false;
		
	}
	
 $('#picsWrap').mousemove(function(){
	   $('.scrollWrap').css({"opacity":1});
	 })
$('#picsWrap').mouseleave(function(){
	  $('.scrollWrap').css({"opacity":0.7});
	})	 