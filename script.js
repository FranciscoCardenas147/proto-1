function calcularTotal(){
    let monto = parseFloat(document.getElementById("monto").value);
    let ganancia = parseFloat(document.getElementById("ganancia").value);
    let impuesto = 19;
    // let ganancia = 25;
    let totalCompraProv = monto + (monto * (impuesto / 100)); 
    let totalVenta = totalCompraProv +(totalCompraProv * (ganancia /100));

    let totalFinalVenta = totalVenta + (totalVenta * (impuesto /100));
    
    document.getElementById("resultado").innerHTML = 'Este es el precio de Venta al  ' + ganancia + '% de ganancia = $ '+'' + totalFinalVenta.toFixed(1);
}


function calcularTotal25(){
    let monto = parseFloat(document.getElementById("monto").value);
    let impuesto = 19;
    let ganancia = 25;
    let totalCompraProv = monto + (monto * (impuesto / 100)); 
    let totalVenta = totalCompraProv +(totalCompraProv * (ganancia /100));

    let totalFinalVenta = totalVenta + (totalVenta * (impuesto /100));
    
    document.getElementById("resultado25").innerHTML = "Este es el precio de Venta al 25% -> $" + totalFinalVenta.toFixed(1);
}

function calcularTotal50() {
    let monto = parseFloat(document.getElementById("monto").value);
    let impuesto = 19;
    let ganancia = 50;
    let totalCompraProv = monto + (monto * (impuesto / 100));  
    let totalVenta = totalCompraProv +(totalCompraProv * (ganancia /100));
    let totalFinalVenta = totalVenta + (totalVenta * (impuesto /100));
   document.getElementById("resultado50").innerHTML = "Este es el precio a Venta al 50% -> $" + totalFinalVenta.toFixed(1);
  }

  function calcularTotal75() {
    let monto = parseFloat(document.getElementById("monto").value);
    let impuesto = 19;
    let ganancia = 75;
    let totalCompraProv = monto + (monto * (impuesto / 100));  
    let totalVenta = totalCompraProv +(totalCompraProv * (ganancia /100));
    let totalFinalVenta = totalVenta + (totalVenta * (impuesto /100));
   document.getElementById("resultado75").innerHTML = "Este es el precio a Venta al 75% -> $" + totalFinalVenta.toFixed(1);
  }  


//   aca imprimimos con enter
  monto.addEventListener("keydown", function(event) {
    if (event.keyCode === 13 || event.key === "Enter") {
      // Aquí llamas a la función que deseas ejecutar
      calcularTotal25()
      calcularTotal50()
      calcularTotal75()


    }
  });