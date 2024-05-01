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
    //checkbox need to be updated since it's not working properly
    let cof = form.coffe.value;
    console.log(cof);
    let pep = form.pepsi.value;
    console.log(pep);
    let coala = form.coco.value;
    console.log(coala);
    let senergy = form.sting.value;
    console.log(senergy);
    let text = form.pwd.value;
    console.log(text);
}