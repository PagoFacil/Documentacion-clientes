define({ "api": [
  {
    "type": "get",
    "url": "cash/charge",
    "title": "2.- Consultar la información de una Orden de Pago",
    "group": "PAGOS_EN_EFECTIVO",
    "sampleRequest": [
      {
        "url": "https://sandbox.pagofacil.tech/cash/charge"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "100",
            "optional": false,
            "field": "branch_key",
            "description": "<p>Api key de la sucursal</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "100",
            "optional": false,
            "field": "user_key",
            "description": "<p>Api key usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "45",
            "optional": false,
            "field": "order_id",
            "description": "<p>Dato único para identificación de la orden de compra</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./cash/Validations/Charge.php",
    "groupTitle": "PAGOS_EN_EFECTIVO",
    "name": "GetCashCharge"
  },
  {
    "type": "post",
    "url": "cash/charge",
    "title": "1.- Realizar una Orden de Pago",
    "description": "<p>Esta peticion permite permite generar una orden de pago en efectivo para que el cliente proceda a realizar el pago en las tiendas de conveniencia</p>",
    "group": "PAGOS_EN_EFECTIVO",
    "sampleRequest": [
      {
        "url": "https://sandbox.pagofacil.tech/cash/charge"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "100",
            "optional": false,
            "field": "branch_key",
            "description": "<p>Api key de la sucursal</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "100",
            "optional": false,
            "field": "user_key",
            "description": "<p>Api key usuario</p>"
          },
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
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./cash/Validations/Charge.php",
    "groupTitle": "PAGOS_EN_EFECTIVO",
    "name": "PostCashCharge"
  }
] });
