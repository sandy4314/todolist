function validate()
{
    var items=document.getElementById("name").value;
    var list=document.getElementById("list");
    if(items!="")
    {
        var li=document.createElement("li");
        li.appendChild(document.createTextNode(items));
        var removebutton=document.createElement("button");
        removebutton.appendChild(document.createTextNode("remove"));
        removebutton.onclick=function(){
            list.removeChild(li);
        }
        li.appendChild(removebutton);
        list.appendChild(li);
        document.getElementById("name").value="";

    }
    else
    {
        alert("enter perfect to-do-list items")
    }
}