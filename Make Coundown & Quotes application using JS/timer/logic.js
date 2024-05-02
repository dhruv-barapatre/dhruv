let timer=document.getElementById("timer");
let count=60;

let start=document.getElementById("start");
start.addEventListener("click",()=>{
    let inerval=setInterval(()=>{
       timer.innerText=count;
        count--;
        if(count==-1){
            clearTimeout(inerval);  
        }
    },1000)
})