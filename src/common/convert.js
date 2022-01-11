export function convertData(map, data) {
  var res = []
  for (var i = 0; i < data.length; i++) {
    var geoCoord = map[data[i].name]
    if (geoCoord !== undefined) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      })
    }
  }
  return res;
}

export function timeFormat(fmt) {
  var time = new Date();
  var o = {
    "M+": time.getMonth() + 1,
    "d+": time.getDate(),
    "h+": time.getHours(),
    "m+": time.getMinutes(),
    "s+": time.getSeconds(),
    "q+": Math.floor((time.getMonth() + 3) / 3),
    "S": time.getMilliseconds()
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

export function getBetweenTime(start, end) {
  var arr = [];
  start = new Date(start);
  end = new Date(end);

  while ((end - start) >= 0) {
    var year = start.getFullYear();
    var month = start.getMonth().toString().length == 1 ? "0" + (start.getMonth() + 1) : (end.getMonth() + 1);
    var day = start.getDate().toString().length == 1 ? "0" + start.getDate() : end.getDate();
    arr.push(year + "-" + month + "-" + day);

    start.setDate(start.getDate() + 1);
  }
  return arr;
}