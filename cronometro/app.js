var segs = 0
var mins = 0
var hors = 0

var timer_func;

function count_time() {
	segs++;

	if (segs >= 60)
	{
		segs = 0
		mins++
	}
	if (mins >= 60)
	{
		mins = 0
		hors++
	}

	var s_cont = document.getElementById("segs")
	var m_cont = document.getElementById("mins")
	var h_cont = document.getElementById("hors")

	s_cont.firstChild.data = format_time(segs)
	m_cont.firstChild.data = format_time(mins)
	h_cont.firstChild.data = format_time(hors)
}

function format_time(time) {
	if (time < 10)
		return "0" + time
	else
		return "" + time
}

var btn_start = document.getElementById("start")
btn_start.addEventListener("click", function() {
	timer_func = setInterval(function() { count_time() }, 1000);
})


var btn_stop = document.getElementById("stop")
btn_stop.addEventListener("click", function() {
	clearInterval(timer_func)
})

var btn_reset = document.getElementById("reset")
btn_reset.addEventListener("click", function() {
	clearInterval(timer_func)

	var s_cont = document.getElementById("segs")
	var m_cont = document.getElementById("mins")
	var h_cont = document.getElementById("hors")

	s_cont.firstChild.data = "00"
	m_cont.firstChild.data = "00"
	h_cont.firstChild.data = "00"

	segs = 0
	mins = 0
	hors = 0
})
