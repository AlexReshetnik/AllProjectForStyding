/*var hat = document.querySelector("#Chat")
function cend(e) {
    var tt = document.querySelector("#Text").value
    document.querySelector("#Text").value = ""

    if (tt != "") {
        console.log(tt);
        hat.innerHTML += `<p>${tt}</p>`
        Fetch("http://192.168.0.193:3000/data", {message:tt})
            .then(response => response.json())
            .then(data => { toCout(data) })
            .catch((error) => { console.log('Error:', error); });

    }

}
Fetch("http://192.168.0.193:3000/data",{ message: "" })
    .then(response => response.json())
    .then(data => { toCout(data) })
    .catch((error) => { console.log('Error:', error); });
/*
setI/nterval(() => {
    Fetch("data", { message: "" })
        .then(response => response.json())
        .then(data => { toCout(data) })
        .catch((error) => { console.log('Error:', error); });
}, 1000)*/
/*
function toCout(data) {
    hat.innerHTML = ""
    //console.log(data.message.length);
    for (let i = data.message.length-1; i >=0; i--) {
        hat.innerHTML += `<p>${data.message[i]}</p>`
    }
}
function Fetch(link, data) {

    return fetch("http://192.168.0.193:3000/" + link, {
        method: 'POST',
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })

}
/*
function FetchVideo(link, stream) {

    return fetch("/video" + link, {
        method: 'POST',
        body: stream
    })

}
var video = document.getElementById('video');

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {

    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(function (stream) {
       
        console.log(stream);
        FetchVideo(stream)
            .then(response => response.body)
            .then(data => {
                video.srcObject = data;
                video.play();
            })
            .catch((error) => { console.log('Error:', error); });
      
    });
}
else {
    console.log(" Чото не то ");
}

/*
document.getElementById("snap").addEventListener("click", function () {
    context.drawImage(video, 0, 0, 640, 480);
    console.dir(video);
});*/
