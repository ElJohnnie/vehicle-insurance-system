FROM node:16.20.0
EXPOSE 80
# RUN apt-get update && apt-get upgrade -y
WORKDIR /usr/src/app
COPY ./ ./
RUN npm install
RUN rm -rf /usr/src/app/dist
RUN chmod a+x ~/.npm
# RUN npm cache clean --force 
CMD ["npm", "run", "dev"]