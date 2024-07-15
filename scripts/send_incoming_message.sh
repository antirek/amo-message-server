
#!/bin/sh


curl -X POST \
  http://localhost:3001/messages/c983a9a9-3331-4adb-ac3e-34657e441f40_2512860d-c1cd-4bb4-9fbb-d3e07b49f944 \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
  "account_id": "2512860d-c1cd-4bb4-9fbb-d3e07b49f944",
  "time": 1721019698,
  "message": {
    "receiver": {
      "id": "0f027325-64bb-4f3c-8f74-471a1affd8f4",
      "name": "79135292926",
      "phone": "79135292926"
    },
    "sender": {
      "id": "3cfae55d-387e-409f-9be4-4baab963ee02",
      "name": "Сергей Дмитриев"
    },
    "source": {
      "external_id": "channel1212"
    },
    "conversation": {
      "id": "197eb4b8-5038-4380-881b-79305482c1ca"
    },
    "timestamp": 1721019698,
    "msec_timestamp": 1721019698143,
    "message": {
      "id": "a6b69917-10f0-4aff-b3ae-88babc531fd5",
      "type": "text",
      "text": "test 11",
      "markup": null,
      "tag": "",
      "media": "",
      "thumbnail": "",
      "file_name": "",
      "file_size": 0
    }
  }
}'




