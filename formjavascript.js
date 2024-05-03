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
   let res=getvalue();
    let text = form.pwd.value;
    console.log(text);

     document.getElementById('first').innerText="Name="+name+" "+mname+" "+laname;
     document.getElementById('gendertag').innerText="Gender="+gend;
     document.getElementById('telno').innerText="Phone Number="+phnum;
     document.getElementById('foodings').innerText="Food Items="+foodItem;
     document.getElementById('juice').innerText="Drinks="+res;
     document.getElementById('hide').innerText="Hidden secret="+text;
                                               
                                             
                            
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
    return result;
    }
