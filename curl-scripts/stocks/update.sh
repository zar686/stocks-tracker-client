curl "http://localhost:4741/stocks/${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "stock": {
      "name": "'"${NAME}"'",
      "symbol": "'"${SYMBOL}"'",
      "quantity": "'"${QUANTITY}"'",
      "price": "'"${PRICE}"'",
      "reason": "'"${REASON}"'"
    }
  }'

echo
