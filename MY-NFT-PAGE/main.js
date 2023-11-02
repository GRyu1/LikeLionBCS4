const clock = document.querySelector(".clock")

const getTime = () => {    
    const date = new Date();
    const sec = date.getSeconds();
    const min = date.getMinutes();
    const hour = date.getHours()%12;

    clock.innerText = `${hour}:${min}:${sec}`    
};

getTime()
setInterval(getTime,1000);