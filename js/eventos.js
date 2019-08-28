const URL = "https://script.google.com/macros/s/AKfycbxH_y5MUQS4oofjElV2QQJmyvG_NWq1qvzLkHCL0lMfd-UKBvw/exec";

window.onload = () => {
  let html = "";
  let client = new HttpClient();

  client.get(URL, res => {
    let data = res;

    for(let i = 0; i<data.personas.length; i++)
    {
      let nmb = data.personas[i].nombre;
      let clr = data.personas[i].color;
      let colorid = i%3;

      let str = "<li id=\"color"+colorid+"\"> " + nmb + ", juego que quiere ver: " + clr + " </li>"
      html += str;
    }
    document.getElementById("ulppl").innerHTML = html;

  });
}


const evnts = () => {
  document.getElementById("botonf").addEventListener("click", post) 
  debugger;

}

function post(){
  let form = document.getElementById("formf");
  console.log(form);
  let nmb = form.children[0].children[1].value;
  form.children[0].children[1].value = "";
  let clr = form.children[1].children[1].value;
  form.children[1].children[1].value = "";

  let client = new HttpClient();
  let bod = nmb.trim()+","+clr.trim();
  client.post(URL, bod, res => {
    console.log(res)
  })  
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
