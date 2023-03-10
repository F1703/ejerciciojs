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
    consultarCliente: function (titular = '') {
        titular = titular.toLocaleLowerCase()
        let cliente = this.clientes.filter(c=>{
            let titularC = c.titularCuenta.toLocaleLowerCase()
            return titularC.includes(titular) 
        })
        return cliente[0]
    },
    deposito: function (titular, cantidad) {
        titular = titular.toLocaleLowerCase()
        this.clientes.every(c => {
            let titularC = c.titularCuenta.toLocaleLowerCase()
            if (titularC.includes(titular)){
                c.saldoEnPesos += cantidad 
                console.log("Depósito realizado, su nuevo saldo es: " + c.saldoEnPesos)
                return false
            }
            return true
        })
    },
    extraccion: function (titular, cantidad) {
        titular = titular.toLocaleLowerCase()
        this.clientes.every(c => {
            let titularC = c.titularCuenta.toLocaleLowerCase()
            if (titularC.includes(titular)){
                let montoAnterior = c.saldoEnPesos;
                let montoActual = montoAnterior - cantidad;

                if (montoActual < 0) {
                    console.log("Fondos insuficientes")
                    return false;
                }
                console.log("Extracción realizada correctamente, su nuevo saldo es: " + montoActual)
                return false
            }
            return true
        })
    }
};