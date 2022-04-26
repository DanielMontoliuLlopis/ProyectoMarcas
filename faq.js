/*Variables de la página FAQ*/
const esconder1=document.getElementById("esconder1")
const esconder2=document.getElementById("esconder2")
const esconder3=document.getElementById("esconder3")
const esconder4=document.getElementById("esconder4")
const desplegar1=document.getElementById("desplegar1")
const desplegar2=document.getElementById("desplegar2")
const desplegar3=document.getElementById("desplegar3")
const desplegar4=document.getElementById("desplegar4")

/*Funciones para mostrar el texto de la pregunta, cambiando la propiedad display para que se pueda ver en la web*/
function mostrar1(){
    desplegar1.style.display="none";
    document.getElementById("texto1").style.display="inline";
    esconder1.style.display="inline";

}
function mostrar2(){
    desplegar2.style.display="none";
    document.getElementById("texto2").style.display="inline";
    esconder2.style.display="inline";

}
function mostrar3(){
    desplegar3.style.display="none";
    document.getElementById("texto3").style.display="inline";
    esconder3.style.display="inline";

}
function mostrar4(){
    desplegar4.style.display="none";
    document.getElementById("texto4").style.display="inline";
    esconder4.style.display="inline";

}
/*Funciones para esconder el texto de la pregunta, cambiando la propiedad display a none para que no se vea en la web*/
function esconde1(){
    esconder1.style.display="none";
    document.getElementById("texto1").style.display="none"
    desplegar1.style.display="inline";
}
function esconde2(){
    esconder2.style.display="none";
    document.getElementById("texto2").style.display="none"
    desplegar2.style.display="inline";
}
function esconde3(){
    esconder3.style.display="none";
    document.getElementById("texto3").style.display="none"
    desplegar3.style.display="inline";
}
function esconde4(){
    esconder4.style.display="none";
    document.getElementById("texto4").style.display="none"
    desplegar4.style.display="inline";
}