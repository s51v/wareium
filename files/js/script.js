// script for functionality on the entire site, epic1!!!!

function updateTime() {
    const time = document.getElementById('clock');
    const now = new Date();
    
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); 
    
    const timeString = `${hours}:${minutes}:${seconds}`;
    const dateString = `${day}/${month}`;
    
    time.textContent = `${dateString} • ${timeString}`;
}
