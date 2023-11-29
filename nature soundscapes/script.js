document.addEventListener("DOMContentLoaded", (event) => {
    const searchParams = new URLSearchParams(window.location.search);
    // console.log(searchParams.get('songid'));
    let audioPath = ""
    const songid = searchParams.get('songid')
    if(songid == "ocean"){
        audioPath = "./audio/ocean waves.mp3"
    }
    else if (songid == "forest"){
        audioPath = "./audio/rain.mp3"
    }

    const myAudio = new Audio(audioPath);
    let audioPaused = false;

    myAudio.addEventListener('ended', () => {
        if (!audioPaused) {
            myAudio.currentTime = 0;
            myAudio.play();
        }
    });

    myAudio.play();

    const mute_button = document.getElementById("mute-button");
    mute_button.addEventListener('click', () => {
        if (audioPaused) {
            audioPaused = false;
            myAudio.volume = 1.0; // Unmute audio
            mute_button.src="./images/mute-icon.png"
        } else {
            audioPaused = true;
            myAudio.volume = 0.0; // Mute audio
            mute_button.src="./images/umute-icon.png"
        }
    });

});

function playAudio(audioPath){
    console.log(audioPath);
    const audio = new Audio(audioPath);
        audio.play();
}