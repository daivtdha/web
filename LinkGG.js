var script_url = "aHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J4bGlyQk91Q19hNE5NYWQzWmpnQkhhN0lwNW02OTFpMS12ZWJ3bEYxWDE0OVYxS0JYYy1aUWdoenh2VjE5YVBRblYvZXhlYw==";


$(document).ready(function() {
	document.getElementById('username').value = "";
	document.getElementById('password').value = "";

	document.getElementById('oldusername').value = "";
	document.getElementById('oldpassword').value = "";
	document.getElementById('newpassword').value = "";
	document.getElementById('cfpassword').value = "";
var url = location.protocol;
if (url == "file:") {
	var element = document.getElementById("login");
	element.parentNode.removeChild(element);
	close();
//} else {
}

});

!function(n){"use strict";n.fn.idle=function(e){var t,i,o={idle:6e4,events:"mousemove keydown mousedown touchstart",onIdle:function(){},onActive:function(){},onHide:function(){},onShow:function(){},keepTracking:!0,startAtIdle:!1,recurIdleCall:!1},c=e.startAtIdle||!1,d=!e.startAtIdle||!0,l=n.extend({},o,e),u=null;return n(this).on("idle:stop",{},function(){n(this).off(l.events),l.keepTracking=!1,t(u,l)}),t=function(n,e){return c&&(e.onActive.call(),c=!1),clearTimeout(n),e.keepTracking?i(e):void 0},i=function(n){var e,t=n.recurIdleCall?setInterval:setTimeout;return e=t(function(){c=!0,n.onIdle.call()},n.idle)},this.each(function(){u=i(l),n(this).on(l.events,function(){u=t(u,l)}),(l.onShow||l.onHide)&&n(document).on("visibilitychange webkitvisibilitychange mozvisibilitychange msvisibilitychange",function(){document.hidden||document.webkitHidden||document.mozHidden||document.msHidden?d&&(d=!1,l.onHide.call()):d||(d=!0,l.onShow.call())})})}}(jQuery);

$(document).idle({
  onIdle: function(){
	Search_dialog_time();
  },
  idle: 180000
})
//]]>

var Thoat_timeme = document.getElementById("dialog_time");
var Thoatme = document.getElementById("testText");
function Search_dialog_time(){
if (document.getElementById("dialog_time")==null || document.getElementById("testText")==null) {
close();
} else {
show_dialog_time();
}
}


function show_dialog_time() {
    Thoat_timeme.style.display = "block";
}

document.getElementById("confirm_time").onclick = function(){confirm_time()};
function confirm_time() {
	close();	
    Thoat_timeme.style.display = "none";	
}


// Thoát
document.getElementById("btn-show-dialog").onclick = function(){show_dialog()};
var Thoatme = document.getElementById("dialog-container");

function show_dialog() {
    Thoatme.style.display = "block";
}

document.getElementById("confirm").onclick = function(){confirm()};
function confirm() {
	close();	
    Thoatme.style.display = "none";
	
}

document.getElementById("cancel").onclick = function(){cancel()};
function cancel() {
    Thoatme.style.display = "none";
}

// Modal Alert Close
$(document).ready(function () {
 $('.trigger').on('click', function () {
    $('.modalMess-wrapper').toggleClass('open');
   return false;
  });
});



function close_window() {
close();
}


document.addEventListener('contextmenu', event => event.preventDefault());

home = function(){
location.href = '' + (location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: ''));
}


//window.requestFrame = (function() {
//  return window.requestAnimationFrame || (window.webkitRequestAnimationFrame || (window.mozRequestAnimationFrame || (window.msRequestAnimationFrame || (window.oRequestAnimationFrame || function(c) {
//    window.setTimeout(c, 50);
//  }))));
//})();
//var test = {
//  st: false,
//  el: document.createElement("img"),
//  rn: function() {
//    test.st = false;
//    console.log(test.el);
//    console.clear();
//    document.getElementById("testText").innerHTML = ((test.st === true) ? "open" : "") + ".";
//    window.requestFrame(test.rn);
//  }
//};
//(test.el).__defineGetter__("id", function() {
//  test.st = true;
//});
//test.rn();
//------------------------


// Thoát

document.getElementById("btn-show-dialog").onclick = function(){show_dialog()};
var Thoatme = document.getElementById("dialog-container");

function show_dialog() {
    Thoatme.style.display = "block";
}

document.getElementById("confirm").onclick = function(){confirm()};
function confirm() {  
	close_window();	
    Thoatme.style.display = "none";	
}

document.getElementById("cancel").onclick = function(){cancel()};
function cancel() {  
    Thoatme.style.display = "none";
}


function close_window() {
close();
}

// --------------------




window.history.replaceState('','','/');


