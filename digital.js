let ampm=document.getElementById("ampm");
function displaytime(){
    let datetime=new Date();
    let hr=datetime.getHours();
    let min=zero(datetime.getMinutes());
    let sec=zero(datetime.getSeconds());
       if(hr>12){
        hr=hr-12
        ampm.innerHTML="PM"
       }

   document.getElementById("hours").innerHTML=hr;
   document.getElementById("minutes").innerHTML=min;
   document.getElementById("seconds").innerHTML=sec;
}
         function zero(num){
            return num<10?"0"+num:num;
         }
setInterval(displaytime,500);