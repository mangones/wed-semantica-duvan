function area(){
    var radio = parseInt(document.getElementById("radio").value);
    var r = Math.PI*Math.pow(radio,2);
    document.getElementById("resultado").innerHTML = r;
  }