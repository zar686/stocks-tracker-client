#!/bin/bash

curl "http://localhost:4741/stocks" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "stock": {
      "name": "'"${NAME}"'",
      "symbol": "'"${SYMBOL}"'",
      "quantity": "'"${QUANTITY}"'"  ,
      "price": "'"${PRICE}"'",
      "reason": "'"${REASON}"'"
    }
  }'

echo
