(function(){
	
	function defineBannerHeight(){
		
		var oldHeight = ($('#banner div').css('width')).replace("px", "");
		
		var height = (oldHeight / 5) * 3;
	
		$('#container-banner').css('height', height + "px");
		
		$('#banner img').css('height', (height - 54) + "px");
		
	}
	defineBannerHeight();
	
	var timeout = null;
	
	$(window).resize(function(){
		
		if(timeout !== null){
			clearTimeout(timeout);
			timeout = null;
		}
		
		timeout = setTimeout(defineBannerHeight, 80);
		
	});
	
	function toggleBanner(direction){
		
		$(figure[figNum]).fadeOut();
		
		if(direction === "left"){
			switch(figNum){
				case 0:
					figNum = 2;
					break;
				case 3:
					figNum = 1;
					break;
				case 2:
					figNum = 0;
					break;
				case 1:
					figNum = 3;
					break;
			}
		}
		
		if(figNum === 3){
			figNum = 0;
		}else{
			figNum++;
		}
		$(figure[figNum]).fadeIn(800);
		
	}
	
	$('#left-btn, #right-btn').click(function(){
		toggleBanner((this.id).replace('-btn', ""));
	})
	
	var figure = $("#banner figure");
	var figNum = 0;
	
	var interval = setInterval(toggleBanner, 5000);
	
	$('#banner').hover(function(){
		clearInterval(interval);
	}, function(){
		interval = setInterval(toggleBanner, 5000);
	})
	
}());