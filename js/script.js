let nSeleccionado = null;
const n= 9;
const resultado = document.getElementById("resultado");
const panelNumeros = document.getElementById("panel_numeros");

var board = [
  "--74916-5",
  "2---6-3-9",
  "-----7-1-",
  "-586----4",
  "--3----9-",
  "--62--187",
  "9-4-7---2",
  "67-83----",
  "81--45---"
  ]
  var solution = [
  "387491625",
  "241568379",
  "569327418",
  "758619234",
  "123784596",
  "496253187",
  "934176852",
  "675832941",
  "812945763"
  ]

function crearTablero(){
  resultado.innerHTML = "";
  resultado.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
  
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
      let cell = document.createElement("button");
      cell.className = 'cell';
      cell.id = i.toString()+"/"+ j.toString();
      if(board[i][j]!="-"){
        cell.textContent=board[i][j];
      }
      cell.addEventListener('click',verificarNumero);
      resultado.appendChild(cell);
      }
  }
}

function crearBotones(){
  panelNumeros.innerHTML = "";
  for (let i =1;i<=n;i++){
      const boton = document.createElement("button");
      boton.textContent=i;
      boton.className = 'boton_numero';
      boton.id=i;
      panelNumeros.appendChild(boton);
      
      boton.addEventListener('click',function(){
          nSeleccionado=i;
      });

      boton.addEventListener("mouseover",function(){
      boton.style.background="orange"
      })
      boton.addEventListener("mouseout",function(){
      boton.style.background="aqua"
      })
  }
}

function verificarNumero(){
  if(nSeleccionado){
    if(this.textContent!=""){
      return;
    }

    let casilla=this.id.split("/");
    let i=parseInt(casilla[0]);
    let j=parseInt(casilla[1]);

    if(solution[i][j]==nSeleccionado){
      this.textContent=nSeleccionado;
      this.style.background="lightgreen"
    }else{
      this.style.background="red"
    }
  }
}

function inicio(){
  crearTablero();
  crearBotones();
}

window.onload = inicio;