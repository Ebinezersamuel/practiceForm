function formSubmit() {
    console.log("hello world!");
    let form = document.getElementById('myForm');
    let name = form.txtfname.value;
    console.log(name);
    let mname = form.txtmname.value;
    console.log(mname);
    let laname = form.txtlname.value;
    console.log(laname);
    let gend = form.gender.value;
    console.log(gend);
    let phnum = form.number.value;
    console.log(phnum);
    let foodItem = form.food.value;
    console.log(foodItem);
   getvalue();
    let text = form.pwd.value;
    console.log(text);
}
function getvalue()
{
    let checkBoxes=document.getElementsByName('checking');
    console.log(checkBoxes);
    let result="";
    for(let i=0;i<checkBoxes.length;i++)  
    {
        
        if(checkBoxes[i].checked)
        {
            result+=checkBoxes[i].value+",";
        }
    }
    console.log("You have selected :"+result);
    }
