let num=Math.floor(Math.random()*100);

function play()
{
    let gnum=document.getElementById("input").value;
    console.log(gnum);
    if(gnum==num)
    document.getElementById("wtext").innerHTML="Your guess is correct! ";
    else if(gnum>num)
    document.getElementById("wtext").innerHTML="Enter a smaller number! ";
    else if(gnum=="")
    document.getElementById("wtext").innerHTML="Enter a number! ";
    else
    document.getElementById("wtext").innerHTML="Enter a larger number! ";

}
