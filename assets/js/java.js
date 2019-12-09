const express = require("express");
const bodyParser = required("body-parser");
const route

let name='xty';
console.log(name);
let firstname='sadi';
let lastname='Peters';
let fullName= firstname + ' ' + lastname
console.log(fullName)
// let firstVariable=['Xty', 5, true];
// let secondVariable=firstVariable;
// secondVariable.push(11);
// console.log(firstVariable);
// console.log(secondVariable);
let firstVariable={
    firstname: 'Xty'
}
firstVariable.lastName= 'Peters';
console.log(firstVariable);
let x= 2
if (x>2){
console.log(x +"is greater than" + 2)
} else if (x<2){
console.log(x + "is less than" + 2 )
} else if (x=2){
    console.log(x + "is equals to" + 2 )
}
for (let i=1; i<5; i++){
    console.log(i);
}
function multiplication (x,y){
    alert (x/y)
}
multiplication (9,3)

    document.getElementById("practice").innerHTML="Hello world"
    document.getElementById("sadi").innerHTML="Hello world, this is Js in charge!"
    document.getElementById("hosea").style.color="blue"
    document.getElementById("hosea").style.fontWeight="50"
    document.getElementById("come").style.color="blue"
    function changeColor(newColor){
        let elem=document.getElementById('para');
        elem.style.color=newColor;
    }
    applicationCache.post("/contact-us", (req, res) => {
        const message = new messageModel({
            fullname: req.body.fullName,
            email: req.body.email,
            subject:req.body.subject,
            message: req.body.subject,
            message: req.body.message
        });
        message.save((err, doc) => {
            if (err !== null) {
                console.log(err);
                res.send("failed to contact us. Please try again.");
            } else {
                console.log(doc);
                res.send("Thanks for reaching out. we will contact you shortly!");
            }
        });
    });





