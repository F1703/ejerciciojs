let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];

var banco = {
    clientes: arrayCuentas,
    consultarCliente: function(titular = ''){
        let cliente = this.clientes.filter( function(cuenta){
            let clienteTitular = cuenta.titularCuenta.toLocaleLowerCase()
            return clienteTitular.includes(titular.toLocaleLowerCase())
        }) 
        return cliente[0]

    },
    deposito: function(titular,cantidad){
        let posCliente = this.clientes.findIndex(function(cuenta){
            let clienteTitular = cuenta.titularCuenta.toLocaleLowerCase()
            return clienteTitular.includes(titular.toLocaleLowerCase() )
        })
 
        this.clientes[posCliente].saldoEnPesos += cantidad ;
        console.log("Depósito realizado, su nuevo saldo es: " + this.clientes[posCliente].saldoEnPesos)
    },
    extraccion: function(titular,cantidad){
        let posCliente = this.clientes.findIndex(function(cuenta){
            let clienteTitular = cuenta.titularCuenta.toLocaleLowerCase()
            return clienteTitular.includes(titular.toLocaleLowerCase() )
        })

        let montoAnterior = this.clientes[posCliente].saldoEnPesos ;
        let montoActual = montoAnterior - cantidad ;
        
        if( montoActual < 0) {
            console.log("Fondos insuficientes") 
            return true ;
        }

        this.clientes[posCliente].saldoEnPesos = montoActual ; 
        console.log("Extracción realizada correctamente, su nuevo saldo es: " + montoActual )
    }
};