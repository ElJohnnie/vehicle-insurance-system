FROM node:16.20.0 as build-stage
WORKDIR /app
COPY ./ ./
RUN npm install
RUN npm run build
RUN chmod -R o+r /app/dist


FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx/nginx.conf /etc/nginx/nginx.conf
RUN chmod -R o+r /app/dist