
function openTab(evt, tabName) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(tabName).style.display = "block";
      evt.currentTarget.className += " active";
};


//추가

		function MM_swapImgRestore() { //v3.0
			var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
		}
		function MM_preloadImages() { //v3.0
			var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
			var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
			if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
		}

		function MM_findObj(n, d) { //v4.01
			var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
			d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
			if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
			for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
			if(!x && d.getElementById) x=d.getElementById(n); return x;
		}

		function MM_swapImage() { //v3.0
			var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
			if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
		};

    $(document).ready(function() {
      $('#close').click(function() {
        $('#pop').hide();
      });
    });


  //<![CDATA[
    // 사용할 앱의 JavaScript 키를 설정해 주세요.
    Kakao.init('4ab7ef63badd7fef4a8c03634f803956');
    function plusFriendChat() {
      Kakao.PlusFriend.chat({
        plusFriendId: '_bisFj' // 플러스친구 홈 URL에 명시된 id로 설정합니다.
      });
    };
  //]]>


  //<![CDATA[
    // 사용할 앱의 JavaScript 키를 설정해 주세요.
    Kakao.init('706e284718b57e23d2cdae1d2992f083');
    function plusFriendChat() {
      Kakao.PlusFriend.chat({
        plusFriendId: '_exhbFj' // 플러스친구 홈 URL에 명시된 id로 설정합니다.
      });
    };
  //]]>


var container = document.getElementById('map');
var branch1 =  new daum.maps.LatLng(35.111044, 129.088137);

var options = {
	center: branch1,
	draggable: false,
    level: 3
};		
var map = new daum.maps.Map(container, options);
map.setZoomable(true);
var marker1 = new daum.maps.Marker({position: branch1});
marker1.setMap(map);

var infoWindowContent = '<div style="padding: 5px; color: black; text-align: center;">버틀러모터스</div>';
var infoWindow1 = new daum.maps.InfoWindow({
	position: branch1,
	content: infoWindowContent
});
infoWindow1.open(map, marker1);

var branch2 = new daum.maps.LatLng(35.154123, 129.010906);
var branch3 = new daum.maps.LatLng(35.153779, 129.062190); 

var marker2 = new daum.maps.Marker({position: branch2});
var marker3 = new daum.maps.Marker({position: branch3});

marker2.setMap(map);
marker3.setMap(map);

var infoNotLoaded = true;

function moveCenter(evt, tabName) {
	var i, tablinks;
	
	if (infoNotLoaded) {
		var infoWindow2 = new daum.maps.InfoWindow({
			position: branch2,
			content: infoWindowContent
		});
		infoWindow2.open(map, marker2);
		
		var infoWindow3 = new daum.maps.InfoWindow({
			position: branch3,
			content: infoWindowContent
		});
		infoWindow3.open(map, marker3);
		
		
		infoNotLoaded = true;
	};
	var mapContent = document.getElementById("mapContent");
	var mapDiv = document.getElementById("map");
	var branchAddress = document.getElementById("branchAddress");
      if (tabName === "tab1") {
		  map.setCenter(branch1);
		  mapDiv.style.height = "400px";
		  branchAddress.innerHTML = "부산시 남구 신선로 217-1";
	  } else if (tabName === "tab2") {
		  map.setCenter(branch2);
		  mapDiv.style.height = "400px";
		  branchAddress.innerHTML = "부산 사상구 백양대로 372-19 상가동 201호";
	  } else if(tabName === "tab3") {
		  map.setCenter(branch3);
		  mapDiv.style.height = "400px";
		  branchAddress.innerHTML = "부산 부산진구 동천로 55 CK빌딩 4층";
	  } else if(tabName === "tab4") {
		  mapDiv.style.height = "0px";
		  branchAddress.innerHTML =  '<img src="images/map_haeundae.png" />';
		  
	  } else  {
		  
	  }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      evt.currentTarget.className += " active";
};






