#!/bin/bash

curl "http://localhost:4741/stocks" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "transaction": {
      "name": "'"${NAME}"'",
      "transaction_type": "'"${TYPE}"'",
      "exchange": "'"${EXCHANGE}"'",
      "quantity": "'"${QTY}"'"  ,
      "date": "'"${DATE}"'" ,
      "price": "'"${PRICE}"'"
    }
  }'

echo
