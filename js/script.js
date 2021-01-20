// Start menu button functions

const startMenu = () => {
    const button = document.querySelector('.start-menu-button');
    const menu = document.querySelector('.start-menu-container');

    button.addEventListener('click', () => {
        menu.classList.toggle('start-menu-container-active'); // Start menu container actives
        button.classList.toggle('start-menu-button-active'); // Start menu button active
    }); 
}

startMenu();

// System clock

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h; // Additinal zero
    m = (m < 10) ? "0" + m : m; // Additinal zero
    
    var time = h + ":" + m + " " + session; // Time format
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
}

showTime();