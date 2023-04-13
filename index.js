//coisa de relogio
setInterval(relogio, 1000);
function relogio() {
 var d = new Date();
 var t = d.toLocaleTimeString();
 var di = d.toLocaleDateString();
 document.getElementById("relogio").innerHTML = "HORAS: "+t+"<br>"+"DATA: "+di;
}
setInterval(banlist, 1000);
function banlist(){
    var b = new Date(2021,06,1,12);
    var bt = (b.getMonth()-1)*30+1-2+1+b.getDate();
    var d = new Date();
    var dt = (d.getMonth())*30+1-2+1+d.getDate();
    document.getElementById("banlist").innerHTML = "Dias para banlist: "+(bt-dt);
}

//background
data_atual = new Date;
data = data_atual.getDate();
if (data <= 10) document.body.style.backgroundImage = "url('imagens/escopo/1.png')";
else if (data > 10 && data <=20) document.body.style.backgroundImage = "url('imagens/escopo/2.png')";
else document.body.style.backgroundImage = "url('imagens/escopo/3.jpg')";

//carrosel
i = 0; lista = ["imagens/origem/car1.jpg", "imagens/origem/car2.jpg", "imagens/origem/car3.jpg", "imagens/origem/car4.jpg"];
function mudaImagemP() {
i = (i + 1) % 4;
document.getElementById("carousel").innerHTML = "<img src='" + lista[i] + "' onclick='mudaImagem()'>";
}
function mudaImagemA() {
if (i==0) i=4;
i = (i - 1) % 4;
document.getElementById("carousel").innerHTML = "<img src='" + lista[i] + "' onclick='mudaImagem()'>";
}

//tamanho e imagem
w=window.screen.width * window.devicePixelRatio;
if (w<=800) document.getElementById("TEI").innerHTML="<img class='origem1' src='imagens/origem/campo 2.png' alt='Campo'>";
if (w<=500) document.getElementById("TEI").innerHTML="<img class='origem1' src='imagens/origem/campo 1.png' alt='Campo'>";