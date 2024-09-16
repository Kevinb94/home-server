#!/bin/sh
envsubst '${TRILIUM_PORT} ${CALIBRE_WEB_PORT} ${DOMAIN} ${PORTAINER_PORT}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf


# Start NGINX
nginx -g 'daemon off;'
