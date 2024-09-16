# Get Certs
sudo certbot certonly --nginx -d yourdomain.com -d www.yourdomain.com --non-interactive --agree-tos --email youremail@example.com
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com \
--non-interactive --agree-tos --email youremail@example.com \
--deploy-hook "cp /etc/letsencrypt/live/yourdomain.com/fullchain.pem /path/to/your/custom/directory/ && cp /etc/letsencrypt/live/yourdomain.com/privkey.pem ../certs/"

# Manual certificate generation
docker-compose run certbot certonly --webroot --webroot-path=/var/www/certbot -d yourdomain.com
