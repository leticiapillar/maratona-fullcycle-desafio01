FROM node:12-alpine
MAINTAINER Leticia Lisboa

COPY /app-node/. /var/www
WORKDIR /var/www
RUN npm install
ENTRYPOINT npm start

EXPOSE 8080