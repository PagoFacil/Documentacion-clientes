define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./Documentacion-clientes/main.js",
    "group": "C__virtuals_api_Documentacion_clientes_main_js",
    "groupTitle": "C__virtuals_api_Documentacion_clientes_main_js",
    "name": ""
  },
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
    "title": "3.- Consultar varias ordenes de compra en a un periodo de tiempo.",
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
    "type": "post",
    "url": "Wsrtransaccion/index/format/json?",
    "title": "Integración de Pagos por Tarjeta Bancaria",
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
            "field": "data[Nombre]",
            "description": "<p>En éste campo vendrá el nombre del tarjetahabiente.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "50",
            "optional": false,
            "field": "data[Apellidos]",
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
            "field": "data[Monto]",
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
            "field": "data[Email]",
            "description": "<p>En este campo vendrá el correo de la persona a la que se le enviará el correo con el resumen de la transacción.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "10",
            "optional": false,
            "field": "data[Telefono]",
            "description": "<p>Se debe incluir el teléfono del tarjetahabiente.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "10",
            "optional": false,
            "field": "data[Celular]",
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
            "field": "data[Colonia]",
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
            "field": "data[Estado]",
            "description": "<p>Campo para registro del estado del tarjetahabiente.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "50",
            "optional": false,
            "field": "data[Pais]",
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
    "filename": "./library/WebServices/Transacciones.php",
    "groupTitle": "TARJETA",
    "name": "PostWsrtransaccionIndexFormatJson"
  }
] });
