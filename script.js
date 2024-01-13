let cxe12=Math.floor(Math.random()*100);
let lives=5;
function play()
{
    let gnum=document.getElementById("input").value;
    
    if(gnum==cxe12)
    {
        document.getElementById("wtext").innerHTML="Your guess is correct! ";
    }
   
    else if(gnum>cxe12s)
    {
        document.getElementById("wtext").innerHTML="Enter a smaller number! ";
        lives--;
        document.getElementById("life").innerHTML=lives;
    }
    
    else if(gnum=="")
    {
        document.getElementById("wtext").innerHTML="Enter a number! ";
    }
    
    else
    {
        document.getElementById("wtext").innerHTML="Enter a larger number! ";
        lives--;
        document.getElementById("life").innerHTML=lives;
    }
    

    



}
