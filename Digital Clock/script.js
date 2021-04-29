function showTime() {
    var date = new Date();
    var x = date.getHours();
    var y = date.getMinutes();
    var z = date.getSeconds();
    var session = "AM";

    if (x == 0) {
        x = 12;
    }

    if (x > 12) {
        x = x - 12;
        session: "PM";
    }

    x = (x < 10) ? "0" + x : x;
    y = (y < 10) ? "0" + y : y;
    z = (z < 10) ? "0" + z : z;

    var time = x + ":" + y + ":" + z + " " + session;

    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

        setTimeout(showTime, 1000);

}

showTime();
