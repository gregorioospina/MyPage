
window.onload = () => {
  let html = "";
  let client = new HttpClient();

  client.get("https://script.google.com/macros/s/AKfycbxH_y5MUQS4oofjElV2QQJmyvG_NWq1qvzLkHCL0lMfd-UKBvw/exec", res => {
    let data = res;

    for(let i = 0; i<data.personas.length; i++)
    {
      let nmb = data.personas[i].nombre;
      let clr = data.personas[i].color;

      let str = "<li> " + nmb + " color favorito: " + clr + " </li>"
      html += str;
    }

    document.getElementById("ulppl").innerHTML = html;

  });
}


function setupEvents(){
  
  document.getElementById("botonf").addEventListener("click", post) 

  function post(){
    let form = document.getElementById("botonf");
    console.log(form);
  }
}


 

var HttpClient = function() {
  this.get = (url, cbk) => {
    fetch(url)
      .then(res => {
        if(res.status !== 200){
          console.log("hubo un probolema" + res.status);
        }
        res.json().then( jsn =>{
          console.log(jsn);
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

setupEvents();
