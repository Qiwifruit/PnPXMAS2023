document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('postcard').style.bottom = "-999px"
    document.querySelector('#toggleSound').addEventListener('click', () => toggleSound());
    document.querySelector('#toggleCard').addEventListener('click', () => toggleCard());
    resizeImage();
});

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    var elem = document.getElementById('postcard');
    if (getComputedStyle(elem).bottom != "-999px") {
        var target = (Math.round(parseInt(getComputedStyle(document.querySelector('.content')).height)*0.1));
        document.getElementById('postcard').style.bottom = target + "px";
    }
    resizeImage()
});

$('.content').one("click", function () { 
    document.getElementById('audio').play();
    document.querySelector('#toggleSound').style.width = "40px";
    document.querySelector('#toggleSound').style.marginLeft = "18px";
    document.querySelector('#toggleSound').disabled = false;
});

document.querySelector('.content').addEventListener('click', () => {
    confetti({
    particleCount: 100,
    startVelocity: 30,
    spread: 360,
    origin: {
        x: event.clientX/$(window).width() ,
        // since they fall down, start a bit higher than random
        y: event.clientY/$(window).height()
    }
    });
});

function toggleSound() {
    var audioElem = document.getElementById('audio');
    if (audioElem.muted == true) {
        document.querySelector('#toggleSound').innerHTML = `<i class='fas fa-volume-up'></i>`;
        audioElem.muted = false;
    } else {
        document.querySelector('#toggleSound').innerHTML = `<i class="fas fa-volume-mute"></i>`;
        audioElem.muted = true;
    }
}

function toggleCard() {
    var elem = document.getElementById('postcard');
    if (getComputedStyle(elem).bottom == "-999px") {
        var target = (Math.round(parseInt(getComputedStyle(document.querySelector('.content')).height)*0.1));
        elem.style.bottom = target + "px";
        document.querySelector('#message').innerHTML=`Merry Christmas!
                        <br><br>Panda is ecstatic to spend their first ever Christmas with their beloved Platypus. This year has been filled with many new and exciting experiences, all of which have been amazing despite their challenges, because we got to experience them with a Courtney. Qiwi's Christmas wish is to spend all future Christmases with a Courtney. Looking forward to creating many more cherished memories together in all the years to come.
                        <br><br>Love, the Qiwis`
    } else {
        elem.style.bottom= "-999px";
    }
}

function resizeImage() {
    if ($(window).width()/$(window).height() <= 2/3) {
        document.getElementById("hero").style.height = "auto";
        document.getElementById("hero").style.width = "85%";
    }
    else {
        document.getElementById("hero").style.width = "auto";
        document.getElementById("hero").style.height = "85%";
    }
}