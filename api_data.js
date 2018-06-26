define({ "api": [
  {
    "type": "get",
    "url": "cash/charge",
    "title": "2.- Consultar la información de una Orden de Pago",
    "group": "EFECTIVO",
    "sampleRequest": [
      {
        "url": "http://sandbox.pagofacil.tech/cash/charge"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "45",
            "optional": false,
            "field": "reference",
            "description": "<p>Dato único para identificación de la orden de compra</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_key",
            "description": "<p>Llave de sucursal del cliente</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "branch_key",
            "description": "<p>Llave de sucursal del cliente</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./application/modules/cash/Validations/Charge.php",
    "groupTitle": "EFECTIVO",
    "name": "GetCashCharge"
  },
  {
    "type": "get",
    "url": "cash/charges",
    "title": "3.- Consultar varias ordenes de compra en a un periodo de tiempo",
    "group": "EFECTIVO",
    "sampleRequest": [
      {
        "url": "http://sandbox.pagofacil.tech/cash/charges"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "64",
            "optional": false,
            "field": "secret_key",
            "description": "<p>Clave privada</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "19",
            "optional": false,
            "field": "date_start",
            "description": "<p>Api key usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "19",
            "optional": false,
            "field": "date_end",
            "description": "<p>Dato único para identificación de la orden de compra</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_key",
            "description": "<p>Llave de sucursal del cliente</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "branch_key",
            "description": "<p>Llave de sucursal del cliente</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./application/modules/cash/controllers/ChargesController.php",
    "groupTitle": "EFECTIVO",
    "name": "GetCashCharges"
  },
  {
    "type": "post",
    "url": "cash/charge",
    "title": "1.- Realizar una Orden de Pago",
    "description": "<p>Esta peticion permite generar una orden de pago en efectivo para que el cliente proceda a realizar el pago en las tiendas de conveniencia</p>",
    "group": "EFECTIVO",
    "sampleRequest": [
      {
        "url": "http://sandbox.pagofacil.tech/cash/charge"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "45",
            "optional": false,
            "field": "order_id",
            "description": "<p>Dato único para identificación de la orden de compra</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "100",
            "optional": false,
            "field": "product",
            "description": "<p>Descripción o nombre del producto</p>"
          },
          {
            "group": "Parameter",
            "type": "Decimal",
            "optional": false,
            "field": "amount",
            "description": "<p>Monto a pagar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "30",
            "optional": false,
            "field": "store_code",
            "description": "<p>Código de la tienda de conveniencia</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "100",
            "optional": false,
            "field": "customer",
            "description": "<p>Nombre del comprador</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "100",
            "optional": false,
            "field": "email",
            "description": "<p>Correo electronico del comprador</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_key",
            "description": "<p>Llave de sucursal del cliente</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "branch_key",
            "description": "<p>Llave de sucursal del cliente</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./application/modules/cash/Validations/Charge.php",
    "groupTitle": "EFECTIVO",
    "name": "PostCashCharge"
  },
  {
    "type": "get",
    "url": "Wsrrecurrentes/index/format/json?",
    "title": "2. Ver un cargo recurrente",
    "group": "RECURRENTES",
    "sampleRequest": [
      {
        "url": "http://sandbox.pagofacil.tech/Wsrrecurrentes/index/format/json?"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "method",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "50",
            "optional": false,
            "field": "data[idRecurrente]",
            "description": "<p>El identificador con el que se registró el cargo en PagoFácil.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "30",
            "optional": false,
            "field": "data[idSucursal]",
            "description": "<p>El Apikey de la sucursal a la que le pertenece el cargo recurrente.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./application/controllers/WsrrecurrentesController.php",
    "groupTitle": "RECURRENTES",
    "name": "GetWsrrecurrentesIndexFormatJson"
  },
  {
    "type": "post",
    "url": "Wsrrecurrentes/index/format/json?",
    "title": "1. Registrar un cobro recurrente",
    "group": "RECURRENTES",
    "sampleRequest": [
      {
        "url": "http://sandbox.pagofacil.tech/Wsrrecurrentes/index/format/json?"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "method",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "50",
            "optional": false,
            "field": "data[nombre]",
            "description": "<p>Nombre del tarjetahabiente.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "50",
            "optional": false,
            "field": "data[apellidos]",
            "description": "<p>Apellidos del tarjetahabiente.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "15",
            "optional": false,
            "field": "data[numeroTarjeta]",
            "description": "<p>Numero del plástico de la tarjeta de crédito.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "data[cvt]",
            "description": "<p>Código de verificación de tarjeta.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "9",
            "optional": false,
            "field": "data[cp]",
            "description": "<p>Código postal de la dirección dónde vive el tarjetahabiente.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "data[mesExpiracion]",
            "description": "<p>El mes en el cual el plástico expira.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "data[anyoExpiracion]",
            "description": "<p>El año en el cual el plástico expira.</p>"
          },
          {
            "group": "Parameter",
            "type": "Decimal",
            "optional": false,
            "field": "data[monto]",
            "description": "<p>El monto del cargo a la tarjeta.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "20",
            "optional": false,
            "field": "data[idSucursal]",
            "description": "<p>En caso de contar con varias sucursales, aca se escribe el apikey.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "20",
            "optional": false,
            "field": "data[idUsuario]",
            "description": "<p>Sera el identificador de la empresa ante PagoFácil.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "data[idServicio]",
            "description": "<p>Este identificador le indica al motor de PagoFácil.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "200",
            "optional": false,
            "field": "data[email]",
            "description": "<p>En este campo vendrá el correo de la persona.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "10",
            "optional": false,
            "field": "data[telefono]",
            "description": "<p>Se debe incluir el teléfono del tarjetahabiente.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "10",
            "optional": false,
            "field": "data[celular]",
            "description": "<p>Campo reservado el numero de celular del tarjetahabiente.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "45",
            "optional": false,
            "field": "data[calleyNumero]",
            "description": "<p>Campo para registro de la calle y numero del tarjetahabiente.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "30",
            "optional": false,
            "field": "data[colonia]",
            "description": "<p>Campo para registrar la colonia dónde vive el tarjetahabiente.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "30",
            "optional": false,
            "field": "data[municipio]",
            "description": "<p>Campo para registrar el municipio dónde vive el tarjetahabiente.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "30",
            "optional": false,
            "field": "data[estado]",
            "description": "<p>Campo para registrar el estado dónde vive el tarjetahabiente.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "50",
            "optional": false,
            "field": "data[pais]",
            "description": "<p>Campo para registrar el pais dónde vive el tarjetahabiente.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "10",
            "optional": false,
            "field": "data[idCliente]",
            "description": "<p>Identificador del contrato donde se autoriza el cargo recurrente.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "data[diaPago]",
            "description": "<p>Día en el que se estarán realizando los cobros.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "data[fechaIniCobro]",
            "description": "<p>Fecha a partir de la cuál se empezará a cobrar.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "data[fechaFinCobro]",
            "description": "<p>Fecha en la cual expira el cobro.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "150",
            "optional": false,
            "field": "data[httpUserAgent]",
            "description": "<p>Identificador de Browser.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "16",
            "optional": false,
            "field": "data[ip]",
            "description": "<p>Ip del servidor el cual envía la petición.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "data[cargo]",
            "description": "<p>Si se va a registrar un cobro al momento del registro.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./library/WebServices/Recurrentes.php",
    "groupTitle": "RECURRENTES",
    "name": "PostWsrrecurrentesIndexFormatJson"
  },
  {
    "type": "get",
    "url": "Wsrtransaccion/index/format/json?",
    "title": "2. Verificar Pago por Tarjeta Bancaria",
    "group": "TARJETA",
    "sampleRequest": [
      {
        "url": "http://sandbox.pagofacil.tech/Wsrtransaccion/index/format/json?"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "20",
            "optional": false,
            "field": "method",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "60",
            "optional": false,
            "field": "data[idSucursal]",
            "description": "<p>Identificador de sucursales, en caso de usar varias sucursales.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "60",
            "optional": false,
            "field": "data[idUsuario]",
            "description": "<p>Sera el identificador de la empresa ante PagoFácil.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "60",
            "optional": false,
            "field": "data[idPedido]",
            "description": "<p>Identificador de pedido de la transacción</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./library/WebServices/Transacciones.php",
    "groupTitle": "TARJETA",
    "name": "GetWsrtransaccionIndexFormatJson"
  },
  {
    "type": "post",
    "url": "Wsrtransaccion/index/format/json?",
    "title": "1. Generación de Pagos por Tarjeta Bancaria",
    "group": "TARJETA",
    "sampleRequest": [
      {
        "url": "http://sandbox.pagofacil.tech/Wsrtransaccion/index/format/json?"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "20",
            "optional": false,
            "field": "method",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "50",
            "optional": false,
            "field": "data[nombre]",
            "description": "<p>En éste campo vendrá el nombre del tarjetahabiente.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "50",
            "optional": false,
            "field": "data[apellidos]",
            "description": "<p>En éste campo vendrán los apellidos del tarjetahabiente.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "16",
            "optional": false,
            "field": "data[numeroTarjeta]",
            "description": "<p>Número del plástico de la tarjeta de crédito sin guiones o espacios.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "data[cvt]",
            "description": "<p>Código de verificación de tarjeta, usualmente impreso en el área de firma de la tarjeta, utilizado para validar que la tarjeta usada en la compra pertenezca a la persona que generó la orden.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "9",
            "optional": false,
            "field": "data[cp]",
            "description": "<p>Código postal de la dirección donde vive el tarjetahabiente.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "size": "2",
            "optional": false,
            "field": "data[mesExpiracion]",
            "description": "<p>El mes en el cual el plástico expira MM.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "size": "2",
            "optional": false,
            "field": "data[anyoExpiracion]",
            "description": "<p>El año en el cual el plástico expira YY.</p>"
          },
          {
            "group": "Parameter",
            "type": "Decimal",
            "optional": false,
            "field": "data[monto]",
            "description": "<p>El monto (MXP) del cargo a la tarjeta.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "60",
            "optional": false,
            "field": "data[idSucursal]",
            "description": "<p>En caso de contar con varias sucursales se podrá utilizar este identificador para distinguir las transacciones.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "60",
            "optional": false,
            "field": "data[idUsuario]",
            "description": "<p>Sera el identificador de la empresa ante PagoFácil</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "data[idServicio]",
            "description": "<p>Indica al motor de PagoFácil que servicio será el que se consumirá: (1=WebForm, 3=ThirdParty)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "200",
            "optional": false,
            "field": "data[email]",
            "description": "<p>En este campo vendrá el correo de la persona a la que se le enviará el correo con el resumen de la transacción.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "10",
            "optional": false,
            "field": "data[telefono]",
            "description": "<p>Se debe incluir el teléfono del tarjetahabiente.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "10",
            "optional": false,
            "field": "data[celular]",
            "description": "<p>Campo reservado al número de celular del tarjetahabiente.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "45",
            "optional": false,
            "field": "data[calleyNumero]",
            "description": "<p>Campo para registro de la calle y número del tarjetahabiente.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "30",
            "optional": false,
            "field": "data[colonia]",
            "description": "<p>Campo para registro de la colonia del tarjetahabiente.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "30",
            "optional": false,
            "field": "data[municipio]",
            "description": "<p>Campo para registro del municipio del tarjetahabiente.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "30",
            "optional": false,
            "field": "data[estado]",
            "description": "<p>Campo para registro del estado del tarjetahabiente.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "50",
            "optional": false,
            "field": "data[pais]",
            "description": "<p>Campo para registro del país del tarjetahabiente</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "60",
            "optional": false,
            "field": "data[idPedido]",
            "description": "<p>Campo para que el establecimiento pueda ligar la transacción con algún identificador de su producto o servicio. Es importante que sea único este identificador.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "60",
            "optional": false,
            "field": "data[param1]",
            "description": "<p>Variable adicional de uso especificado por el comercio.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "60",
            "optional": false,
            "field": "data[param2]",
            "description": "<p>Variable adicional de uso especificado por el comercio.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "60",
            "optional": false,
            "field": "data[param3]",
            "description": "<p>Variable adicional de uso especificado por el comercio.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "60",
            "optional": false,
            "field": "data[param4]",
            "description": "<p>Variable adicional de uso especificado por el comercio.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "60",
            "optional": false,
            "field": "data[param5]",
            "description": "<p>Variable adicional de uso especificado por el comercio.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "150",
            "optional": false,
            "field": "data[httpUserAgent]",
            "description": "<p>Identificador de Browser.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "60",
            "optional": false,
            "field": "data[ip]",
            "description": "<p>Ip del servidor el cual envía la petición.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./library/WebServices/Transacciones.php",
    "groupTitle": "TARJETA",
    "name": "PostWsrtransaccionIndexFormatJson"
  }
] });
