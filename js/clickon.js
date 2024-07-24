i=1;
str=""
function clickOn()
{
    let x=document.getElementById("txt").value;
           str+=`<h4>${i}.${x}</h4>`;
            i++;
        document.getElementById('print').innerHTML=str;
 }