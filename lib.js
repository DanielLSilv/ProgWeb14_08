function mostrarResultado(){
    var v = parseFloat(document.getElementById('valor').value);

    if(!isNaN(v)){
        const res = (v*2);
        document.getElementById('resultado').innerText = `O valor do dobro é: ${res}`;
    }
    else{
        document.getElementById('resultado').innerText = `Por favor insira um número válido`;
    }
}
