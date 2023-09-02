let cl = console.log;
const digitalClock = document.getElementById("digitalClock");


function clock() {
    let d = new Date();
    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let session = "PM";

    if(hr>12){
        session = "AM"
    }

    if(hr>12){
        hr = hr-12
    }

    if(min < 10){
        min = "0" + min
    }

    if(sec < 10){
        sec = "0" + sec
    }

    let time = `${hr}:${min}:${sec}:${session}`
    digitalClock.innerHTML = time
    setTimeout(clock, 1000);
}



clock()