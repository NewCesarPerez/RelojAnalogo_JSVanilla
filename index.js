const deg=6;
const hour=document.querySelector(".hour")
const min=document.querySelector(".min");
const sec=document.querySelector(".sec")
const timeZoneContainer=document.getElementById("timeZone")

const setClock= ()=>{
    let day=new Date();
    let hh=day.getHours()*30;
    let mm=day.getMinutes()*deg;
    let ss=day.getSeconds()*deg;

    hour.style.transform=`rotateZ(${hh+mm/12}deg)`;
    min.style.transform=`rotateZ(${mm}deg)`;
    sec.style.transform=`rotateZ(${ss}deg)`;
    let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    timeZoneContainer.textContent=timezone
   timezone=timezone.replace('_',' ' )
   console.log(timezone)
   timeZoneContainer.textContent=timezone
    
}

setClock();
setInterval(setClock,1000)