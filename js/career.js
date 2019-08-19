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
    setupHover(pull,event.target,true);
  });
  item.addEventListener("mouseleave", event =>{
    let pull = event.target.childNodes;
    // sguzmanm: Factor this loop; you could create a function that is used for this case and the loop above since they are almost the same
    setupHover(pull,event.target,false);
  });
}

//sguzmanm: THis would be the new function I talked to you about, if you wanted you could factor out the inner loops too
function setupHover(pull,eventTarget,isRemoved)
{
  for(let i=0; i<pull.length; i++){
      let elemi = pull[i];
      if(elemi.className === "pull-left"){
        let pulln = elemi.childNodes;
        for(let j=0; j<pulln.length; j++){
          let elem = pulln[j];
          if(elem.className === "p-item"){
            if(isRemoved)
            {
              elem.removeAttribute("hidden");
              enlarge(eventTarget);
            }
            else
            {
              elem.setAttribute("hidden", "true");
              shrink(eventTarget);
            }
          }
        }
      }
    }
}
// sguzmanm: On mobile, the background image is enlarged as well, leading to bad UX
function enlarge(element){
  element.style.margin = "0px";
  element.style.padding = "30px"; 

}

function shrink(element){
  element.style.margin = "1px";
  element.style.padding = "10px"; 

}
