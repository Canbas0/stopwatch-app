let [seconds, minutes, splitSeconds] = [0, 0, 0];
let time = document.querySelector('.time');
let timer = null;

function stopwatch() {
    splitSeconds++;
    if (splitSeconds == 99) {
        splitSeconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
    }

    // let m = minutes < 10 ? "0" + minutes : minutes;
    // let s = seconds < 10 ? "0" + seconds : seconds;
    // let ss = splitSeconds < 10 ? "0" + splitSeconds : splitSeconds;

    time.innerHTML = `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}:${splitSeconds < 10 ? "0" + splitSeconds : splitSeconds}`;
};

function watchStart() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 10);
}

function watchStop() {
    clearInterval(timer);
}

function watchReset() {
    clearInterval(timer);
    [seconds, minutes, splitSeconds] = [0, 0, 0];
    time.innerHTML = "00:00:00";
}