const formulario = document.getElementById("formulario");
const lista = document.getElementById("lista-compras");
const totalElemento = document.getElementById("total");

let total = 0;

function capitalizarPrimeraLetra(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  let articulo = document.getElementById("articulo").value.trim();
  let precioStr = document.getElementById("precio").value.trim();
  let precio = parseFloat(precioStr);

  const regex = /^\d+(\.\d{1,2})?$/;
  if (!regex.test(precioStr) || precio <= 0) {
    alert("Introduce un precio válido (positivo, hasta 2 decimales)");
    return;
  }

  const articuloFormateado = capitalizarPrimeraLetra(articulo);
  const nuevoItem = document.createElement("li");
  nuevoItem.innerHTML = `<strong>${articuloFormateado}</strong> - ${precio.toFixed(2)} €`;

  lista.appendChild(nuevoItem);

  total += precio;
  totalElemento.textContent = `Total: ${total.toFixed(2)} €`;

  formulario.reset();
});
