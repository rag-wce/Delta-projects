let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");
let li=document.querySelectorAll("li");

btn.addEventListener("click",function(){
let item=document.createElement("li");
item.innerText=inp.value;

let delBtn=document.createElement("button");
delBtn.innerText="Remove";
delBtn.classList.add("del");

item.appendChild(delBtn);
ul.appendChild(item);
inp.value="";  
})

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let del=event.target.parentElement;
        del.remove();
    }    
}) 

// let delEles=document.querySelectorAll(".del");
// for(delEle of delEles){
//     delEle.addEventListener("click",function(){  This METHOD IS FAILING FOR
//                                                  THE ELEMENTS ADDED EXTERNALLY 
//     let par=this.parentElement;
//         par.remove();
//     });
// }

