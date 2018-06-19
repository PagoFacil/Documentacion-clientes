define({ "api": [
  {
    "type": "get",
    "url": "cash/charge",
    "title": "2.- Consultar la información de una Orden de Pago",
    "group": "EFECTIVO",
    "sampleRequest": [
      {
        "url": "http://pf-api.local/cash/charge"
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
    "filename": "./cash/Validations/Charge.php",
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
        "url": "http://pf-api.local/cash/charges"
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
    "filename": "./cash/controllers/ChargesController.php",
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
        "url": "http://pf-api.local/cash/charge"
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
    "filename": "./cash/Validations/Charge.php",
    "groupTitle": "EFECTIVO",
    "name": "PostCashCharge"
  }
] });
