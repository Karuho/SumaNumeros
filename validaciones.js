function sumanum() {
  var n1 = parseInt(document.formsuma.no1.value);
  var n2 = parseInt(document.formsuma.no2.value);
  var suma = n1 + n2;
  var caution = "";
  if (isNaN(n1)) {
    caution =
      caution +
      "El valor ingresado en el campo Número 1 es incorrecto. Favor ingresar solo números\n";
  }
  if (isNaN(n2)) {
    caution =
      caution +
      "El valor ingresado en el campo Número 2 es incorrecto. Favor ingresar solo números\n";
  }
  if (caution != "") {
    alert("Han ocurrido los siguientes errores:\n" + caution);
  } else alert("La suma es: " + suma);
}
