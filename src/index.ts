//PROGRAMA MULTIPLICACION

let multiplicador, numeroMax: number;
multiplicador = Number(prompt("ingrese el numero multiplicador: "));
numeroMax = Number(
  prompt("ingrese el numero hasta el cual desea multiplicar: ")
);
for (let contador: number = 1; contador <= numeroMax; contador++) {
  console.log(`${multiplicador} * ${contador}  =  ${multiplicador * contador}`);
}
