let cxe12=Math.floor(Math.random()*100);
let lives=5;

function play()
{
    let gnum=document.getElementById("input").value;
    
    if(gnum==cxe12)
    {
        document.getElementById("wtext").innerHTML="Your guess is correct! ";
    }
   
    else if(gnum>cxe12)
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
    

    if(lives==0)
    {
        document.getElementById("label").innerHTML="<br><br>GAME OVER";
        document.getElementById("label").style="color:red;font-size:2.5rem;";
        document.getElementById("num").innerHTML=`<br>Your number was<div id="numt"></div>`;
        document.getElementById("numt").innerHTML=cxe12;
    }



}
