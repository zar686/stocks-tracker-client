curl "https://stock-tracker-app-azam.herokuapp.com//sign-out" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json"

echo
