//初期表示//
const today = new Date();
var showDate = new Date(today.getFullYear(), today.getMonth(), 1);
window.onload = function () {
    show(today, calendar);
}

//カレンダー移動（先月）//
function prev() {
    showDate.setMonth(showDate.getMonth() - 1);
    show(showDate);
}
//カレンダー移動（翌月）//
function next() {
    showDate.setMonth(showDate.getMonth() + 1);
    show(showDate);
}

//カレンダー表示//
function show(date) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "January"];
    var year = date.getFullYear();
    var month = date.getMonth();
    
    //ヘッダー表示
    yearmonth = months[month] + "." + year;
    document.querySelector("#yearmonth").innerHTML = yearmonth;
    
    //カレンダー作成呼び出し
    var calendar = calendarprocess(year, month);
    document.querySelector("#calendar").innerHTML = calendar;

    //ボタン名表示
    if ((month - 1) == -1) {
        var setprevmonth = "December";
    } else {
        var setprevmonth = months[(month - 1)];
    }
    var setnextmonth = months[(month + 1)];
    document.querySelector("#prevmonth").innerHTML = setprevmonth;
    document.querySelector("#nextmonth").innerHTML = setnextmonth;
}

//カレンダー作成//
function calendarprocess(year, month) {
    var firstDate = new Date(year, month, 1);
    var firstDay = firstDate.getDay();
    var lastDate = new Date(year, month + 1, 0);
    var lastDateCount = lastDate.getDate();
    var dayCount = 1;
    var crateHTML = "";

    crateHTML = "<table>" + "<tr>";
    const weeks = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
    for (var i = 0; i < weeks.length; i++) {
        crateHTML += "<td>" + weeks[i] + "</td>";
    }
    crateHTML += "</tr>"

    for (var j = 0; j < 6; j++) {
        crateHTML += "<tr>";
        for (k = 0; k < weeks.length; k++) {
            if (j == 0 && k < firstDay) {
                crateHTML += "<td></td>";
            } else if (dayCount > lastDateCount) {
                crateHTML += "<td></td>";
            } else {
                crateHTML += "<td>" + dayCount + "</td>";
                dayCount++
            }
        }
        crateHTML += "</tr>";
    }

    crateHTML += "</table>";
    return crateHTML;
}

