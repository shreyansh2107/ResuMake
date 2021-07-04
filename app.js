function addNewWEField() {

    let newNode = document.createElement("textarea")
    newNode.classList.add("form-control")
    newNode.classList.add("weField")
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", 3)
    newNode.setAttribute("placeholder", "Enter Here")

    let weOb = document.getElementById("we")
    let weAddButtonOb = document.getElementById("weAddButton")

    weOb.insertBefore(newNode, weAddButtonOb)

}

function addNewAQField() {

    let newNode = document.createElement("textarea")
    newNode.classList.add("form-control")
    newNode.classList.add("eqField")
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", 3)
    newNode.setAttribute("placeholder", "Enter Here")

    let aqOb = document.getElementById("aq")
    let aqAddButtonOb = document.getElementById("aqAddButton")

    aqOb.insertBefore(newNode, aqAddButtonOb)

}

//generating CV 
function generateCV() {

    document.getElementById("nameT1").innerHTML = document.getElementById("namefield").value;

    document.getElementById("nameT2").innerHTML = document.getElementById("namefield").value;

    //contact
    document.getElementById("contactT").innerHTML = document.getElementById("contactfield").value;

    //address
    document.getElementById("addressT").innerHTML = document.getElementById("addressfield").value;

    document.getElementById("fbT").innerHTML = document.getElementById('fbfield').value;

    document.getElementById("instaT").innerHTML = document.getElementById('instafield').value;

    document.getElementById("linkedT").innerHTML = document.getElementById('linkedfield').value;

    document.getElementById('objectiveT').innerHTML = document.getElementById("objectivefield").value;

    //workExperience

    let wes = document.getElementsByClassName('weField');

    let str = ''
    for (let e of wes) {
        str = str + `<li> ${e.value}</li>`;
    }

    document.getElementById("weT").innerHTML = str;

    //academic

    let aqs = document.getElementsByClassName('eqField');

    let str1 = ''

    for (let e of aqs) {
        str1 = str1 + `<li> ${e.value}</li>`;
    }

    document.getElementById("aqT").innerHTML = str1;

    //image

    const file = document.getElementById("imgfield").files[0];

    console.log(file);

    let reader = new FileReader();

    reader.readAsDataURL(file);

    console.log(reader.result);

    reader.onloadend = function () {
        document.getElementById("images").src = reader.result;
    };

    document.getElementById('cv-form').style.display = 'none'
    document.getElementById('cv-template').style.display = 'block'

}

function printCV() {
    window.print();
}