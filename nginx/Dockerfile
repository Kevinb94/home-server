# Use the official NGINX image from the Docker Hub
FROM nginx:latest

# Install the Apache HTTP Server Tools package for htpasswd utility
RUN apt-get update && apt-get install -y gettext-base

# Copy the NGINX configuration file to the container
COPY entrypoint.sh /entrypoint.sh 

# Ensure the script is executable
RUN chmod +x /entrypoint.sh

# Expose the necessary port
EXPOSE 80

# Use the shell script as the entrypoint
ENTRYPOINT ["/entrypoint.sh"]
