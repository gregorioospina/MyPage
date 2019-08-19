/* eslint-disable linebreak-style */



"use strict";
// Esta atento al evento de hacer hover sobre el item de career, en el omento que se elimina el atributo de 
// 'hidden' del <p> y muestra la descripcion completa del item.

/**
* sguzmanm: This code is not wrong, it works, but still for readability it is better to get those nested operations and factor them into functions or expressions you can call in your code
* /
let items = document.getElementsByClassName("careeritem");
for(let i = 0; i<items.length; i++){
  let item = items[i];
  item.addEventListener("mouseenter", event =>{
    let pull = event.target.childNodes;
    // sguzmanm: Factor this loop
    for(let i=0; i<pull.length; i++){
      let elemi = pull[i];
      if(elemi.className === "pull-left"){
        let pulln = elemi.childNodes;
        for(let j=0; j<pulln.length; j++){
          let elem = pulln[j];
          if(elem.className === "p-item"){
            elem.removeAttribute("hidden");
            enlarge(event.target);
          }
        }
      }
    }
  });
  item.addEventListener("mouseleave", event =>{
    let pull = event.target.childNodes;
    // sguzmanm: Factor this loop; you could create a function that is used for this case and the loop above since they are almost the same
    for(let i=0; i<pull.length; i++){
      let elemi = pull[i];
      if(elemi.className === "pull-left"){
        let pulln = elemi.childNodes;
        for(let j=0; j<pulln.length; j++){
          let elem = pulln[j];
          if(elem.className === "p-item"){
            
            elem.setAttribute("hidden", "true");
            shrink(event.target);
          }
        }
      }
    }
  });
}

function enlarge(element){
  element.style.margin = "0px";
  element.style.padding = "30px"; 

}

function shrink(element){
  element.style.margin = "1px";
  element.style.padding = "10px"; 

}
