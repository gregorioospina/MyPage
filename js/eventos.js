const URL = "https://script.google.com/macros/s/AKfycbxH_y5MUQS4oofjElV2QQJmyvG_NWq1qvzLkHCL0lMfd-UKBvw/exec";

window.onload = () => {
  let html = "";
  let client = new HttpClient();

  client.get(URL, res => {
    let data = res;
    console.log(data);

    for(let i = 0; i<data.personas.length; i++)
    {
      let nmb = data.personas[i].nombre;
      let clr = data.personas[i].check;
      let cpo = data.personas[i].cupo;

      let colorid = cpo === 0? 0 : 1;
      let lleva = cpo === 0? " no lleva carro": " lleva carro, con "+cpo+" cupos";

      let str = "<li id=\"color"+colorid+"\"> " + nmb + lleva + " Andres es un capo, gregorio proteja su codigo mejor"+" </li>"
      html += str;
    }
    document.getElementById("ulppl").innerHTML = html;
  });
}


const evnts = () => {
  document.getElementById("formf").addEventListener("input", inputchange);
  document.getElementById("formcheck").addEventListener("click", notCheckedYes);
  
}

function notCheckedYes(){
  let check = checkvalue();
  if(check === 1){
    document.getElementById("rangeform").hidden = false;
  }
  else if(check === 0){
    document.getElementById("rangeform").hidden = true;}
}

function inputchange() {
  let value = document.getElementById("cuposinput").valueAsNumber;
  document.getElementById("labelcupos").textContent = value;
}

function checkvalue(){
  let yes =  document.getElementById("yesradio").checked ? 1 : 0;
  let no = document.getElementById("noradio").checked ? 2 : 0;
  if(yes === 0 & no === 0){
    return 3;
  }
  return yes === 1? 1 : 0;
}

function post(){
  let form = document.getElementById("formf");
  console.log(form);
  let nombre = document.getElementById("nombre").value;
  let check = checkvalue();
  if(check === 3)
  {
    console.log("debe escoger una opcion");
    return;
  }
  let cupo = 0;
  if(check === 1)
  {
    cupo = document.getElementById("cuposinput").valueAsNumber;
  }
  let client = new HttpClient();
  let bod = nombre.trim()+","+check+","+cupo;
  client.post(URL, bod, res => {
    console.log(res);
  })  
  console.log("se realizo exitosamente");
}


var HttpClient = function() {
  this.get = (url, cbk) => {
    fetch(url)
      .then(res => {
        if(res.status !== 200){
          console.log("hubo un problema" + res.status);
        }
        res.json().then( jsn =>{
          cbk(jsn);
        })
      })
  };
  this.post = (url, bdy, cbk) => {
    fetch(url, {
      method: 'post',
      body: bdy
    }).then(res => {
      cbk(res);
    });
  };
}
evnts();

