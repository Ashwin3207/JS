let num=Math.floor(Math.random()*100);

function play()
{
    let gnum=document.getElementById("input").value;
    if(gnum==num)
    alert("U guessed correct! ");
    else if(gnum>num)
    alert("Enter a smaller number !");
    else
    alert("Enter a greater number!");

}
