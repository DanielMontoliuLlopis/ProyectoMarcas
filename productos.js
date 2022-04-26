/*Funciones de generador de las cartas*/
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
    xhttp.open("GET", "productos.xml", true);
    xhttp.send();
  }
  function myFunction(xml) {

    let filtrador = document.getElementById("filtrador");
    let valor = filtrador.options[filtrador.selectedIndex].value;

    var i;
    var xmlDoc = xml.responseXML;
    var div="";
    var x = xmlDoc.getElementsByTagName("pala");
    for (i = 0; i <x.length; i++) {
      /*Se comprueban los value de las option y segun eso se despliegan los filtros correspondiente*/
      if(valor == "0"){
        div += "<div class='carta'><article> <img src='"+
        x[i].getElementsByTagName("img")[0].childNodes[0].nodeValue +"' alt='raqueta'/></article>"
        +"<article><h2>"+ x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue+"</h2><br>"+
        "<p class='descripcion'>"+x[i].getElementsByTagName("descripcion")[0].childNodes[0].nodeValue +"</p>"+
        "<br><hr>"+
        "<p class='precio'>"+x[i].getElementsByTagName("precio")[0].childNodes[0].nodeValue +"</p>"+
        "</article> </div>"
      }

      if(x[i].getElementsByTagName("marca")[0].childNodes[0].nodeValue==valor){
        
      div += "<div class='carta'><article> <img src='"+
      x[i].getElementsByTagName("img")[0].childNodes[0].nodeValue +"' alt='raqueta'/></article>"
      +"<article><h2>"+ x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue+"</h2><br>"+
      "<p class='descripcion'>"+x[i].getElementsByTagName("descripcion")[0].childNodes[0].nodeValue +"</p>"+
      "<br><hr>"+
      "<p class='precio'>"+x[i].getElementsByTagName("precio")[0].childNodes[0].nodeValue +"</p>"+
      "</article> </div>"
      }

    }
    document.getElementById("page").innerHTML = div;
  }

  loadDoc();