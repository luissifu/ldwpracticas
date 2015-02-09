var timer_func;

function request_timestamp() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			add_timestamp(xmlhttp.responseText);
		}
	}
	xmlhttp.open("GET", "time.php", true);
	xmlhttp.send();
}

function add_timestamp(text) {
	var times = document.getElementById("timestamps")
	var stamp = document.createElement("p")
	var stamp_text = document.createTextNode(text)
	stamp.appendChild(stamp_text)
	times.appendChild(stamp)
}

var btn_start = document.getElementById("start")
btn_start.addEventListener("click", function() {
	timer_func = setInterval(function() { request_timestamp() }, 20*1000);
	//request_timestamp()
})


var btn_stop = document.getElementById("stop")
btn_stop.addEventListener("click", function() {
	clearInterval(timer_func)
})
