# Estágio de construção
FROM node:16.20.0 as build-stage

# Configurar o diretório de trabalho
WORKDIR /usr/src/app

# Copiar os arquivos para o diretório de trabalho
COPY . /usr/src/app

# Instalar as dependências
RUN npm install

# Dar permissão ao diretório npm
RUN chmod a+x ~/.npm

# Executar o comando de construção
RUN npm run build

# Estágio de produção
FROM nginx as production-stage

# Copiar o diretório "dist" do estágio de construção para o estágio de produção
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html

# Copiar a configuração do Nginx
COPY nginx/nginx.conf /etc/nginx/nginx.conf

# Dar permissão de leitura a outros usuários para os arquivos no diretório "dist"
RUN chmod -R o+r /usr/share/nginx/html