function LoginQL_value() {
  var form = document.querySelector('.needs-validation');
  var inputs = form.querySelectorAll('input[name="username"], input[name="password"]');
  var captchaInputBox = document.querySelector('.captch_input input');

  var isValid = true;
  for (var i = 0; i < inputs.length; i++) {
    if (!inputs[i].checkValidity()) {
      isValid = false;
      // Hiển thị thông báo lỗi hoặc thực hiện các hành động khác tùy ý
    }
  }

  var captchaText = captchaInputBox.value.trim().replace(/\s+/g, ''); // Lấy giá trị captcha đã nhập và loại bỏ khoảng trắng

  if (isValid && message.innerText == "Captcha đúng, bấm tiếp để Đăng Nhập." && captchaText === captchaText) {
//    alert("OK");
    generateCaptcha();

	var user=$("#username").val();
	var pass= $("#password").val();
	var ngay= $("#ngay").val();
	var combine= $("#combine").val();
		

    var url = atob(script_url)+"?callback=ctrlq&ngay="+ngay+ "&password="+pass+ "&username="+user+  "&combine="+combine+"&action=LoginQL";

	
    var request = jQuery.ajax({
      crossDodiv: true,
      url: url ,
      method: "GET",
      dataType: "jsonp"
	  
    });

  }

  form.classList.add('was-validated');
}
	
  function ctrlq(e) {
  document.getElementById('password').value = "";
       if (e.result === "Đăng nhập sai User Name hoặc Password !") {
			$('.modalMess-wrapper').toggleClass('open'); // Moi them	
			document.getElementById("alert").innerHTML = "Đăng nhập sai User Name hoặc Password !";
			document.getElementById("confirm_Login").style.display = "none";
			return false;
		
       } else if (e.result === "Đổi Password NOK !") {
			$('.modalMess-wrapper').toggleClass('open'); // Moi them	
			document.getElementById("alert").innerHTML = "Đổi Password NOK !";
			document.getElementById("confirm_Login").style.display = "none";
			return false;

       } else if (e.result === "Đổi Password OK !") {
			modal01.style.display = "none";
			$('.modalMess-wrapper').toggleClass('open'); // Moi them	
			document.getElementById("alert").innerHTML = "Đổi Password OK, thông tin thay đổi đã gửi về Email của Bạn !";
			document.getElementById("confirm_Login").style.display = "none";
			return false;
			
		
		} else {	

			modal01.style.display = "none";
			$('.modalMess-wrapper').toggleClass('open'); // Moi them	
			document.getElementById("alert").innerHTML = "Đăng nhập OK !";
			$('#fa').attr("class", "fa fa-thumbs-o-up");
			document.getElementById("confirm_Login").style.display = "block";
			document.getElementById("close").style.display = "none";
			var str = e.result;
			var parts = str.split(" "); // Tách chuỗi thành mảng các phần tử bằng khoảng trắng
			var part1 = parts[0];
			var part2 = parts.slice(1).join(" ");

			document.getElementById("confirm_Login").onclick = function(){Loginconfirm_value()};

			function Loginconfirm_value() {		
			var idngaylog= part2;
			var url = atob(script_url)+"?callback=ctrlq&idngaylog="+idngaylog+"&action=Loginconfirm";

			var request = jQuery.ajax({
			  crossDodiv: true,
			  url: url ,
			  method: "GET",
			  dataType: "jsonp"
			  
			});			
			
			$('.modalMess-wrapper').toggleClass('open'); // Moi them	
			document.getElementById("confirm_Login").style.display = "none";
			close();
				khánh1 = '' + (location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: ''));
				khánh2 = ".html"

				options = 'toolbar=0,status=0,resizable=1';
				//window.open(khánh1 + "/" + e.result + khánh2,'sharer',options);
				window.open(khánh1 + "/" + part1 + khánh2,'sharer',options);				
//				window.history.replaceState('','','/');				

			}


  }

};


function Changepassword_value() {
  var form = document.querySelector('.needs-validation');
  var inputs = form.querySelectorAll('input[name="oldusername"], input[name="oldpassword"], input[name="newpassword"], input[name="cfpassword"]');

  var isValid = true;
  for (var i = 0; i < inputs.length; i++) {
    if (!inputs[i].checkValidity()) {
      isValid = false;
      // Hiển thị thông báo lỗi hoặc thực hiện các hành động khác tùy ý
    }
  }

  if (isValid) {
    // Thực hiện các hành động cần thiết nếu các trường input đều hợp lệ
    var olduser = $("#oldusername").val();
    var oldpass = $("#oldpassword").val();
    var newpass = $("#newpassword").val();
    var cfpass = $("#cfpassword").val();
    var combine = $("#combine").val();

    var newpassleng = newpass.length;

    if (newpassleng < 8) {
      $('.modalMess-wrapper').toggleClass('open');
      document.getElementById("alert").innerHTML = "Mật khẩu mới phải có ít nhất 8 ký tự!";
      document.getElementById("confirm_Login").style.display = "none";
      return false;
    }

    if (newpass !== cfpass) {
      $('.modalMess-wrapper').toggleClass('open');
      document.getElementById("alert").innerHTML = "Mật khẩu nhập lại không khớp!";
      document.getElementById("confirm_Login").style.display = "none";
      return false;
    }

    var url = atob(script_url) + "?callback=ctrlq&oldpassword=" + oldpass + "&oldusername=" + olduser + "&newpassword=" + newpass + "&action=Changepassword";
    var request = jQuery.ajax({
      crossDodiv: true,
      url: url,
      method: "GET",
      dataType: "jsonp"
    });

    document.getElementById('username').value = "";
    document.getElementById('password').value = "";

    form.classList.remove('was-validated');
  } else {
    form.classList.add('was-validated');
  }
}
	
	
function Delre() {
  document.querySelector("#re").innerHTML="";
}
 
  
$(document).keydown(function(event) {
    if (!((String.fromCharCode(event.which).toLowerCase() == 's' || event.keyCode == 13) && event.ctrlKey) && !(event.which == 19)) return true;
    event.preventDefault();
    return false;
});  

// FACEBOOK
 shareface = function(){
    url = 'https://www.facebook.com/sharer/sharer.php?u=' + (location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: ''));
	
    options = 'toolbar=0,status=0,resizable=1,width=626,height=436';
    window.open(url,'sharer',options);
} 
