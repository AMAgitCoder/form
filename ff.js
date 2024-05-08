document.getElementById("btn").addEventListener("click",myfun);
document.getElementById("rst").addEventListener("click",rsfun);

function rsfun(){

    // document.getElementById("fname").value=

   var inp =  document.querySelectorAll('input');

   for(var i=0;i<inp.length;i++) {

    if(inp[i].type!='button'){

    if(inp[i].type=='checkbox'&&inp[i].checked) inp[i].checked=false;

    else if(inp[i].type=='radio'&&inp[i].checked) inp[i].checked=false;

    else inp[i].value=" ";

   }

}

}

let arr = [];

function retTab() {

let array = JSON.parse(localStorage.getItem('table'));

let tempin=' ';

for(var i=0;i<array.length;i++){

    tempin+='<tr>';

    for(var j=0;j<array[i].length;j++){

            tempin=tempin+'<td>'+array[i][j]+'</td>';
    }

    tempin+='</tr>';

}


console.log(tempin);

document.getElementById("tbo").innerHTML += tempin;

}


function myfun() {


// let fnme=document.getElementById("fname").value;
// let lnme=document.getElementById("lname").value;

// let funme=fnme + " "+lnme;

let funme = document.getElementById("fname").value + " " + document.getElementById("lname").value;


var loca=document.getElementsByName('loc');

var locv;

for(var i=0;i<loca.length;i++){

    if(loca[i].checked){
        locv=loca[i].value;
    } 
    
}

let hobb=document.getElementsByName('hob');


let hobv=[];


for(var i=0;i<hobb.length;i++){
    
    if(hobb[i].checked) 
    
    {
        hobv.push(hobb[i].value);
    }
    
}
console.log(hobv.length);

hobv.forEach((el)=>{

    console.log(el);
})

var dt=document.getElementById('db').value;

let row=document.createElement("tr");

let c1=document.createElement("td");
let c2=document.createElement("td");
let c3=document.createElement("td");
let c4=document.createElement("td");
let c5 = document.createElement("td");

c1.innerText=funme;
c2.innerText=locv;
c3.innerText=dt;
c4.innerText=hobv;
c5.innerHTML='<'

// if(c1.value)

// console.log( typeof dt);

 if(funme!=" "&&locv!=" "&&dt.length>0&&hobv.length>0){

    if(locv!=null) console.log(locv);

    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);
    row.appendChild(c4);
    
 }
 
 else alert('Pleause fill all fields');


 let tempa= [];

 tempa.push(funme);
 tempa.push(locv);
 tempa.push(dt);
 tempa.push(hobv);

document.getElementById("tbo").appendChild(row);

// console.log(tempa);
// table.appendChild(row);
// var jsonTbo = JSON.stringify(document.getElementById('tbo').innerHTML);

arr.push(tempa);


localStorage.setItem('table',JSON.stringify(arr));
  

}

// window.addEventListener("load",(event)=>{

// })

retTab();
// retTab();
// function retr(){

//     var val=JSON.parse(localStorage.getItem('table'));
//     console.log(val);

//    if(val)   document.getElementById('.tbo').innerHTML = val;

//    else console.log('no data');




// }





function delrow() {
    
    let rw = document.getElementById('del').value;

    let tab = document.getElementById('tbo');

if(rw>0)
{
    tab.deleteRow(rw);

    let array = JSON.parse(localStorage.getItem('table'));

    // let temp = [];

    //  array.forEach((ele,idx)=>{

    //     if(idx!=(rw-1)){

    //         temp.push(ele);
    //     }


    //  })

    array.splice(rw-1,1);

     localStorage.setItem('table',JSON.stringify(array));

}





}

