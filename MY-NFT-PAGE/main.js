const clock = document.querySelector(".clock")

const getTime = () => {    
    const date = new Date();
    const sec = date.getSeconds().toString().padStart(2,'0');
    const min = date.getMinutes().toString().padStart(2,'0');
    const hour = (date.getHours()>=12 && date.getHours()!==24 ? "PM " : "AM " )+ (date.getHours()%12).toString().padStart(2,'0');

    clock.innerText = `${hour}:${min}:${sec}`    
};

getTime()
setInterval(getTime,1000);