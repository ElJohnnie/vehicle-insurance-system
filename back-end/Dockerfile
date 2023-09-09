FROM node:18.16.0
EXPOSE 3000
USER root
RUN mkdir /app 
RUN apt-get update && apt-get upgrade -y
RUN npm install -g pm2
RUN pm2 install pm2-logrotate
WORKDIR /app
COPY ./ ./
RUN npm i
RUN npm run build
RUN npm run start
