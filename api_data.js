define({ "api": [
  {
    "type": "post",
    "url": "/cash/charge",
    "title": "1.- Realizar una Orden de Pago",
    "description": "<p>Esta peticion permite permite generar una orden de pago en efectivo para que el cliente proceda a realizar el pago en las tiendas de conveniencia</p>",
    "group": "PAGOS_EN_EFECTIVO",
    "sampleRequest": [
      {
        "url": "https://sandbox.pagofacil.techquicklinks"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n\"error\":\"0\",\n\"message\":\"success\",\n\"charge\":\n     {\n     \"reference\":\"S-PFCPE2692S2720I3651\",\n     \"customer_order\":\"75464\",\n     \"amount\":\"1999\",\n     \"convenience_store\":\"OXXO\",\n     \"store_fixed_rate\":\"9.00\",\n     \"store_schedule\":\"8:00 - 20:00\",\n     \"store_image\":\"https:\\/\\/stapi.pagofacil.net\\/images\\/cashpayment\\/OXXO.png\",\n     \"bank_account_number\":\"xx-xxxxxxxx-x\",\n     \"bank\":\"Banco de pruebas\",\n     \"created_at\":\"\",\n     \"expiration_date\":\"2018-06-20 12:6:00\",\n     \"status\":\"pending\",\n     \"reference_number\":\"\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./cash/Validations/Charge.php",
    "groupTitle": "PAGOS_EN_EFECTIVO",
    "name": "PostCashCharge"
  }
] });
