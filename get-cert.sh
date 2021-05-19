certbot certonly --manual \
  --preferred-challenges=dns \
  --email adrian@webaverse.com \
  --server https://acme-v02.api.letsencrypt.org/directory \
  --agree-tos \
  --manual-public-ip-logging-ok \
  -d "*.exokit.org" \
  -d "*.proxy.exokit.org" \
  -d "*.webaverse.com" \
  -d "exokit.org" \
  -d "webaverse.com"