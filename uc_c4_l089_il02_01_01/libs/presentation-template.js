//从内部设置外部舞台的大小
var cont, iframe, initW, initH, ratio, resizeFactor, offsetLeft, offsetTop;

window.init = function (empiriaAPI) {
    var empiriaObject = {};
    var ia = new InteractiveActivity(empiriaAPI);
	
    cont = $('#container');
	$(cont).css({'position':'absolute'})
    iframe = _.find($('iframe', parent.document), function (item) {
        return item.src.indexOf('uc_c4_l089_il02_01_01') !== -1;
    });

	
    initW = parseInt($(cont).css('width'));

    initH = parseInt($(cont).css('height'));
    ratio = initH / initW;

    resizeFactor = 1;
    $(window).on('resize', function () {
        onResize();
    });

    $(window).on('unload', function () {
        $(window).off('resize');
    });
	
    onResize();
    empiriaObject.setStateOnExternal = function (status) {
        ia.loadState(status);
    };

    empiriaObject.getStateFromExternal = function () {
        return ia.saveState();
    };

    empiriaObject.reset = function () {
        ia.reset();
    };

    empiriaObject.lock = function () {
    };

    empiriaObject.unlock = function () {
    };
    empiriaObject.showCorrectAnswers = function(){
   	 	//alert("显示答案")
    }
    empiriaObject.hideCorrectAnswers = function(){
    	//	alert("隐藏答案")
    }
    
    empiriaObject.markCorrectAnswers = function(){
    		//alert("显示标志正确答案")
    }
    empiriaObject.unmarkCorrectAnswers = function(){
    	//	alert("隐藏标志正确答案")
    }
    
    empiriaObject.markWrongAnswers = function(){
    	//	alert("显示标志错误答案")
    }
    empiriaObject.unmarkWrongAnswers = function(){
    	//	alert("隐藏标志错误答案")
    }

    return empiriaObject;
};

function onResize() {
	
    var contWidth = $(cont).width();
    var contHeight = contWidth * ratio;
    $(iframe).attr({"scrolling":"no"});
    $(cont).css({'height': contHeight + 'px','left':($(iframe).width()/2-contWidth/2)+'px'});
	$(iframe).css({'height': $(cont).height()+30+"px"});
    resizeFactor = contWidth / initW;
    offsetLeft = $(cont).offset().left + $(iframe).offset().left;
    offsetTop = $(cont).offset().top + $(iframe).offset().top;
}