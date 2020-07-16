$(function() {
    
     $('.bxslider > div').each(function(){   //1단계           

        if ($(window).width() < 980) {
            //alert();
            var img = $(this).find('img'); //2단계  find ==> 선택자를 찾는 명령
            var img_pc = img.attr('src'); //3단계  
            var img_mo = img_pc.replace('web','mo') //4단계   relapce(a,b) ==> a를 b로 대체
            img.attr('src', img_mo);
        } else {
            var img = $(this).find('img'); //2단계  find ==> 선택자를 찾는 명령
            var img_mo = img.attr('src'); //3단계  
            var img_pc = img_mo.replace('mo','web') //4단계   relapce(a,b) ==> a를 b로 대체
            img.attr('src', img_pc);
        }
    }) ;
    
    $(window).resize(function(){ //윈도우 사이즈가 변형되면
        if ($(window).width() < 980){ //만약 윈도우 사이즈가 980 보다 작으면

           $('.menu').hide();  //'nav ul' 숨겨줘라
          
		       var benner = $('.bxslider').find('img');
               var benner_web = benner.attr('src'); 
               var benner_m = benner_web.replace('web','mo');
               benner.attr('src',benner_m);		
			   
			   
        } else{ //아니면
			 $('.menu').show(); //'nav ul' 보여줘라
           
               var benner = $('.bxslider').find('img');
               var benner_m = benner.attr('src'); 
               var benner_web = benner_m.replace('mo','web');
               benner.attr('src',benner_web);  

       }
    }); 
    
    
    
    
    $('.menu_bar').click(function(){
      $('.menu').slideToggle();
    });
    
    
    $('.bxslider').bxSlider({
        captions: false,
        //slideWidth:600,  //수정
        auto: true,
        autoControls: false,
        stopAutoOnclick: true,
        pager: false
    });
    
    var mySlider = $("#slide_banner").bxSlider({
        mode: "horizontal", // 가로 수평으로 슬라이드 됩니다.
        speed: 500, // 이동 속도를 설정합니다.
        pager: true, // 현재 위치 페이징 표시 여부 설정.
        moveSlides: 1, // 슬라이드 이동시 갯수 설정.
        slideWidth: 220, // 슬라이드 마다 너비 설정.
        minSlides: 1, // 최소 노출 개수를 설정합니다.
        maxSlides: 5, // 최대 노출 개수를 설정합니다.
        slideMargin: 100, // 슬라이드간의 간격을 설정합니다.
        auto: true, // 자동으로 흐를지 설정합니다.
        autoHover: true, // 마우스 오버시 정시킬지 설정합니다.
        controls: true // 이전 다음 버튼 노출 여부 설정합니다.
    });
    
    /*
    //이전 버튼을 클릭하면 이전 슬라이드로 전환됩니다.
    $("#prevBtn").on("click", function() {
        mySlider.goToPrevSlide(); //이전 슬라이드 배너로 이동됩니다.
        return false; //<a>에 링크를 차단합니다.
    });
    //다음 버튼을 클릭하면 다음 슬라이드로 전환됩니다.
    $("#nextBtn").on("click", function() {
        mySlider.goToNextSlide(); //다음 슬라이드 배너로 이동됩니다.
        return false;
    });
    */
    
    var mySlider=$("#slide_banner2").bxSlider({
        mode:"horizontal",   // 가로 수평으로 슬라이드 됩니다.
        speed:500,              // 이동 속도를 설정합니다.
        pager:false,            // 현재 위치 페이징 표시 여부 설정.
        moveSlides:1,         // 슬라이드 이동시 갯수 설정.
        slideWidth:240,        // 슬라이드 마다 너비 설정.
        minSlides:1,           // 최소 노출 개수를 설정합니다.
        maxSlides:5,          // 최대 노출 개수를 설정합니다.
        slideMargin:25,      // 슬라이드간의 간격을 설정합니다.
        auto:true,             // 자동으로 흐를지 설정합니다.
        autoHover:true,    // 마우스 오버시 정시킬지 설정합니다.
        controls:true        // 이전 다음 버튼 노출 여부 설정합니다.
    });
    
    /*
    //이전 버튼을 클릭하면 이전 슬라이드로 전환됩니다.
    $("#prevBtn2").on("click",function(){
         mySlider.goToPrevSlide();  //이전 슬라이드 배너로 이동됩니다.
         return false; //<a>에 링크를 차단합니다.
    });
    //다음 버튼을 클릭하면 다음 슬라이드로 전환됩니다.
    $("#nextBtn2").on("click",function(){
         mySlider.goToNextSlide();  //다음 슬라이드 배너로 이동됩니다.
         return false;
    });
    */
    
        var mySlider=$("#slide_banner3").bxSlider({
        mode:"horizontal",   // 가로 수평으로 슬라이드 됩니다.
        speed:500,              // 이동 속도를 설정합니다.
        pager:false,            // 현재 위치 페이징 표시 여부 설정.
        moveSlides:1,         // 슬라이드 이동시 갯수 설정.
        slideWidth:500,        // 슬라이드 마다 너비 설정.
        minSlides:5,           // 최소 노출 개수를 설정합니다.
        maxSlides:5,          // 최대 노출 개수를 설정합니다.
        slideMargin:40,      // 슬라이드간의 간격을 설정합니다.
        auto:true,             // 자동으로 흐를지 설정합니다.
        autoHover:true,    // 마우스 오버시 정시킬지 설정합니다.
        controls:false        // 이전 다음 버튼 노출 여부 설정합니다.
    });
    
    /*
    //이전 버튼을 클릭하면 이전 슬라이드로 전환됩니다.
    $("#prevBtn3").on("click",function(){
         mySlider.goToPrevSlide();  //이전 슬라이드 배너로 이동됩니다.
         return false; //<a>에 링크를 차단합니다.
    });
    //다음 버튼을 클릭하면 다음 슬라이드로 전환됩니다.
    $("#nextBtn3").on("click",function(){
         mySlider.goToNextSlide();  //다음 슬라이드 배너로 이동됩니다.
         return false;
    });
    */
    
    
});// 제이쿼리 끝
