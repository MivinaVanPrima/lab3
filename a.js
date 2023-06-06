let cx = 300
let cy = 300
let cx2 = 600
let cy2 = 600


let seconds = 0
let minutes = 0
let hours = 9
let evnt = []
let hseconds = hours*60*60 + minutes*60 + seconds

function settime(){
    let a = parseInt(document.getElementById("hh").value)
    let b = parseInt(document.getElementById("mm").value)
    let c = parseInt(document.getElementById("ss").value)
    let d = document.getElementById("msg").value
    evnt.push([a,b,c,d])
    evnt = evnt.sort()
    let s = ""

    for (var i = 0; i < evnt.length; i++) {
        s += evnt[i][0]
        s += " : "
        s += evnt[i][1]
        s += " : "
        s += evnt[i][2]
        s += "&nbsp&nbsp&nbsp&nbsp&nbsp"
        s += evnt[i][3]
        s += "<br>"
    }
    evnts.innerHTML = s
    hh.value = ""
    mm.value = ""
    ss.value = ""
    msg.value = ""
}

function drawclock() {
    var drawingCanvas = document.getElementById('c1')
    var context = drawingCanvas.getContext('2d')
    context.strokeStyle = "#000000"
    context.fillStyle = "#FFFFFF"
    context.beginPath()
    context.arc(cx,cy,260,0,Math.PI*2,true)
    context.closePath()
    context.stroke()
    context.fill()

    let px = cx + 250 * Math.cos((hseconds * 6 * Math.PI / 180) - Math.PI / 2)
    let py = cy + 250 * Math.sin((hseconds * 6 * Math.PI / 180) - Math.PI / 2)
    drawseconds(context, px, py)

    px = cx + 200 * Math.cos((hseconds / 60 * 6 * Math.PI / 180) - Math.PI / 2)
    py = cy + 200 * Math.sin((hseconds / 60 * 6 * Math.PI / 180) - Math.PI / 2)
    drawminutess(context, px, py)

    px = cx + 150 * Math.cos((hseconds / 60 / 60 * 30 * Math.PI / 180) - Math.PI / 2)
    py = cy + 150 * Math.sin((hseconds / 60 / 60 * 30 * Math.PI / 180) - Math.PI / 2)
    drawhourss(context, px, py)

    sseconds.innerHTML = seconds
    sminutes.innerHTML = minutes
    shours.innerHTML = hours

    for (var i = 0; i < evnt.length; i++) {
        if (evnt[i][0] == hours & evnt[i][1] == minutes & evnt[i][2] == seconds){
            alert(String(evnt[i][3]))
            evnt.splice(i, 1);
            let s = ""
            for (var i = 0; i < evnt.length; i++) {
                s += evnt[i][0]
                s += " : "
                s += evnt[i][1]
                s += " : "
                s += evnt[i][2]
                s += "&nbsp&nbsp&nbsp&nbsp&nbsp"
                s += evnt[i][3]
                s += "<br>"
            }
            evnts.innerHTML = s
        }
    }

    hseconds += 1
    seconds += 1

    if (seconds >= 60) {
        seconds = 0
        minutes += 1
    }
    if (minutes >= 60) {
        minutes = 0
        hours += 1
    }
    if (hours >= 24) {
        hours = 0
    }
    if (hseconds >= 86400) {
        hseconds = 0
    }
}

function drawseconds(context, x, y) {
    context.strokeStyle = "#FF0000"
    context.beginPath()
    context.moveTo(cx, cy)
    context.lineTo(x, y)
    context.closePath()
    context.stroke()
    context.fill()
}
function drawminutess(context, x, y) {
    context.strokeStyle = "#40FF77"
    context.beginPath()
    context.moveTo(cx, cy)
    context.lineTo(x, y)
    context.closePath()
    context.stroke()
    context.fill()
}
function drawhourss(context, x, y) {
    context.strokeStyle = "#000000"
    context.beginPath()
    context.moveTo(cx, cy)
    context.lineTo(x, y)
    context.closePath()
    context.stroke()
    context.fill()
}

window.onload = function() {
    setInterval(drawclock, 1000);
}