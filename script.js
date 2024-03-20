
function EncriptarTexto(){
    var inputTexto = document.getElementById('inputTexto').value;
    var encriptado = document.getElementById('encriptado')

    inputTexto == "" ? encriptado.innerHTML = "ESTA VACIO" : encriptado.innerHTML = inputTexto.replace(/a/gi,"mg").replace(/e/gi,"pp").replace(/i/gi,"tkm").replace(/o/gi,"hy").replace(/u/gi,"dpl");
}

function DecifrarTexto(){
    var inputTexto = document.getElementById('inputTexto').value;
    var encriptado = document.getElementById('encriptado')

    inputTexto == "" ? encriptado.innerHTML = "ESTA VACIO" : encriptado.innerHTML = inputTexto.replace(/mg/gi,"a").replace(/pp/gi,"e").replace(/tkm/gi,"i").replace(/hy/gi,"o").replace(/dpl/gi,"u");
}

async function copiarContenido() {
    try {
      await navigator.clipboard.writeText(encriptado.innerHTML);
      alert('Contenido copiado al portapapeles');
    } catch (err) {
      alert('Error al copiar');
    }
  }