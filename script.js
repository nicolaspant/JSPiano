import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {

    apiKey: "AIzaSyDuNLA3WJzVu1XUEIj2IFdUOGkhAQ_0oZs",
  
    authDomain: "jspiano.firebaseapp.com",
  
    projectId: "jspiano",
  
    storageBucket: "jspiano.appspot.com",
  
    messagingSenderId: "382914989063",
  
    appId: "1:382914989063:web:98dbe6bcc3c00f1e522ea2",
  
    measurementId: "G-EEFRQ5KST9"
  
  };

  const app = initializeApp(firebaseConfig);

  const analytics = getAnalytics(app);
  



const white_keys = ['z','x', 'c', 'v', 'b', 'n', 'm', ]
const black_keys = ['s', 'd', 'g', 'h', 'j']
const keys = document.querySelectorAll(".key");
const whiteKeys = document.querySelectorAll(".key.white")
const blackKeys = document.querySelectorAll(".key.black")

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))

})
    
  
document.addEventListener('keydown', e => {
    if(e.repeat) return;
    const key = e.key;
    const whiteKeyIndex = white_keys.indexOf(key);
    const blackKeyIndex = black_keys.indexOf(key);

    if (whiteKeyIndex > -1 ) playNote(whiteKeys[whiteKeyIndex])
    if (blackKeyIndex > -1 ) playNote(blackKeys[blackKeyIndex])
})
function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
    key.classList.add('active')
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active')
    })
}