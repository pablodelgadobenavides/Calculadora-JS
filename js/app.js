var Calculadora = {
  num1: 0,
  num2: 0,
  vartext:"",
  resultado: 0,
  operacion: 0,

  display: document.getElementById("display"),
  uno: document.getElementById("1"),
  dos: document.getElementById("2"),
  tres: document.getElementById("3"),
  cuatro: document.getElementById("4"),
  cinco: document.getElementById("5"),
  seis: document.getElementById("6"),
  siete: document.getElementById("7"),
  ocho: document.getElementById("8"),
  nueve: document.getElementById("9"),
  cero: document.getElementById("0"),
  punto: document.getElementById("punto"),
  signo: document.getElementById("sign"),
  suma: document.getElementById("mas"),
  resta: document.getElementById("menos"),
  multip: document.getElementById("por"),
  divic: document.getElementById("dividido"),
  reset: document.getElementById("on"),
  igual: document.getElementById("igual"),


  init: function(){
    this.uno.addEventListener("click",function(){
      if(Calculadora.display.innerHTML=="0"){
      Calculadora.display.innerHTML = ""
      }
      if(Calculadora.display.innerHTML.length<8){
          Calculadora.display.innerHTML +=1
      }
    });
    this.dos.addEventListener("click",function(){
      if(Calculadora.display.innerHTML=="0"){
      Calculadora.display.innerHTML = ""
      }
      if(Calculadora.display.innerHTML.length<8){
          Calculadora.display.innerHTML +=2
      }
    });
    this.tres.addEventListener("click",function(){
      if(Calculadora.display.innerHTML=="0"){
      Calculadora.display.innerHTML = ""
      }
      if(Calculadora.display.innerHTML.length<8){
          Calculadora.display.innerHTML +=3
      }
    });
    this.cuatro.addEventListener("click",function(){
      if(Calculadora.display.innerHTML=="0"){
      Calculadora.display.innerHTML = ""
      }
      if(Calculadora.display.innerHTML.length<8){
          Calculadora.display.innerHTML +=4
      }
    });
    this.cinco.addEventListener("click",function(){
      if(Calculadora.display.innerHTML=="0"){
      Calculadora.display.innerHTML = ""
      }
      if(Calculadora.display.innerHTML.length<8){
          Calculadora.display.innerHTML +=5
      }
    });
    this.seis.addEventListener("click",function(){
      if(Calculadora.display.innerHTML=="0"){
      Calculadora.display.innerHTML = ""
      }
      if(Calculadora.display.innerHTML.length<8){
          Calculadora.display.innerHTML +=6
      }
    });
    this.siete.addEventListener("click",function(){
      if(Calculadora.display.innerHTML=="0"){
      Calculadora.display.innerHTML = ""
      }
      if(Calculadora.display.innerHTML.length<8){
          Calculadora.display.innerHTML +=7
      }
    });
    this.ocho.addEventListener("click",function(){
      if(Calculadora.display.innerHTML=="0"){
      Calculadora.display.innerHTML = ""
      }
      if(Calculadora.display.innerHTML.length<8){
          Calculadora.display.innerHTML +=8
      }
    });
    this.nueve.addEventListener("click",function(){
      if(Calculadora.display.innerHTML=="0"){
      Calculadora.display.innerHTML = ""
      }
      if(Calculadora.display.innerHTML.length<8){
          Calculadora.display.innerHTML +=9
      }
    });
    this.cero.addEventListener("click",function(){
      if(Calculadora.display.innerHTML!="0"&&Calculadora.display.innerHTML.length<8){
        Calculadora.display.innerHTML +=0
      }
      });


    var list = document.getElementsByClassName("tecla");
    for (var i = 0; i < list.length; i++) {
        list[i].addEventListener('mousedown', function (evento) {
            evento.target.style.transform = "scale(0.95,0.95)";
        });

        list[i].addEventListener('mouseleave', function (evento) {
            evento.target.style.transform = "scale(1,1)";
        });

        list[i].addEventListener('mouseup', function (evento) {
            evento.target.style.transform = "scale(1,1)";
        });
    };
  },

  insertPunto: function(){
    this.punto.addEventListener("click",function(){
      if(Calculadora.display.innerHTML.includes(".")){

      }else{
      Calculadora.display.innerHTML += "."
      }
    });
  },

  cambiarSigno: function(){
    this.signo.addEventListener("click",function(){
      Calculadora.display.innerHTML *= -1
    });
  },


  reseteo: function(){
    this.reset.addEventListener("click",function(){
      Calculadora.display.innerHTML="0"
      num1=0
      num2=0
      operacion=0
    })
  },

  seloper: function(){
    this.suma.addEventListener("click",function(){
      operacion = 1;
      num1 = Calculadora.display.innerHTML
      num1 = parseFloat(num1)
      num2 = 0
      Calculadora.display.innerHTML = ""
    });
    this.resta.addEventListener("click",function(){
      operacion = 2;
      num1 = Calculadora.display.innerHTML
      num1 = parseFloat(num1)
      num2 = 0
      Calculadora.display.innerHTML = ""
    });
    this.multip.addEventListener("click",function(){
      operacion = 3;
      num1 = Calculadora.display.innerHTML
      num1 = parseFloat(num1)
      num2 = 0
      Calculadora.display.innerHTML = ""
    });
    this.divic.addEventListener("click",function(){
      operacion = 4;
      num1 = Calculadora.display.innerHTML
      num1 = parseFloat(num1)
      num2 = 0
      Calculadora.display.innerHTML = ""
      });
    },

    realizarOper: function(){
      this.igual.addEventListener("click",function(){
        switch (operacion) {
         case 1:
         if(num2==0){
           num2 = parseFloat(Calculadora.display.innerHTML)
         }
         resultado = num1 + num2;
         num1 = resultado;
         var numstr = resultado.toString();
         if(numstr.length>8){
           numstr = numstr.substring(0,8)
           Calculadora.display.innerHTML = numstr;
         }else{
           Calculadora.display.innerHTML = resultado;
         }
           break;
         case 2:
         if(num2==0){num2 = parseFloat(Calculadora.display.innerHTML)}
         resultado = num1 - num2;
         num1 = resultado;
         var numstr = resultado.toString();
         if(numstr.length>8){
           numstr = numstr.substring(0,8)
           Calculadora.display.innerHTML = numstr;
         }else{
           Calculadora.display.innerHTML = resultado;
         }
            break;
         case 3:
         if(num2==0){num2 = parseFloat(Calculadora.display.innerHTML)}
         resultado = num1 * num2;
         num1 = resultado;
         var numstr = resultado.toString();
         if(numstr.length>8){
           numstr = numstr.substring(0,8)
           Calculadora.display.innerHTML = numstr;
         }else{
           Calculadora.display.innerHTML = resultado;
         }
           break;
         case 4:
         if(num2==0){num2 = parseFloat(Calculadora.display.innerHTML)}
         resultado = num1 / num2;
         num1 = resultado;
         var numstr = resultado.toString();
         if(numstr.length>8){
           numstr = numstr.substring(0,8)
           Calculadora.display.innerHTML = numstr;
         }else{
           Calculadora.display.innerHTML = resultado;
         }
           break;

           default:
  }
      });
    },
}

Calculadora.init();
Calculadora.reseteo();
Calculadora.seloper();
Calculadora.insertPunto();
Calculadora.cambiarSigno();
Calculadora.realizarOper();
