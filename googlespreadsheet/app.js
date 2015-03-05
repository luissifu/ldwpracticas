function construct_row(title, content) {
  var tbr = document.createElement("tr")
  var td_t = document.createElement("td")
  var td_c = document.createElement("td")
  var td_t_t = document.createTextNode(title)
  var td_c_t = document.createTextNode(content)

  td_t.appendChild(td_t_t)
  td_c.appendChild(td_c_t)
  tbr.appendChild(td_t)
  tbr.appendChild(td_c)

  var table = document.getElementById("display")
  table.appendChild(tbr)
}

function do_ajax() {
  var url = "https://spreadsheets.google.com/feeds/list/1ACMCOlWX_aEqPz4jRSMl5g0l8zLlAVNCjuUl34IyNG8/od6/public/basic?hl=en_US&alt=json"
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var response = JSON.parse(xmlhttp.responseText);
      var entries = response.feed.entry

      for (var i = 0; i < entries.length; i++)
      {
        var entry = entries[i]
        construct_row(entry.title.$t,entry.content.$t)
      }
    }
  }
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

do_ajax();
