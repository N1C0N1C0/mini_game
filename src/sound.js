const carrotSound = new Audio('./carrot/sound/carrot_pull.mp3');
const alertSound = new Audio('./carrot/sound/alert.wav');
const bugSound = new Audio('./carrot/sound/bug_pull.mp3');
const bgSound = new Audio('./carrot/sound/bg.mp3');
const winSound = new Audio('./carrot/sound/game_win.mp3');

export function playCarrot() {
    playSound(carrotSound);
}
export function playBug() {
    playSound(bugSound);
}
export function playAlert() {
    playSound(alertSound);
}
export function playBackground() {
    playSound(bgSound);
}
export function stopBackground() {
    stopSound(bgSound);
}
export function playWin() {
    playSound(winSound);
}
function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
}

function stopSound(sound) {
    sound.pause();
}