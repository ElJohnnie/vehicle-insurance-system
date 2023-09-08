FROM node:16.20.0 as build-stage
WORKDIR /app
COPY ./ ./
RUN npm install

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx/nginx.conf /etc/nginx/nginx.conf