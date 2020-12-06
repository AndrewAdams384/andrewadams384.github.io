var i = 0;
var br = document.createElement("br");
var demo = document.getElementById("demo")
var txt = `hello. my name is andrew adams. i'm a web developer from Austin, TX.`;
var speed = 65;
var fadeSpeed = 500;
var opac = 0;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").textContent += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}



typeWriter();

