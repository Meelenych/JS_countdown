import refs from './refs.js'

const { daysContent, hoursContent, minsContent, secsContent } = refs
// console.log(daysContent, hoursContent, minsContent, secsContent);

const finishDate = new Date("Dec 31, 2021").getTime()
// console.log(finishDate);

const currentDate = Date.now()
// console.log(currentDate);

function start() {
    setInterval(() => {
    let currentDate = Date.now()
    let time = finishDate - currentDate

        let days = Math.floor(time / (1000 * 60 * 60 * 24));
        let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((time % (1000 * 60)) / 1000);

        days = String(days).padStart(3, "-")
        // console.log("days:", days);        
        hours = String(hours).padStart(2, "0")
        // console.log("hours:", hours);
        mins = String(mins).padStart(2, "0")
        // console.log("minutes:", mins);
        secs = String(secs).padStart(2, "0")
        // console.log("seconds:", secs);

        daysContent.textContent = days
        hoursContent.textContent = hours
        minsContent.textContent = mins
        secsContent.textContent = secs

    }, 1000);
  
}

document.addEventListener("DOMContentLoaded", function(e) {
    console.log("DOM loaded");
    start()
  });
