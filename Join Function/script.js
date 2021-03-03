function para1()
{
    var inputs = [];
    for(var i = 1 ; i <=6 ; i++)
    {
        inputs.push(document.getElementById("para1sent" + i).value);
    }
    inputs.join(". ");
    document.getElementById("para1_button").innerHTML = inputs.join(". ");
}

function para2()
{
    var inputs = [];
    for(var i = 1 ; i <=6 ; i++)
    {
        inputs.push(document.getElementById("para2sent" + i).value);
    }
    inputs.join(". ");
    document.getElementById("para2_button").innerHTML = inputs.join(". ");
}