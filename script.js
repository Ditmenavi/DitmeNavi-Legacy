$(function(){
	$('.box-menu .wrapper').on('click', function(){
		$('.box-menu').toggleClass('full-menu');
		$('.hamburger').toggleClass('active');
	});
	$('a').on('click', function(){
		$(this).siblings('a').removeClass('active');
		$(this).addClass('active');
	});
});

const deadline = 'July 7 2022';

function getTimeRemaining(endtime){
	const total = Date.parse(endtime) - Date.parse(new Date());
	const seconds = Math.floor( (total/1000) % 60 );
	const minutes = Math.floor( (total/1000/60) % 60 );
	const hours = Math.floor( (total/(1000*60*60)) % 24 );
	const days = Math.floor( total/(1000*60*60*24) );
  
	return {
	  total,
	  days,
	  hours,
	  minutes,
	  seconds
	};
  };
  document.getElementById("giay").innerHTML = getTimeRemaining(deadline).seconds;
  document.getElementById("phut").innerHTML = getTimeRemaining(deadline).minutes;
  document.getElementById("gio").innerHTML = getTimeRemaining(deadline).hours;
  document.getElementById("ngay").innerHTML = getTimeRemaining(deadline).days;
  setInterval(thptqg, 1000);
  function thptqg() {
	document.getElementById("giay").innerHTML = getTimeRemaining(deadline).seconds;
	document.getElementById("phut").innerHTML = getTimeRemaining(deadline).minutes;
	document.getElementById("gio").innerHTML = getTimeRemaining(deadline).hours;
	document.getElementById("ngay").innerHTML = getTimeRemaining(deadline).days;
  }

  $(document).ready(function() {
	//check for localStorage, add as browser preference if missing
	if (!localStorage.getItem("mode")) {
	  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
		localStorage.setItem("mode", "dark-theme");
	  } else {
		localStorage.setItem("mode", "light-theme");
	  }
	}
  
	//set interface to match localStorage
	if (localStorage.getItem("mode") == "dark-theme") {
		$("body").addClass("dark-mode");
	} else {
	  $("body").removeClass("dark-mode");
	}
  });
  
var sidebar = document.getElementsByClassName("sidebar-item");
var sidebarText = document.getElementsByClassName("text");
for(let i = 0; i < sidebar.length; i++) {
	sidebar[i].onmouseover = function() {
		sidebarText[i].style.opacity = "60%";
	}
	sidebar[i].onmouseout = function() {
		sidebarText[i].style.opacity = "0%";
	}
}

if (window.innerWidth < 750) {
	$(".sidebar").addClass("hidden");
	$(".box-menu").removeClass("hidden");
	console.log("width < 750");
} else {
	$(".sidebar").removeClass("hidden");
	$(".box-menu").addClass("hidden");
	console.log("width > 750");
}